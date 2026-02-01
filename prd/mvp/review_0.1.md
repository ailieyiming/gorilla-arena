# 250k PM Review: Gorilla Arena MVP 0.1

> [!CAUTION]
> **Verdict: REJECTED**
> This PRD describes a feature-rich "project", not a distribution-led "product". As a solo developer, if you build this effectively as written, you will burn out in 2 months with 0 users because you spent all your time engineering an "AI Auditor" that nobody cares about, instead of building a growth engine.

## 1. The "Distribution-First" Delusion
You asked: *"How does this product use AI for low-cost growth?"*
**Your PRD Answer:** It doesn't.

You are using AI for **Defense** (Audit), not **Offense** (Growth).
*   **The Problem:** Nobody is going to share "I verified my steps with Gemini". That is a utility, not a story.
*   **The Reality:** User acquisition costs (CAC) for fintech/health apps are astronomical. If you rely on "people finding it", you are dead.
*   **The "250k PM" Fix:**
    *   **Pivot AI to Content Generation:** Use the AI to generate **"Battle Reports"**.
    *   *Example:* When a user wins, generate a highly sharable, aggressive, or funny "Victory Poster" (e.g., "Yiming just walked 80km and stole $15 from lazy people. #GorillaArena").
    *   *Mechanism:* The "Verification" shouldn't just say "Verified". It should generate a 5-second **"Roast Video"** of the user's walk if it looks funny, or a "Hero Montage" if they crushed it. Give them social currency to brag.
    *   **Community Arenas:** Allow users (or micro-influencers) to create *their own* arenas. You are building a *platform*, not just a *house*. Let "FitnessSG Influencer" host a game. *They* bring the distribution; *you* take the rake.

## 2. Scoping & Cutting: The "Ferrari for Grocery Run" Error
**Lens:** *Lenny's "Wizard of Oz" & "Build the Scooter"*

You are a solo dev. Your appetite should be **4 weeks maximum**. This PRD is a 3-month build.

### 🔪 The Cutting Floor (Kill These Immediately)

1.  **AI Step Distribution Analysis (The Algo):**
    *   *Why:* You are over-engineering. Do you expect 10,000 users on day 1 with sophisticated cheat scripts?
    *   *Replacement (Wizard of Oz):* Simple threshold rules (e.g., >20k steps = flag). **You** manually review the top 5% of winners. If they cheated, ban them. Don't write code for problems you don't have yet.
2.  **Video Audit Integration:**
    *   *Why:* High friction, high cost, technical nightmare.
    *   *Replacement:* Only request this if a user is flagged. Manual upload to a Telegram bot or email if disputed.
3.  **Pro Membership ($9.9/mo):**
    *   *Why:* You haven't proved anyone will pay $1 entry fee, let alone a subscription. Revenue complexity is a distraction.
    *   *Replacement:* Everyone pays the rake. Simple.
4.  **The Store (G-Power for Vouchers):**
    *   *Why:* Business Development nightmare. You have to source vouchers?
    *   *Replacement:* Cash is king. People play for money. Kill the points system.

### The "Real" MVP Scoping
*   **Sign up:** Sign in with Google.
*   **Money:** PayNow QR code (Manual approval if webhook is hard).
*   **Core:** Read Apple Health/Google Fit.
*   **Verification:** Simple logic (Steps > Target). No fancy AI yet.
*   **Payout:** Manual PayNow back to winners at end of week.

**Hypothesis to Validate:** "Will Singaporeans bet real money on their own walking?"
*You don't need AI to validate this.*

## 3. The "Trust" Gap (Critical Flaw)
You are asking users to PayNow $50 to a random app.
*   **Critique:** "Trust" is your biggest conversion killer, not "Game Mechanics".
*   **Missing from PRD:** How do you prove you aren't running away with the money?
*   **Fix:**
    *   Lower the barrier. $10 is OK. $50 is too high for an unknown app.
    *   **Social Proof:** The MVP needs a "Public Ledger" or "Winner's Wall" on the homepage immediately.

## 4. "Why Now?" & "Why AI?"
*   **Lens:** *Lenny's "Lead with Problem & Context"*
*   **Current Positioning:** "Singapore's First AI StepBet". Boring.
*   **Better Positioning (The Hook):** "Inflation is high. Your health is bad. Make the gym pay for your lunch."
*   **AI's Role:** It's not just an auditor. It's the **Coach**.
    *   *Idea:* If I miss my target by 12:00 PM, the AI sends me a notification: *"Hey, you're about to lose $50. Get up and walk, you expensive lazybones."* -> **Personalized Pressure** is a better AI feature than "Audit".

## Summary of Action Plan
1.  **Rewrite PRD:** Strip 60% of features. Focus on **Onboarding -> Payment -> Steps -> Payout**.
2.  **Add "Share Loop":** Design the "Victory Card" logic using AI image gen. This is your marketing team.
3.  **Wizard of Oz the Audit:** Don't build the anti-cheat AI. Be the anti-cheat AI.
4.  **Launch in 3 Weeks:** If it takes longer, you failed the scoping test.
