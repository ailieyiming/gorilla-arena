"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConnectHealthPage() {
    const router = useRouter();

    const handleConnect = () => {
        // Simulate connection delay then proceed
        setTimeout(() => {
            router.push("/payment");
        }, 1500);
    }

    return (
        <div className="bg-void-black font-[family-name:var(--font-oswald)] min-h-screen text-white overflow-hidden relative">
            <div className="absolute top-0 w-full h-[100px] z-10 pointer-events-none bg-gradient-to-t from-[rgba(0,255,65,0)] via-[rgba(0,255,65,0.05)] to-[rgba(0,255,65,0)]"></div>

            <div className="flex flex-col md:flex-row min-h-screen relative z-20">
                {/* Sidebar */}
                <aside className="w-full md:w-72 border-r border-metal-gray flex flex-col bg-void-black p-8 justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover size-14 border-2 border-predator-green shadow-[0_0_10px_rgba(0,255,65,0.3)]"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1F3va_KqzxKyiUtOAy8ziiggHl7MhIC92nZCa6KkOESglzfokhneSc3vt3vWKagjuMUSUTLMowbf5LEJWAD5YBjyWCBpcs1w5ZuJhbzYuk1H6DT2VrRcYqxRDwoJIkxSFylNFMwoE9imiWZ6oiMwMym1k0AMdTLPs1qaX-L59hw3OFNgmnwbLpUtmXCuHlvNkmfjHASGr88q9ycT7z0bKfIx2_IeYaffZk0RRdR281hXaIvwEiv8-JBB6vVz9Qgib29a6kgeRQ0q1")' }}
                            ></div>
                            <div className="flex flex-col">
                                <h1 className="text-white text-2xl font-black leading-none tracking-tighter uppercase">Gorilla Arena</h1>
                                <p className="text-predator-green text-xs font-bold leading-normal uppercase tracking-[0.3em]">Betting Pit</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1">
                            <Link href="/" className="flex items-center gap-4 px-6 py-4 text-white/50 hover:text-predator-green hover:bg-predator-green/5 transition-all border-l-2 border-transparent hover:border-predator-green">
                                <span className="material-symbols-outlined">house</span>
                                <span className="text-md font-bold uppercase tracking-widest">Home</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-4 px-6 py-4 text-white/50 hover:text-predator-green hover:bg-predator-green/5 transition-all border-l-2 border-transparent hover:border-predator-green">
                                <span className="material-symbols-outlined">trophy</span>
                                <span className="text-md font-bold uppercase tracking-widest">Bets</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-4 px-6 py-4 bg-predator-green/10 text-predator-green border-l-2 border-predator-green">
                                <span className="material-symbols-outlined">swords</span>
                                <span className="text-md font-bold uppercase tracking-widest">Arena</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-4 px-6 py-4 text-white/50 hover:text-predator-green hover:bg-predator-green/5 transition-all border-l-2 border-transparent hover:border-predator-green">
                                <span className="material-symbols-outlined">person</span>
                                <span className="text-md font-bold uppercase tracking-widest">Profile</span>
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-metal-gray pt-8 hidden md:flex">
                        <div className="flex items-center gap-3">
                            <div className="size-2 bg-predator-green shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
                            <span className="text-xs font-bold text-predator-green/70 uppercase tracking-widest">Neural Link: Active</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 bg-[radial-gradient(circle_at_center,_rgba(0,255,65,0.03)_0%,_transparent_70%)]">
                    <div className="max-w-3xl w-full text-center">
                        <h1 className="text-white tracking-[0.15em] text-4xl md:text-6xl font-black leading-none uppercase mb-4">
                            FORGE YOUR <span className="text-predator-green drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">BIOMETRICS</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 uppercase tracking-[0.1em]">
                            Connect your tracker to enter the betting pit.<br />
                            <span className="text-white font-bold border-b border-predator-green/30">NO DATA, NO GLORY.</span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 mb-16">
                            <button className="mechanical-border group flex flex-col items-center justify-center p-10 hover:border-predator-green">
                                <div className="size-20 flex items-center justify-center bg-industrial-gray border border-metal-gray mb-6 group-hover:border-predator-green group-hover:bg-predator-green/10 transition-colors">
                                    <span className="material-symbols-outlined text-5xl text-white group-hover:text-predator-green transition-colors">watch</span>
                                </div>
                                <span className="text-white text-xl font-bold tracking-[0.2em] uppercase">Connect Apple Health</span>
                                <span className="text-predator-green/40 text-[10px] mt-2 uppercase font-bold tracking-widest">Sync Steps & Heart</span>
                            </button>
                            <button className="mechanical-border group flex flex-col items-center justify-center p-10 hover:border-predator-green">
                                <div className="size-20 flex items-center justify-center bg-industrial-gray border border-metal-gray mb-6 group-hover:border-predator-green group-hover:bg-predator-green/10 transition-colors">
                                    <span className="material-symbols-outlined text-5xl text-white group-hover:text-predator-green transition-colors">fitness_center</span>
                                </div>
                                <span className="text-white text-xl font-bold tracking-[0.2em] uppercase">Connect Google Fit</span>
                                <span className="text-predator-green/40 text-[10px] mt-2 uppercase font-bold tracking-widest">Sync Activity Data</span>
                            </button>
                        </div>

                        <div className="w-full px-4 md:px-12">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 bg-predator-green animate-pulse"></div>
                                    <h4 className="text-predator-green text-sm font-black tracking-[0.3em] uppercase">
                                        Syncing Health Data...
                                    </h4>
                                </div>
                                <span className="text-white text-sm font-bold tracking-widest">78% UPLOADED</span>
                            </div>
                            <div className="flex mb-12 justify-center flex-wrap gap-y-2">
                                {[...Array(12)].map((_, i) => (
                                    <div key={`filled-${i}`} className="progress-segment filled"></div>
                                ))}
                                {[...Array(6)].map((_, i) => (
                                    <div key={`empty-${i}`} className="progress-segment"></div>
                                ))}
                            </div>

                            <button
                                onClick={handleConnect}
                                className="w-full group relative overflow-hidden h-20 bg-predator-green text-void-black text-2xl font-black tracking-[0.3em] uppercase transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(0,255,65,0.6)]"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)]"></div>
                                <div className="flex items-center justify-center gap-4 relative z-10">
                                    <span>Proceed to the Arena</span>
                                    <span className="material-symbols-outlined text-3xl">bolt</span>
                                </div>
                            </button>

                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-predator-green text-lg">verified_user</span>
                                    <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest">End-to-End Encryption</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-predator-green text-lg">monitor_heart</span>
                                    <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest">Real-time Biometrics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
