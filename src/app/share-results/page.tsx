"use client";

import Link from "next/link";

export default function ShareResultsPage() {
    return (
        <div className="bg-[#020202] text-white font-[family-name:var(--font-oswald)] min-h-screen relative overflow-y-auto overflow-x-hidden industrial-texture pb-20">
            <style jsx global>{`
                .industrial-texture {
                    background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0);
                    background-size: 24px 24px;
                }
            `}</style>

            <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center">
                <Link href="/history" className="flex items-center gap-2 text-[#4e5664] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Back</span>
                </Link>
            </header>

            <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-20">
                <div className="max-w-md w-full flex flex-col gap-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2"><span className="text-[#0bda5e]">Roast</span> & Boast</h1>
                        <p className="text-[#4e5664] text-xs uppercase tracking-widest">Share your survival status</p>
                    </div>

                    {/* Roast Card Preview */}
                    <div className="bg-[#0bda5e] p-6 relative overflow-hidden aspect-[4/5] flex flex-col justify-between shadow-[0_0_50px_rgba(11,218,94,0.2)] transform hover:rotate-1 transition-transform duration-500">
                        <div className="absolute inset-0 grayscale contrast-125 opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6z1omYTK_6jxx1jOq2YExyOQhG5UxMfFPpljfjFocbuKsBDofLr3AqqNje9ofCIR4TJCme_DkkmR39kZGfLrtT6cTumfFpoj41GUg0iGnaLB7xEQHEoUkTBN1fpBgp89LJRctQhbqA4OvtCVSGifVGo03EZziORak1169iKvNMcNFuspXEg5zYOVuY9MSYv4pcnfvf8yHFg9H0ouBR5AiFk1x26O4y3G5ayBp9M2IVw1X-nDy_IjEXJmQaaF4sfoozy5AoeFNLUfp')" }}></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <span className="text-black font-black uppercase tracking-[0.2em] text-sm border-b-2 border-black">Gorilla Arena</span>
                                <span className="bg-black text-[#0bda5e] px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Win</span>
                            </div>
                        </div>

                        <div className="relative z-10 flex-1 flex items-center justify-center">
                            <h2 className="text-black text-6xl font-black uppercase italic leading-[0.85] tracking-tighter text-center">
                                I SURVIVED<br />THE VOID
                            </h2>
                        </div>

                        <div className="relative z-10 bg-black p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[#0bda5e] text-xs font-bold uppercase tracking-widest">Profit</span>
                                <span className="text-white text-xl font-black italic">+S$112.50</span>
                            </div>
                            <p className="text-[#4e5664] text-[10px] font-mono leading-tight">
                                AI COACH: "NOT BAD FOR A HUMAN. BUT CAN YOU DO IT AGAIN TOMORROW?"
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-4 hover:bg-[#0bda5e] transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">share</span>
                            Share on X
                        </button>
                        <button className="w-full border border-[#4e5664]/30 text-white font-bold uppercase tracking-[0.2em] py-4 hover:border-[#0bda5e] transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">download</span>
                            Download
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
