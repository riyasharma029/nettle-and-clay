"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles, Filter } from "lucide-react";

const CATEGORIES = ["All Formulations", "Skincare", "Body & Bath", "Home & Candles", "Gift Sets"];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Formulations");

  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-olive uppercase tracking-widest bg-sand px-3 py-1 rounded-full border border-sand-border">
              <Sparkles className="w-3.5 h-3.5 text-clay" />
              <span>Small-Batch Catalog</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Bestsellers & Botanical Formulations
            </h2>
            <p className="text-sm sm:text-base text-ink-light max-w-xl">
              Hand-pressed, cold-infused oils, wild-harvested mists, and soy wax candles crafted with wild ingredients from Rajasthan.
            </p>
          </div>

          {/* Category Filter Buttons (Visual Show/Hide to satisfy Server-Rendering requirement) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-olive text-cream border-olive shadow-sm"
                      : "bg-sand/60 text-ink hover:bg-sand border-sand-border"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid (Every product is rendered in DOM for server-rendering compliance) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const matchesCategory =
              selectedCategory === "All Formulations" ||
              product.category === selectedCategory;

            return (
              <div
                key={product.id}
                className={matchesCategory ? "block" : "hidden"}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>

        {/* Trust Note below grid */}
        <div className="mt-12 text-center bg-sand/40 p-6 rounded-2xl border border-sand-border max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-olive" />
            <span>Ethically wild-harvested in Himalayan foothills & Amber valley</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-clay" />
            <span>Freshly bottled in Jaipur micro-studio</span>
          </div>
        </div>

      </div>
    </section>
  );
}
