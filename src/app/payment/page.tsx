"use client";

import Link from "next/link";

export default function PaymentPage() {
    return (
        <div className="bg-[#050505] text-white min-h-screen relative selection:bg-[#0df20d] selection:text-black font-[family-name:var(--font-space-grotesk)]">
            <style jsx global>{`
        .industrial-border {
            border: 2px solid #283928;
            box-shadow: 0 0 15px rgba(13, 242, 13, 0.1);
        }
        .predator-glow {
            text-shadow: 0 0 10px rgba(13, 242, 13, 0.5);
        }
        .scanline {
            background: linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(0,0,0,.1) 50%), linear-gradient(90deg, rgba(255,0,0,.03), rgba(0,255,0,.01), rgba(0,0,255,.03));
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
        }
      `}</style>

            {/* Scanline Overlay */}
            <div className="fixed inset-0 scanline opacity-20 z-50 pointer-events-none"></div>

            <div className="flex grow flex-col min-h-screen pb-20">
                {/* Top Navigation Bar */}
                <header className="flex items-center justify-between border-b border-metal-gray bg-[#050505] px-6 py-4 md:px-10 relative z-50">
                    <div className="flex items-center gap-3">
                        <a href="/" className="text-white/50 hover:text-[#0df20d] transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Home</span>
                        </a>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 max-w-md mx-4 md:mx-10 flex flex-col gap-1">
                        <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-widest text-[#0df20d]">
                            <span>Payment</span>
                            <span>Step 3/3</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0df20d] w-full shadow-[0_0_10px_#0df20d]"></div>
                        </div>
                    </div>

                    <a href="/" className="flex items-center justify-center rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors group">
                        <span className="material-symbols-outlined text-white group-hover:text-[#0df20d] transition-colors">close</span>
                    </a>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 relative">
                    <div className="max-w-[800px] w-full flex flex-col items-center">

                        {/* Headline Section */}
                        <div className="text-center mb-8">
                            <div className="inline-block px-3 py-1 bg-[#0df20d]/10 border border-[#0df20d]/30 text-[#0df20d] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 rounded-sm">
                                ENTRY REQUIREMENT: COMMITMENT
                            </div>
                            <h1 className="text-white tracking-tighter text-5xl md:text-7xl font-black leading-none px-4 text-center uppercase predator-glow italic">
                                COMMIT TO THE <span className="text-[#0df20d]">ARENA</span>
                            </h1>
                            <p className="text-white/50 text-sm font-bold leading-normal pb-3 pt-4 px-4 text-center tracking-[0.1em] uppercase">
                                COMMUTER ARENA ENTRY FEE: <span className="text-white">S$10.00</span>
                            </p>
                        </div>

                        {/* Main Payment Card */}
                        <div className="w-full bg-[#0a0a0a] border-2 border-[#283928] p-8 md:p-12 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0df20d]"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0df20d]"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0df20d]"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0df20d]"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Left Side: QR Code */}
                                <div className="flex flex-col items-center">
                                    <div className="p-4 bg-white rounded-lg shadow-[0_0_30px_rgba(13,242,13,0.15)] relative group transition-transform hover:scale-[1.02]">
                                        <div
                                            className="w-48 h-48 md:w-64 md:h-64 bg-center bg-no-repeat bg-cover rounded-sm"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCogqN91smcExIddgQw8erIZO7UBHTOapY0aIwWgu8pZGJALVylklc7xDrWhjixgWw6cSVC__xyYucUL-9jP9mi-RJddvFXh5AU5T2dcq_knF48kS03tUVC48h2iv1GiG8oP_zF5TIHyp97frh5-w6KR46cT_Xh1KSYjKSe9lDhNHIoVuuTESU-UUFpFZbXY_NpsaYJIUb8fWKU5tA-xgvQ5M1bqjecbEd1w8xZDuq4abXc56TgyCUjX_cF-mH_WkWMYAevjRncVA1R')" }}
                                        >
                                        </div>
                                        <div className="absolute -top-3 -right-3 bg-[#0df20d] text-black p-2 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm font-bold">qr_code_scanner</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#0df20d]">lock</span>
                                        <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Encrypted Payment Gateway</span>
                                    </div>
                                </div>

                                {/* Right Side: Instructions and Input */}
                                <div className="flex flex-col gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-[#0df20d] text-sm font-black leading-tight tracking-[0.1em] uppercase flex items-center gap-2">
                                            <span className="size-2 bg-[#0df20d] rounded-full animate-pulse"></span>
                                            Manual Verification Steps
                                        </h3>
                                        <div className="space-y-4 text-white/80">
                                            <div className="flex gap-4">
                                                <span className="text-[#0df20d] font-black font-display text-lg">01.</span>
                                                <p className="text-xs font-medium leading-relaxed uppercase tracking-wider">Scan the QR code and transfer exactly <span className="text-white font-bold">S$10.00</span> via your banking app.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-[#0df20d] font-black font-display text-lg">02.</span>
                                                <p className="text-xs font-medium leading-relaxed uppercase tracking-wider">Copy your <span className="text-white font-bold">Transaction Reference Number</span> from the receipt.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-[#0df20d] font-black font-display text-lg">03.</span>
                                                <p className="text-xs font-medium leading-relaxed uppercase tracking-wider">Paste the reference below and wait for our <span className="text-white font-bold">Manual Scouting</span> process.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <label className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase pl-1">Transaction Ref:</label>
                                        <input className="w-full bg-[#050505] border-2 border-[#283928] text-[#0df20d] font-display font-bold uppercase tracking-widest p-4 focus:ring-1 focus:ring-[#0df20d] focus:border-[#0df20d] transition-all outline-none" placeholder="E.g. 20231024-REF-001" type="text" />
                                    </div>

                                    <Link href="/dashboard" className="w-full">
                                        <button className="w-full group relative flex items-center justify-center h-16 bg-[#0df20d] hover:bg-white transition-all overflow-hidden border-b-4 border-black/20 active:translate-y-1 active:border-b-0">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#050505] text-lg font-black tracking-[0.15em] uppercase">Verify Payment</span>
                                                <span className="material-symbols-outlined text-[#050505] group-hover:translate-x-1 transition-transform">bolt</span>
                                            </div>
                                        </button>
                                    </Link>

                                    <div className="flex flex-col gap-1 items-center justify-center opacity-70">
                                        <p className="text-[9px] font-bold text-[#0df20d] animate-pulse tracking-widest uppercase">
                                            Verifying Payment... (Manual Approval in Progress)
                                        </p>
                                        <div className="w-full h-1 bg-[#1a1a1a] mt-2 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#0df20d]/40 w-1/3 animate-[loading_3s_infinite_linear]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Context */}
                        <div className="mt-8 flex items-center justify-between w-full px-4 text-white/30 text-[10px] font-bold tracking-[0.15em] uppercase">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                                <span>Wizard of Oz Secure Engine</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a className="hover:text-[#0df20d] transition-colors" href="#">Support</a>
                                <a className="hover:text-[#0df20d] transition-colors" href="#">T&C</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <style jsx>{`
        @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
        }
      `}</style>
        </div>
    );
}
