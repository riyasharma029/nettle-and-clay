# Nettle & Clay — Botanical D2C Storefront

**Nettle & Clay** is a high-conversion D2C storefront portfolio project built by **Siyara Innovations** (Jaipur, Rajasthan, India). It represents **Project #4 of 7** in a series of live, production-grade proof-of-capability demo sites.

---

## 🌿 Brand Identity & Design Tokens

- **Cream (`#FAF6EE`)**: Earthy background canvas
- **Ink (`#2B2620`)**: Deep tactile typography
- **Olive (`#4B5D3A`)**: Navigation, badges & botanical highlights
- **Clay (`#D9714E`)**: Primary CTA buttons & high-contrast highlights
- **Sand (`#EDE3D0`)**: Card backgrounds & panel borders
- **Typography**: `Outfit` (Headings) + `Inter` (Body & UI)

---

## ✨ Features & E-Commerce UX Patterns

1. **Product-Led Hero**: Vector-illustrated hero panel highlighting Micro-Batch #88 (*Wild Nettle & Rosehip Face Elixir*) with a 4-point trust strip.
2. **Bestsellers Product Grid**: Category-filtered catalog (`Skincare`, `Body & Bath`, `Home & Candles`, `Gift Sets`). All primary content is server-rendered for complete SEO indexability.
3. **Quick View PDP Modal**: Modal details panel featuring full botanical ingredient breakdowns, batch origin metadata, and usage instructions.
4. **Slide-Over Cart Drawer**: Live free-shipping progress calculator (threshold ₹1,499), quantity modifiers, promo code support (`BOTANICAL10`), and tax/shipping breakdown.
5. **Test-Mode Checkout Flow**: 2-step checkout simulation with shipping details form, delivery method selector, and simulated UPI/Card/COD payment with order ID generation (`NC-2026-XXXX`).
6. **Wild Sourcing Story**: Brand narrative section detailing wild harvesting practices in Himachal Pradesh and Amber Valley.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Fonts**: Next.js Google Fonts (`Outfit` & `Inter`)
- **State Management**: React Context (`CartContext.tsx`) with `localStorage` persistence

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/siyara-innovations/nettle-and-clay.git
cd nettle-and-clay
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📐 Quality & SEO Compliance

- **Semantic HTML5**: Full heading hierarchy (`h1` -> `h6`), accessible ARIA attributes.
- **Server-Rendered Primary Content**: All product catalog items and tabs exist in the server-rendered HTML.
- **Comprehensive Metadata**: Complete Open Graph, Twitter Cards, and `metadataBase` configuration in `app/layout.tsx`.

---

## 💼 Built by Siyara Innovations

Crafted with intent by **Siyara Innovations**, Jaipur, India. Dedicated to engineering high-conversion web applications, custom D2C storefronts, and modern digital products.
