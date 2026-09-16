"use client";

import React from "react";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductCardIllustration({ product }: Props) {
  const { visualTheme } = product;

  return (
    <div
      className={`relative w-full h-56 rounded-t-xl bg-gradient-to-b ${visualTheme.gradient} flex items-center justify-center p-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}
    >
      {/* Soft background aura circle */}
      <div
        className="absolute w-32 h-32 rounded-full blur-xl opacity-40"
        style={{ backgroundColor: visualTheme.accentColor }}
      />

      {/* SVG Illustrated Vessel matching product category */}
      {product.category === "Skincare" && (
        <svg viewBox="0 0 160 200" className="w-28 h-40 drop-shadow-md z-10" fill="none">
          {/* Dropper or Spray Cap */}
          <rect x="70" y="15" width="20" height="25" rx="3" fill={visualTheme.capColor} />
          <rect x="65" y="38" width="30" height="8" rx="2" fill="#D9714E" />

          {/* Bottle Body */}
          <path
            d="M45 50 C45 46, 50 46, 55 46 L105 46 C110 46, 115 46, 115 50 L120 170 C120 178, 112 185, 100 185 L60 185 C48 185, 40 178, 40 170 Z"
            fill={visualTheme.bottleColor}
            stroke="#2B2620"
            strokeWidth="1.5"
          />

          {/* Label Card */}
          <rect x="52" y="70" width="56" height="90" rx="3" fill={visualTheme.labelColor} />
          <circle cx="80" cy="95" r="10" fill={visualTheme.accentColor} opacity="0.8" />
          <text x="80" y="118" textAnchor="middle" fill="#2B2620" fontSize="6.5" fontWeight="700">
            NETTLE & CLAY
          </text>
          <text x="80" y="128" textAnchor="middle" fill={visualTheme.accentColor} fontSize="5" fontWeight="600">
            {product.name.split(" ")[0]}
          </text>
          <text x="80" y="145" textAnchor="middle" fill="#766F65" fontSize="4.5">
            {product.size}
          </text>
        </svg>
      )}

      {product.category === "Home & Candles" && (
        <svg viewBox="0 0 160 200" className="w-28 h-40 drop-shadow-md z-10" fill="none">
          {/* Flame Glow */}
          <circle cx="80" cy="30" r="12" fill="#F59E0B" opacity="0.4" className="animate-pulse" />
          <path d="M80 20 C78 28, 73 34, 80 40 C87 34, 82 28, 80 20 Z" fill="#D9714E" />
          
          {/* Ceramic Candle Vessel */}
          <path
            d="M40 45 L120 45 L115 175 C115 182, 105 188, 90 188 L70 188 C55 188, 45 182, 45 175 Z"
            fill={visualTheme.bottleColor}
            stroke="#2B2620"
            strokeWidth="1.5"
          />

          {/* Ceramic Label */}
          <rect x="52" y="75" width="56" height="75" rx="3" fill={visualTheme.labelColor} />
          <text x="80" y="100" textAnchor="middle" fill="#2B2620" fontSize="7" fontWeight="800">
            SOY CANDLE
          </text>
          <line x1="60" y1="108" x2="100" y2="108" stroke={visualTheme.accentColor} strokeWidth="1" />
          <text x="80" y="120" textAnchor="middle" fill="#4B5D3A" fontSize="5 font-bold">
            HAND-POURED
          </text>
        </svg>
      )}

      {product.category === "Body & Bath" && (
        <svg viewBox="0 0 160 200" className="w-28 h-40 drop-shadow-md z-10" fill="none">
          {/* Dispenser Pump Top */}
          <rect x="74" y="10" width="12" height="20" fill="#2B2620" />
          <path d="M70 15 L95 15 L95 20 L70 20 Z" fill="#D9714E" />
          <rect x="62" y="30" width="36" height="12" rx="2" fill="#4B5D3A" />

          {/* Tall Body Bottle */}
          <rect x="42" y="42" width="76" height="135" rx="12" fill={visualTheme.bottleColor} stroke="#2B2620" strokeWidth="1.5" />

          {/* Label */}
          <rect x="50" y="62" width="60" height="95" rx="4" fill={visualTheme.labelColor} />
          <text x="80" y="90" textAnchor="middle" fill="#2B2620" fontSize="6.5" fontWeight="800">
            BOTANICAL
          </text>
          <text x="80" y="100" textAnchor="middle" fill={visualTheme.accentColor} fontSize="5" fontWeight="600">
            BODY WASH
          </text>
          <circle cx="80" cy="115" r="8" fill="#E48565" opacity="0.6" />
        </svg>
      )}

      {product.category === "Gift Sets" && (
        <svg viewBox="0 0 160 200" className="w-32 h-40 drop-shadow-md z-10" fill="none">
          {/* Artisan Gift Box */}
          <rect x="30" y="55" width="100" height="115" rx="6" fill="#EDE3D0" stroke="#4B5D3A" strokeWidth="2" />
          {/* Lid */}
          <rect x="25" y="40" width="110" height="25" rx="4" fill="#4B5D3A" />
          {/* Ribbon */}
          <rect x="74" y="40" width="12" height="130" fill="#D9714E" />
          <circle cx="80" cy="52" r="10" fill="#D9714E" />
          <text x="80" y="110" textAnchor="middle" fill="#2B2620" fontSize="7" fontWeight="800">
            RITUAL SET
          </text>
          <text x="80" y="125" textAnchor="middle" fill="#4B5D3A" fontSize="5">
            3 FULL SIZES
          </text>
        </svg>
      )}
    </div>
  );
}
