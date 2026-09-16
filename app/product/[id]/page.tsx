import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCardIllustration from "@/components/ProductCardIllustration";
import ProductCard from "@/components/ProductCard";
import ProductDetailActions from "@/components/ProductDetailActions";
import { Star, ShieldCheck, Leaf, ArrowLeft, Check, Sparkles, Truck } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Nettle & Clay",
    };
  }

  return {
    title: `${product.name} | Nettle & Clay Botanical Studio`,
    description: product.fullDescription,
    openGraph: {
      title: `${product.name} | Nettle & Clay`,
      description: product.shortDescription,
      url: `https://nettle-and-clay.vercel.app/product/${product.id}`,
      siteName: "Nettle & Clay",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Nettle & Clay`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  // Schema.org JSON-LD Structured Data for Product SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription,
    brand: {
      "@type": "Brand",
      name: "Nettle & Clay",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Siyara Innovations",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      {/* Inject JSON-LD for Search Engine Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NavBar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
          <Link href="/" className="hover:text-olive flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Storefront
          </Link>
          <span>/</span>
          <Link href="/#bestsellers" className="hover:text-olive">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-bold text-ink truncate">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Product Artwork Showcase */}
          <div className="lg:col-span-6 bg-sand/50 rounded-3xl p-8 border border-sand-border shadow-soft flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 bg-cream px-3.5 py-1.5 rounded-full border border-sand-border text-xs font-bold text-olive uppercase tracking-wider mb-6 self-start">
              <Sparkles className="w-3.5 h-3.5 text-clay" />
              <span>{product.category} • {product.size}</span>
            </div>

            <ProductCardIllustration product={product} />

            <div className="mt-8 bg-cream/90 p-4 rounded-2xl border border-sand-border text-xs space-y-2">
              <span className="font-bold text-ink font-outfit block">Micro-Batch Provenance</span>
              <p className="text-ink-muted leading-relaxed">{product.batchInfo}</p>
            </div>
          </div>

          {/* Right: Product Specifications & Add to Cart */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Badge & Rating */}
              <div className="flex items-center gap-3 mb-2">
                {product.badge && (
                  <span className="bg-olive text-cream text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="font-bold text-ink text-sm">{product.rating}</span>
                  <span className="text-ink-muted">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-olive mt-1">{product.subtitle}</p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-outfit text-3xl font-extrabold text-ink">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-ink-muted line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-olive font-semibold bg-olive/10 px-2.5 py-1 rounded-md">
                  Taxes Included
                </span>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-ink-light leading-relaxed border-t border-b border-sand-border py-4">
              {product.fullDescription}
            </p>

            {/* Key Benefits */}
            <div className="space-y-2">
              <h3 className="font-outfit font-bold text-sm text-ink uppercase tracking-wider">
                Key Botanical Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-light">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-sand/40 p-2 rounded-lg border border-sand-border">
                    <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="space-y-2 pt-2">
              <h3 className="font-outfit font-bold text-sm text-ink uppercase tracking-wider">
                Full Ingredients List
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing, idx) => (
                  <span key={idx} className="bg-sand text-ink text-xs px-3 py-1 rounded-lg border border-sand-border">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Add to Cart & Quantity Component */}
            <div className="pt-4 border-t border-sand-border">
              <ProductDetailActions product={product} />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 text-xs text-ink-muted pt-4 border-t border-sand-border">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-olive shrink-0" />
                <span>Free Express Shipping over ₹1,499</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-olive shrink-0" />
                <span>30-Day Mindful Replacement</span>
              </div>
            </div>
          </div>

        </div>

        {/* Related Botanical Products Grid */}
        <section className="pt-12 border-t border-sand-border">
          <h2 className="font-outfit text-2xl font-bold text-ink mb-8">
            Complements Your Botanical Routine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
