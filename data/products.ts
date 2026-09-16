export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "Skincare" | "Body & Bath" | "Home & Candles" | "Gift Sets";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  size: string;
  ingredients: string[];
  heroIngredient: string;
  howToUse: string;
  batchInfo: string;
  benefits: string[];
  visualTheme: {
    gradient: string;
    accentColor: string;
    bottleColor: string;
    labelColor: string;
    capColor: string;
    leafAccent: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "nettle-rosehip-elixir",
    name: "Wild Nettle & Rosehip Face Elixir",
    subtitle: "Nutrient-Dense Botanical Night Treatment",
    category: "Skincare",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    shortDescription:
      "A concentrated botanical oil powered by cold-pressed Himalayan wild nettle and cold-pressed Chilean rosehip seed.",
    fullDescription:
      "Formulated for overnight skin restoration, this golden nectar combines hand-harvested wild sting nettle leaves infused in cold-pressed organic jojoba with antioxidant-packed wild rosehip seed oil. Rich in vitamins A, C, and fatty acids 3, 6, and 9 to revive dull skin and reinforce the skin moisture barrier.",
    size: "30 ml / 1.0 fl. oz.",
    ingredients: [
      "Simmondsia Chinensis (Jojoba) Seed Oil*",
      "Rosa Canina (Wild Rosehip) Fruit Oil*",
      "Urtica Dioica (Wild Stinging Nettle) Extract*",
      "Hippophae Rhamnoides (Sea Buckthorn) Pulp Oil",
      "Tocopherol (Non-GMO Vitamin E)",
      "Boswellia Carterii (Frankincense) Oil*",
      "Lavandula Angustifolia (Lavender) Flower Oil*",
    ],
    heroIngredient: "Wild Himalayan Stinging Nettle & Organic Sea Buckthorn",
    howToUse:
      "Warm 3-4 drops between clean palms and gently press onto freshly cleansed face, neck, and décolletage every evening.",
    batchInfo: "Batch #NC-2026-088 | Hand-bottled in Jaipur in 250-bottle micro-batches.",
    benefits: [
      "Calms redness & balances natural oil production",
      "Deeply restores moisture barrier overnight",
      "Fights free-radical environmental stress",
      "100% wild-crafted botanical cold infusion",
    ],
    visualTheme: {
      gradient: "from-[#4B5D3A]/20 via-[#FAF6EE] to-[#EDE3D0]",
      accentColor: "#4B5D3A",
      bottleColor: "#2B2620",
      labelColor: "#FAF6EE",
      capColor: "#D9714E",
      leafAccent: "#4B5D3A",
    },
  },
  {
    id: "clay-charcoal-purifying-mask",
    name: "Terracotta Clay & Activated Charcoal Mask",
    subtitle: "Pore-Cleansing Mineral Treatment",
    category: "Skincare",
    price: 1450,
    rating: 4.8,
    reviewsCount: 98,
    badge: "New Harvest",
    shortDescription:
      "Sun-dried Pink Kaolin clay combined with bamboo charcoal and calendula flower petals.",
    fullDescription:
      "Harvested from natural mineral deposits in Rajasthan, our terracotta clay mask draws out deep impurities while preserving vital surface hydration. Infused with soothing calendula blossoms and powdered neem leaf to refine texture and clarify complexion without drying.",
    size: "100 g / 3.5 oz.",
    ingredients: [
      "Kaolin (Pink Clay)",
      "Bentonite (Terracotta Mineral Clay)",
      "Activated Bamboo Charcoal Powder",
      "Calendula Officinalis (Calendula) Flower Powder*",
      "Azadirachta Indica (Neem) Leaf Powder*",
      "Santalum Album (Sandalwood) Powder",
    ],
    heroIngredient: "Rajasthan Pink Kaolin & Bamboo Charcoal",
    howToUse:
      "Mix 1 tablespoon with equal parts water or herbal hydrosol. Apply an even layer for 10 minutes until tacky, then rinse with lukewarm water.",
    batchInfo: "Batch #NC-2026-092 | Solar-dried and stone-milled.",
    benefits: [
      "Draws out stubborn pore congestion",
      "Gently polishes without stripping natural oils",
      "Soothes sensitive or reactive skin",
      "Zero synthetic fillers or fragrance",
    ],
    visualTheme: {
      gradient: "from-[#D9714E]/20 via-[#FAF6EE] to-[#EDE3D0]",
      accentColor: "#D9714E",
      bottleColor: "#D9714E",
      labelColor: "#FAF6EE",
      capColor: "#2B2620",
      leafAccent: "#D9714E",
    },
  },
  {
    id: "vetiver-cedar-hydrosol",
    name: "Wild Vetiver & Cedarwood Hydrosol Mist",
    subtitle: "Balancing & Refreshing Botanical Tonic",
    category: "Skincare",
    price: 1100,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 86,
    badge: "Bestseller",
    shortDescription:
      "Steam-distilled Khus (Vetiver) root hydrosol with Himalayan Cedarwood water.",
    fullDescription:
      "Copper-distilled using traditional hydro-distillation methods in Kannauj, this cooling cellular water drenches skin in grounding moisture. Vetiver root balances pH levels while cedarwood tightens pores and calms post-sun heat.",
    size: "120 ml / 4.0 fl. oz.",
    ingredients: [
      "Chrysopogon Zizanioides (Wild Vetiver/Khus) Root Water*",
      "Cedrus Deodara (Himalayan Cedarwood) Distillate*",
      "Lactobacillus Ferment (Natural Botanical Preservative)",
    ],
    heroIngredient: "Copper-Distilled Khus Vetiver Root",
    howToUse:
      "Mist generously over face after cleansing, or throughout the day whenever skin needs instant grounding hydrator boost.",
    batchInfo: "Batch #NC-2026-074 | Copper still distilled in traditional cauldrons.",
    benefits: [
      "Restores optimal skin surface pH",
      "Provides instant cooling relief from heat",
      "Preps skin for deeper oil absorption",
      "100% pure single-distillation hydrosol",
    ],
    visualTheme: {
      gradient: "from-[#61774C]/20 via-[#FAF6EE] to-[#EDE3D0]",
      accentColor: "#61774C",
      bottleColor: "#4B5D3A",
      labelColor: "#FAF6EE",
      capColor: "#EDE3D0",
      leafAccent: "#61774C",
    },
  },
  {
    id: "patchouli-amber-botanical-candle",
    name: "Smoked Patchouli & Amber Soy Candle",
    subtitle: "Artisan Hand-Poured Botanical Wax Candle",
    category: "Home & Candles",
    price: 1650,
    rating: 5.0,
    reviewsCount: 64,
    badge: "Award Winner",
    shortDescription:
      "Hand-poured coconut-soy wax candle infused with pure essential oils in a ceramic vessel.",
    fullDescription:
      "Cast in a reusable matte terracotta ceramic tumbler crafted by local artisans in Amber, Jaipur. Scented exclusively with pure essential oils of dark patchouli, amber resin, sweet clove bud, and smoked cedar.",
    size: "240 g / 8.5 oz | 55 Hr Burn Time",
    ingredients: [
      "100% Natural Coconut-Soy Wax",
      "Pogostemon Cablin (Dark Patchouli) Oil",
      "Pinus Succinifera (Amber Resin) Extract",
      "Syzygium Aromaticum (Clove Bud) Oil",
      "Unbleached Cotton Wick",
    ],
    heroIngredient: "Pure Earth Patchouli & Natural Coconut-Soy Wax",
    howToUse:
      "Trim wick to 1/4 inch before each lighting. Burn for at least 2 hours on first burn to allow full wax pool creation.",
    batchInfo: "Batch #NC-2026-105 | Terracotta vessel hand-turned in Amber.",
    benefits: [
      "Clean 55-hour soot-free burn",
      "100% synthetic-free essential oil fragrance",
      "Reusable food-safe ceramic vessel",
      "Unbleached eco cotton wick",
    ],
    visualTheme: {
      gradient: "from-[#2B2620]/15 via-[#FAF6EE] to-[#EDE3D0]",
      accentColor: "#2B2620",
      bottleColor: "#D9714E",
      labelColor: "#2B2620",
      capColor: "#2B2620",
      leafAccent: "#D9714E",
    },
  },
  {
    id: "wild-honey-botanical-body-wash",
    name: "Wild Honey & Neem Bark Body Cleanser",
    subtitle: "Sulfate-Free Nurturing Body Wash",
    category: "Body & Bath",
    price: 1250,
    rating: 4.7,
    reviewsCount: 79,
    shortDescription:
      "Nourishing gel-cleanser enriched with raw forest honey, cold-pressed neem, and sweet orange peel.",
    fullDescription:
      "Gently sweeps away surface grime without disrupting the skin's lipid layer. Organic forest honey acts as a natural humectant to lock in moisture, while crushed neem bark and sweet orange oil refresh the senses.",
    size: "250 ml / 8.5 fl. oz.",
    ingredients: [
      "Aqua (Water)",
      "Coco-Glucoside (Plant-Derived Surfactant)",
      "Raw Forest Honey*",
      "Azadirachta Indica (Neem) Bark Extract*",
      "Citrus Aurantium Dulcis (Sweet Orange) Peel Oil*",
      "Glycerin (Vegetable Derived)",
      "Xanthan Gum",
    ],
    heroIngredient: "Raw Forest Honey & Neem Bark",
    howToUse:
      "Lather onto wet skin in the shower using a loofah or bare hands. Enjoy the invigorating citrus-herb aroma and rinse thoroughly.",
    batchInfo: "Batch #NC-2026-061 | Raw honey ethically harvested in Aravali forest.",
    benefits: [
      "Zero SLS, sulfates, or artificial foaming agents",
      "Leaves body supple and deeply hydrated",
      "Calms itchiness and dry winter tightness",
      "Biodegradable earth-conscious formula",
    ],
    visualTheme: {
      gradient: "from-[#E48565]/20 via-[#FAF6EE] to-[#EDE3D0]",
      accentColor: "#E48565",
      bottleColor: "#4B5D3A",
      labelColor: "#FAF6EE",
      capColor: "#D9714E",
      leafAccent: "#E48565",
    },
  },
  {
    id: "grounding-ritual-gift-set",
    name: "The Earth & Botanical Ritual Set",
    subtitle: "Complete Skincare & Home Sanctuary Trio",
    category: "Gift Sets",
    price: 3950,
    originalPrice: 4600,
    rating: 5.0,
    reviewsCount: 45,
    badge: "Limited Edition",
    shortDescription:
      "Includes our Wild Nettle Elixir (30ml), Terracotta Clay Mask (100g), and Smoked Patchouli Candle (240g).",
    fullDescription:
      "Curated for mindful self-care rituals, this flagship set comes packaged in an unbleached handloom cotton gift bag screen-printed with non-toxic soy inks. Contains three of our most celebrated botanical formulations.",
    size: "Set of 3 Full-Sized Products",
    ingredients: [
      "Wild Nettle & Rosehip Face Elixir (30ml)",
      "Terracotta Clay & Activated Charcoal Mask (100g)",
      "Smoked Patchouli & Amber Soy Candle (240g)",
      "Handloom Organic Cotton Canvas Pouch",
    ],
    heroIngredient: "Full Botanical Sanctuary Trio",
    howToUse:
      "Light candle, prepare clay mask ritual, and finish with nourishing night elixir.",
    batchInfo: "Batch #NC-2026-SET04 | Hand-curated box set in limited numbers.",
    benefits: [
      "Saves ₹650 vs buying individual items",
      "Includes handmade Jaipur cotton canvas pouch",
      "Ideal for gifting or starting a complete skincare routine",
      "Sustainable plastic-free gift packaging",
    ],
    visualTheme: {
      gradient: "from-[#4B5D3A]/25 via-[#FAF6EE] to-[#D9714E]/20",
      accentColor: "#4B5D3A",
      bottleColor: "#2B2620",
      labelColor: "#EDE3D0",
      capColor: "#D9714E",
      leafAccent: "#4B5D3A",
    },
  },
];
