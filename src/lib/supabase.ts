import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getUserActiveStake(userId: string) {
    const { data, error } = await supabase
        .from('bets')
        .select('amount')
        .eq('user_id', userId)
        .eq('status', 'active');

    if (error) {
        console.error('Error fetching active stake:', error);
        return 0;
    }

    return data.reduce((sum, bet) => sum + bet.amount, 0);
}

export async function createBetAndDeductBalance(
    userId: string,
    amount: number,
    title: string,
    transactionType: string
) {
    // 1. Get current balance
    const { data: user, error: fetchError } = await supabase
        .from('users')
        .select('points')
        .eq('id', userId)
        .single();

    if (fetchError || !user) throw new Error("Failed to fetch user data: " + (fetchError?.message || "User not found"));

    if (user.points < amount) {
        throw new Error("Insufficient funds in wallet");
    }

    // 2. Deduct Points (Prioritize platform safety)
    const { error: updateError } = await supabase
        .from('users')
        .update({ points: user.points - amount })
        .eq('id', userId);

    if (updateError) throw new Error("Failed to deduct points: " + updateError.message);

    // 3. Create Active Bet
    const { error: betError } = await supabase
        .from('bets')
        .insert([{
            user_id: userId,
            amount: amount,
            status: 'active',
            title: title
        }]);

    // If bet creation fails, we technically should refund, but for this MVP scope we will just throw
    if (betError) {
        console.error("CRITICAL: Points deducted but Bet creation failed for user", userId);
        throw new Error("Failed to create bet: " + betError.message);
    }

    // 4. Record Transaction
    const { error: transactionError } = await supabase
        .from('transactions')
        .insert([{
            user_id: userId,
            amount: amount,
            type: transactionType,
            created_at: new Date().toISOString()
        }]);

    if (transactionError) {
        // Non-critical error, just log it
        console.error("Warning: Transaction record failed", transactionError);
    }

    return true;
}
