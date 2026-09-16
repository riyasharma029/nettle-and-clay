"use client";

import React from "react";
import { Star, Eye, ShoppingBag, Leaf } from "lucide-react";
import { Product } from "@/data/products";
import ProductCardIllustration from "./ProductCardIllustration";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <div className="group relative bg-sand/40 hover:bg-sand/70 rounded-2xl border border-sand-border transition-all duration-300 hover:shadow-soft flex flex-col justify-between overflow-hidden">
      {/* Top Badge Overlay */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-olive text-cream text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.badge}
          </span>
        </div>
      )}

      {/* Quick View Floating Button on Hover */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => setQuickViewProduct(product)}
          className="p-2 bg-cream/90 hover:bg-cream text-ink rounded-full shadow-md backdrop-blur-md transition-transform hover:scale-105"
          title="Quick View Details"
          aria-label={`Quick View ${product.name}`}
        >
          <Eye className="w-4 h-4 text-olive" />
        </button>
      </div>

      {/* Illustrated Product Panel */}
      <ProductCardIllustration product={product} />

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Category */}
          <div className="flex items-center justify-between text-xs text-ink-muted mb-1.5">
            <span className="font-medium uppercase tracking-wider text-[10px] text-olive font-outfit">
              {product.category} • {product.size}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-bold text-ink">{product.rating}</span>
              <span className="text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title & Subtitle */}
          <h3 className="font-outfit font-bold text-lg text-ink group-hover:text-clay transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-ink-muted line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Hero Ingredient Pill */}
          <div className="mt-3 inline-flex items-center gap-1.5 bg-cream px-2.5 py-1 rounded-md border border-sand-border text-[11px] text-ink-light">
            <Leaf className="w-3 h-3 text-olive shrink-0" />
            <span className="truncate">{product.heroIngredient}</span>
          </div>
        </div>

        {/* Pricing & Cart Action */}
        <div className="pt-3 border-t border-sand-border/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-outfit font-extrabold text-lg text-ink">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-ink-muted line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-olive font-semibold">Taxes included</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-clay hover:bg-clay-dark text-cream text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 flex items-center gap-1.5 group-hover:shadow-clay"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
