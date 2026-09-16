"use client";

import React from "react";
import { Sparkles, ShieldCheck, Heart, Award } from "lucide-react";

export default function HeroProductIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Background Soft Organic Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sand-dark via-sand to-cream-soft rounded-[2.5rem] transform rotate-1 border border-sand-border shadow-soft" />

      {/* Outer Leaf Silhouette Pattern Container */}
      <div className="relative z-10 w-full h-full rounded-[2rem] bg-sand/60 backdrop-blur-sm p-6 flex flex-col items-center justify-between border border-sand-border overflow-hidden">
        {/* Subtle Background Plant Pattern SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none text-olive"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M 50 100 Q 150 20 200 150 T 350 200 Q 250 350 150 250 Z"
            fill="currentColor"
          />
          <path
            d="M 300 50 Q 380 150 280 250 T 100 350 Q 80 180 200 100 Z"
            fill="currentColor"
          />
        </svg>

        {/* Floating Top Badge */}
        <div className="self-start z-20 flex items-center gap-2 bg-cream/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-olive/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-olive animate-ping" />
          <span className="text-[11px] font-bold text-olive uppercase tracking-wider">
            Micro-Batch #88 • 250 Bottles Handled
          </span>
        </div>

        {/* Centerpiece Vector Illustrated Dropper Bottle */}
        <div className="relative z-20 my-auto flex items-center justify-center py-4 w-full">
          {/* Ambient Glow Pill behind bottle */}
          <div className="absolute w-44 h-72 bg-gradient-to-t from-clay/30 via-olive/20 to-transparent rounded-full blur-2xl animate-pulse-slow" />

          {/* SVG Illustrated Apothecary Bottle */}
          <svg
            viewBox="0 0 240 340"
            className="w-56 h-80 drop-shadow-2xl transition-transform hover:scale-105 duration-500 cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Rubber Pipette Bulbtop */}
            <path
              d="M105 15 C105 5, 135 5, 135 15 L135 45 C135 48, 105 48, 105 45 Z"
              fill="#2B2620"
            />
            {/* Pipette Collar Ring (Copper Gold) */}
            <rect x="100" y="45" width="40" height="12" rx="3" fill="#D9714E" />
            <rect x="102" y="57" width="36" height="18" rx="2" fill="#4B5D3A" />

            {/* Glass Bottle Neck */}
            <path d="M106 75 L134 75 L138 95 L102 95 Z" fill="#2B2620" opacity="0.9" />

            {/* Main Apothecary Amber Bottle Body */}
            <path
              d="M70 100 C70 95, 75 95, 80 95 L160 95 C165 95, 170 95, 170 100 L175 285 C175 295, 165 305, 150 305 L90 305 C75 305, 65 295, 65 285 Z"
              fill="url(#amber-glass-gradient)"
              stroke="#2B2620"
              strokeWidth="2.5"
            />

            {/* Inner Golden Nectar Liquid */}
            <path
              d="M72 160 C90 155, 150 165, 168 160 L171 280 C171 290, 162 298, 148 298 L92 298 C78 298, 69 290, 69 280 Z"
              fill="url(#nectar-liquid-gradient)"
              opacity="0.85"
            />

            {/* High-Grade Organic Label (Cream Card Paper) */}
            <rect
              x="80"
              y="125"
              width="80"
              height="145"
              rx="4"
              fill="#FAF6EE"
              stroke="#EDE3D0"
              strokeWidth="1.5"
            />

            {/* Fine Botanical Leaf Line Art on Label */}
            <path
              d="M120 140 C110 150, 110 165, 120 175 C130 165, 130 150, 120 140 Z"
              fill="#4B5D3A"
              opacity="0.9"
            />
            <line x1="120" y1="140" x2="120" y2="182" stroke="#FAF6EE" strokeWidth="1.2" />

            {/* Label Typography Elements */}
            <text
              x="120"
              y="196"
              textAnchor="middle"
              fill="#2B2620"
              fontSize="9"
              fontWeight="800"
              fontFamily="sans-serif"
              letterSpacing="1"
            >
              NETTLE & CLAY
            </text>
            <text
              x="120"
              y="208"
              textAnchor="middle"
              fill="#4B5D3A"
              fontSize="6"
              fontWeight="600"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              WILD HARVEST ELIXIR
            </text>
            <line x1="92" y1="214" x2="148" y2="214" stroke="#D9714E" strokeWidth="1" />
            <text
              x="120"
              y="226"
              textAnchor="middle"
              fill="#766F65"
              fontSize="5.5"
              fontFamily="sans-serif"
            >
              Nettle • Rosehip • Jojoba
            </text>
            <text
              x="120"
              y="236"
              textAnchor="middle"
              fill="#2B2620"
              fontSize="5.5"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              30 ML / 1.0 FL OZ
            </text>
            <text
              x="120"
              y="254"
              textAnchor="middle"
              fill="#4B5D3A"
              fontSize="4.5"
              fontFamily="sans-serif"
            >
              JAIPUR BOTANICAL LAB
            </text>

            {/* Glass Surface Reflection Accent */}
            <path
              d="M75 105 L82 105 L78 285 L73 285 Z"
              fill="#FFFFFF"
              opacity="0.3"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="amber-glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D2E1E" />
                <stop offset="50%" stopColor="#2B2620" />
                <stop offset="100%" stopColor="#1C1814" />
              </linearGradient>
              <linearGradient id="nectar-liquid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E48565" />
                <stop offset="60%" stopColor="#D9714E" />
                <stop offset="100%" stopColor="#4B5D3A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Interactive Product Pill Badges */}
        <div className="relative z-20 w-full flex items-center justify-between gap-2 pt-2 border-t border-sand-border/80">
          <div className="flex items-center gap-1.5 bg-cream/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-ink shadow-sm border border-sand-border">
            <Sparkles className="w-3.5 h-3.5 text-clay" />
            <span>Wild Himalayan Harvest</span>
          </div>

          <div className="flex items-center gap-1.5 bg-cream/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-ink shadow-sm border border-sand-border">
            <ShieldCheck className="w-3.5 h-3.5 text-olive" />
            <span>100% Pure Cold-Pressed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
