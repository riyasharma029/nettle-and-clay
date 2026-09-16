"use client";

import React, { useState } from "react";
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Sparkles, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  onProceedToCheckout: () => void;
}

export default function CartDrawer({ onProceedToCheckout }: Props) {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  if (!isCartOpen) return null;

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping || cart.length === 0 ? 0 : 99;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "BOTANICAL10" || promoCode.trim().toUpperCase() === "SIYARA10") {
      setDiscountPercent(10);
      setPromoMessage("10% Botanical Discount Applied!");
    } else {
      setPromoMessage("Invalid promo code. Try 'BOTANICAL10'");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-ink/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream border-l border-sand-border shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-sand-border bg-sand/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-olive" />
              <h2 className="font-outfit text-xl font-bold text-ink">Your Botanical Cart</h2>
              <span className="text-xs bg-olive text-cream font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((s, item) => s + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-ink hover:text-olive rounded-full hover:bg-sand transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-sand/60 p-4 border-b border-sand-border space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-ink">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-olive" />
                {isFreeShipping ? (
                  <strong className="text-olive">🎉 You unlocked FREE Express Shipping!</strong>
                ) : (
                  <span>
                    Add <strong className="text-clay">₹{amountNeededForFreeShipping.toLocaleString("en-IN")}</strong> more for FREE Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] text-ink-muted">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-sand-dark h-2 rounded-full overflow-hidden">
              <div
                className="bg-olive h-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center text-ink-muted">
                  <ShoppingBag className="w-8 h-8 text-olive/50" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-outfit font-bold text-lg text-ink">Your cart is empty</h3>
                  <p className="text-xs text-ink-muted max-w-xs">
                    Explore our wild-harvested botanical elixirs, clay masks, and soy candles.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-olive hover:bg-olive-dark text-cream font-outfit text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Explore Bestsellers
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-sand/40 p-3.5 rounded-2xl border border-sand-border flex items-center gap-3 justify-between"
                >
                  <div className="w-16 h-16 bg-sand rounded-xl shrink-0 flex items-center justify-center font-outfit font-bold text-xs text-olive border border-sand-border">
                    {product.name.split(" ")[0]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-outfit font-bold text-sm text-ink truncate">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-ink-muted">{product.size}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-cream border border-sand-border rounded-lg text-xs">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-2 py-0.5 text-ink hover:text-olive font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-ink">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-ink hover:text-olive font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-ink-muted hover:text-clay p-1"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-outfit font-bold text-sm text-ink block">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-sand-border bg-sand/30 space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (try BOTANICAL10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-cream border border-sand-border rounded-xl px-3 py-2 text-xs text-ink focus:outline-none focus:border-olive"
                />
                <button
                  type="submit"
                  className="bg-sand hover:bg-sand-dark text-ink font-semibold text-xs px-4 py-2 rounded-xl border border-sand-border transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className={`text-[11px] font-medium ${discountPercent > 0 ? "text-olive" : "text-clay"}`}>
                  {promoMessage}
                </p>
              )}

              {/* Order Summary Calculations */}
              <div className="space-y-1.5 text-xs text-ink-light pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-ink">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-olive">
                    <span>Discount (10%)</span>
                    <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-ink">
                    {shippingFee === 0 ? <span className="text-olive">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between font-outfit text-base font-extrabold text-ink pt-2 border-t border-sand-border">
                  <span>Total Due</span>
                  <span className="text-clay">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onProceedToCheckout();
                }}
                className="w-full bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold py-3.5 px-6 rounded-xl shadow-clay transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-ink-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-olive" />
                <span>Test Mode Payment Gateway • Safe & Instant Demo</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
