"use client";

import React, { useState } from "react";
import { X, CheckCircle, ShieldCheck, CreditCard, QrCode, Truck, ArrowLeft, Lock, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutFlow({ isOpen, onClose }: Props) {
  const { cart, subtotal, freeShippingThreshold, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "cod">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98290 12345",
    address: "Plot 42, Civil Lines, Near Central Park",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302006",
  });

  if (!isOpen) return null;

  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : 99;
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedId = "NC-2026-" + Math.floor(1000 + Math.random() * 9000);
      setOrderId(generatedId);
      setIsProcessing(false);
      setStep("confirmation");
      clearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-cream rounded-3xl border border-sand-border shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="bg-sand/60 px-6 py-4 border-b border-sand-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step !== "confirmation" && (
              <button
                onClick={() => (step === "payment" ? setStep("shipping") : onClose())}
                className="p-1.5 text-ink hover:text-olive rounded-full hover:bg-sand"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h2 className="font-outfit font-extrabold text-xl text-ink">
                {step === "confirmation" ? "Order Confirmed!" : "Checkout • Nettle & Clay"}
              </h2>
              <p className="text-xs text-ink-muted">
                {step === "shipping" && "Step 1 of 2: Shipping Details"}
                {step === "payment" && "Step 2 of 2: Test Payment Method"}
                {step === "confirmation" && "Thank you for supporting micro-batch botanicals"}
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-ink hover:text-olive rounded-full hover:bg-sand">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8">
          
          {/* STEP 1: SHIPPING FORM */}
          {step === "shipping" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-sand/40 border border-sand-border rounded-xl px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-olive"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-sand/40 border border-sand-border rounded-xl px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-olive"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-semibold text-ink">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-sand/40 border border-sand-border rounded-xl px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-olive"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-sand/40 border border-sand-border rounded-xl px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-olive"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full bg-sand/40 border border-sand-border rounded-xl px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-olive"
                  />
                </div>
              </div>

              {/* Delivery Speed Selector */}
              <div className="p-4 bg-sand/40 rounded-2xl border border-sand-border space-y-2">
                <span className="text-xs font-bold text-ink">Selected Delivery Method</span>
                <div className="flex items-center justify-between text-xs text-ink-light pt-1">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-olive" />
                    <span>Express Botanical Delivery (2-3 Days via BlueDart)</span>
                  </div>
                  <span className="font-bold text-olive">
                    {isFreeShipping ? "FREE" : "₹99"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep("payment")}
                className="w-full bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold py-3.5 rounded-xl shadow-clay transition-colors text-sm"
              >
                Continue to Payment • ₹{grandTotal.toLocaleString("en-IN")}
              </button>
            </div>
          )}

          {/* STEP 2: PAYMENT METHOD */}
          {step === "payment" && (
            <div className="space-y-6">
              <div className="bg-sand/30 p-4 rounded-2xl border border-sand-border text-xs flex justify-between items-center">
                <div>
                  <span className="text-ink-muted">Deliver to: </span>
                  <strong className="text-ink">{formData.fullName}</strong> ({formData.city}, {formData.pincode})
                </div>
                <button onClick={() => setStep("shipping")} className="text-olive font-bold hover:underline">
                  Edit
                </button>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Select Payment Option (Test Mode Simulation)
                </label>

                {/* Option 1: UPI */}
                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === "upi"
                      ? "bg-sand border-olive ring-1 ring-olive"
                      : "bg-sand/30 border-sand-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-olive" />
                    <div>
                      <h4 className="font-outfit font-bold text-xs text-ink">UPI / GPay / PhonePe / Paytm</h4>
                      <p className="text-[11px] text-ink-muted">Instant test confirmation</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "upi" ? "border-olive bg-olive" : "border-ink-muted"}`}>
                    {paymentMethod === "upi" && <div className="w-1.5 h-1.5 rounded-full bg-cream" />}
                  </div>
                </div>

                {/* Option 2: Card */}
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === "card"
                      ? "bg-sand border-olive ring-1 ring-olive"
                      : "bg-sand/30 border-sand-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-olive" />
                    <div>
                      <h4 className="font-outfit font-bold text-xs text-ink">Credit / Debit Card</h4>
                      <p className="text-[11px] text-ink-muted">Visa, MasterCard, RuPay</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "card" ? "border-olive bg-olive" : "border-ink-muted"}`}>
                    {paymentMethod === "card" && <div className="w-1.5 h-1.5 rounded-full bg-cream" />}
                  </div>
                </div>

                {/* Option 3: COD */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === "cod"
                      ? "bg-sand border-olive ring-1 ring-olive"
                      : "bg-sand/30 border-sand-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-olive" />
                    <div>
                      <h4 className="font-outfit font-bold text-xs text-ink">Cash on Delivery (COD)</h4>
                      <p className="text-[11px] text-ink-muted">Pay upon arrival at doorstep</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "cod" ? "border-olive bg-olive" : "border-ink-muted"}`}>
                    {paymentMethod === "cod" && <div className="w-1.5 h-1.5 rounded-full bg-cream" />}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCompleteOrder}
                  disabled={isProcessing}
                  className="w-full bg-clay hover:bg-clay-dark text-cream font-outfit font-semibold py-3.5 rounded-xl shadow-clay transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                      Processing Botanical Order...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Pay & Complete Demo Order (₹{grandTotal.toLocaleString("en-IN")})
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ORDER CONFIRMATION */}
          {step === "confirmation" && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-olive/10 text-olive rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-sand px-3 py-1 rounded-full text-xs font-bold text-olive uppercase tracking-wider">
                  Order ID: {orderId}
                </span>
                <h3 className="font-outfit text-3xl font-extrabold text-ink">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
                  Your order has been logged into our Jaipur micro-studio system. A confirmation receipt was dispatched to <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-sand/40 p-4 rounded-2xl border border-sand-border text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between font-bold text-ink">
                  <span>Estimated Dispatch:</span>
                  <span className="text-olive">Within 24 Hours</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Courier Partner:</span>
                  <span>BlueDart Air Express</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Shipping Address:</span>
                  <span>{formData.address}, {formData.city}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="bg-olive hover:bg-olive-dark text-cream font-outfit text-xs font-semibold px-8 py-3.5 rounded-xl transition-colors"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
