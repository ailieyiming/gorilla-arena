"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HistoryPage() {
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
        <div className="bg-[#020202] text-white font-[family-name:var(--font-oswald)] min-h-screen relative overflow-x-hidden industrial-texture">
            <style jsx global>{`
        .industrial-texture {
            background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .scanline {
            background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 50%);
            background-size: 100% 4px;
            pointer-events: none;
        }
      `}</style>

            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-[#4e5664]/30 bg-[#050505] px-6 py-3 lg:px-10">
                <div className="flex items-center gap-4 text-white">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="size-6 text-[#0bda5e]">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-wider uppercase italic">Gorilla Arena</h2>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-[#4e5664] hover:text-[#0bda5e] text-sm font-medium transition-colors uppercase tracking-widest">Arenas</Link>
                        <Link href="/history" className="text-[#0bda5e] text-sm font-bold border-b-2 border-[#0bda5e] pb-1 uppercase tracking-widest">History</Link>
                        <a className="text-[#4e5664] hover:text-[#0bda5e] text-sm font-medium transition-colors uppercase tracking-widest" href="#">Leaderboards</a>
                    </nav>
                    <Link href="/dashboard">
                        <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-none bg-[#0bda5e] hover:bg-[#0bda5e]/90 transition-all h-10 px-4 text-[#050505] text-sm font-black uppercase tracking-widest">
                            <span className="truncate">Enter Arena</span>
                        </button>
                    </Link>
                    <div className="flex items-center gap-3 pl-4 border-l border-[#4e5664]/30">
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] text-[#4e5664] font-bold leading-none tracking-widest uppercase">Alpha Hunter</p>
                            <p className="text-xs text-[#0bda5e] font-bold uppercase tracking-widest">{hunterName}</p>
                        </div>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-none size-10 ring-1 ring-[#0bda5e]/50"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3ZLTCgBh_zpwp66U9JOv-uerG7BsoXJBvwe4UZMlM7HLn8T4vt6U4BbvRRrDwrmzJmE2IrnslX1gAbGB8KNlYXrvxuLHJWAn4ibKgr5fzlIxvQbKJNjbGBfa0YYwpbPydLdsCIPzFe8MR8dSKBcni4UXaloCtVJcxDnNLm62AvDu0iqGrm2x7Vh_MR9sePT52t7F9hayG20scf-Y9CgD_NEpuldIKd8Vc9S4hmS1bp82HdfUOvZQNg9WzmOVNUEZSpl1-zHbQyWL4')" }}
                        ></div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 flex-col lg:flex-row max-w-[1600px] mx-auto w-full">
                {/* Sidebar */}
                <aside className="hidden lg:flex w-64 flex-col justify-between border-r border-[#4e5664]/20 bg-[#050505] p-6">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] font-bold text-[#4e5664] tracking-[0.3em] uppercase px-3">Mission Command</p>
                            <div className="flex flex-col gap-1">
                                <Link href="/history" className="flex items-center gap-3 px-3 py-3 bg-[#0bda5e]/10 text-[#0bda5e] border-r-4 border-[#0bda5e]">
                                    <span className="material-symbols-outlined text-[20px]">history</span>
                                    <p className="text-sm font-bold tracking-widest uppercase">Hunt History</p>
                                </Link>
                                <Link href="/create-game" className="flex items-center gap-3 px-3 py-3 text-[#4e5664] hover:bg-[#0bda5e]/10 hover:text-[#0bda5e] transition-all">
                                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    <p className="text-sm font-medium tracking-widest uppercase">Create Bet</p>
                                </Link>
                                <Link href="/create-game" className="flex items-center gap-3 px-3 py-3 text-[#4e5664] hover:bg-[#0bda5e]/10 hover:text-[#0bda5e] transition-all">
                                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    <p className="text-sm font-medium tracking-widest uppercase">Create Bet</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-none border border-[#4e5664]/20 bg-[#1a1a1a]">
                        <p className="text-[10px] font-bold text-[#4e5664] uppercase tracking-widest mb-2">Weekly Survival Rate</p>
                        <div className="h-1 w-full bg-[#020202] rounded-none overflow-hidden mb-2">
                            <div className="bg-[#0bda5e] h-full w-[78%]"></div>
                        </div>
                        <p className="text-xs font-bold text-[#0bda5e] tracking-widest">78.4% APEX</p>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col p-4 lg:p-10 gap-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#0bda5e]/10 border border-[#0bda5e]/20 rounded-none mb-2">
                                <span className="size-2 rounded-full bg-[#0bda5e] animate-pulse"></span>
                                <span className="text-[10px] font-bold text-[#0bda5e] uppercase tracking-[0.3em]">System Online</span>
                            </div>
                            <h1 className="text-white text-6xl font-black leading-tight tracking-tight uppercase italic">Hunt History</h1>
                            <p className="text-[#4e5664] text-lg font-light max-w-xl font-display uppercase tracking-wider">A tactical log of your survival. Profits claimed from roasted rivals.</p>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 border border-[#4e5664]/30 bg-[#050505] hover:border-[#0bda5e] hover:text-[#0bda5e] transition-all rounded-none">
                            <span className="material-symbols-outlined">download</span>
                            <span className="text-sm font-bold uppercase tracking-widest">Export Logs</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3 rounded-none p-8 border border-[#4e5664]/20 bg-[#050505] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 text-[#0bda5e] opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
                            </div>
                            <p className="text-[#4e5664] text-[10px] font-bold uppercase tracking-[0.3em]">Total Payouts Won</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-white tracking-tighter text-5xl font-black italic">S$1,420.50</p>
                                <span className="text-[#0bda5e] text-sm font-bold flex items-center">
                                    <span className="material-symbols-outlined text-sm">trending_up</span> +12.4%
                                </span>
                            </div>
                            <p className="text-[10px] text-[#4e5664] uppercase tracking-widest">Last withdrawal: 2 days ago</p>
                        </div>
                        <div className="flex flex-col gap-3 rounded-none p-8 border border-[#0bda5e]/30 bg-[#0bda5e]/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 text-[#0bda5e] opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-8xl">timer</span>
                            </div>
                            <p className="text-[#0bda5e] text-[10px] font-bold uppercase tracking-[0.3em]">Active Hunt Time</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-white tracking-tighter text-5xl font-black italic">142h 20m</p>
                            </div>
                            <p className="text-[10px] text-[#4e5664] uppercase tracking-widest">Ranked Top 5% of Survivors</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-white text-2xl font-black uppercase italic tracking-wider">Arena Operation History</h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-1 bg-[#050505] border border-[#4e5664]/30 text-[10px] font-bold rounded-none uppercase tracking-widest hover:border-[#0bda5e] transition-colors">Filter: All Deployment</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto border border-[#4e5664]/20 rounded-none bg-[#050505]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#1a1a1a] border-b border-[#4e5664]/20">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.2em]">Mission Designation</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.2em]">Deployment Date</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.2em] text-center">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.2em] text-right">Yield</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.2em] text-center">Share</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#4e5664]/10">
                                    <tr className="hover:bg-[#0bda5e]/[0.03] transition-colors cursor-pointer group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold group-hover:text-[#0bda5e] transition-colors italic uppercase tracking-wider text-lg">Upper Body Carnage</span>
                                                <span className="text-[10px] text-[#4e5664] font-display tracking-widest">ID: HA-90210</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-[#4e5664] text-sm font-display tracking-widest uppercase">Oct 24, 2023</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="inline-block px-4 py-1 border border-[#0bda5e] text-[#0bda5e] text-[10px] font-black uppercase tracking-[0.3em] bg-[#0bda5e]/5">Predator</span>
                                        </td>
                                        <td className="px-6 py-5 text-right font-black text-[#0bda5e] italic text-xl">+S$45.00</td>
                                        <td className="px-6 py-5 text-center">
                                            <Link href="/share-results">
                                                <button className="text-[#4e5664] hover:text-[#0bda5e] transition-colors">
                                                    <span className="material-symbols-outlined">share</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#ff4d4d]/[0.03] transition-colors cursor-pointer group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold group-hover:text-[#ff4d4d] transition-colors italic uppercase tracking-wider text-lg">5AM Survival Run</span>
                                                <span className="text-[10px] text-[#4e5664] font-display tracking-widest">ID: HA-88211</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-[#4e5664] text-sm font-display tracking-widest uppercase">Oct 21, 2023</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="inline-block px-4 py-1 border border-[#ff4d4d] text-[#ff4d4d] text-[10px] font-black uppercase tracking-[0.3em] bg-[#ff4d4d]/5">Prey</span>
                                        </td>
                                        <td className="px-6 py-5 text-right font-black text-[#ff4d4d] italic text-xl">-S$20.00</td>
                                        <td className="px-6 py-5 text-center">
                                            <Link href="/share-results">
                                                <button className="text-[#4e5664] hover:text-[#0bda5e] transition-colors">
                                                    <span className="material-symbols-outlined">share</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#0bda5e]/[0.03] transition-colors cursor-pointer group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold group-hover:text-[#0bda5e] transition-colors italic uppercase tracking-wider text-lg">No-Carb Guerrilla Hunt</span>
                                                <span className="text-[10px] text-[#4e5664] font-display tracking-widest">ID: HA-77312</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-[#4e5664] text-sm font-display tracking-widest uppercase">Oct 18, 2023</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="inline-block px-4 py-1 border border-[#0bda5e] text-[#0bda5e] text-[10px] font-black uppercase tracking-[0.3em] bg-[#0bda5e]/5">Predator</span>
                                        </td>
                                        <td className="px-6 py-5 text-right font-black text-[#0bda5e] italic text-xl">+S$112.50</td>
                                        <td className="px-6 py-5 text-center">
                                            <Link href="/share-results">
                                                <button className="text-[#4e5664] hover:text-[#0bda5e] transition-colors">
                                                    <span className="material-symbols-outlined">share</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-4 p-8 bg-[#0bda5e]/5 border-2 border-dashed border-[#0bda5e]/20 relative rounded-none flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                        <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
                        <div className="flex gap-6 items-center relative z-10">
                            <div className="size-16 bg-[#0bda5e]/20 border border-[#0bda5e]/50 flex items-center justify-center text-[#0bda5e]">
                                <span className="material-symbols-outlined text-4xl">local_fire_department</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black uppercase italic tracking-wider">The Void Awaits</h3>
                                <p className="text-[#4e5664] text-sm font-display tracking-wide uppercase">New Arena "Midnight Burn" deployment in <span className="text-[#0bda5e] font-bold">04:12:33</span>. Bounty: <span className="text-white font-bold">S$500.00</span></p>
                            </div>
                        </div>
                        <Link href="/dashboard" className="w-full md:w-auto">
                            <button className="w-full px-12 py-4 bg-[#0bda5e] text-[#050505] font-black uppercase tracking-[0.3em] italic hover:bg-white transition-all">
                                Initialize Hunt
                            </button>
                        </Link>
                    </div>
                </main>
            </div>

            <footer className="border-t border-[#4e5664]/20 bg-[#050505] py-10 px-6 lg:px-10 mt-auto">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-[10px] font-bold text-[#4e5664] uppercase tracking-[0.4em]">Protocol Version 2.0.4-BETA // VOID OPS</p>
                        <p className="text-[#4e5664]/60 text-[10px] uppercase tracking-widest">© 2026 Gorilla Arena. No Mercy, Only Gains. Built for the Apex.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
