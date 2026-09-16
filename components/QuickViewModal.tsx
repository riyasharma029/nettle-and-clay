"use client";

import React, { useState } from "react";
import { X, Star, ShoppingBag, Leaf, ShieldCheck, Check, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductCardIllustration from "./ProductCardIllustration";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"ingredients" | "usage" | "batch">("ingredients");

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-cream rounded-3xl border border-sand-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-30 p-2 bg-sand/80 hover:bg-sand text-ink rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Illustration & Highlights */}
        <div className="md:w-1/2 bg-sand/50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-sand-border">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-olive uppercase tracking-wider bg-cream px-3 py-1 rounded-full border border-sand-border mb-4">
              <Sparkles className="w-3.5 h-3.5 text-clay" />
              <span>{quickViewProduct.category} • {quickViewProduct.size}</span>
            </div>
            <ProductCardIllustration product={quickViewProduct} />
          </div>

          <div className="mt-6 bg-cream/80 p-4 rounded-2xl border border-sand-border space-y-2 text-xs">
            <div className="font-bold text-ink font-outfit text-sm">Batch & Botanical Origin</div>
            <p className="text-ink-muted leading-relaxed">{quickViewProduct.batchInfo}</p>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            {/* Rating & Title */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="font-bold text-ink text-sm">{quickViewProduct.rating}</span>
              </div>
              <span className="text-xs text-ink-muted">({quickViewProduct.reviewsCount} verified reviews)</span>
            </div>

            <h2 className="font-outfit text-2xl font-extrabold text-ink">
              {quickViewProduct.name}
            </h2>
            <p className="text-xs font-semibold text-olive mt-0.5">
              {quickViewProduct.subtitle}
            </p>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-outfit text-2xl font-extrabold text-ink">
                ₹{quickViewProduct.price.toLocaleString("en-IN")}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-ink-muted line-through">
                  ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="text-xs text-olive font-semibold ml-2">Tax included</span>
            </div>

            {/* Short Description */}
            <p className="mt-4 text-xs sm:text-sm text-ink-light leading-relaxed">
              {quickViewProduct.fullDescription}
            </p>

            {/* Content Tabs (Server-rendered HTML DOM guarantees full content availability) */}
            <div className="mt-6">
              <div className="flex border-b border-sand-border gap-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === "ingredients"
                      ? "border-olive text-olive"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  Full Ingredients
                </button>
                <button
                  onClick={() => setActiveTab("usage")}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === "usage"
                      ? "border-olive text-olive"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  How to Use
                </button>
                <button
                  onClick={() => setActiveTab("batch")}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === "batch"
                      ? "border-olive text-olive"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  Benefits
                </button>
              </div>

              {/* Tab 1: Ingredients */}
              <div className={`mt-3 ${activeTab === "ingredients" ? "block" : "hidden"}`}>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="bg-sand/60 text-ink text-[11px] px-2.5 py-1 rounded-md border border-sand-border"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tab 2: Usage */}
              <div className={`mt-3 ${activeTab === "usage" ? "block" : "hidden"}`}>
                <p className="text-xs text-ink-light leading-relaxed">
                  {quickViewProduct.howToUse}
                </p>
              </div>

              {/* Tab 3: Benefits */}
              <div className={`mt-3 ${activeTab === "batch" ? "block" : "hidden"}`}>
                <ul className="space-y-1.5 text-xs text-ink-light">
                  {quickViewProduct.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="pt-4 border-t border-sand-border space-y-4">
            <div className="flex items-center gap-4">
              {/* Quantity selector */}
              <div className="flex items-center bg-sand border border-sand-border rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-ink hover:text-olive font-bold text-sm"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-bold text-ink min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-ink hover:text-olive font-bold text-sm"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold py-3 px-6 rounded-xl shadow-clay transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity} to Cart • ₹{(quickViewProduct.price * quantity).toLocaleString("en-IN")}</span>
              </button>
            </div>

            <div className="flex items-center justify-around text-[11px] text-ink-muted pt-2 border-t border-sand-border/60">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-olive" /> 100% Pure Formula
              </span>
              <span className="flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-olive" /> Hand-harvested Botanicals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
