"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
    const router = useRouter();
    const [huntName, setHuntName] = useState("");

    const handleSave = () => {
        if (!huntName) return;
        // Persist name for Dashboard
        localStorage.setItem("hunterName", huntName);
        router.push("/connect-health");
    };

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#050a05] text-white font-[family-name:var(--font-space-grotesk)] selection:bg-[#0df20d] selection:text-black">
            {/* Top Navigation */}
            <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-10">
                <div className="flex items-center gap-3">
                    <div className="text-[#0df20d]">
                        <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter text-white">GORILLA ARENA</h2>
                </div>
                <button className="flex items-center justify-center rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-white">settings</span>
                </button>
            </header>

            {/* Main Content Container */}
            <main className="flex flex-1 flex-col items-center justify-center px-4 py-10">
                <div className="flex w-full max-w-[480px] flex-col gap-8 text-center">
                    {/* Hero Avatar Section */}
                    <div className="relative mx-auto group">
                        <div className="absolute -inset-1 rounded-full bg-[#0df20d]/20 blur-2xl group-hover:bg-[#0df20d]/30 transition-all duration-500"></div>
                        <div className="relative size-48 overflow-hidden rounded-full border-2 border-[#0df20d] bg-[#050a05] p-1">
                            <div
                                className="h-full w-full bg-cover bg-center rounded-full"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe5KikQb_igGdkBzkCfXM2TkMhQmpEGatBQwhABBrQnTCfY9WCC8k2cycwqie5FdLt7ezDDiPppVj_Etnl51grADUI-AqsqDjA22AmdRuZ8m-MxPQQOc_iaOfLK2s-TxEOwsvg7RnqdM1ziMNwicNZy_172bhKv3LL6QPYvY86wtlZvzlcrv0M332839EgGSI1-URTrBBK99BI0rkz25moqOuhtIXjn5L0V7C9ykx562JpDHEiTCpQvAjk0xGwQphPUQVaUqDxfo')" }}
                            >
                            </div>
                        </div>
                        <div className="absolute -bottom-2 right-4 rounded bg-[#0df20d] px-2 py-0.5 text-[10px] font-black tracking-widest text-black">
                            LVL 0
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
                            Set Your <span className="text-[#0df20d] italic">Hunt</span> Name
                        </h1>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0df20d]/60">
                            Identity is everything in the Arena.
                        </p>
                    </div>

                    {/* Input Field */}
                    <div className="flex flex-col gap-6">
                        <div className="relative">
                            <label className="mb-2 block text-left text-xs font-bold uppercase tracking-widest text-white/40">
                                Arena Name
                            </label>
                            <input
                                className="w-full rounded border-2 border-white/10 bg-white/5 p-4 text-center text-xl font-bold text-white placeholder:text-white/20 focus:border-[#0df20d] focus:outline-none focus:ring-0 transition-all"
                                placeholder="Ex: Silverback_99"
                                type="text"
                                value={huntName}
                                onChange={(e) => setHuntName(e.target.value)}
                            />
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0df20d] transition-all duration-500 peer-focus:w-full"></div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleSave}
                            className="pulse-effect flex w-full items-center justify-center gap-2 rounded bg-[#0df20d] py-4 text-lg font-black uppercase tracking-widest text-black hover:bg-white transition-all active:scale-[0.98]"
                        >
                            <span>Save & Enter</span>
                            <span className="material-symbols-outlined font-bold">bolt</span>
                        </button>
                    </div>

                    {/* Status Text */}
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-white/10"></span>
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                                Prepare to be <span className="text-white">roasted</span> or <span className="text-[#0df20d]">rewarded</span>
                            </p>
                            <span className="h-px w-8 bg-white/10"></span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Background Elements (Atmospheric) */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(13, 242, 13, 0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a05] via-transparent to-transparent"></div>
            </div>

            {/* Footer Bar */}
            <footer className="flex items-center justify-center border-t border-white/5 bg-[#000000]/80 py-4 backdrop-blur-md">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-[#0df20d] animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">System Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-[#0df20d]/30"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Bet: $0.00</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
