"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateSuccessPage() {
    const [copied, setCopied] = useState(false);
    const inviteLink = "gorilla.arena/hunt/alpha_9921_xpr";

    const handleCopy = () => {
        navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-background-dark font-display text-white selection:bg-primary selection:text-black min-h-screen pb-20 overflow-y-auto">
            <style jsx global>{`
                :root {
                    --color-primary: #13ec5b;
                }
                .bg-background-dark {
                    background-color: #080808;
                }
                .text-primary {
                    color: #13ec5b;
                }
                .bg-primary {
                    background-color: #13ec5b;
                }
                .border-primary {
                    border-color: #13ec5b;
                }
                .font-headline {
                    font-family: var(--font-oswald), sans-serif;
                }
                .cyber-grid {
                    background-size: 40px 40px;
                    background-image: 
                        linear-gradient(to right, rgba(19, 236, 91, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(19, 236, 91, 0.05) 1px, transparent 1px);
                }
                .neon-glow {
                    box-shadow: 0 0 15px rgba(19, 236, 91, 0.4);
                }
                .industrial-border {
                    border: 2px solid #13ec5b;
                    position: relative;
                }
                .industrial-border::before {
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    width: 10px;
                    height: 10px;
                    background: #13ec5b;
                }
                .industrial-border::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    right: -5px;
                    width: 10px;
                    height: 10px;
                    background: #13ec5b;
                }
            `}</style>

            {/* Main Navigation */}
            <header className="flex items-center justify-between border-b border-primary/20 px-8 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <Link href="/history">
                        <h2 className="text-xl font-headline tracking-wider uppercase italic">Gorilla Arena</h2>
                    </Link>
                </div>
                <div className="flex items-center gap-10">
                    <nav className="hidden md:flex items-center gap-8 uppercase text-xs font-bold tracking-widest">
                        <a className="hover:text-primary transition-colors" href="#">Arenas</a>
                        <a className="hover:text-primary transition-colors" href="#">My Pack</a>
                        <a className="hover:text-primary transition-colors" href="#">Leaderboard</a>
                        <a className="text-primary" href="#">Recruit</a>
                    </nav>
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center rounded bg-primary/10 border border-primary/30 text-primary h-10 w-10 hover:bg-primary hover:text-black transition-all">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-10 w-10 rounded-full border border-primary overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt45QMi-79S_nOp0Q55_fwI51D6llhf48MkgV_rzircr79ziDrOkIZwg-4vx6Fe52yAKZeeF2Gjvk31Ap3xeSkPV7ZG9y_UVL55TuHO7v-TXoOF1pBVvVRbB_MNld8Z-z6_UTgy2DZb7PVjLPrXvVMtnMY_PoYRoI7-twkp8MfgCs_MHPzJd9BPVAWiWH9Vswphclf5y5lwFdAohFAN13nYFYH6_vjazqfPXOYxfw6UO8AKz9Z3GGMv9oVT5cvfEvm4heUTRzggvUm" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative min-h-[calc(100vh-72px)] cyber-grid flex items-center justify-center p-6">
                {/* Background Overlay for Modal focus */}
                <div className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm"></div>

                {/* Invite Predator Modal */}
                <div className="relative w-full max-w-4xl bg-[#111] border-2 border-primary/40 p-8 md:p-12 shadow-2xl rounded-sm overflow-hidden">
                    {/* Gorilla Mascot Asset */}
                    <div className="absolute -right-20 -bottom-10 opacity-40 md:opacity-100 pointer-events-none w-80">
                        <div className="relative">
                            <img
                                className="grayscale brightness-150 contrast-125 mask-linear"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz3dZXlsnFhMPW0orl8QVwRqJSjTIhD0-X6wy4QUv_-DYUHgKlHrmWGWikKj7g_r4SpsxpZW4BpcLJHaCYa0YYFk8ITm1KKLD6pEbkolPTAQDpi39L4hNrbUjDypumvhvnuyGrr9qz2WAmRKFNhOq0cfybSjnAkcKAzIDT5tHi1dOsWh4pfdRcPNf6VzKLcH7mmLb6k_cQeqC0jCqSLcWwrR8JRAbXaxHJgdiKL2qBgHbyKQje-sjn3lafkUHEBH5vTv0zwN3lCe0q"
                                alt="Angry gorilla"
                            />
                            <div className="absolute top-1/2 left-0 transform -rotate-12 bg-primary text-black px-4 py-2 font-headline text-2xl border-4 border-black">
                                JOIN THE HUNT
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Copy & Info */}
                        <div className="flex flex-col space-y-8">
                            <div className="space-y-2">
                                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Phase 01: Recruitment</span>
                                <h1 className="font-headline text-6xl md:text-7xl leading-none text-white uppercase tracking-tighter">
                                    RECRUIT <br /> <span className="text-primary">YOUR PACK</span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-sm leading-tight pt-4">
                                    Bring them to the Gorilla Arena. Roast them. Boast your gains. Dominate the food chain.
                                </p>
                            </div>

                            {/* Industrial Text Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Universal Invite Link</label>
                                <div className="flex items-stretch group">
                                    <div className="flex-1 bg-black/50 border-2 border-primary/50 group-hover:border-primary transition-colors p-4 flex items-center overflow-hidden">
                                        <span className="text-primary/70 text-sm font-mono truncate">{inviteLink}</span>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="bg-primary text-black px-6 font-bold flex items-center gap-2 hover:bg-white transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-xl">{copied ? "check" : "content_copy"}</span>
                                        <span className="hidden sm:inline">{copied ? "COPIED" : "COPY"}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Industrial Social Bar */}
                            <div className="flex flex-col gap-4">
                                <p className="text-[10px] uppercase font-bold text-gray-600 tracking-[0.2em]">Deploy to Networks</p>
                                <div className="flex gap-4">
                                    <button className="size-12 rounded-sm border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white/5">
                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"></path></svg>
                                    </button>
                                    <button className="size-12 rounded-sm border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white/5">
                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.76-3.35 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .35.03.51.16.13.1.17.24.19.34.02.06.02.19.01.25z"></path></svg>
                                    </button>
                                    <button className="size-12 rounded-sm border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white/5">
                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.612 6.766 6.96 6.966 1.28.058 1.688.072 4.948.072s3.668-.014 4.948-.072c4.351-.2 6.764-2.612 6.965-6.966.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.353-2.611-6.765-6.96-6.965C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: QR Code */}
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="relative p-4 industrial-border bg-black neon-glow">
                                {/* Simulated QR Code */}
                                <div className="size-64 md:size-80 bg-primary p-2 flex items-center justify-center">
                                    <div className="w-full h-full bg-black flex flex-wrap gap-1 p-2">
                                        {/* Generative pattern to mimic QR */}
                                        <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-1">
                                            <div className="bg-primary col-span-2 row-span-2"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary col-span-2 row-span-2"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary col-span-2 row-span-2"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary col-span-3"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary row-span-2"></div>
                                            <div className="bg-primary"></div>
                                            <div className="bg-primary"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Scanning line detail */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 blur-[2px] shadow-[0_0_10px_#13ec5b] animate-pulse"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-primary font-bold tracking-widest uppercase text-sm">Scan to Enlist</p>
                                <p className="text-gray-500 text-xs">Share this code for instant squad formation.</p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Status Bar */}
                    <div className="mt-12 border-t border-primary/20 pt-6 flex justify-between items-center text-[10px] font-mono text-primary/40">
                        <div className="flex items-center gap-2">
                            <span className="size-2 bg-primary animate-ping rounded-full"></span>
                            TRACKING ACTIVE ENLISTMENTS: 12,482
                        </div>
                        <div>
                            LOCATION: SECTOR_7_ARENA
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer Stats */}
            <footer className="bg-background-dark border-t border-primary/10 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <a className="hover:text-white" href="#">Terms of Warfare</a>
                    <a className="hover:text-white" href="#">Privacy Protocol</a>
                    <a className="hover:text-white" href="#">Support Comms</a>
                </div>
                <div className="text-gray-600 text-[10px] uppercase font-mono">
                    © 2024 Gorilla Arena Systems // Protocol v2.0.4
                </div>
            </footer>
        </div>
    );
}
