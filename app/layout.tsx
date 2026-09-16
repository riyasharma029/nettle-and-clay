import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nettle-and-clay.vercel.app"),
  title: "Nettle & Clay | Botanical Skincare & Earth-Crafted Goods",
  description:
    "Small-batch, plant-based skincare and home goods crafted with wild-harvested botanicals in Rajasthan, India. Sustainable, cruelty-free, and earth-first.",
  keywords: [
    "botanical skincare",
    "plant-based beauty",
    "small batch skincare",
    "organic face oil",
    "sustainable home goods",
    "Jaipur D2C storefront",
    "Siyara Innovations",
  ],
  authors: [{ name: "Siyara Innovations", url: "https://siyarainnovations.com" }],
  openGraph: {
    title: "Nettle & Clay | Botanical Skincare & Earth-Crafted Goods",
    description:
      "Small-batch, plant-based skincare and home goods crafted with wild-harvested botanicals in Rajasthan, India.",
    url: "https://nettle-and-clay.vercel.app",
    siteName: "Nettle & Clay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nettle & Clay Botanical Products Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettle & Clay | Botanical Skincare & Earth-Crafted Goods",
    description:
      "Small-batch, plant-based skincare and home goods crafted with wild-harvested botanicals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased min-h-screen flex flex-col font-inter">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
