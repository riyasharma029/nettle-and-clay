"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Mail, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer" className="bg-ink text-cream-soft pt-16 pb-12 border-t border-ink-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Studio Banner */}
        <div className="bg-ink-light/30 rounded-3xl p-8 mb-16 border border-ink-light/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-clay uppercase tracking-widest">
              <Leaf className="w-3.5 h-3.5" />
              <span>Join The Harvest Club</span>
            </div>
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-cream">
              Receive Micro-Batch Release Alerts & 10% Off
            </h3>
            <p className="text-xs text-cream-soft/70 max-w-md">
              We release only 250 bottles per batch. Subscribers get priority access 24 hours before public drop.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-olive/40 border border-olive text-cream px-6 py-3.5 rounded-xl text-xs font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-olive-soft" />
              <span>Welcome to the Harvest Club! Use code BOTANICAL10 at checkout.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-ink/80 border border-ink-light/50 rounded-xl px-4 py-3 text-xs text-cream placeholder-cream-soft/40 focus:outline-none focus:border-clay flex-1 lg:w-72"
              />
              <button
                type="submit"
                className="bg-clay hover:bg-clay-dark text-cream font-outfit text-xs font-semibold px-6 py-3 rounded-xl transition-colors shrink-0 flex items-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* 4 Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ink-light/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-olive flex items-center justify-center text-cream">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-outfit text-2xl font-bold text-cream tracking-tight">
                Nettle <span className="text-clay font-normal">&</span> Clay
              </span>
            </Link>
            <p className="text-xs text-cream-soft/70 leading-relaxed max-w-sm">
              Small-batch, plant-based skincare and earth-crafted home goods. Wild-harvested botanicals bottled with intent in Jaipur, Rajasthan.
            </p>
            <div className="text-[11px] text-cream-soft/50 space-y-1">
              <p>Studio: 14 Botanical Lane, C-Scheme, Jaipur 302001</p>
              <p>Lab Contact: hello@nettleandclay.in • +91 141 2980123</p>
            </div>
          </div>

          {/* Column 1: Store */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-cream uppercase tracking-wider">
              Storefront
            </h4>
            <ul className="space-y-2 text-xs text-cream-soft/70">
              <li>
                <Link href="#bestsellers" className="hover:text-clay transition-colors">
                  Shop All Bestsellers
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-clay transition-colors">
                  Face Oils & Elixirs
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-clay transition-colors">
                  Terracotta Clay Masks
                </Link>
              </li>
              <li>
                <Link href="#body-home" className="hover:text-clay transition-colors">
                  Hand-Poured Soy Candles
                </Link>
              </li>
              <li>
                <Link href="#bestsellers" className="hover:text-clay transition-colors">
                  Curated Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Ethos */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-cream uppercase tracking-wider">
              Botanical Ethos
            </h4>
            <ul className="space-y-2 text-xs text-cream-soft/70">
              <li>
                <Link href="#sourcing" className="hover:text-clay transition-colors">
                  Wild Harvesting Story
                </Link>
              </li>
              <li>
                <Link href="#sourcing" className="hover:text-clay transition-colors">
                  Farmer Cooperatives
                </Link>
              </li>
              <li>
                <Link href="#sourcing" className="hover:text-clay transition-colors">
                  Solar Copper Distillation
                </Link>
              </li>
              <li>
                <Link href="#sourcing" className="hover:text-clay transition-colors">
                  Plastic Neutral Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio Demo Info */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-clay uppercase tracking-wider">
              Agency Portfolio
            </h4>
            <div className="bg-ink-light/20 p-3.5 rounded-xl border border-ink-light/30 text-[11px] text-cream-soft/80 space-y-2">
              <p className="font-semibold text-cream">Project #4 of 7 Portfolio Demos</p>
              <p>Designed & Engineered by:</p>
              <strong className="block text-cream font-outfit text-xs">
                Siyara Innovations
              </strong>
              <p className="text-[10px] text-cream-soft/60">Jaipur, Rajasthan, India</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-soft/50">
          <p>© {new Date().getFullYear()} Nettle & Clay Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>100% Wild Botanicals</span>
            <span>•</span>
            <span>Cruelty-Free Certified</span>
            <span>•</span>
            <span>Designed in Jaipur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
