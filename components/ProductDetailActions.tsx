"use client";

import React, { useState } from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductDetailActions({ product }: Props) {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {/* Quantity selector */}
        <div className="flex items-center bg-sand border border-sand-border rounded-xl">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-ink hover:text-olive font-bold text-base"
          >
            -
          </button>
          <span className="px-4 py-3 text-sm font-bold text-ink min-w-[2.5rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-ink hover:text-olive font-bold text-base"
          >
            +
          </button>
        </div>

        {/* Add to Cart CTA */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold py-3.5 px-6 rounded-xl shadow-clay transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Add {quantity} to Cart • ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
        </button>
      </div>

      {/* Buy Now Direct Trigger */}
      <button
        onClick={handleBuyNow}
        className="w-full bg-olive hover:bg-olive-dark text-cream font-outfit font-semibold py-3 px-6 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
      >
        <span>Instant Checkout</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
