"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, Sparkles, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function NavBar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full bg-cream/95 backdrop-blur-md border-b border-sand-border transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-olive text-cream-soft text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-clay-light animate-pulse" />
        <span>
          <strong>Micro-Batch #88 Released</strong> — Wild Himalayan Nettle & Cold-Pressed Rosehip | Free Shipping over ₹1,499
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-olive rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center border border-olive/20 group-hover:bg-olive transition-colors duration-300">
                <Leaf className="w-5 h-5 text-olive group-hover:text-cream transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit text-2xl font-bold text-ink tracking-tight group-hover:text-olive transition-colors">
                  Nettle <span className="text-clay font-normal">&</span> Clay
                </span>
                <span className="text-[10px] tracking-widest text-ink-muted uppercase font-semibold -mt-1">
                  Botanical Studio • Jaipur
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink">
            <Link
              href="#bestsellers"
              className="hover:text-olive transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive hover:after:w-full after:transition-all"
            >
              Shop Bestsellers
            </Link>
            <Link
              href="#products"
              className="hover:text-olive transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive hover:after:w-full after:transition-all"
            >
              Skincare & Elixirs
            </Link>
            <Link
              href="#body-home"
              className="hover:text-olive transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive hover:after:w-full after:transition-all"
            >
              Body & Home
            </Link>
            <Link
              href="#sourcing"
              className="hover:text-olive transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive hover:after:w-full after:transition-all"
            >
              Wild Sourcing Story
            </Link>
            <Link
              href="#footer"
              className="hover:text-olive transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive hover:after:w-full after:transition-all"
            >
              Our Jaipur Lab
            </Link>
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-1 bg-sand/80 px-3 py-1.5 rounded-full border border-sand-border">
                  <input
                    type="text"
                    placeholder="Search botanicals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-ink placeholder-ink-muted focus:outline-none w-32 sm:w-44"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-ink-muted hover:text-ink"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-ink hover:text-olive rounded-full hover:bg-sand transition-colors"
                  aria-label="Search site"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-ink hover:text-olive rounded-full hover:bg-sand transition-colors flex items-center justify-center group"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-clay text-cream text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-cream shadow-sm animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sand-border bg-cream px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-ink">
            <Link
              href="#bestsellers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sand/60 hover:text-olive"
            >
              Shop Bestsellers
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sand/60 hover:text-olive"
            >
              Skincare & Elixirs
            </Link>
            <Link
              href="#body-home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sand/60 hover:text-olive"
            >
              Body & Home Goods
            </Link>
            <Link
              href="#sourcing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sand/60 hover:text-olive"
            >
              Our Sourcing Story
            </Link>
          </div>

          <div className="pt-2">
            <div className="bg-sand p-3 rounded-lg flex items-center justify-between text-xs text-ink-light">
              <span>Need consultation on formulas?</span>
              <span className="font-bold text-olive">Chat with Jaipur Lab</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
