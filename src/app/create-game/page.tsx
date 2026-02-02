"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBetAndDeductBalance } from "@/lib/supabase";

export default function CreateGamePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [duration, setDuration] = useState(7);
    const [fee, setFee] = useState(50);
    const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().split('T')[0]);

    const calculateExpiryDate = (start: string, days: number) => {
        const date = new Date(start);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    };

    const expiryDate = calculateExpiryDate(effectiveDate, duration);

    const handleConfirm = async () => {
        setIsLoading(true);
        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("Please login first.");
            router.push("/");
            return;
        }

        try {
            await createBetAndDeductBalance(
                userId,
                fee,
                `Custom Hunt: ${duration} Days`,
                "custom_bet"
            );
            router.push("/create-success");
        } catch (error: any) {
            console.error("Create game failed:", error);
            alert(`Failed to create game: ${error.message || "Unknown error"}`);
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-background-dark text-white min-h-screen">
            <style jsx global>{`
                :root {
                    --color-primary: #13ec5b;
                    --bg-dark: #0a0d0b;
                    --field-dark: #141c16;
                    --border-dark: #243228;
                }
                .bg-background-dark { background-color: var(--bg-dark); }
                .bg-void-black { background-color: #050505; }
                .bg-field-dark { background-color: var(--field-dark); }
                .border-border-dark { border-color: var(--border-dark); }
                .text-primary { color: var(--color-primary); }
                .bg-primary { background-color: var(--color-primary); }
                .glow-border {
                    box-shadow: 0 0 10px rgba(19, 236, 91, 0.3);
                }
                .glow-button:hover {
                    box-shadow: 0 0 20px rgba(19, 236, 91, 0.6);
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="flex h-screen overflow-hidden">
                {/* Sidebar Navigation */}
                <aside className="w-72 bg-background-dark border-r border-border-dark flex flex-col shrink-0">
                    <div className="p-8 flex flex-col h-full justify-between">
                        <div className="space-y-10">
                            {/* Brand */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-black font-bold text-3xl">sports_kabaddi</span>
                                </div>
                                <div className="flex flex-col">
                                    <Link href="/">
                                        <h1 className="text-xl font-bold tracking-tighter text-white uppercase leading-none">Gorilla Arena</h1>
                                    </Link>
                                    <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mt-1">Predator Mode</p>
                                </div>
                            </div>
                            {/* Nav Links */}
                            <nav className="flex flex-col gap-2">
                                <Link href="/history" className="group flex items-center gap-4 px-4 py-3 rounded text-gray-400 hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined group-hover:text-primary">history</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">Hunt History</span>
                                </Link>
                                <Link href="/create-game" className="group flex items-center gap-4 px-4 py-3 rounded bg-primary/20 text-primary border border-primary/30">
                                    <span className="material-symbols-outlined fill-1">add_circle</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">Create Bet</span>
                                </Link>
                                <a className="group flex items-center gap-4 px-4 py-3 rounded text-gray-400 hover:bg-primary/10 transition-colors opacity-40 cursor-not-allowed" href="#">
                                    <span className="material-symbols-outlined">leaderboard</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">Global Ranks</span>
                                </a>
                            </nav>
                        </div>
                        {/* Footer Nav */}
                        <div className="flex flex-col gap-1 border-t border-border-dark pt-6">
                            <a className="flex items-center gap-4 px-4 py-2 text-gray-400 hover:text-primary text-sm font-medium uppercase tracking-wider" href="#">
                                <span className="material-symbols-outlined text-xl">settings</span>
                                Settings
                            </a>
                            <a className="flex items-center gap-4 px-4 py-2 text-gray-400 hover:text-primary text-sm font-medium uppercase tracking-wider" href="#">
                                <span className="material-symbols-outlined text-xl">help</span>
                                Support
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto no-scrollbar bg-void-black">
                    <div className="max-w-4xl mx-auto px-8 py-12">
                        {/* Page Heading */}
                        <header className="mb-12">
                            <h2 className="text-6xl font-black text-white tracking-tighter uppercase mb-4 leading-none">
                                Create Your Custom <span className="text-primary italic">Arena</span>
                            </h2>
                            <p className="text-xl text-primary/60 font-medium">Set the stakes. Rule the jungle. Only the strongest survive the climb.</p>
                        </header>
                        {/* Form Section */}
                        <section className="grid grid-cols-1 gap-10">
                            {/* Identity Section */}
                            <div className="bg-background-dark border border-border-dark p-8 rounded shadow-sm">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 border-b border-primary/20 pb-2 inline-block">01. Arena Identity</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-300">Arena Name</label>
                                        <input className="bg-field-dark border border-border-dark text-white p-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-600 text-lg font-bold" placeholder="e.g., Office Deathmatch" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-300">Target Duration (Days)</label>
                                        <div className="flex">
                                            <button onClick={() => setDuration(Math.max(1, duration - 1))} className="w-14 h-14 border border-border-dark flex items-center justify-center hover:bg-primary/10 transition-colors">
                                                <span className="material-symbols-outlined">remove</span>
                                            </button>
                                            <input readOnly className="bg-field-dark border-y border-border-dark text-center w-full text-lg font-bold focus:ring-0 focus:outline-none text-white appearance-none" type="number" value={duration} />
                                            <button onClick={() => setDuration(duration + 1)} className="w-14 h-14 border border-border-dark flex items-center justify-center hover:bg-primary/10 transition-colors">
                                                <span className="material-symbols-outlined">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-300">Effective Date</label>
                                        <input
                                            className="bg-field-dark border border-border-dark text-white p-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-lg font-bold"
                                            type="date"
                                            value={effectiveDate}
                                            onChange={(e) => setEffectiveDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-300">Expiry Date (Calculated)</label>
                                        <input
                                            readOnly
                                            className="bg-field-dark border border-border-dark text-white/50 p-4 outline-none transition-all text-lg font-bold cursor-not-allowed"
                                            type="date"
                                            value={expiryDate}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Stakes Section */}
                            <div className="bg-background-dark border border-border-dark p-8 rounded shadow-sm">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 border-b border-primary/20 pb-2 inline-block">02. The Stakes</h3>
                                <div className="mb-10">
                                    <div className="flex justify-between items-end mb-6">
                                        <label className="text-sm font-bold uppercase tracking-widest text-gray-300">Entry Fee (S$)</label>
                                        <span className="text-4xl font-black text-primary">S$ {fee}</span>
                                    </div>
                                    <div className="relative flex items-center h-4 cursor-pointer">
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            value={fee}
                                            onChange={(e) => setFee(parseInt(e.target.value))}
                                            className="w-full h-full opacity-0 absolute z-20 cursor-pointer"
                                        />
                                        <div className="w-full h-1 bg-border-dark rounded-full overflow-hidden absolute">
                                            <div className="h-full bg-primary glow-border" style={{ width: `${((fee - 10) / 490) * 100}%` }}></div>
                                        </div>
                                        <div className="absolute w-6 h-6 bg-white border-2 border-primary rounded-sm shadow-lg hover:scale-110 transition-transform pointer-events-none z-10" style={{ left: `calc(${((fee - 10) / 490) * 100}% - 12px)` }}></div>
                                    </div>
                                    <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <span>Min S$10</span>
                                        <span>Max S$500</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4 block">Target Daily Steps (Kill Floor)</label>
                                    <div className="flex bg-field-dark p-1 rounded-sm gap-1">
                                        {['8k', '12k', '15k', '20k'].map((step) => (
                                            <label key={step} className="flex-1">
                                                <input className="hidden peer" name="steps" type="radio" value={step} defaultChecked={step === "12k"} />
                                                <div className="py-3 text-center cursor-pointer font-bold text-sm tracking-widest uppercase transition-all border border-transparent peer-checked:bg-void-black peer-checked:text-primary peer-checked:border-primary/30 text-gray-500">
                                                    {step} Steps
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Visibility Section */}
                            <div className="bg-background-dark border border-border-dark p-8 rounded shadow-sm">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 border-b border-primary/20 pb-2 inline-block">03. Arena Visibility</h3>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white uppercase mb-1">Privacy Mode</h4>
                                        <p className="text-sm text-gray-400">Control who can join your arena and witness the carnage.</p>
                                    </div>
                                    <div className="flex items-center gap-4 bg-field-dark p-2 rounded-lg">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Private</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-14 h-7 bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                        <span className="text-xs font-bold text-primary uppercase tracking-tighter">Open to All</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="pt-4 mb-20">
                                <button
                                    onClick={handleConfirm}
                                    disabled={isLoading}
                                    className="w-full bg-primary text-black py-8 rounded font-black text-3xl uppercase tracking-tighter glow-button transition-all flex items-center justify-center gap-4 border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        "Initializing Protocol..."
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined font-black text-4xl">stadium</span>
                                            Stake Your Claim
                                        </>
                                    )}
                                </button>
                                <p className="text-center mt-6 text-xs text-gray-600 uppercase tracking-widest font-bold">
                                    By clicking, you authorize the locking of the entry fee in the smart contract.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>

                {/* Right Decoration/Summary Panel (Desktop only) */}
                <aside className="hidden xl:flex w-80 bg-void-black border-l border-border-dark flex-col p-8">
                    <div className="h-full border border-dashed border-border-dark p-6 flex flex-col items-center justify-center text-center opacity-40">
                        <span className="material-symbols-outlined text-8xl mb-4 text-border-dark">monitoring</span>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">Arena Stats Forecast Loading...</p>
                        <div className="mt-8 space-y-4 w-full">
                            <div className="h-2 bg-border-dark rounded w-full"></div>
                            <div className="h-2 bg-border-dark rounded w-3/4"></div>
                            <div className="h-2 bg-border-dark rounded w-5/6"></div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
