"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SourcingStory from "@/components/SourcingStory";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import CheckoutFlow from "@/components/CheckoutFlow";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      {/* Navigation Header */}
      <NavBar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Bestsellers / Product Grid */}
        <ProductGrid />

        {/* Section 6: About / Wild Sourcing Story */}
        <SourcingStory />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Interactive State Modals & Drawers */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      <QuickViewModal />
      <CheckoutFlow isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
}
