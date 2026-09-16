"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Truck, Leaf, RotateCcw, Award, Star, CheckCircle2 } from "lucide-react";
import HeroProductIllustration from "./HeroProductIllustration";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { addToCart, setQuickViewProduct } = useCart();
  const heroProduct = PRODUCTS[0]; // Wild Nettle & Rosehip Face Elixir

  return (
    <section className="relative bg-cream pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-sand-border">
      {/* Subtle organic background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-br from-sand-light/60 via-sand/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Micro Tagline */}
            <div className="inline-flex items-center gap-2 bg-sand px-3.5 py-1.5 rounded-full border border-sand-border text-xs font-semibold text-olive tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-clay animate-ping" />
              <span>Small-Batch Botanical Studio • Jaipur, Rajasthan</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
              Nurtured by Nature, <br />
              <span className="text-clay italic font-normal">Sculpted with Intent.</span>
            </h1>

            {/* Subhead Copy */}
            <p className="text-lg text-ink-light max-w-2xl font-normal leading-relaxed">
              D2C plant-based skincare and earth-crafted home goods. Formulated in micro-batches with wild-harvested Himalayan nettle, organic cold-pressed rosehip, and native minerals.
            </p>

            {/* Trust Highlights Pills */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-ink-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-olive" />
                <span>100% Wild Botanicals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-olive" />
                <span>Zero Synthetic Fragrance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-olive" />
                <span>Cruelty-Free & Vegan</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#bestsellers"
                className="bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold px-8 py-4 rounded-xl shadow-clay transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base group"
              >
                <span>Shop Bestsellers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setQuickViewProduct(heroProduct)}
                className="bg-sand hover:bg-sand-dark text-ink font-outfit font-medium px-6 py-4 rounded-xl border border-sand-border transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                <span>Quick View Hero Elixir</span>
              </button>
            </div>

            {/* Hero Product Spotlight Box (Quick Add Card) */}
            <div className="pt-4">
              <div className="bg-sand/70 rounded-2xl p-4 border border-sand-border flex items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center text-olive font-bold font-outfit text-sm">
                    #88
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-ink">4.9</span>
                      <span className="text-ink-muted">(142 verified reviews)</span>
                    </div>
                    <p className="text-sm font-bold text-ink font-outfit">
                      {heroProduct.name}
                    </p>
                    <p className="text-xs text-ink-muted">
                      ₹{heroProduct.price}{" "}
                      <span className="line-through text-ink-muted/60">
                        ₹{heroProduct.originalPrice}
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(heroProduct)}
                  className="bg-olive hover:bg-olive-dark text-cream text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrated Hero Product Showcase */}
          <div className="lg:col-span-5 relative">
            <HeroProductIllustration />
          </div>

        </div>
      </div>

      {/* 4-Point Trust Strip */}
      <div className="mt-16 border-t border-sand-border bg-sand/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            
            {/* Point 1 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/60 border border-sand-border/60">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-olive" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-ink">Free Express Shipping</h4>
                <p className="text-xs text-ink-muted">On all orders over ₹1,499 across India</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/60 border border-sand-border/60">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-olive" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-ink">Wild-Harvested Botanicals</h4>
                <p className="text-xs text-ink-muted">100% plant-based, no mineral oils</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/60 border border-sand-border/60">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6 text-olive" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-ink">30-Day Mindful Guarantee</h4>
                <p className="text-xs text-ink-muted">Hassle-free replacement or refund</p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-cream/60 border border-sand-border/60">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-olive" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-ink">Small-Batch Certified</h4>
                <p className="text-xs text-ink-muted">Freshly prepared in Jaipur lab</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
