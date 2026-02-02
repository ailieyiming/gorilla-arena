"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import React from 'react';

export default function Home() {
  const router = useRouter();

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
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Leaderboard</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Stats</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors px-4">
              Login
            </button>
            <button className="bg-primary text-black px-6 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
              Sign Up
            </button>
            <div className="w-10 h-10 rounded-full bg-card-dark border border-primary/30 flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkp_FbGpjwCfvdx_78a4_UtMj4jJ0pxJdSHLDvR7xFLBHDzxNimvZWyNhCcnQEWA-74qI-FrkiO1ot8KTPA-NnB2l--ENmEYtnKx4Y2rjMDw6ofRMOgYuV0NFx_aKQMGMeyxcHXsJny8VmZhVBdrLgxehJdjdV90p_L2jpH0f19Tjzjjsb3WGaq7GjMAeLnQdVCETzaRmRhjxvK7m4gJrjInMxVnV-ceQmv-wNiu_7gjWvxUjXITOBsPR9s1vpjnShYGG65wMXmVFV"
                alt="User cyberpunk avatar profile silhouette"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaTLpg07u2Orq78dIEKDbta5Vmteo0y6sj0Xd5nYHwyQs79jBrDt4XtREJRIArVxFO5D3gOi7WDYFT3TK4bxSLhhmz19qCZMpypNDjnscVIkAebNRQLzHEYIxPy4j7ymLjus6Hcn-5O3Slogqbga-wxHh8X35dHXpj4_eLQz42lnjOOLiHVKMbmKZJ-iJX8XkSkD_qqz-mNSOS7gllBzuzLeNVBN2rzrQsnSSivr-UdMnnrOlgOKxd0ppe7gZ8fUTZAtorrxBWNbgt")' }}
            ></div>
          </div>
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/50 bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">System Online: 4,129 Hunters Active</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 glitch-text">
              Bet on your feet.<br />
              <span className="text-primary">Win your lunch.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
              The only platform where AI <span className="text-alert-red font-bold uppercase">roasts</span> your failure or <span className="text-primary font-bold uppercase">rewards</span> your grind. Step up or stay broke.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('active-hunts')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto px-12 py-5 bg-primary text-black font-black uppercase italic text-xl rounded-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,249,107,0.3)]"
              >
                Enter the Arena
              </button>
              <button className="w-full md:w-auto px-12 py-5 border-2 border-white text-white font-black uppercase italic text-xl rounded-lg hover:bg-white hover:text-black transition-all">
                How it Works
              </button>
            </div>
          </div>

          {/* Stats Ticker */}
          <div className="absolute bottom-0 w-full bg-primary py-3 overflow-hidden whitespace-nowrap border-y border-black">
            <div className="flex animate-marquee">
              <div className="flex gap-12 items-center text-black font-black uppercase text-sm tracking-widest">
                <span>S$1,250 Payouts Distributed Today</span>
                <span className="material-symbols-outlined">bolt</span>
                <span>Latest Roast: "User_882 walked 100 steps. My toaster does more exercise."</span>
                <span className="material-symbols-outlined">bolt</span>
                <span>S$1,250 Payouts Distributed Today</span>
                <span className="material-symbols-outlined">bolt</span>
                <span>Latest Win: Hunter_Alpha took S$450 from the Commuter Pot</span>
                <span className="material-symbols-outlined">bolt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-dark p-8 rounded-xl border border-white/5 cyber-border">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Total Pool Value</p>
              <h3 className="text-4xl font-black text-primary tracking-tighter">S$48,920.00</h3>
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

        {/* Arena Image Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Arena Card 1 */}
            <div className="group relative bg-card-dark rounded-xl border border-white/10 overflow-hidden hover:border-primary transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6z1omYTK_6jxx1jOq2YExyOQhG5UxMfFPpljfjFocbuKsBDofLr3AqqNje9ofCIR4TJCme_DkkmR39kZGfLrtT6cTumfFpoj41GUg0iGnaLB7xEQHEoUkTBN1fpBgp89LJRctQhbqA4OvtCVSGifVGo03EZziORak1169iKvNMcNFuspXEg5zYOVuY9MSYv4pcnfvf8yHFg9H0ouBR5AiFk1x26O4y3G5ayBp9M2IVw1X-nDy_IjEXJmQaaF4sfoozy5AoeFNLUfp"
                  alt="Cyberpunk city morning commute neon lights"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-primary/40 rounded">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Entry: S$10</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">The Commuter Arena</h3>
                    <p className="text-primary text-sm font-bold">8,000 Steps Daily</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gray-400">
                    <p className="text-[10px] uppercase font-bold tracking-widest">Live Pot Size</p>
                    <p className="text-3xl font-black text-white tracking-tighter italic">S$450.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-alert-red">48H Remaining</p>
                  </div>
                </div>
                <button
                  onClick={() => handleJoin(10)}
                  className="w-full py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg group-hover:shadow-[0_0_20px_rgba(6,249,107,0.4)] transition-all"
                >
                  Join the Hunt
                </button>
              </div>
            </div>

            {/* Arena Card 2 */}
            <div className="group relative bg-card-dark rounded-xl border border-white/10 overflow-hidden hover:border-primary transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5j6WfWrq6cv0fGx40zXht6LgVqaQlOSdtBAbuvg6tR5iakGz1qoBgTRsBXzw4MdXA7ICWZz3e7cPuG3ygl9n-IKHk7vR5f8vdLItGnJEMeX9a_wOiGFzKYRkQklplil4z2UpfvDbbNkSqe2xJe_QqPLM_IiLo3d4CjostyY_AqgANK8RRhWNZzHGmqnZaaOnQfjH7rPmP7DHZXob0Xy_QY_pxj40yXo-r_An-P5qySHJUlZ8zBBDvXH0Yj-uQlg5yMzm2htNYF9KU"
                  alt="Aggressive fitness training neon gym vibes"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-primary/40 rounded">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Entry: S$25</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">Weekend Warrior</h3>
                    <p className="text-primary text-sm font-bold">15,000 Steps Daily</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gray-400">
                    <p className="text-[10px] uppercase font-bold tracking-widest">Live Pot Size</p>
                    <p className="text-3xl font-black text-white tracking-tighter italic">S$1,200.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-alert-red">Starts in 6H</p>
                  </div>
                </div>
                <button
                  onClick={() => handleJoin(25)}
                  className="w-full py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-lg group-hover:shadow-[0_0_20px_rgba(6,249,107,0.4)] transition-all"
                >
                  Join the Hunt
                </button>
              </div>
            </div>

            {/* Arena Card 3 */}
            <div className="group relative bg-card-dark rounded-xl border-2 border-primary/20 overflow-hidden hover:border-primary transition-all duration-300 shadow-[0_0_40px_rgba(6,249,107,0.1)]">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMFk6kSm5HEKVqBzMsqtnikJI3ZCZxJiVbiwXY995mduRN8bzMEcHa8DSt8eVbl5t6kIKbnygkAj_QTUGjSyAwHb8NtOmE9Tg017gq0q9C4Q9vzmmQ7LVQvmn4uSDeymoF2Q4VjF_12ny3Oqkw_huq2Fg7IYojD9zSrVYTOozM_lylTJUNSB6Sjvwnu_K20v3thoOUrI08Tc9o13P5cOmYLEMYrpXj7tF_F7AIm-utJW64-ilzY4NlC8VC7_xpck-WGUpf9pTtxqeS"
                  alt="Dark futuristic skyline predator hunt vibe"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded">
                  <span className="text-[10px] font-bold text-black uppercase tracking-widest">Entry: S$100</span>
                </div>
                <div className="absolute top-4 right-4 bg-alert-red px-2 py-1 rounded animate-pulse">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">High Risk</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">The Apex Predator</h3>
                    <p className="text-primary text-sm font-bold">25,000 Steps Daily</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gray-400">
                    <p className="text-[10px] uppercase font-bold tracking-widest">Live Pot Size</p>
                    <p className="text-3xl font-black text-primary tracking-tighter italic">S$4,000.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-alert-red italic font-black">Limited Spots</p>
                  </div>
                </div>
                <button
                  onClick={() => handleJoin(100)}
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-lg hover:bg-primary transition-all"
                >
                  Join the Hunt
                </button>
              </div>
            </div>
          </div>
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
