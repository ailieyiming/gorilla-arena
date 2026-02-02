"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getActivePublicBets } from "@/lib/supabase";

const ARENA_IMAGES = [
  '/arena-1.jpg',
  '/arena-2.jpg',
  '/arena-3.jpg'
];

export default function Home() {
  const router = useRouter();
  const [activeBets, setActiveBets] = useState<any[]>([]);

  useEffect(() => {
    async function loadBets() {
      const bets = await getActivePublicBets();
      setActiveBets(bets);
    }
    loadBets();
  }, []);

  const handleJoin = (amount: number) => {
    localStorage.setItem("selected_entry_fee", amount.toString());
    router.push("/onboarding");
  };

  return (
    <div className="font-display pb-20">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1">
              <span className="material-symbols-outlined text-black font-bold">fitness_center</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter italic">GORILLA ARENA</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#active-hunts" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Arenas</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-40 cursor-not-allowed pointer-events-none">Leaderboard</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-40 cursor-not-allowed pointer-events-none">Stats</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/onboarding">
              <button className="px-6 py-2 border-2 border-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Login / Sign Up
              </button>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/arena-3.jpg"
              alt="Gritty black and white authentic gym workout"
              fill
              className="object-cover object-top grayscale brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          </div>

          <div className="z-10 text-center max-w-5xl px-4 pb-40">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none block mb-2 italic">
              BET ON <br className="md:hidden" /> YOUR FEET.
            </h1>
            <h1 className="text-5xl md:text-7xl font-black text-[#00ff00] tracking-tighter leading-none block italic">
              WIN YOUR LUNCH.
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
              The only platform where AI <span className="text-red-500 font-bold">ROASTS</span> your failure or <span className="text-[#00ff00] font-bold">REWARDS</span> your grind. Step up or stay broke.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <a href="#active-hunts">
                <button className="bg-[#00ff00] text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all transform hover:scale-105">
                  ENTER THE ARENA
                </button>
              </a>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all opacity-40 cursor-not-allowed pointer-events-none">
                HOW IT WORKS
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 w-full z-10 border-t border-white/20 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Staked</p>
                <p className="text-3xl font-black text-white italic">S$42,050</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Active Hunters</p>
                <p className="text-3xl font-black text-white italic">1,240</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Success Rate</p>
                <p className="text-3xl font-black text-white italic">18%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Marquee Section */}
        <div className="bg-primary overflow-hidden py-3">
          <div className="flex gap-8 animate-marquee whitespace-nowrap text-black font-black uppercase tracking-widest text-lg">
            <span>///// RECENT WINNER: SARAH_K (S$450) /////</span>
            <span>///// NEW ARENA OPENING IN 6H /////</span>
            <span>///// GORILLA PROTOCOL V1.0 LIVE /////</span>
            <span>///// RECENT WINNER: JACK_M (S$1,200) /////</span>
            <span>///// RECENT WINNER: SARAH_K (S$450) /////</span>
            <span>///// NEW ARENA OPENING IN 6H /////</span>
          </div>
        </div>

        {/* Info Grid */}
        <section className="bg-black py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-dark p-8 rounded-xl border border-white/5 cyber-border">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Platform Growth</p>
              <h3 className="text-4xl font-black text-white tracking-tighter">Exponential</h3>
              <div className="flex items-center gap-2 mt-2 text-primary">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-xs font-bold uppercase">+24% vs Last Week</span>
              </div>
            </div>
            <div className="bg-card-dark p-8 rounded-xl border border-white/5 cyber-border">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Hunters Eliminated</p>
              <h3 className="text-4xl font-black text-alert-red tracking-tighter">1,402</h3>
              <div className="flex items-center gap-2 mt-2 text-alert-red">
                <span className="material-symbols-outlined text-sm">skull</span>
                <span className="text-xs font-bold uppercase">The Weak are Roasted</span>
              </div>
            </div>
            <div className="bg-card-dark p-8 rounded-xl border border-white/5 cyber-border">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Avg. Payout</p>
              <h3 className="text-4xl font-black text-white tracking-tighter">S$142.50</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <span className="material-symbols-outlined text-sm">payments</span>
                <span className="text-xs font-bold uppercase">Per Active Hunter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Arena Selection Header */}
        <section id="active-hunts" className="max-w-7xl mx-auto px-6 pt-10">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase italic">Active Hunts</h2>
              <p className="text-gray-500 mt-2 font-medium">Select your stakes. Don't stop moving.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-white/20 rounded hover:bg-white hover:text-black transition-all">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="p-2 border border-white/20 rounded hover:bg-white hover:text-black transition-all">
                <span className="material-symbols-outlined">sort</span>
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Arena Image Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {activeBets.length === 0 ? (
            <div className="text-white text-center opacity-50">Loading available hunts or no active hunts found...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeBets.map((bet, index) => {
                const now = new Date();
                const expiry = bet.expiry_date ? new Date(bet.expiry_date) : null; // Assuming bets have expiry_date
                const effectiveDate = bet.effective_date ? new Date(bet.effective_date) : (bet.created_at ? new Date(bet.created_at) : new Date());

                // If expired, skip (handled in filter usually, but here just in case)
                if (expiry && expiry < now) return null;

                const isFuture = effectiveDate > now;
                const description = bet.description || "Challenge Description";
                const potSize = bet.pot_size ? `S$${bet.pot_size}` : "S$450.00"; // Fallback or dynamic

                // Image selection logic
                const imageSrc = ARENA_IMAGES[index % ARENA_IMAGES.length];

                // If future, calculate hours remaining
                let timeRemainingLabel = "Live Now";
                if (isFuture) {
                  const diffMs = effectiveDate.getTime() - now.getTime();
                  const diffHrs = Math.ceil(diffMs / (1000 * 60 * 60));
                  timeRemainingLabel = `Starts in ${diffHrs}H`;
                }

                return (
                  <div
                    key={bet.id}
                    className={`group relative bg-card-dark rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${isFuture ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:border-primary'}`}
                  >
                    <div className="aspect-[4/5] relative bg-[#050505]">
                      <Image
                        src={imageSrc}
                        alt={bet.title || "Arena Background"}
                        fill
                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-primary/40 rounded z-10">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Entry: S${bet.amount}</span>
                      </div>

                      {bet.amount >= 100 && (
                        <div className="absolute top-4 right-4 bg-alert-red px-2 py-1 rounded z-10">
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">High Stakes</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold uppercase tracking-tight">{bet.title || 'Unknown Hunt'}</h3>
                          <p className="text-primary text-xs font-bold mt-1">{description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-gray-400">
                          <p className="text-[10px] uppercase font-bold tracking-widest">Live Pot Size</p>
                          <p className="text-2xl font-black text-white tracking-tighter italic">{potSize}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-[10px] uppercase font-bold tracking-widest ${isFuture ? 'text-alert-red' : 'text-primary'}`}>
                            {timeRemainingLabel}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => !isFuture && handleJoin(bet.amount)}
                        disabled={isFuture}
                        className={`w-full py-4 font-black uppercase tracking-widest text-sm rounded-lg transition-all ${isFuture ? 'bg-gray-800 text-gray-500' : 'bg-primary text-black group-hover:shadow-[0_0_20px_rgba(6,249,107,0.4)]'}`}
                      >
                        {isFuture ? 'Coming Soon' : 'Join the Hunt'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20 bg-black py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary p-1">
                    <span className="material-symbols-outlined text-black font-bold">fitness_center</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter italic">GORILLA ARENA</h2>
                </div>
                <p className="text-gray-500 max-w-sm mb-8">The world's first 'Roast & Boast' fitness betting terminal. Powered by AI. Governed by the streets. Join or be lunch.</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-sm">public</span>
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-sm">chat</span>
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-sm">share</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Terminal</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                  <li><a href="#" className="hover:text-primary transition-colors">Active Arenas</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Global Leaderboard</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">The Vault</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Security Audit</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Protocol</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                  <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Tokenomics</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">© 2024 GORILLA ARENA PROTOCOL. ALL RIGHTS RESERVED.</p>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">v1.0.4-BETA // SYSTEM STATUS: NOMINAL</p>
            </div>
          </div>
        </footer>

        {/* Global Scanline Overlay */}
        <div className="fixed inset-0 scanline opacity-[0.03] z-[100] pointer-events-none"></div>
      </main>
    </div>
  );
}
