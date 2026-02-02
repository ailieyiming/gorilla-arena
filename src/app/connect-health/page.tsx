"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConnectHealthPage() {
    const router = useRouter();
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);
    const [syncProgress, setSyncProgress] = useState(0);

    const handleConnect = () => {
        if (!selectedProvider) return;
        setIsSyncing(true);

        // Simulate sync progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            setSyncProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    router.push("/payment");
                }, 500);
            }
        }, 100);
    }

    return (
        <div className="bg-void-black font-[family-name:var(--font-oswald)] min-h-screen text-white overflow-hidden relative flex flex-col">
            <div className="absolute top-0 w-full h-[100px] z-10 pointer-events-none bg-gradient-to-t from-[rgba(0,255,65,0)] via-[rgba(0,255,65,0.05)] to-[rgba(0,255,65,0)]"></div>

            {/* Top Navigation */}
            <header className="flex items-center justify-between border-b border-metal-gray bg-void-black px-6 py-4 md:px-10 relative z-50">
                <div className="flex items-center gap-3">
                    <a href="/" className="text-white/50 hover:text-[#0df20d] transition-colors flex items-center gap-2 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Home</span>
                    </a>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 max-w-md mx-4 md:mx-10 flex flex-col gap-1">
                    <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-widest text-[#0df20d]">
                        <span>Connect Source</span>
                        <span>Step 2/3</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0df20d] w-2/3 shadow-[0_0_10px_#0df20d]"></div>
                    </div>
                </div>

                <a href="/" className="flex items-center justify-center rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors group">
                    <span className="material-symbols-outlined text-white group-hover:text-[#0df20d] transition-colors">close</span>
                </a>
            </header>

            <div className="flex flex-1 relative z-20 justify-center">
                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 bg-[radial-gradient(circle_at_center,_rgba(0,255,65,0.03)_0%,_transparent_70%)] max-w-5xl">
                    <div className="w-full text-center">
                        <h1 className="text-white tracking-[0.15em] text-4xl md:text-6xl font-black leading-none uppercase mb-4">
                            FORGE YOUR <span className="text-predator-green drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">BIOMETRICS</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 uppercase tracking-[0.1em]">
                            Connect your tracker to enter the betting pit.<br />
                            <span className="text-white font-bold border-b border-predator-green/30">NO DATA, NO GLORY.</span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 mb-16">
                            <button
                                onClick={() => setSelectedProvider('apple')}
                                className={`mechanical-border group flex flex-col items-center justify-center p-10 transition-all ${selectedProvider === 'apple' ? 'border-predator-green bg-predator-green/5 shadow-[0_0_30px_rgba(0,255,65,0.1)]' : 'hover:border-predator-green'}`}
                            >
                                <div className={`size-20 flex items-center justify-center bg-industrial-gray border mb-6 transition-colors ${selectedProvider === 'apple' ? 'border-predator-green bg-predator-green/20' : 'border-metal-gray group-hover:border-predator-green group-hover:bg-predator-green/10'}`}>
                                    <span className={`material-symbols-outlined text-5xl transition-colors ${selectedProvider === 'apple' ? 'text-predator-green' : 'text-white group-hover:text-predator-green'}`}>watch</span>
                                </div>
                                <span className="text-white text-xl font-bold tracking-[0.2em] uppercase">Connect Apple Health</span>
                                <span className="text-predator-green/40 text-[10px] mt-2 uppercase font-bold tracking-widest">Sync Steps & Heart</span>
                            </button>
                            <button
                                onClick={() => setSelectedProvider('google')}
                                className={`mechanical-border group flex flex-col items-center justify-center p-10 transition-all ${selectedProvider === 'google' ? 'border-predator-green bg-predator-green/5 shadow-[0_0_30px_rgba(0,255,65,0.1)]' : 'hover:border-predator-green'}`}
                            >
                                <div className={`size-20 flex items-center justify-center bg-industrial-gray border mb-6 transition-colors ${selectedProvider === 'google' ? 'border-predator-green bg-predator-green/20' : 'border-metal-gray group-hover:border-predator-green group-hover:bg-predator-green/10'}`}>
                                    <span className={`material-symbols-outlined text-5xl transition-colors ${selectedProvider === 'google' ? 'text-predator-green' : 'text-white group-hover:text-predator-green'}`}>fitness_center</span>
                                </div>
                                <span className="text-white text-xl font-bold tracking-[0.2em] uppercase">Connect Google Fit</span>
                                <span className="text-predator-green/40 text-[10px] mt-2 uppercase font-bold tracking-widest">Sync Activity Data</span>
                            </button>
                        </div>

                        <div className="w-full px-4 md:px-12 max-w-3xl mx-auto">
                            {isSyncing ? (
                                <div className="mb-12">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 bg-predator-green animate-pulse"></div>
                                            <h4 className="text-predator-green text-sm font-black tracking-[0.3em] uppercase">
                                                Syncing Health Data...
                                            </h4>
                                        </div>
                                        <span className="text-white text-sm font-bold tracking-widest">{syncProgress}% UPLOADED</span>
                                    </div>
                                    <div className="h-2 w-full bg-industrial-gray rounded-full overflow-hidden border border-metal-gray">
                                        <div
                                            className="h-full bg-predator-green shadow-[0_0_10px_#0df20d] transition-all duration-100 ease-linear"
                                            style={{ width: `${syncProgress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-20 mb-6"></div> // Spacer to prevent layout shift
                            )}

                            <button
                                onClick={handleConnect}
                                disabled={!selectedProvider || isSyncing}
                                className={`w-full group relative overflow-hidden h-20 text-void-black text-2xl font-black tracking-[0.3em] uppercase transition-all ${!selectedProvider || isSyncing ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-predator-green hover:bg-white hover:shadow-[0_0_40px_rgba(0,255,65,0.6)]'}`}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)]"></div>
                                <div className="flex items-center justify-center gap-4 relative z-10">
                                    <span>{isSyncing ? 'Syncing...' : 'Proceed to the Arena'}</span>
                                    {!isSyncing && <span className="material-symbols-outlined text-3xl">bolt</span>}
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
