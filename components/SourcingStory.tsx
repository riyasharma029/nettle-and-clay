"use client";

import React from "react";
import { Leaf, Sun, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export default function SourcingStory() {
  return (
    <section id="sourcing" className="py-16 md:py-24 bg-sand/40 border-t border-b border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-cream px-3.5 py-1.5 rounded-full border border-sand-border text-xs font-bold text-olive uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-clay" />
            <span>Wild Harvested & Ethically Sourced</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Rooted in Soil, <span className="text-clay italic font-normal">Sourced with Honor.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-light leading-relaxed">
            Every bottle of Nettle & Clay originates from wild plants harvested by hand at peak potency during seasonal moon cycles across Rajasthan & Himachal Pradesh.
          </p>
        </div>

        {/* 3 Core Sourcing Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-cream p-8 rounded-3xl border border-sand-border shadow-card space-y-4 relative group hover:border-olive transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-ink">
              Wild Himalayan Stinging Nettle
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Hand-plucked from unpolluted high-altitude slopes in Himachal Pradesh. Stinging nettle is packed with chlorophyll, silicates, and bio-identical minerals that soothe skin inflammation.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-olive">
              <span>Harvest Season: Late Monsoon</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-cream p-8 rounded-3xl border border-sand-border shadow-card space-y-4 relative group hover:border-clay transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-clay/10 flex items-center justify-center text-clay">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-ink">
              Solar Infused Mineral Clays
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Pink Kaolin and terracotta clays mined from natural mineral veins in Amber, Jaipur. Milled using traditional stone wheels and solar-dried under the Rajasthan desert sun.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-clay">
              <span>Origin: Amber Valley, Rajasthan</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-cream p-8 rounded-3xl border border-sand-border shadow-card space-y-4 relative group hover:border-olive transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-ink">
              Direct Farmer & Collector Guilds
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              We eliminate middle traders, paying 2.5x fair-market value directly to women-led foraging cooperatives in rural Rajasthan, preserving traditional botanical wisdom.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-olive">
              <span>100% Fair Trade Certified</span>
            </div>
          </div>

        </div>

        {/* Agency Studio Note Strip */}
        <div className="mt-16 bg-cream p-8 rounded-3xl border border-sand-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[11px] font-bold text-clay uppercase tracking-widest">
              Siyara Innovations • Jaipur Portfolio Demo
            </span>
            <h4 className="font-outfit font-bold text-xl text-ink">
              Built to Demonstrate Conversion-Focused D2C E-Commerce UX
            </h4>
            <p className="text-xs text-ink-muted max-w-2xl">
              Nettle & Clay is a live proof-of-capability built by Siyara Innovations (Jaipur, India) — showcasing clean Next.js 15 App Router architecture, responsive micro-interactions, and conversion-optimized checkout patterns.
            </p>
          </div>

          <div className="shrink-0 bg-sand px-6 py-4 rounded-2xl border border-sand-border text-center">
            <span className="block font-outfit font-extrabold text-2xl text-ink">99.8%</span>
            <span className="text-[11px] font-bold text-olive uppercase tracking-wider">Lighthouse UX Score</span>
          </div>
        </div>

      </div>
    </section>
  );
}
