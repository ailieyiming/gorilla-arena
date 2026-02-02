"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [hunterName, setHunterName] = useState("Loading...");

    useEffect(() => {
        // Load persisted name
        const storedName = localStorage.getItem("hunterName");
        if (storedName) {
            setHunterName(storedName);
        } else {
            setHunterName("UNKNOWN_SOLDIER");
        }
    }, []);

    return (
        <div className="bg-[#0f2317] font-[family-name:var(--font-space-grotesk)] text-white min-h-screen selection:bg-[#06f96b] selection:text-black relative pb-20 overflow-y-auto overflow-x-hidden">
            <style jsx global>{`
        .industrial-grid {
            background-image: radial-gradient(circle, #3a5545 1px, transparent 1px);
            background-size: 30px 30px;
        }
        .scanline {
            background: linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }
      `}</style>

            {/* Main Container */}
            <div className="relative flex min-h-screen flex-col overflow-x-hidden industrial-grid">
                {/* Scanline Overlay */}
                <div className="fixed inset-0 scanline z-50 opacity-20 pointer-events-none"></div>

                {/* Top Navigation Bar */}
                <header className="flex items-center justify-between border-b-2 border-[#3a5545] bg-[#0f2317]/90 backdrop-blur-md px-6 py-4 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#06f96b] p-1 rounded-sm">
                            <span className="material-symbols-outlined text-black font-bold">rocket_launch</span>
                        </div>
                        <h2 className="text-xl font-black tracking-tighter uppercase italic">Gorilla Arena <span className="text-[#06f96b]">// Survival</span></h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 uppercase font-bold text-xs tracking-widest text-[#9bbba8]">
                        <Link className="hover:text-[#06f96b] transition-colors border-b-2 border-[#06f96b] pb-1" href="/">Arenas</Link>
                        <a className="hover:text-[#06f96b] transition-colors" href="#">Leaderboard</a>
                        <a className="hover:text-[#06f96b] transition-colors" href="#">Stats</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 bg-[#162c1e] px-3 py-1.5 rounded border border-[#3a5545] shadow-[0_0_10px_rgba(6,249,107,0.1)]">
                            <span className="material-symbols-outlined text-[#06f96b] text-sm">account_balance_wallet</span>
                            <span className="text-white font-bold text-sm tracking-wider">1,000</span>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] uppercase font-bold text-[#9bbba8] leading-none">Soldier Status</p>
                            <p className="text-[#06f96b] font-bold tracking-tight">RANK: SILVER BACK</p>
                        </div>
                        <Link href="/history">
                            <div className="w-10 h-10 border-2 border-[#06f96b] rounded-lg bg-cover bg-center cursor-pointer hover:border-white transition-colors" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuB4G420-D3HS8u-H4ZUUeXci_W0hDXnAQsLVkWc4m7aJGhxbyP3BUoRdGsAdJ1hOIeolfv_ztrU10F-tptX20P17R125T4uRa11c0rZaN8HIClo6VIBrfJBHVnVTTrnrqwGODPrYjoxqASvotv4f8hIo42cImGrsltpeW2rKKAiHGBjOgc0c21Kq9CNP1LGX-iMpj4GW1Ipd9AD6Fw9ftxzr8rUbSDlz4L5zvHXHoc3Rm4qXtBgaAo9DO42TLZjR6F6dFDJkKadqx')" }}></div>
                        </Link>
                    </div>
                </header>

                <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full">
                    {/* Left Sidebar: Stats & Tactics */}
                    <aside className="w-full lg:w-80 border-r-2 border-[#3a5545] bg-[#0f2317]/50 p-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xs font-black text-[#9bbba8] uppercase tracking-[0.2em]">Mission Stats</h3>
                            <div className="h-1 w-full bg-[#3a5545]/30 rounded-full overflow-hidden">
                                <div className="h-full bg-[#06f96b] w-2/3"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="p-4 border border-[#3a5545] bg-[#162c1e]/50 rounded-lg">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] uppercase font-bold text-[#9bbba8]">Live Pot</span>
                                    <span className="text-[#06f96b] text-[10px] font-bold">STAKED</span>
                                </div>
                                <p className="text-3xl font-black text-white leading-none tracking-tighter">$450.00</p>
                                <p className="text-[10px] text-[#06f96b] mt-2 flex items-center gap-1 uppercase">
                                    <span className="material-symbols-outlined text-[12px]">trending_up</span> 15% increase vs yesterday
                                </p>
                            </div>
                            <div className="p-4 border border-[#3a5545] bg-[#162c1e]/50 rounded-lg">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] uppercase font-bold text-[#9bbba8]">Your Stake</span>
                                    <span className="text-[#fa5538] text-[10px] font-bold">AT RISK</span>
                                </div>
                                <p className="text-3xl font-black text-white leading-none tracking-tighter">$50.00</p>
                                <div className="flex gap-1 mt-2">
                                    <div className="h-1.5 flex-1 bg-[#fa5538] rounded-full"></div>
                                    <div className="h-1.5 flex-1 bg-[#3a5545] rounded-full"></div>
                                    <div className="h-1.5 flex-1 bg-[#3a5545] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="border-t-2 border-[#3a5545] pt-4">
                                <p className="text-[10px] uppercase font-black text-[#fa5538] mb-2 tracking-widest flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[14px]">warning</span> Live Feed
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase">
                                        <span className="text-[#9bbba8]">Sarah</span>
                                        <span className="text-[#06f96b]">Safe (11,420)</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase">
                                        <span className="text-[#9bbba8]">Gorilla_X</span>
                                        <span className="text-[#fa5538]">Danger (2,100)</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase">
                                        <span className="text-[#9bbba8]">StepMaster</span>
                                        <span className="text-[#06f96b]">Safe (10,050)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center Content: The Survival Gauge */}
                    <section className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center gap-10">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
                                Survival Gauge
                            </h1>
                            <p className="text-[#9bbba8] font-bold tracking-[0.3em] uppercase mt-2">Mission: 10,000 Steps Daily Bet</p>
                        </div>

                        {/* Main Gauge Container */}
                        <div className="relative w-full max-w-2xl">
                            {/* Gauge Header */}
                            <div className="flex justify-between items-end mb-4 px-2">
                                <div className="text-left">
                                    <p className="text-[#fa5538] font-black text-xl italic leading-none">DANGER ZONE</p>
                                    <p className="text-xs uppercase text-[#9bbba8] font-bold">Status: At Risk of Forfeit</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-black text-4xl leading-none">4,500 <span className="text-lg text-[#3a5545]">/ 10,000</span></p>
                                    <p className="text-xs uppercase text-[#9bbba8] font-bold">Steps Sync'd</p>
                                </div>
                            </div>

                            {/* The Progress Bar (Mechanical Look) */}
                            <div className="h-12 w-full bg-[#3a5545]/20 border-2 border-[#3a5545] rounded-lg p-1 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#fa5538]/20 via-transparent to-[#06f96b]/20 opacity-30"></div>
                                {/* Progress Fill */}
                                <div className="h-full bg-gradient-to-r from-[#fa5538] to-[#ff8c00] rounded-sm transition-all duration-1000 relative" style={{ width: "45%" }}>
                                    <div className="absolute top-0 right-0 h-full w-4 bg-white/20 skew-x-12 translate-x-1"></div>
                                </div>
                                {/* Target Marker */}
                                <div className="absolute right-0 top-0 h-full w-1 bg-[#06f96b] shadow-[0_0_15px_#06f96b] z-10"></div>
                            </div>

                            {/* Gauge Footer */}
                            <div className="mt-8 flex flex-col md:flex-row gap-6 justify-between items-center w-full">
                                <div className="flex gap-4">
                                    <div className="bg-[#162c1e] border border-[#3a5545] p-3 rounded-lg text-center min-w-[100px]">
                                        <p className="text-[10px] uppercase font-bold text-[#9bbba8]">Time Left</p>
                                        <p className="text-xl font-black text-white tracking-tighter">04:12:55</p>
                                    </div>
                                    <div className="bg-[#162c1e] border border-[#3a5545] p-3 rounded-lg text-center min-w-[100px]">
                                        <p className="text-[10px] uppercase font-bold text-[#9bbba8]">Burn Rate</p>
                                        <p className="text-xl font-black text-[#fa5538] tracking-tighter">-12%</p>
                                    </div>
                                </div>
                                {/* Heavy Duty Button */}
                                <button className="group relative px-12 py-5 bg-[#06f96b] text-black font-black uppercase tracking-tighter text-2xl italic rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_10px_0_#05b54e] active:shadow-none active:translate-y-2 border-b-2 border-black/20">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-3xl font-black">sync_alt</span>
                                        Sync Steps
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Instructions/Footer Info */}
                        <div className="max-w-md text-center text-[10px] text-[#9bbba8] font-medium uppercase tracking-widest leading-relaxed">
                            External data link established. Biometrics active. Failure to reach target within the window results in immediate stake distribution to surviving gorillas.
                        </div>
                    </section>

                    {/* Right Sidebar: AI Coach Terminal */}
                    <aside className="w-full lg:w-96 border-l-2 border-[#3a5545] bg-[#0f2317]/80 p-6 flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#3a5545] pb-4">
                            <div className="w-12 h-12 bg-[#06f96b] flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(6,249,107,0.3)]">
                                <span className="material-symbols-outlined text-black text-3xl font-bold">smart_toy</span>
                            </div>
                            <div>
                                <h4 className="font-black text-lg leading-none uppercase italic">AI Coach <span className="text-[#06f96b] text-xs ml-2">v4.0.1</span></h4>
                                <p className="text-[#06f96b] text-[10px] font-bold uppercase tracking-widest animate-pulse">Analyzing failure...</p>
                            </div>
                        </div>

                        {/* terminal Window */}
                        <div className="flex-1 bg-black/80 border-2 border-[#3a5545] rounded-lg p-5 font-mono text-sm relative overflow-hidden flex flex-col gap-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#3a5545]/20"></div>
                            <p className="text-[#9bbba8]">&gt;&gt; BOOTING_SARCASM_MODULE...</p>
                            <p className="text-[#9bbba8]">&gt;&gt; TARGET: @{hunterName}</p>
                            <div className="mt-4 p-4 bg-[#06f96b]/10 border-l-4 border-[#06f96b] italic">
                                <p className="text-[#06f96b] font-bold leading-relaxed uppercase">
                                    "The pot is $450. Currently, you are donating your share to <span className="underline">Sarah</span>. She thanks you for the free drink, loser. Move."
                                </p>
                            </div>
                            <p className="text-[#9bbba8] mt-4">&gt;&gt; Current velocity: Pathetic</p>
                            <p className="text-[#9bbba8]">&gt;&gt; Recommended action: RUN</p>

                            <div className="mt-auto space-y-2">
                                <button className="w-full py-2 bg-[#3a5545]/30 hover:bg-[#3a5545] transition-colors text-white text-[10px] font-black uppercase border border-[#3a5545] rounded">
                                    Mute Coach (Costs 5XP)
                                </button>
                                <button className="w-full py-2 bg-white text-black text-[10px] font-black uppercase rounded">
                                    Talk Back (Roast Me)
                                </button>
                            </div>
                        </div>

                        {/* Survival Tips */}
                        <div className="p-4 bg-[#162c1e]/50 border border-[#3a5545] rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[#06f96b] text-sm">lightbulb</span>
                                <p className="text-[10px] uppercase font-black text-white">Survival Tip</p>
                            </div>
                            <p className="text-[11px] text-[#9bbba8] leading-tight">Syncing your watch every 30 minutes prevents data drift and keeps the AI off your back.</p>
                        </div>
                    </aside>
                </main>

                {/* Footer Bar */}
                <footer className="border-t-2 border-[#3a5545] bg-[#0f2317] px-6 py-2 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-[#9bbba8] z-40">
                    <div className="flex gap-4">
                        <span>Network: Encrypted</span>
                        <span className="text-[#06f96b]">System: Optimal</span>
                    </div>
                    <div className="flex gap-4">
                        <a className="hover:text-[#06f96b] transition-colors" href="#">Rules</a>
                        <a className="hover:text-[#06f96b] transition-colors" href="#">Privacy</a>
                        <a className="hover:text-[#06f96b] transition-colors" href="#">Logout</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
