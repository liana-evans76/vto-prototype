const PROMPTS = [
  {
    id: "pink-nude",
    text: "Pinky nude lipstick for everyday wear.",
    productIntent: true,
  },
  {
    id: "gloss-mlbb",
    text: "MLBB lip gloss shades for medium skin.",
    productIntent: true,
  },
  {
    id: "foundation-dry",
    text: "Hydrating foundation that looks natural on camera.",
    productIntent: true,
  },
  {
    id: "mascara-sensitive",
    text: "Gentle mascara for sensitive eyes with volume.",
    productIntent: true,
  },
  {
    id: "try-named-lip",
    text: "Try on YSL Rouge Pur Couture 124 Rose Opéra.",
    productIntent: true,
  },
];

/** Entry chips for Skin Diagnosis (New chat). First option launches the skin analysis consent path. */
const SKIN_DIAG_PROMPTS = [
  { id: "analyze-skin", text: "Analyze my skin", skinAnalyzeIntent: true },
  {
    id: "routine-sensitive",
    text: "Gentle routine for sensitive, redness-prone skin.",
    skincareIntent: true,
  },
  {
    id: "hydration",
    text: "Ingredients for dehydrated, breakout-prone skin.",
    skincareIntent: true,
  },
  {
    id: "spf-daily",
    text: "Daily SPF that won't sting near my eyes.",
    skincareIntent: true,
  },
];

const PRODUCT_KEYWORDS =
  /\b(lipstick|lip\s*oil|lip\s*gloss|gloss|foundation|foundations|concealer|mascara|eyeshadow|blush|bronzer|makeup|beauty|shade|nude|mlbb|product|recommend|try\s*on|virtual|skin tint|tinted moisturizer|bb\s*cream|cc\s*cream)\b/i;

/** @typedef {'lips'|'foundation'} ProductCatalogId */

/** Mirror asset for Virtual Try-On buttons (after label text). */
const VTO_MIRROR_SRC = "assets/vto-mirror.png";

/** Icon in the “Makeup Try-On” chat header row (purple mirror treatment). */
const VTO_TRYON_HEADER_ICON_SRC = "assets/makeup-tryon-header-icon.png";
const SKIN_DIAG_HEADER_ICON_SRC = "assets/skin-diag-icon.png";

/**
 * Product rows: `cardImage` points to local assets (placeholder photography for the prototype).
 * Replace with official YSL / Maybelline packshots when you have them.
 */
const PRODUCTS = {
  luxury: [
    {
      brand: "Yves Saint Laurent",
      title: "Loveshine Lip Oil Stick",
      shadeLabel: "203 — Blushed Mallow",
      swatch: "#9f6778",
      swatchBg: "linear-gradient(135deg, #efd8df, #7d5563)",
      cardImage: "assets/ysl-packshot-loveshine-lip-oil.png",
      badgePrimary: "Lip oil",
      badgeSecondary: "",
      tags: [
        { dot: "#9f6778", label: "Cool rose" },
        { dot: "#e96ce8", label: "Sheer" },
        { dot: "#e96ce8", label: "Gloss" },
      ],
      priceWas: "$48",
      priceNow: "$42",
      rating: 4.6,
      ratingCount: "2.4k",
      description:
        "A lip oil fused with caring oils for a dewy shine and a soft wash of color. The balm-like stick glides on smoothly and helps lips feel moisturized with a lightweight, non-sticky finish.",
      ingredients:
        "Diisostearyl Malate, Trimethylolpropane Triisostearate, Polybutene, Bis-Diglyceryl Polyacyladipate-2, Hydrogenated Polyisobutene, VP/Eicosene Copolymer, Synthetic Wax, Ceresin, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Tocopherol, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Rouge Pur Couture",
      shadeLabel: "124 — Rose Opéra",
      swatch: "#e878a8",
      swatchBg: "linear-gradient(135deg, #fde8f2, #d45f8e)",
      cardImage: "assets/ysl-packshot-rouge-pur-couture.png",
      badgePrimary: "Satin",
      badgeSecondary: "Iconic",
      tags: [
        { dot: "#e878a8", label: "Cool pink" },
        { dot: "#e96ce8", label: "Couture case" },
        { dot: "#e96ce8", label: "YSL bullet" },
      ],
      priceWas: "$52",
      priceNow: "$46",
      rating: 4.7,
      ratingCount: "3.1k",
      description:
        "The signature YSL lipstick in a couture gold case with a teardrop bullet. This cool-toned rose pink delivers creamy satin color with a smooth, comfortable feel and a polished finish.",
      ingredients:
        "Pentaerythrityl Tetraisostearate, Hydrogenated Polyisobutene, Bis-Diglyceryl Polyacyladipate-2, Cera Microcristallina, Trimethylsiloxyphenyl Dimethicone, Polyethylene, Diisostearyl Malate, Parfum (Fragrance), Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 15850, CI 77891, CI 77491, CI 45410].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Candy Glaze Lip Gloss Stick",
      shadeLabel: "12 — Flashing Rosé",
      swatch: "#e86a58",
      swatchBg: "linear-gradient(135deg, #fff1eb, #d95945)",
      cardImage: "assets/ysl-packshot-candy-glaze.png",
      badgePrimary: "Gloss stick",
      badgeSecondary: "Shine",
      tags: [
        { dot: "#e86a58", label: "Coral pink" },
        { dot: "#e96ce8", label: "Juicy" },
        { dot: "#e96ce8", label: "Cushion" },
      ],
      priceWas: "$42",
      priceNow: "$38",
      rating: 4.5,
      ratingCount: "1.9k",
      description:
        "A glossy lip stick hybrid with a candy-like shine and a melting texture. Buildable color with a wet-look finish that catches light without feeling tacky.",
      ingredients:
        "Polybutene, Diisostearyl Malate, Hydrogenated Polyisobutene, Ethylhexyl Palmitate, VP/Eicosene Copolymer, Synthetic Wax, Mica, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 45410].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Rouge Volupté Shine",
      shadeLabel: "44 — Nude Lavallière",
      swatch: "#946878",
      swatchBg: "linear-gradient(135deg, #e8d2da, #7d5665)",
      cardImage: "assets/ysl-packshot-rvshine-44.png",
      badgePrimary: "Balm shine",
      badgeSecondary: "Bestseller",
      tags: [
        { dot: "#946878", label: "Mauve nude" },
        { dot: "#e96ce8", label: "Hydrating" },
        { dot: "#e96ce8", label: "SPF" },
      ],
      priceWas: "$46",
      priceNow: "$42",
      rating: 4.8,
      ratingCount: "4.2k",
      description:
        "A lipstick-balm hybrid with luminous shine and a melting feel. Nude Lavallière is a flattering warm nude that pairs easily with soft glam or no-makeup days.",
      ingredients:
        "Octyldodecanol, Polybutene, Pentaerythrityl Tetraisostearate, Diisostearyl Malate, Hydrogenated Polyisobutene, Cera Microcristallina, Ethylhexyl Methoxycinnamate, Tocopheryl Acetate, Parfum (Fragrance), Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491].",
    },
  ],
  budget: [
    {
      brand: "Maybelline",
      title: "Super Stay Vinyl Ink",
      shadeLabel: "40 — Witty",
      swatch: "#b66c78",
      swatchBg: "linear-gradient(135deg, #f4ccd4, #b66c78)",
      cardImage: "assets/mny-vinyl-ink-40-witty.png",
      badgePrimary: "Longwear",
      badgeSecondary: "Vinyl shine",
      tags: [
        { dot: "#c45a6e", label: "Berry rose" },
        { dot: "#e96ce8", label: "16HR" },
        { dot: "#e96ce8", label: "Transfer-resistant" },
      ],
      priceWas: "$14",
      priceNow: "$11",
      rating: 4.3,
      ratingCount: "18k",
      description:
        "A liquid lipcolor with a glossy vinyl finish and serious staying power. Cheeky is a vivid berry-rose that reads bold in one swipe or blotted for a stain.",
      ingredients:
        "Isododecane, Trimethylsiloxysilicate, Dimethicone, Polypropylsilsesquioxane, C30-45 Alkyldimethylsilyl Polypropylsilsesquioxane, Disteardimonium Hectorite, Propylene Carbonate, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491].",
    },
    {
      brand: "Maybelline",
      title: "Super Stay Matte Ink",
      shadeLabel: "Mover",
      swatch: "#b65366",
      swatchBg: "linear-gradient(135deg, #f3bcc6, #b65366)",
      cardImage: "assets/mny-matte-ink-mover.png",
      badgePrimary: "Longwear matte",
      badgeSecondary: "High impact",
      tags: [
        { dot: "#b65366", label: "Rosy berry" },
        { dot: "#e96ce8", label: "16HR" },
        { dot: "#e96ce8", label: "Transfer-resistant" },
      ],
      priceWas: "$11",
      priceNow: "$9",
      rating: 4.4,
      ratingCount: "22k",
      description:
        "A satin lipstick designed to flatter a wide range of undertones. Red For Me is a balanced true red that looks polished for work or dialed up for night.",
      ingredients:
        "Octyldodecanol, Polybutene, Ethylhexyl Palmitate, Pentaerythrityl Tetraisostearate, Synthetic Wax, Bis-Diglyceryl Polyacyladipate-2, Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 15850, CI 77891, CI 77491].",
    },
    {
      brand: "Maybelline",
      title: "Lifter Gloss",
      shadeLabel: "Reef",
      swatch: "#d79ca9",
      swatchBg: "linear-gradient(135deg, #f8d9df, #d79ca9)",
      cardImage: "assets/mny-lifter-gloss-reef.png",
      badgePrimary: "Hyaluronic",
      badgeSecondary: "Top rated",
      tags: [
        { dot: "#c99592", label: "Stone" },
        { dot: "#e96ce8", label: "Plumping" },
        { dot: "#e96ce8", label: "High shine" },
      ],
      priceWas: "$12",
      priceNow: "$9",
      rating: 4.2,
      ratingCount: "12k",
      description:
        "Hyaluronic acid-infused gloss with high shine and a cushioned feel. Stone is a flattering neutral pink that pairs well with everyday makeup.",
      ingredients:
        "Polybutene, Hydrogenated Polyisobutene, Ethylhexyl Palmitate, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Silica, Pentaerythrityl Tetraisostearate, Tocopheryl Acetate, Sodium Hyaluronate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 15850, CI 45410].",
    },
    {
      brand: "Maybelline",
      title: "Slip-On Serum Lipstick",
      shadeLabel: "04 — Til 4",
      swatch: "#a65958",
      swatchBg: "linear-gradient(135deg, #f4cfcf, #a65958)",
      cardImage: "assets/mny-slip-on-serum-til-4.png",
      badgePrimary: "Serum lipstick",
      badgeSecondary: "Comfort wear",
      tags: [
        { dot: "#a65958", label: "Warm terracotta" },
        { dot: "#e96ce8", label: "Soft matte" },
        { dot: "#e96ce8", label: "Hydrating feel" },
      ],
      priceWas: "$12",
      priceNow: "$10",
      rating: 4.5,
      ratingCount: "25k",
      description:
        "A liquid lipstick with intense matte color and all-day wear. Seductress is a soft mauve-nude that works across seasons and undertones.",
      ingredients:
        "Isododecane, Dimethicone, Trimethylsiloxysilicate, Polybutene, Petrolatum, Cyclohexasiloxane, Disteardimonium Hectorite, Propylene Carbonate, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
  ],
};

/** Foundation shortlists keyed by the same luxury / budget tier as lip picks. */
const FOUNDATION_PRODUCTS = {
  luxury: [
    {
      brand: "Yves Saint Laurent",
      title: "All Hours Foundation",
      shadeLabel: "LW7 — Warm Linen",
      swatch: "#c4a574",
      swatchBg: "linear-gradient(135deg, #f2e6d4, #a88452)",
      cardImage: "assets/ysl-1.jpg",
      badgePrimary: "24HR matte",
      badgeSecondary: "Transfer-resistant",
      tags: [
        { dot: "#c4a574", label: "Warm neutral" },
        { dot: "#e96ce8", label: "Buildable" },
        { dot: "#e96ce8", label: "Oil control" },
      ],
      priceWas: "$68",
      priceNow: "$58",
      rating: 4.5,
      ratingCount: "1.8k",
      description:
        "A full-coverage liquid foundation with a soft matte finish that resists humidity and heat. Warm Linen is a balanced golden-beige for light–medium skin with warm undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Trimethylsiloxysilicate, Glycerin, PEG-10 Dimethicone, Butylene Glycol, Magnesium Sulfate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "NU Bare Look Tint",
      shadeLabel: "Medium 4 — Golden",
      swatch: "#b89470",
      swatchBg: "linear-gradient(135deg, #efe4d8, #96754f)",
      cardImage: "assets/ysl-2.jpg",
      badgePrimary: "Skin tint",
      badgeSecondary: "Light coverage",
      tags: [
        { dot: "#b89470", label: "Golden" },
        { dot: "#e96ce8", label: "Skin-like" },
        { dot: "#e96ce8", label: "SPF" },
      ],
      priceWas: "$48",
      priceNow: "$44",
      rating: 4.6,
      ratingCount: "2.1k",
      description:
        "A sheer skin tint that evens tone while letting real skin show through. Golden Medium 4 adds warmth without masking texture—ideal for no-makeup makeup days.",
      ingredients:
        "Aqua, Ethylhexyl Methoxycinnamate, Cyclopentasiloxane, Dimethicone, Titanium Dioxide, Glycerin, Tocopherol, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Touche Éclat Le Teint",
      shadeLabel: "BD45 — Warm Bisque",
      swatch: "#c9a088",
      swatchBg: "linear-gradient(135deg, #f5e6dc, #a67c62)",
      cardImage: "assets/ysl-3.jpg",
      badgePrimary: "Radiant",
      badgeSecondary: "Buildable",
      tags: [
        { dot: "#c9a088", label: "Warm bisque" },
        { dot: "#e96ce8", label: "Luminous" },
        { dot: "#e96ce8", label: "SPF 22" },
      ],
      priceWas: "$62",
      priceNow: "$56",
      rating: 4.7,
      ratingCount: "3.4k",
      description:
        "A luminous foundation that reads like healthy skin. BD45 Warm Bisque balances peach and beige for medium complexions that skew warm.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Ethylhexyl Methoxycinnamate, PEG-10 Dimethicone, Talc, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Youth Liberator Serum Foundation",
      shadeLabel: "BR20 — Cool Ivory",
      swatch: "#d4a99f",
      swatchBg: "linear-gradient(135deg, #fceee9, #b8877c)",
      cardImage: "assets/ysl-4.jpg",
      badgePrimary: "Serum-infused",
      badgeSecondary: "Satin",
      tags: [
        { dot: "#d4a99f", label: "Cool ivory" },
        { dot: "#e96ce8", label: "Plumping" },
        { dot: "#e96ce8", label: "Blendable" },
      ],
      priceWas: "$72",
      priceNow: "$64",
      rating: 4.4,
      ratingCount: "1.2k",
      description:
        "A satin foundation infused with skincare actives for a smoother look over time. BR20 Cool Ivory suits fair skin with pink undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Propylene Glycol, PEG-10 Dimethicone, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
  ],
  budget: [
    {
      brand: "Maybelline",
      title: "Fit Me Matte + Poreless",
      shadeLabel: "128 — Warm Nude",
      swatch: "#c49e7c",
      swatchBg: "linear-gradient(135deg, #f3e4d4, #a67f5a)",
      cardImage: "assets/mny-1.jpg",
      badgePrimary: "Matte",
      badgeSecondary: "Pore-blurring",
      tags: [
        { dot: "#c49e7c", label: "Warm nude" },
        { dot: "#e96ce8", label: "Oil-free" },
        { dot: "#e96ce8", label: "40 shades" },
      ],
      priceWas: "$10",
      priceNow: "$8",
      rating: 4.3,
      ratingCount: "42k",
      description:
        "A lightweight liquid foundation that mattifies shine and refines the look of pores. 128 Warm Nude is a go-to for light–medium skin with golden undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, PEG-10 Dimethicone, Magnesium Sulfate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Maybelline",
      title: "Super Stay Full Coverage",
      shadeLabel: "312 — Golden",
      swatch: "#c4916a",
      swatchBg: "linear-gradient(135deg, #f5e0d2, #a66f48)",
      cardImage: "assets/mny-2.jpg",
      badgePrimary: "Full coverage",
      badgeSecondary: "Longwear",
      tags: [
        { dot: "#c4916a", label: "Golden" },
        { dot: "#e96ce8", label: "30HR" },
        { dot: "#e96ce8", label: "Pump" },
      ],
      priceWas: "$14",
      priceNow: "$11",
      rating: 4.5,
      ratingCount: "28k",
      description:
        "A high-pigment foundation that stays put through heat and long days. 312 Golden flatters medium skin with warm, sunlit undertones.",
      ingredients:
        "Isododecane, Trimethylsiloxysilicate, Dimethicone, Polypropylsilsesquioxane, Disteardimonium Hectorite, Propylene Carbonate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Maybelline",
      title: "Dream Satin Liquid",
      shadeLabel: "60 — Sandy Beige",
      swatch: "#d4b896",
      swatchBg: "linear-gradient(135deg, #faf3ea, #b8966e)",
      cardImage: "assets/mny-3.jpg",
      badgePrimary: "Hydrating",
      badgeSecondary: "Satin",
      tags: [
        { dot: "#d4b896", label: "Sandy beige" },
        { dot: "#e96ce8", label: "Hyaluronic" },
        { dot: "#e96ce8", label: "Blendable" },
      ],
      priceWas: "$12",
      priceNow: "$9",
      rating: 4.2,
      ratingCount: "19k",
      description:
        "A hydrating satin foundation that melts into skin for a fresh, never-flat finish. 60 Sandy Beige works for light–medium neutral-to-warm tones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Ethylhexyl Palmitate, Sodium Hyaluronate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Maybelline",
      title: "Instant Age Rewind Instant Perfector",
      shadeLabel: "110 — Porcelain Glow",
      swatch: "#e8d4c4",
      swatchBg: "linear-gradient(135deg, #fff9f4, #c9a88f)",
      cardImage: "assets/mny-4.jpg",
      badgePrimary: "4-in-1",
      badgeSecondary: "Glow",
      tags: [
        { dot: "#e8d4c4", label: "Porcelain" },
        { dot: "#e96ce8", label: "Prime + cover" },
        { dot: "#e96ce8", label: "SPF 20" },
      ],
      priceWas: "$16",
      priceNow: "$13",
      rating: 4.1,
      ratingCount: "9k",
      description:
        "A multitasking complexion perfector that primes, covers, conceals, and adds a soft glow. 110 Porcelain Glow suits fair skin with neutral-to-cool undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Titanium Dioxide, Glycerin, Ethylhexyl Methoxycinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
  ],
};

/** @typedef {'entry'|'chat'} View */
/** @typedef {'idle'|'busy'} Flow */

/** Lucide (shadcn default) inline SVG — mirror assets stay PNG per product. */
const LUC = {
  stroke: 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',
  svg: (size, paths) =>
    `<svg class="lucide" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${paths}</svg>`,
};

const el = {
  promptList: /** @type {HTMLElement} */ (document.getElementById("promptList")),
  entryView: /** @type {HTMLElement} */ (document.getElementById("entryView")),
  chatView: /** @type {HTMLElement} */ (document.getElementById("chatView")),
  mainScroll: /** @type {HTMLElement} */ (document.getElementById("mainScroll")),
  input: /** @type {HTMLTextAreaElement} */ (document.getElementById("composerInput")),
  composerField: /** @type {HTMLElement} */ (document.getElementById("composerField")),
  sendBtn: /** @type {HTMLButtonElement} */ (document.getElementById("composerSend")),
  productDetail: /** @type {HTMLElement} */ (document.getElementById("productDetail")),
  productDetailClose: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailClose")),
  productDetailScroll: /** @type {HTMLElement} */ (document.getElementById("productDetailScroll")),
  productDetailSlides: /** @type {HTMLElement} */ (document.getElementById("productDetailSlides")),
  productDetailDots: /** @type {HTMLElement} */ (document.getElementById("productDetailDots")),
  productDetailBrand: /** @type {HTMLElement} */ (document.getElementById("productDetailBrand")),
  productDetailTitle: /** @type {HTMLElement} */ (document.getElementById("productDetailTitle")),
  productDetailTags: /** @type {HTMLElement} */ (document.getElementById("productDetailTags")),
  productDetailShadeDot: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeDot")),
  productDetailShadeLabel: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeLabel")),
  productDetailMeta: /** @type {HTMLElement} */ (document.getElementById("productDetailMeta")),
  productDetailDescription: /** @type {HTMLElement} */ (document.getElementById("productDetailDescription")),
  productDetailIngredientsBody: /** @type {HTMLElement} */ (document.getElementById("productDetailIngredientsBody")),
  productDetailBuy: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailBuy")),
  productDetailUnpack: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpack")),
  productDetailUnpackLede: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpackLede")),
  productDetailUnpackList: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpackList")),
  productDetailAlternates: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternates")),
  productDetailAlternatesStrip: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternatesStrip")),
  productDetailAlternatesSub: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternatesSub")),
  productDetailShadeRow: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeRow")),
  productDetailVto: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailVto")),
  vtoFlow: /** @type {HTMLElement} */ (document.getElementById("vtoFlow")),
  vtoTermsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTermsPanel")),
  vtoLiveStubPanel: /** @type {HTMLElement} */ (document.getElementById("vtoLiveStubPanel")),
  vtoSelfieStubPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieStubPanel")),
  vtoSelfieConfirmPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieConfirmPanel")),
  vtoSkinQuestionnairePanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuestionnairePanel")),
  vtoSkinQuizBack: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizBack")),
  vtoSkinQuizProgressFill: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizProgressFill")),
  vtoSkinQuizTitle: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizTitle")),
  vtoSkinQuizSubtitle: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizSubtitle")),
  vtoSkinQuizHelpBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizHelpBtn")),
  vtoSkinQuizOptions: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizOptions")),
  vtoSkinQuizContinue: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizContinue")),
  vtoSkinQuizPreferNot: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizPreferNot")),
  vtoSkinDiagLoadingPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagLoadingPanel")),
  vtoSkinDiagLoadingBg: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagLoadingBg")),
  vtoSkinDiagResultsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsPanel")),
  vtoSkinDiagResultsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinDiagResultsClose")),
  vtoSkinDiagResultsStage: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsStage")),
  vtoSkinDiagResultsPan: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsPan")),
  vtoSkinDiagResultsImg: /** @type {HTMLImageElement} */ (document.getElementById("vtoSkinDiagResultsImg")),
  vtoSkinDiagResultsMarkers: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsMarkers")),
  vtoSkinDiagResultsCards: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsCards")),
  vtoSkinDiagResultsZoomOut: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinDiagResultsZoomOut")),
  vtoSelfiePreviewImg: /** @type {HTMLImageElement} */ (document.getElementById("vtoSelfiePreviewImg")),
  vtoSelfieConfirmClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieConfirmClose")),
  vtoSelfieConfirmInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieConfirmInfo")),
  vtoSelfieUseImage: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieUseImage")),
  vtoSelfieRetake: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieRetake")),
  vtoTryOnPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnPanel")),
  vtoTryOnClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnClose")),
  vtoTryOnBefore: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnBefore")),
  vtoTryOnAfterWrap: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnAfterWrap")),
  vtoTryOnAfterBase: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnAfterBase")),
  vtoTryOnLipCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById("vtoTryOnLipCanvas")),
  vtoTryOnViewport: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnViewport")),
  vtoTryOnSliderTrack: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnSliderTrack")),
  vtoTryOnSliderKnob: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnSliderKnob")),
  vtoTryOnMiniTitle: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniTitle")),
  vtoTryOnMiniShade: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniShade")),
  vtoTryOnMiniDot: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniDot")),
  vtoTryOnMiniThumb: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniThumb")),
  vtoTryOnMiniPhoto: /** @type {HTMLImageElement | null} */ (document.getElementById("vtoTryOnMiniPhoto")),
  vtoTryOnShades: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnShades")),
  vtoTryOnMiniInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnMiniInfo")),
  vtoTryOnModeToggle: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnModeToggle")),
  vtoTryOnAltLipOverlay: /** @type {HTMLElement | null} */ (document.getElementById("vtoTryOnAltLipOverlay")),
  vtoSelfieCameraPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCameraPanel")),
  vtoSelfieVideo: /** @type {HTMLVideoElement} */ (document.getElementById("vtoSelfieVideo")),
  vtoSelfieGuidePill: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieGuidePill")),
  vtoSelfieGuidePath: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePath")),
  vtoSelfieGuidePathLeft: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePathLeft")),
  vtoSelfieGuidePathRight: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePathRight")),
  vtoSelfieCameraClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraClose")),
  vtoSelfieCameraInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraInfo")),
  vtoSelfieCaptureComplete: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCaptureComplete")),
  vtoSelfieCaptureCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById("vtoSelfieCaptureCanvas")),
  vtoSelfieUploadFallback: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSelfieUploadFallback")),
  vtoSelfieUploadInput: /** @type {HTMLInputElement | null} */ (document.getElementById("vtoSelfieUploadInput")),
  vtoSelfieStubClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubClose")),
  vtoSelfieStubInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubInfo")),
  vtoSelfieStubPrivacyLearn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubPrivacyLearn")),
  vtoTermsCheckbox: /** @type {HTMLInputElement} */ (document.getElementById("vtoTermsCheckbox")),
  vtoConsentBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoConsentBtn")),
  vtoTermsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTermsClose")),
  vtoLiveStubBack: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubBack")),
  vtoLiveStubDone: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubDone")),
  vtoStubLiveMode: /** @type {HTMLButtonElement} */ (document.getElementById("vtoStubLiveMode")),
  vtoSelfieTake: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieTake")),
  composerRoot: /** @type {HTMLElement | null} */ (document.getElementById("composerRoot")),
  composerFootnote: /** @type {HTMLElement | null} */ (document.querySelector(".composer-footnote")),
  shellMain: /** @type {HTMLElement | null} */ (document.querySelector(".shell-main")),
  composerPlus: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerPlus")),
  composerAppMenu: /** @type {HTMLElement | null} */ (document.getElementById("composerAppMenu")),
  composerAppMenuBackdrop: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuBackdrop")),
  composerAppMenuVto: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuVto")),
  composerAppMenuSkinDiag: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuSkinDiag")),
  composerAppPill: /** @type {HTMLElement | null} */ (document.getElementById("composerAppPill")),
  composerAppPillClear: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppPillClear")),
  navNewChatBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("navNewChatBtn")),
  navMenuBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("navMenuBtn")),
  entryHeadline: /** @type {HTMLElement | null} */ (document.getElementById("entryHeadline")),
  vtoSelfieStubTitle: /** @type {HTMLElement | null} */ (document.getElementById("vtoSelfieStubTitle")),
};

/** @type {View} */
let view = "entry";
/** @type {Flow} */
let flow = "idle";

/** @typedef {'makeup'|'skin_diag'} ChatMode */
/** @type {ChatMode} */
let chatMode = "makeup";

/** When true, post–terms navigation should go to Skin Diagnosis instead of try-on mode. */
let skinDiagFlowActive = false;

/** When true, VTO shell chrome (brand, camera permission copy) uses skincare.com. Independent of {@link skinDiagFlowActive} so chat-side effects cannot flip branding mid-capture. */
let vtoSkinBrandExperienceActive = false;

const VTO_EXPERIENCE_BRAND_MAKEUP = "makeup.com";
const VTO_EXPERIENCE_BRAND_SKIN = "skincare.com";
const VTO_EXPERIENCE_ARIA_MAKEUP = "makeup.com by L'Oréal";
const VTO_EXPERIENCE_ARIA_SKIN = "skincare.com by L'Oréal";

/** Active skin diagnosis capture / questionnaire / results shell uses “skincare.com”. */
function useSkinExperienceBranding() {
  return vtoSkinBrandExperienceActive;
}

function syncVtoExperienceBrandUi() {
  const skin = useSkinExperienceBranding();
  const name = skin ? VTO_EXPERIENCE_BRAND_SKIN : VTO_EXPERIENCE_BRAND_MAKEUP;
  const aria = skin ? VTO_EXPERIENCE_ARIA_SKIN : VTO_EXPERIENCE_ARIA_MAKEUP;
  document.querySelectorAll(".vto-mode__brand-name, .vto-terms__brand-name").forEach((node) => {
    node.textContent = name;
  });
  document.querySelectorAll('.vto-mode__brand[role="img"]').forEach((node) => {
    node.setAttribute("aria-label", aria);
  });
}

/** Step index within {@link SKIN_DIAG_QUIZ_STEPS} after selfie confirm (skin flow only). */
let skinDiagQuizStep = 0;

/**
 * Answers collected on the skin-diagnosis questionnaire (prototype).
 * @type {{ ageBand: string | null, skinType: string | null, sensitivity: string | null }}
 */
let skinDiagQuizAnswers = {
  ageBand: null,
  skinType: null,
  sensitivity: null,
};

/** @typedef {{ key: 'ageBand'|'skinType'|'sensitivity', title: string, subtitle: string, helpLabel: string, layout: 'grid'|'stack', stackText?: 'left'|'center', options: { value: string, label: string }[], showPreferNot?: boolean, last?: boolean }} SkinDiagQuizStepDef */

/** @type {SkinDiagQuizStepDef[]} */
const SKIN_DIAG_QUIZ_STEPS = [
  {
    key: "ageBand",
    title: "How old are you?",
    subtitle: "Providing us with your age helps our analysis correctly identify your skin health.",
    helpLabel: "Why do we ask this?",
    layout: "grid",
    showPreferNot: true,
    options: [
      { value: "18-29", label: "18-29 years old" },
      { value: "30-39", label: "30-39 years old" },
      { value: "40-49", label: "40-49 years old" },
      { value: "50-59", label: "50-59 years old" },
      { value: "60-69", label: "60-69 years old" },
      { value: "70-79", label: "70-79 years old" },
      { value: "80-89", label: "80-89 years old" },
      { value: "90+", label: "90+ years old" },
    ],
  },
  {
    key: "skinType",
    title: "What is your skin type?",
    subtitle: "",
    helpLabel: "How do I find out my skin type?",
    layout: "stack",
    stackText: "left",
    options: [
      { value: "dry", label: "I have dry skin" },
      { value: "oily", label: "I have oily skin" },
      { value: "combination", label: "I have combination skin" },
      { value: "normal", label: "I have normal skin" },
    ],
  },
  {
    key: "sensitivity",
    title: "How sensitive is your skin?",
    subtitle: "",
    helpLabel: "What is sensitive skin?",
    layout: "stack",
    stackText: "center",
    last: true,
    options: [
      { value: "very", label: "Very sensitive" },
      { value: "somewhat", label: "Somewhat sensitive" },
      { value: "not", label: "Not sensitive" },
    ],
  },
];

/**
 * Fake skin-concern hotspots (normalized 0–1 on the portrait; x=left…right, y=top…bottom).
 * Assumes a centered frontal face like the selfie oval. Card thumbnails use `marker` + `zoom`.
 * @type {readonly { id: string, title: string, severity: string, score: number, scoreMax: number, blurb: string, marker: { x: number, y: number }, zoom: { x: number, y: number, scale: number } }[]}
 */
const SKIN_DIAG_FAKE_CONCERNS = [
  {
    id: "large-pores",
    title: "Large Pores",
    severity: "Mild",
    score: 14,
    scoreMax: 40,
    blurb: "Often most visible on oil-prone areas of the cheeks. Gentle exfoliation and daily SPF can help pores look smoother over time.",
    marker: { x: 0.34, y: 0.49 },
    zoom: { x: 0.34, y: 0.48, scale: 2.12 },
  },
  {
    id: "radiance",
    title: "Lack of Radiance",
    severity: "Mild",
    score: 16,
    scoreMax: 40,
    blurb: "The center forehead catches light first—dullness here is usually UV, dehydration, or buildup. Antioxidants and consistent SPF help.",
    marker: { x: 0.5, y: 0.24 },
    zoom: { x: 0.5, y: 0.24, scale: 2.05 },
  },
  {
    id: "blotchiness",
    title: "Blotchiness",
    severity: "Moderate",
    score: 20,
    scoreMax: 40,
    blurb: "Cheek tone can look uneven from heat, irritation, or past sun. Calming, fragrance-free care supports a more even look gradually.",
    marker: { x: 0.66, y: 0.49 },
    zoom: { x: 0.66, y: 0.49, scale: 2.12 },
  },
  {
    id: "fine-lines",
    title: "Fine Lines",
    severity: "Mild",
    score: 12,
    scoreMax: 40,
    blurb: "Between the brows is a classic expression zone. Hydration and retinoid-style actives (when your skin tolerates them) are common supports.",
    marker: { x: 0.5, y: 0.36 },
    zoom: { x: 0.5, y: 0.36, scale: 2.18 },
  },
];

/**
 * Maps normalized marker/zoom Y (0 top → 1 bottom) to the visible face frame.
 * The results photo uses `object-position: center top`, so stored Y values read slightly high; shift down together.
 * @param {number} y
 */
function skinDiagFaceMapY(y) {
  return Math.min(0.97, Math.max(0.02, y + 0.102));
}

/**
 * Prototype skincare routine dataset for Skin Diag follow-up.
 * Day/night: shared CeraVe cleanser; Lancôme Génifique (AM) vs CeraVe retinol (PM); Biotherm moisturizer both;
 * La Roche-Posay Anthelios SPF last in AM (night panel mirrors packshot for toggle parity).
 * Each pick includes copy for the shared product detail sheet + “Unpack my match” bullets.
 */
const SKIN_ROUTINE_STEPS = [
  {
    step: "Cleanse",
    day: {
      brand: "CeraVe",
      title: "Hydrating Cream-to-Foam Cleanser",
      match: 88,
      tags: ["Hydrating", "Barrier support"],
      price: "~$18",
      image: "assets/skin-routine-cerave-cleanser.png",
      description:
        "A cream-to-foam cleanser that melts away sunscreen and daily buildup without leaving skin feeling tight. Three essential ceramides plus hyaluronic acid support a comfortable, barrier-respecting cleanse.",
      ingredients:
        "Aqua, Glycerin, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Sodium Cocoyl Isethionate, Sodium Chloride, PCA, PEG-150 Pentaerythrityl Tetrastearate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phenoxyethanol, Citric Acid.",
      unpackBullets: [
        "Low-irritancy surfactants line up with your sensitivity signals.",
        "Barrier-focused ingredients pair with uneven tone and visible-pore goals.",
        "Leaves a flexible canvas for treatment steps—no heavy residue.",
      ],
    },
    night: {
      brand: "CeraVe",
      title: "Hydrating Cream-to-Foam Cleanser",
      match: 88,
      tags: ["Gentle", "Removes makeup"],
      price: "~$18",
      image: "assets/skin-routine-cerave-cleanser.png",
      description:
        "A cream-to-foam cleanser that melts away sunscreen and daily buildup without leaving skin feeling tight. Three essential ceramides plus hyaluronic acid support a comfortable, barrier-respecting cleanse.",
      ingredients:
        "Aqua, Glycerin, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Sodium Cocoyl Isethionate, Sodium Chloride, PCA, PEG-150 Pentaerythrityl Tetrastearate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phenoxyethanol, Citric Acid.",
      unpackBullets: [
        "Same gentle base for AM/PM so actives are not fighting different cleansers.",
        "Removes SPF and light makeup before retinol without over-stripping.",
        "Ceramide support helps offset dryness from PM treatment steps.",
      ],
    },
  },
  {
    step: "Treat",
    day: {
      brand: "Lancôme",
      title: "Génifique Ultimate",
      match: 91,
      tags: ["Serum", "AM-friendly"],
      price: "~$135",
      image: "assets/skin-routine-lancome-genifique.png",
      description:
        "A fast-absorbing serum designed to support radiance and a smoother-looking complexion. Lightweight enough for morning under moisturizer and SPF.",
      ingredients:
        "Aqua, Bifida Ferment Lysate, Glycerin, Dimethicone, Hydroxyethylcellulose, Sodium Hyaluronate, Adenosine, Tocopherol, Ascorbyl Glucoside, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Targets dullness and uneven tone—two of your higher-weighted concerns.",
        "AM-safe profile avoids stacking strong acids before sunscreen.",
        "Hydration-forward base plays well with gel moisturizer in the next step.",
      ],
    },
    night: {
      brand: "CeraVe",
      title: "Resurfacing Retinol Serum",
      match: 87,
      tags: ["PM retinol", "Ceramides"],
      price: "~$22",
      image: "assets/skin-routine-cerave-retinol.png",
      description:
        "A retinol serum with ceramides and licorice root extract to support skin while refining texture over time. Intended for evening use after cleansing.",
      ingredients:
        "Aqua, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Retinol, Ceramide NP, Ceramide AP, Ceramide EOP, Dipotassium Glycyrrhizate, Sodium Hyaluronate, Dimethicone, Phenoxyethanol.",
      unpackBullets: [
        "PM placement keeps retinol away from daytime SPF and sweat friction.",
        "Ceramide buffer fits a profile that still needs barrier reassurance.",
        "Texture support complements fine-line and radiance goals without AM conflict.",
      ],
    },
  },
  {
    step: "Moisturize",
    day: {
      brand: "Biotherm",
      title: "Aquasource Hyalu Plump Gel",
      match: 85,
      tags: ["Plumping", "Gel texture"],
      price: "~$52",
      image: "assets/skin-routine-biotherm-aquasource.png",
      description:
        "A cooling gel-cream moisturizer with hyaluronic acid for a plumped, fresh feel. Layers cleanly under sunscreen without pilling.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Mannose, Panthenol, Ammonium Polyacryloyldimethyl Taurate, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Gel texture reads lighter on oil-prone zones where pores look more noticeable.",
        "Hyaluronic acid supports hydration after exfoliating or retinol nights.",
        "Finishes with a skin-like sheen that pairs with fluid SPF.",
      ],
    },
    night: {
      brand: "Biotherm",
      title: "Aquasource Hyalu Plump Gel",
      match: 85,
      tags: ["Hydration", "Comfort"],
      price: "~$52",
      image: "assets/skin-routine-biotherm-aquasource.png",
      description:
        "A cooling gel-cream moisturizer with hyaluronic acid for a plumped, fresh feel. Layers cleanly under sunscreen without pilling.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Mannose, Panthenol, Ammonium Polyacryloyldimethyl Taurate, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Locks in water after retinol without a heavy occlusive feel.",
        "Comfort-first finish supports redness-prone or sensitized days.",
        "Consistent moisturizer choice keeps barrier signals steady across the week.",
      ],
    },
  },
  {
    step: "SPF",
    day: {
      brand: "La Roche-Posay",
      title: "Anthelios Ultra Fluid SPF 50+",
      match: 90,
      tags: ["UVA/UVB", "Invisible finish"],
      price: "~$38",
      image: "assets/skin-routine-lrp-anthelios.png",
      description:
        "A high-protection fluid sunscreen with a lightweight, fast-drying finish. Designed for daily face wear under makeup or on bare skin.",
      ingredients:
        "Aqua, Alcohol Denat., Diisopropyl Sebacate, Silica, Ethylhexyl Salicylate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ethylhexyl Triazone, Tocopherol, Phenoxyethanol.",
      unpackBullets: [
        "Strong UV coverage supports blotchiness and tone-evenness goals long term.",
        "Fluid texture reduces skip days—especially important when pores read more with oil.",
        "Finishing step seals in treatment without adding chalky cast.",
      ],
    },
    night: {
      brand: "La Roche-Posay",
      title: "Anthelios Ultra Fluid SPF 50+",
      match: 90,
      tags: ["UVA/UVB", "Face"],
      price: "~$38",
      image: "assets/skin-routine-lrp-anthelios.png",
      description:
        "A high-protection fluid sunscreen with a lightweight, fast-drying finish. Designed for daily face wear under makeup or on bare skin.",
      ingredients:
        "Aqua, Alcohol Denat., Diisopropyl Sebacate, Silica, Ethylhexyl Salicylate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ethylhexyl Triazone, Tocopherol, Phenoxyethanol.",
      unpackBullets: [
        "Shown here for parity with the day carousel; your PM routine can skip SPF after cleansing.",
        "Same photostable filters if you want a single SPF SKU on your shelf.",
        "If you prefer a night-only card, swap this slot mentally for recovery balm.",
      ],
    },
  },
];

/** Pending skin-diag post-quiz timeouts (loading steps + handoff to results). */
const skinDiagPostQuizTimers = /** @type {number[]} */ ([]);

/** @type {string | null} */
let skinDiagResultsSelectedId = null;

/** Photo URL for the last skin diagnosis results (mini peek in chat). */
let skinDiagResultsPeekUrl = /** @type {string | null} */ (null);

/** Bumped to cancel in-flight assistant “generation” (typing + follow-up). */
let chatGenerationEpoch = 0;
let skinRoutineFallbackImageUrl = /** @type {string | null} */ (null);

function bumpChatGeneration() {
  chatGenerationEpoch += 1;
  removeTyping();
  flow = "idle";
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  chatAwaitingSkinDiagConfirm = false;
  chatAwaitingSkinRoutineChoice = false;
  chatSkinRoutineConcernId = null;
  refreshComposerActionState();
}

/** @type {string | null} */
let vtoSelfiePreviewUrl = null;

/** Blob URL kept after a successful selfie try-on so chat can reopen without taking another photo. */
let sessionPersistedSelfieUrl = /** @type {string | null} */ (null);

/** True after the user accepts the shared terms sheet on a Makeup Try-On entry (session-wide skip for that flow). */
let vtoUserAcceptedTerms = false;

/** True after the user accepts the terms sheet during Skin Diagnosis (independent of {@link vtoUserAcceptedTerms}). */
let skinDiagUserAcceptedTerms = false;

/** Try-on opened from chat “named product” path: single shade + selfie-backed mini card. */
let tryOnFromChatSingleProduct = false;

/** Selected composer app from plus menu (null means none). */
let composerSelectedApp = /** @type {null|'vto'|'skin_diag'} */ (null);
let composerAppMenuCloseTimer = /** @type {number | null} */ (null);

/** @type {MediaStream | null} */
let vtoCameraStream = null;

/** @type {number[]} */
const vtoCaptureTimers = [];

/** MediaPipe FaceLandmarker instance (lazy) */
let tryOnFaceLandmarker = null;

/** @type {Array<{ x: number; y: number; z?: number }> | null} */
let tryOnCachedLandmarks = null;

/** @type {{ hex: string; label: string }[]} */
let tryOnShadeList = [];

/** @type {number} */
let tryOnShadeIndex = 0;

/** Matches {@link vtoSelectedProductKey} when try-on shade chips were built (for “Where to buy” shade parity). */
let tryOnShadeContextKey = /** @type {string | null} */ (null);

/** When true, try-on uses the provided reference model image. */
let tryOnUseReferenceModel = false;

/** @type {ResizeObserver | null} */
let tryOnResizeObserver = null;

/** @type {AbortController | null} */
let tryOnSliderAborter = null;

/** Outer lip loop — MediaPipe Face Mesh topology (indices 0–467) */
const TRYON_OUTER_MOUTH_IDX = [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146];

/** Alternate compare images for VTO before/after toggle. */
const TRYON_REFERENCE_BEFORE_IMAGE = "assets/tryon-group1-before.png";
const TRYON_REFERENCE_AFTER_IMAGE = "assets/tryon-group2-after.png";

/** Sample face used when the user types the “VTO” chat shortcut (same asset as reference model). */
const VTO_CHAT_SHORTCUT_SELFIE = "assets/tryon-reference-model.png";

function scrollMainToBottom() {
  const sc = el.mainScroll;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      sc.scrollTop = sc.scrollHeight;
      const last = sc.querySelector("#chatView .msg:last-of-type");
      if (last instanceof HTMLElement) {
        last.scrollIntoView({ block: "end", behavior: "auto" });
      }
    });
  });
}

function isProductMessage(text, promptMeta) {
  if (promptMeta?.productIntent) return true;
  return PRODUCT_KEYWORDS.test(text);
}

function isSkinAnalyzeIntent(text, promptMeta) {
  if (promptMeta?.skinAnalyzeIntent) return true;
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (n === "analyze my skin") return true;
  return (
    /\b(analyze|analysis|scan|diagnos|assess|evaluate|check)\b.*\bskin\b/i.test(n) || /\bskin\b.*\b(analyze|analysis|scan|diagnos|assess)\b/i.test(n)
  );
}

function skinDiagInviteAssistantHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I can help with a guided <strong>Skin Diagnosis</strong>—think of it as a structured snapshot of what you are seeing in your skin, with clear next steps (always informational, not a substitute for an in-person dermatologist visit).</p>
    <p style="margin:0">If that sounds good, reply with <strong>yes</strong>, <strong>sure</strong>, <strong>go ahead</strong>, <strong>continue</strong>, or <strong>I am ready</strong> and I will launch the capture flow. Want to stay in chat for now? Say <strong>not now</strong> or <strong>later.</strong></p>
  </div>`;
}

function skinCareGenericReplyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0">I can help you think through routines, ingredients, and how to layer products safely. Tell me your skin type, concerns, and what you are already using (cleanser, treatment, moisturizer, SPF), and I will keep suggestions practical and easy to follow.</p>
  </div>`;
}

function updateEntryChromeForChatMode() {
  const h = el.entryHeadline;
  if (!h) return;
  if (chatMode === "skin_diag") {
    h.textContent = "What does your skin need today?";
    el.entryView?.setAttribute("aria-label", "Skin diagnosis suggested prompts");
    return;
  }
  h.textContent = "What are you looking for today?";
  el.entryView?.setAttribute("aria-label", "Suggested prompts");
}

function setComposerForChatMode() {
  const ta = el.input;
  const root = el.composerRoot;
  if (!ta || !root) return;
  if (chatMode === "skin_diag") {
    root.classList.remove("composer--vto");
    if (el.composerPlus) el.composerPlus.hidden = false;
    ta.placeholder = ta.dataset.placeholderSkincare || "Ask about skincare...";
    return;
  }
  if (!root.classList.contains("composer--vto")) {
    ta.placeholder = ta.dataset.placeholderDefault || "Ask anything";
  }
}

function applySelfieStubSkinDiagUi(isSkinDiagFlow) {
  const panel = el.vtoSelfieStubPanel;
  if (!panel) return;
  panel.classList.toggle("vto-flow__panel--skin-diag-flow", isSkinDiagFlow);
  const title = el.vtoSelfieStubTitle;
  if (title) title.textContent = isSkinDiagFlow ? "Skin diagnosis photo" : "Try-on selfie";
  if (el.vtoStubLiveMode) {
    el.vtoStubLiveMode.hidden = isSkinDiagFlow;
    el.vtoStubLiveMode.classList.toggle("vto-mode__btn--primary", !isSkinDiagFlow);
    el.vtoStubLiveMode.classList.remove("vto-mode__btn--secondary");
  }
  if (el.vtoSelfieTake) {
    el.vtoSelfieTake.classList.toggle("vto-mode__btn--primary", isSkinDiagFlow);
    el.vtoSelfieTake.classList.toggle("vto-mode__btn--secondary", !isSkinDiagFlow);
  }
}

function focusSelfieStubPrimaryAction() {
  const panel = el.vtoSelfieStubPanel;
  requestAnimationFrame(() => {
    if (!panel || panel.hidden) return;
    if (panel.classList.contains("vto-flow__panel--skin-diag-flow")) {
      el.vtoSelfieTake?.focus();
      return;
    }
    if (el.vtoStubLiveMode && !el.vtoStubLiveMode.hidden) {
      el.vtoStubLiveMode.focus();
      return;
    }
    el.vtoSelfieTake?.focus();
  });
}

function showSkinDiagSelfieEntry() {
  applySelfieStubSkinDiagUi(true);
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

function resetSkinDiagSessionFlags() {
  chatPreferredTier = null;
  chatLastProductCarouselCatalog = null;
  skinDiagResultsPeekUrl = null;
  chatPendingCarousel = null;
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  chatAwaitingSkinDiagConfirm = false;
  chatAwaitingSkinRoutineChoice = false;
  chatSkinRoutineConcernId = null;
  skinDiagUserAcceptedTerms = false;
}

function startSkinDiagChat() {
  if (!el.vtoFlow.hidden) closeVtoFlow();
  bumpChatGeneration();
  chatMode = "skin_diag";
  skinDiagFlowActive = false;
  if (composerSelectedApp === "vto") {
    composerSelectedApp = null;
    syncComposerAppPill();
  }
  el.chatView.innerHTML = "";
  resetSkinDiagSessionFlags();
  view = "entry";
  el.entryView.hidden = false;
  el.chatView.hidden = true;
  updateEntryChromeForChatMode();
  renderPrompts();
  setComposerForChatMode();
  el.mainScroll.scrollTop = 0;
  el.input.value = "";
  autosizeComposer();
  flow = "idle";
  updateComposerTextState();
  requestAnimationFrame(() => el.input?.focus());
}

function switchToMakeupChat() {
  if (!el.vtoFlow.hidden) closeVtoFlow();
  bumpChatGeneration();
  chatMode = "makeup";
  skinDiagFlowActive = false;
  if (composerSelectedApp === "skin_diag") {
    composerSelectedApp = null;
    syncComposerAppPill();
  }
  el.chatView.innerHTML = "";
  resetSkinDiagSessionFlags();
  view = "entry";
  el.entryView.hidden = false;
  el.chatView.hidden = true;
  updateEntryChromeForChatMode();
  renderPrompts();
  setComposerForChatMode();
  el.mainScroll.scrollTop = 0;
  el.input.value = "";
  autosizeComposer();
  flow = "idle";
  updateComposerTextState();
  requestAnimationFrame(() => el.input?.focus());
}

function launchSkinDiagAfterConfirm() {
  skinDiagResultsPeekUrl = null;
  skinDiagFlowActive = true;
  vtoSkinBrandExperienceActive = true;
  syncVtoExperienceBrandUi();
  prepareVtoShellVisible();
  applySelfieStubSkinDiagUi(true);
  if (chatMode === "skin_diag") {
    el.composerRoot?.classList.remove("composer--vto");
    setComposerForChatMode();
  }
  if (!skinDiagUserAcceptedTerms) {
    showVtoTermsOnly();
    el.vtoTermsCheckbox.checked = false;
    syncVtoConsentButton();
    requestAnimationFrame(() => el.vtoTermsClose.focus());
    return;
  }
  showSkinDiagSelfieEntry();
}

function renderPrompts() {
  el.promptList.innerHTML = "";
  const list = chatMode === "skin_diag" ? SKIN_DIAG_PROMPTS : PROMPTS;
  for (const p of list) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "prompt-chip";
    b.textContent = p.text;
    b.addEventListener("click", () => sendUserMessage(p.text, p));
    el.promptList.appendChild(b);
  }
  updateEntryChromeForChatMode();
}

function assistantFeedbackRowHtml() {
  const s = LUC.stroke;
  const up = `<path d="M7 10v12" ${s}/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" ${s}/>`;
  const down = `<path d="M17 14V2" ${s}/><path d="M9 18.12 10 14H5.83a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" ${s}/>`;
  return `<div class="assistant-feedback" role="group" aria-label="Rate this response">
    <button type="button" class="assistant-feedback__btn" data-feedback="up" aria-label="Good response" aria-pressed="false">${LUC.svg(18, up)}</button>
    <button type="button" class="assistant-feedback__btn" data-feedback="down" aria-label="Bad response" aria-pressed="false">${LUC.svg(18, down)}</button>
  </div>`;
}

/** @param {HTMLElement} msgRoot */
function wireAssistantFeedback(msgRoot) {
  const row = msgRoot.querySelector(".assistant-feedback");
  if (!row) return;
  row.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-feedback]");
    if (!(btn instanceof HTMLButtonElement) || !row.contains(btn)) return;
    const key = btn.getAttribute("data-feedback");
    const turningOff = btn.getAttribute("aria-pressed") === "true";
    const next = turningOff ? null : key === "up" || key === "down" ? key : null;
    for (const b of row.querySelectorAll("[data-feedback]")) {
      if (!(b instanceof HTMLButtonElement)) continue;
      const on = next !== null && b.getAttribute("data-feedback") === next;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("is-selected", on);
    }
  });
}

function appendUserBubble(text) {
  const wrap = document.createElement("div");
  wrap.className = "msg msg--user msg-anim";
  wrap.innerHTML = `
    <div class="user-thread">
      <div class="user-thread__bubble"></div>
    </div>`;
  const bubble = wrap.querySelector(".user-thread__bubble");
  if (bubble) bubble.textContent = text;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

/**
 * Splits non-empty text nodes in a block into word-ish spans for streaming reveal.
 * @param {HTMLElement} block
 * @returns {HTMLElement[]}
 */
function tokenizeAssistantTextBlock(block) {
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  /** @type {Text[]} */
  const textNodes = [];
  let n = walker.nextNode();
  while (n) {
    const t = /** @type {Text} */ (n);
    if (t.nodeValue && t.nodeValue.trim().length > 0) textNodes.push(t);
    n = walker.nextNode();
  }

  /** @type {HTMLElement[]} */
  const tokens = [];
  for (const tn of textNodes) {
    const value = tn.nodeValue || "";
    const parts = value.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }
      const span = document.createElement("span");
      span.className = "assistant-stream__tok";
      span.textContent = part;
      frag.appendChild(span);
      tokens.push(span);
    }
    tn.parentNode?.replaceChild(frag, tn);
  }
  return tokens;
}

/**
 * Applies a lightweight word-by-word reveal to assistant prose.
 * This preserves inline tags (e.g. <strong>) by only replacing text nodes.
 * @param {HTMLElement} root
 */
function streamAssistantText(root) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

  const seqRoot = root.querySelector('.where-buy[data-assistant-stream="sequential"]');
  if (seqRoot) {
    const blocks = Array.from(seqRoot.querySelectorAll(":scope > .assistant-text")).filter((b) => b instanceof HTMLElement);
    /** @type {{ block: HTMLElement; tokens: HTMLElement[] }[]} */
    const jobs = [];
    for (const block of blocks) {
      const tokens = tokenizeAssistantTextBlock(block);
      if (tokens.length) block.classList.add("assistant-text--streaming");
      jobs.push({ block, tokens });
    }
    let ji = 0;
    let idx = 0;
    const tickMs = 26;
    const tick = () => {
      while (ji < jobs.length) {
        const { block, tokens } = jobs[ji];
        if (idx >= tokens.length) {
          if (tokens.length) block.classList.remove("assistant-text--streaming");
          ji += 1;
          idx = 0;
          continue;
        }
        tokens[idx].classList.add("is-visible");
        idx += 1;
        scrollMainToBottom();
        window.setTimeout(tick, tickMs);
        return;
      }
      scrollMainToBottom();
    };
    window.setTimeout(tick, tickMs);
    return;
  }

  const textBlocks = root.querySelectorAll(".assistant-text");
  for (const block of textBlocks) {
    if (!(block instanceof HTMLElement)) continue;
    if (block.closest('.where-buy[data-assistant-stream="sequential"]')) continue;
    const tokens = tokenizeAssistantTextBlock(block);
    if (tokens.length === 0) continue;
    block.classList.add("assistant-text--streaming");
    let idx = 0;
    const tickMs = 26;
    const step = 1;
    const tick = () => {
      for (let i = 0; i < step && idx < tokens.length; i += 1, idx += 1) {
        tokens[idx].classList.add("is-visible");
      }
      scrollMainToBottom();
      if (idx < tokens.length) {
        window.setTimeout(tick, tickMs);
      } else {
        block.classList.remove("assistant-text--streaming");
        scrollMainToBottom();
      }
    };
    window.setTimeout(tick, tickMs);
  }
}

function appendAssistantBlock(html, withAnim = true) {
  removeTyping();
  const wrap = document.createElement("div");
  wrap.className = `msg msg--assistant${withAnim ? " msg-anim" : ""}`;
  /** VTO lip/foundation carousels already include {@link convActionsHTML} (thumbs + actions). */
  const hasInlineConvActions = html.includes("conv-actions");
  const feedbackHtml = hasInlineConvActions ? "" : assistantFeedbackRowHtml();
  wrap.innerHTML = `<div class="assistant-msg"><div class="assistant-surface">${html}</div>${feedbackHtml}</div>`;
  el.chatView.appendChild(wrap);
  wrap.querySelectorAll("[data-product-carousel]").forEach((host) => wireProductCarousel(/** @type {HTMLElement} */ (host)));
  wrap.querySelectorAll("[data-skin-routine-widget]").forEach((widget) => wireSkinRoutineWidget(/** @type {HTMLElement} */ (widget)));
  if (!hasInlineConvActions) wireAssistantFeedback(wrap);
  if (withAnim) streamAssistantText(wrap);
  scrollMainToBottom();
}

/** @param {HTMLElement} widget */
function wireSkinRoutineWidget(widget) {
  const routinePanel = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-routine]"));
  const chrome = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-chrome]"));
  const buttons = Array.from(widget.querySelectorAll("[data-routine-toggle]"));
  const stepLabelEl = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-step-label]"));
  const stepIndexEl = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-step-index]"));
  const carousel = widget.querySelector(".skin-routine-carousel");
  const row = /** @type {HTMLElement | null} */ (carousel?.querySelector(".slide-row"));

  /** @param {'day'|'night'} mode */
  const setMode = (mode) => {
    widget.setAttribute("data-mode", mode);
    for (const btn of buttons) {
      const on = btn.getAttribute("data-routine-toggle") === mode;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    }
    for (const panel of widget.querySelectorAll("[data-routine-panel]")) {
      const panelMode = panel.getAttribute("data-routine-panel");
      panel.toggleAttribute("hidden", panelMode !== mode);
    }
  };
  for (const btn of buttons) {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-routine-toggle");
      if (mode === "day" || mode === "night") setMode(mode);
    });
  }

  const syncRoutineChrome = () => {
    if (!chrome || !row || !widget.classList.contains("skin-routine-widget--show-routine")) return;
    const stepPx = carouselScrollStepPx(row);
    if (stepPx <= 0) return;
    const maxIdx = Math.max(0, row.children.length - 1);
    const idx = Math.min(maxIdx, Math.max(0, Math.round((row.scrollLeft + stepPx * 0.15) / stepPx)));
    const slide = row.children[idx];
    if (slide instanceof HTMLElement && slide.dataset.stepLabel) {
      if (stepLabelEl) stepLabelEl.textContent = slide.dataset.stepLabel;
      if (stepIndexEl) {
        const part = slide.dataset.stepPart || "";
        const tot = slide.dataset.stepTotal || "";
        stepIndexEl.textContent = part && tot ? `${part}/${tot}` : "";
      }
    }
  };

  const introPanel = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-intro]"));
  const prev = /** @type {HTMLButtonElement | null} */ (carousel?.querySelector(".product-carousel__btn--prev"));

  const seeBtn = widget.querySelector("[data-routine-see]");
  seeBtn?.addEventListener("click", () => {
    widget.classList.add("skin-routine-widget--show-routine");
    if (routinePanel) routinePanel.setAttribute("aria-hidden", "false");
    if (introPanel) introPanel.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      row?.dispatchEvent(new Event("scroll"));
      syncRoutineChrome();
    }, 420);
  });

  widget.addEventListener("click", (e) => {
    const unpack = e.target.closest("[data-routine-unpack]");
    if (!unpack || !(unpack instanceof HTMLButtonElement)) return;
    if (!widget.contains(unpack)) return;
    const step = Number(unpack.getAttribute("data-routine-unpack-step"));
    const mode = unpack.getAttribute("data-routine-unpack-mode");
    if (!Number.isFinite(step) || (mode !== "day" && mode !== "night")) return;
    e.preventDefault();
    openSkinRoutineProductDetail(step, mode);
  });

  prev?.addEventListener(
    "click",
    (e) => {
      if (!widget.classList.contains("skin-routine-widget--show-routine") || !row) return;
      if (row.scrollLeft > 2) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      widget.classList.remove("skin-routine-widget--show-routine");
      if (routinePanel) routinePanel.setAttribute("aria-hidden", "true");
      if (introPanel) introPanel.setAttribute("aria-hidden", "false");
      window.requestAnimationFrame(() => {
        row.dispatchEvent(new Event("scroll"));
        syncRoutineChrome();
      });
    },
    true,
  );

  row?.addEventListener("scroll", syncRoutineChrome, { passive: true });
  row?.addEventListener("scrollend", syncRoutineChrome);

  setMode("day");
}

/** Matches product card horizontal stride (276px card + 8px gap in CSS). */
const PRODUCT_CAROUSEL_FALLBACK_STEP = 284;

function carouselScrollStepPx(row) {
  const cs = getComputedStyle(row);
  const gap = parseFloat(cs.columnGap || cs.gap || "8") || 8;
  const routineSlide = row.querySelector(".skin-routine-slide");
  if (routineSlide) {
    return Math.round(routineSlide.getBoundingClientRect().width + gap);
  }
  const hero = row.querySelector(".skin-routine-hero-card");
  if (hero) {
    return Math.round(hero.getBoundingClientRect().width + gap);
  }
  const card = row.querySelector(".product-card");
  if (!card) return PRODUCT_CAROUSEL_FALLBACK_STEP;
  return Math.round(card.getBoundingClientRect().width + gap);
}

function chevronCarouselSvg(direction) {
  const paths =
    direction === "prev"
      ? `<path d="m15 18-6-6 6-6" ${LUC.stroke}/>`
      : `<path d="m9 18 6-6-6-6" ${LUC.stroke}/>`;
  return LUC.svg(18, paths);
}

/**
 * @param {HTMLElement} host
 */
function wireProductCarousel(host) {
  const row = host.querySelector(".slide-row");
  const dotsRoot = host.querySelector(".carousel-dots");
  const prev = host.querySelector(".product-carousel__btn--prev");
  const next = host.querySelector(".product-carousel__btn--next");
  if (!row || !dotsRoot || !prev || !next) return;

  const sync = () => {
    const step = carouselScrollStepPx(row);
    const maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
    const idx = Math.min(
      dotsRoot.children.length - 1,
      Math.max(0, Math.round((row.scrollLeft + step * 0.15) / step)),
    );
    let i = 0;
    for (const dot of dotsRoot.querySelectorAll("span")) {
      dot.classList.toggle("is-active", i === idx);
      i += 1;
    }
    const routineWidget = host.closest("[data-skin-routine-widget]");
    const routineFirstStepBack =
      routineWidget instanceof HTMLElement &&
      routineWidget.classList.contains("skin-routine-widget--show-routine") &&
      row.scrollLeft <= 2;
    prev.disabled = routineFirstStepBack ? false : row.scrollLeft <= 2;
    next.disabled = row.scrollLeft >= maxScroll - 2;
  };

  prev.addEventListener("click", () => {
    const step = carouselScrollStepPx(row);
    row.scrollBy({ left: -step, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    const step = carouselScrollStepPx(row);
    row.scrollBy({ left: step, behavior: "smooth" });
  });
  row.addEventListener("scroll", sync, { passive: true });
  requestAnimationFrame(sync);
}

/**
 * U.S. retailer shortcuts for the “Where to buy” edge-case mock (links only to known storefronts).
 * @param {typeof PRODUCTS.luxury[0]} p
 */
function whereToBuyRetailerTiles(p) {
  const shadeQ = encodeURIComponent(`${p.brand} ${p.title} ${p.shadeLabel}`.replace(/\s+/g, " ").trim());
  if (p.brand === "Yves Saint Laurent") {
    return [
      { href: `https://www.amazon.com/s?k=${shadeQ}`, label: "Amazon", host: "amazon.com" },
      { href: "https://www.sephora.com/brand/yves-saint-laurent", label: "Sephora", host: "sephora.com" },
      { href: "https://www.yslbeautyus.com/", label: "YSL Beauty US", host: "yslbeautyus.com" },
    ];
  }
  return [
    { href: `https://www.amazon.com/s?k=${shadeQ}`, label: "Amazon", host: "amazon.com" },
    { href: "https://www.ulta.com/brand/maybelline", label: "Ulta Beauty", host: "ulta.com" },
    { href: `https://www.target.com/s?searchTerm=${shadeQ}`, label: "Target", host: "target.com" },
  ];
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function buildWhereToBuyMessageHtml(p) {
  const tiles = whereToBuyRetailerTiles(p);
  const tilesHtml = tiles
    .map(
      (t) => `<li class="where-buy__item">
      <a class="where-buy__link" href="${escapeAttr(t.href)}" target="_blank" rel="noopener noreferrer">
        <span class="where-buy__link-name">${escapeHtml(t.label)}</span>
        <span class="where-buy__link-host">${escapeHtml(t.host)}</span>
      </a>
    </li>`,
    )
    .join("");

  return `<div class="where-buy" data-assistant-stream="sequential">
    <div class="assistant-text">
      <p>
        Here is a quick way to get oriented in the <strong>U.S.</strong> for <strong>${escapeHtml(p.title)}</strong>
        <span class="where-buy__shade">(${escapeHtml(p.shadeLabel)})</span>. I can help you compare listings (price, shipping, minis vs. full size, return policies) and flag things to watch for with third-party sellers—I can not check out for you or see live inventory, but I can narrow options once you tell me what you care about most.
      </p>
    </div>
    <div class="assistant-text where-buy__retailers">
      <p class="where-buy__label">Places to start</p>
      <ul class="where-buy__list" role="list">${tilesHtml}</ul>
    </div>
    <div class="assistant-text where-buy__follow">
      <p>
        Want to keep going? Tell me if you would like <strong>other shades</strong> in the same finish, <strong>similar products</strong> at a different price point, or another round of <strong>try-on</strong> picks—I can pull a shortlist from here.
      </p>
    </div>
  </div>`;
}

function appendTyping() {
  removeTyping();
  const wrap = document.createElement("div");
  wrap.className = "msg msg--assistant";
  wrap.dataset.role = "typing";
  wrap.innerHTML = `<div class="typing" role="status" aria-live="polite" aria-label="ChatGPT is thinking"><span class="typing__dot" aria-hidden="true"></span></div>`;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

function removeTyping() {
  el.chatView.querySelectorAll('[data-role="typing"]').forEach((n) => n.remove());
}

function removeQuickReplies() {
  el.chatView.querySelectorAll('[data-role="quick"]').forEach((n) => n.remove());
}

function tierKeyFromLabel(label) {
  return label === "Luxury" ? "luxury" : "budget";
}

/** @param {'luxury'|'budget'} tier */
function labelForTier(tier) {
  return tier === "luxury" ? "Luxury" : "Budget-friendly";
}

function normalizeUserReply(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Typed “where can I buy…” style asks while the full-screen VTO shell is open (handled before panels close). */
function isWhereToBuyPurchaseIntent(text) {
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (/\b(where\s+can\s+i\s+buy|where\s+to\s+buy|where\s+do\s+i\s+buy|where\s+should\s+i\s+buy)\b/.test(n)) return true;
  if (/\b(where\s+can\s+we\s+buy|where\s+to\s+get\s+it|where\s+to\s+get\s+this|where\s+to\s+get\s+that)\b/.test(n)) return true;
  if (/\b(can\s+i\s+buy\s+(this|it|that|these)|how\s+can\s+i\s+buy|how\s+do\s+i\s+buy)\b/.test(n)) return true;
  if (/\b(links?\s+to\s+buy|buy\s+links?|purchase\s+(this|it|that)|shop\s+for\s+(this|it|that))\b/.test(n)) return true;
  if (/\b(where\s+is\s+it\s+sold|where\s+.*\s+sold|where\s+to\s+find\s+it|where\s+to\s+find\s+this)\b/.test(n)) return true;
  if (/\b(stockists?|retailers?)\b.*\b(where|find|link|buy)\b|\b(where|find|links?)\b.*\b(stockists?|retailers?)\b/.test(n)) return true;
  if (/\b(order\s+(this|it|that)|add\s+to\s+cart|checkout)\b/.test(n)) return true;
  return false;
}

/**
 * @returns {'luxury'|'budget'|'ambiguous'|null}
 */
function parseBudgetTierFromUserText(text) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (/\b(both|either\s+works|either\s+is\s+fine|you\s+choose|your\s+call|surprise\s+me)\b/i.test(n)) {
    return "ambiguous";
  }
  const luxuryRe =
    /\b(luxury|luxe|premium|splurge|high[\s-]end|prestige|designer|department\s+store|treat\s*myself|investment\s+pieces?|ysl|y\s*s\s*l|saint\s+laurent|splurging)\b/i;
  const budgetRe =
    /\b(budget(?:[\s-]friendly)?|drugstore|affordable|inexpensive|cheaper|cheapest|save\s+money|save\s+a\s+bit|lower\s*prices?|value\s*picks?|mass\s*market|drug\s+store|wallet[\s-]?friendly|mny|maybelline)\b/i;
  const hasL = luxuryRe.test(n);
  const hasB = budgetRe.test(n);
  if (hasL && hasB) return "ambiguous";
  if (hasL) return "luxury";
  if (hasB) return "budget";
  return null;
}

/**
 * After a tiered carousel, detect a request to browse the *other* price lane (many phrasings).
 * @param {'luxury'|'budget'} currentTier
 * @returns {'luxury'|'budget'|null}
 */
function parseOppositeTierCarouselIntent(text, currentTier) {
  const n = normalizeUserReply(text);
  if (!n) return null;

  const explicit = parseBudgetTierFromUserText(text);
  if (explicit === "ambiguous") return null;
  if (explicit === "luxury" && currentTier === "budget") return "luxury";
  if (explicit === "budget" && currentTier === "luxury") return "budget";
  if (explicit !== null) return null;

  const wantsBrowse =
    /\b(show|see|want|looking\s+for|give\s+me|pull\s+up|load|switch|try|what\s+about|how\s+about|can\s+i|could\s+i|may\s+i|let'?s\s+see|hit\s+me\s+with|bring\s+out|surface|more)\b/i.test(
      n,
    );
  if (!wantsBrowse) return null;

  const otherLane =
    /\b(the\s+)?other\s+(category|lane|line|side|price\s*point|price\s*range|tier|options?|picks?|ones?|group|kind)\b/i.test(n) ||
    /\b(show\s+me\s+)?the\s+other\b/i.test(n) ||
    /\b(opposite\s+((price|price\s*range)|lane|end|side|category))\b/i.test(n) ||
    /\b(different\s+(lane|tier|price\s*point|range|brands?))\b/i.test(n) ||
    /\b(not\s+these|something\s+different|(switch|move)\s+(lanes?|tiers?))\b/i.test(n) ||
    /\b(the\s+)?other\s+end\b/i.test(n);

  if (otherLane) return currentTier === "luxury" ? "budget" : "luxury";

  return null;
}

/** Short line after product carousels inviting the opposite lane. */
function oppositeLaneInviteHtml(tierShown, catalog) {
  const isLux = tierShown === "luxury";
  if (catalog === "foundation") {
    const invite = isLux
      ? "If you like, I can also pull a few <strong>budget-friendly</strong> foundation matches—say <strong>“show me budget foundations”</strong>, <strong>“drugstore options,”</strong> or ask for the <strong>other price range</strong>."
      : "If you like, I can also show you some <strong>luxury foundation</strong> ideas—say <strong>“luxury picks,”</strong> <strong>“high-end lane,”</strong> or ask for the <strong>other price range</strong>.";
    return `<p style="margin:12px 0 0">${invite}</p>`;
  }
  const invite = isLux
    ? "If you like, I can show you some <strong>budget-friendly</strong> lip options as well—think <strong>drugstore-friendly</strong> picks. Try <strong>“budget ones,”</strong> <strong>“Maybelline,”</strong> or <strong>“the other lane.”</strong>"
    : "If you like, I can show you some more <strong>luxury lip</strong> options as well—premium finishes in the lane you have not browsed yet. Try <strong>“luxury picks,”</strong> <strong>“luxe ones,”</strong> or <strong>“the other lane.”</strong>";
  return `<p style="margin:12px 0 0">${invite}</p>`;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {{ switched?: boolean }} [opts]
 */
function lipResultsCopyForCarousel(tier, opts = {}) {
  if (!opts.switched) return resultsCopy(labelForTier(tier));
  const isLux = tier === "luxury";
  return `
    <p style="margin:0 0 10px">Here ${isLux ? "are a few <strong>luxury</strong> lip ideas" : "are some <strong>budget-friendly</strong> lip picks"} in the same vibe—pulled from the <strong>${isLux ? "luxe" : "value"}</strong> lane you asked for. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to compare finishes and undertones live.</p>
  `;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {{ switched?: boolean }} [opts]
 */
function foundationResultsCopyForCarousel(tier, opts = {}) {
  if (!opts.switched) return foundationResultsCopy(tier);
  const isLux = tier === "luxury";
  return `
    <p style="margin:0 0 10px">Here ${isLux ? "are some <strong>luxury</strong> foundation ideas" : "are a few <strong>budget-friendly</strong> foundation picks"}—switched to the <strong>${isLux ? "premium" : "drugstore-friendly"}</strong> lane you requested. <span aria-hidden="true">🧴</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to keep comparing, or tell me your undertone, coverage, and finish and I will narrow this down further.</p>
  `;
}

/**
 * @returns {'confirm'|'decline'|null}
 */
function parseTryOnConfirmFromUserText(text) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (
    /^(no+|nope|nah|not\s+now|not\s+yet|maybe\s+later|later|pass|skip|cancel|stop)\b/i.test(n) ||
    /\b(no\s+thanks|not\s+interested)\b/i.test(n) ||
    /\b(don'?t|do\s+not)\s+(want|need|think)\b/i.test(n) ||
    /\bchanged\s+my\s+mind\b/i.test(n)
  ) {
    return "decline";
  }
  if (
    /^y(es|eah|ep|up)?\b/i.test(n) ||
    /^sure\b/i.test(n) ||
    /^ok(ay)?\b/i.test(n) ||
    /^please\b/i.test(n) ||
    n === "y" ||
    /\b(continue|go\s*ahead|let'?s\s*go|lets\s*go|do\s*it|proceed|launch(\s+it)?|open(\s+it)?|i'?m\s*ready|im\s*ready|sounds?\s+good|absolutely|certainly)\b/i.test(n) ||
    /\baye\b/i.test(n)
  ) {
    return "confirm";
  }
  return null;
}

/**
 * @param {string | null} lockedConcernId set when the routine prompt was opened from a specific results card
 * @returns {'single'|'all'|'decline'|null}
 */
function parseSkinRoutineIntent(text, lockedConcernId = null) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (/\b(no|not now|later|skip|pass|no thanks|not interested)\b/i.test(n)) return "decline";

  const explicitAll =
    /\b(general\s+routine|full\s+routine|complete\s+routine|all\s+concerns?|all\s+my\s+concerns?|every\s+concern|top\s+concerns?|top\s+scores?|all\s+scores?|overall\s+routine|across\s+my\s+concerns?|big\s+picture|whole\s+face|everything)\b/i.test(
      n,
    ) || /\bgeneral\b/i.test(n);
  const explicitSingle =
    /\b(targeted\s+routine|specific\s+routine|single\s+concern|this\s+concern|that\s+concern|focused\s+routine|just\s+this|only\s+this|only\s+one|narrow\s+focus)\b/i.test(n) ||
    /\b(this|that)\s+one\b/i.test(n) ||
    /\btargeted\b/i.test(n) ||
    /\bspecific\b/i.test(n);

  if (explicitAll && !explicitSingle) return "all";
  if (explicitSingle && !explicitAll) return "single";

  if (lockedConcernId) {
    const concern = SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === lockedConcernId);
    if (concern) {
      const titleLc = concern.title.toLowerCase();
      const compact = n.replace(/[^a-z0-9]+/g, "");
      const titleCompact = titleLc.replace(/[^a-z0-9]+/g, "");
      if (titleCompact.length > 3 && compact.includes(titleCompact)) return "single";
      const words = titleLc
        .split(/[^a-z0-9]+/)
        .map((w) => w.trim())
        .filter((w) => w.length > 2);
      for (const w of words) {
        if (n.includes(w)) return "single";
      }
    }
    if (explicitAll) return "all";
    if (explicitSingle) return "single";
    if (/\b(routine|regimen|recommend|recommendation|products?|show|go|please)\b/i.test(n)) return "single";
    if (/^(y|yes|yeah|yep|sure|ok|okay|please)\b/i.test(n)) return "single";
    return null;
  }

  if (explicitAll) return "all";
  if (explicitSingle) return "single";
  if (/\b(all|overall)\b/i.test(n)) return "all";
  if (/\b(this concern|that concern|focused|focus|just this)\b/i.test(n)) return "single";
  if (/\b(routine|regimen|recommend|recommendation|products?)\b/i.test(n)) return "all";
  return null;
}

function isNewRoutineShortcut(text) {
  return /\bnew\s+routine\b/i.test(normalizeUserReply(text));
}

/** Typed “VTO” alone opens full try-on with the chat shortcut placeholder face. */
function isVtoChatShortcut(text) {
  return normalizeUserReply(text) === "vto";
}

function vtoChatShortcutAssistantHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 10px">Opening <strong>Virtual Try-On</strong> with the sample photo—use shades, the before/after slider, and the view toggle as usual.</p>
    <p style="margin:0">Say <strong>VTO</strong> again anytime to jump back here with the same demo face.</p>
  </div>`;
}

/** Clears persisted session selfie when it is a blob URL (before replacing with an asset path). */
function releasePersistedSelfieBlobIfAny() {
  const u = sessionPersistedSelfieUrl;
  if (u && u.startsWith("blob:")) {
    URL.revokeObjectURL(u);
  }
  sessionPersistedSelfieUrl = null;
}

/** Opens the full-screen try-on panel from chat using {@link VTO_CHAT_SHORTCUT_SELFIE}. */
function launchVtoTryOnFromChatShortcut() {
  releasePersistedSelfieBlobIfAny();
  revokeVtoSelfiePreview();
  sessionPersistedSelfieUrl = VTO_CHAT_SHORTCUT_SELFIE;
  vtoSelfiePreviewUrl = null;
  tryOnFromChatSingleProduct = false;
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  applySelfieStubSkinDiagUi(false);
  if (!vtoSelectedProductKey) {
    vtoSelectedProductKey = { tier: "luxury", index: 0, catalog: "lips" };
  }
  tryOnUseReferenceModel = false;
  prepareVtoShellVisible();
  showVtoTryOn();
}

function budgetTierClarifyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I am not quite sure which lane you want yet—and that is completely fine.</p>
    <p style="margin:0">Reply in the chat in whatever way feels natural. For <strong>luxury</strong>, you might say “luxury,” “luxe,” “premium,” or “happy to splurge.” For <strong>budget-friendly</strong>, phrases like “drugstore,” “affordable,” “save a bit,” or “lower price” all work. Pick one direction and I will pull your shortlist.</p>
  </div>`;
}

function tryOnConfirmClarifyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I want to be sure I open try-on at the right moment—could you give me a quick signal in your own words?</p>
    <p style="margin:0">A <strong>yes</strong> might sound like “yes,” “sure,” “go ahead,” “continue,” “please open it,” or “I am ready.” If you would rather stay in chat for now, something like <strong>“not now,” “later,”</strong> or <strong>“no thanks”</strong> is perfect.</p>
  </div>`;
}

/** @param {ProductCatalogId} catalog @param {'luxury'|'budget'} tier */
function getProductList(catalog, tier) {
  if (catalog === "foundation") return FOUNDATION_PRODUCTS[tier];
  return PRODUCTS[tier];
}

function isFoundationRequest(text) {
  return /\b(foundations?|foundation\b|skin tint|tinted moisturizer|bb\s*cream|cc\s*cream|complexion product)\b/i.test(text);
}

const NAMED_TRY_ON_INTENT = /\b(try\s*on|virtual\s*try[\s-]?on)\b/i;

function normalizeCatalogMention(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\u2013|\u2014/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * User names an exact catalog title + shade and asks to try it on.
 * @returns {{ tier: 'luxury'|'budget'; index: number; catalog: ProductCatalogId } | null}
 */
function matchNamedProductTryOnRequest(text) {
  if (!NAMED_TRY_ON_INTENT.test(text)) return null;
  const n = normalizeCatalogMention(text);
  /** @type {ProductCatalogId[]} */
  const catalogs = ["lips", "foundation"];
  for (const catalog of catalogs) {
    for (const tier of /** @type {const} */ (["luxury", "budget"])) {
      const list = getProductList(catalog, tier);
      for (let i = 0; i < list.length; i += 1) {
        const p = list[i];
        const t = normalizeCatalogMention(p.title);
        const sh = normalizeCatalogMention(p.shadeLabel);
        if (!t || !sh) continue;
        if (n.includes(t) && n.includes(sh)) {
          return { tier, index: i, catalog };
        }
      }
    }
  }
  return null;
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function namedTryOnConfirmAssistantHtml(p) {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">That is a great pick—<strong>${escapeHtml(p.title)}</strong> in <strong>${escapeHtml(
    p.shadeLabel,
  )}</strong> is in our try-on catalog, and I would love to help you see it on you.</p>
    <p style="margin:0 0 12px">Next is the <strong>Makeup Try-On</strong> experience. If we have already covered the privacy step or a selfie in this chat, I will skip ahead where I can; otherwise I will walk you through the quick setup.</p>
    <p style="margin:0">When you are ready for me to open try-on, send a short message here—<strong>“yes,” “sure,” “go ahead,” “continue,”</strong> or <strong>“I am ready”</strong> all work. If you want to pause, just say something like <strong>“not now”</strong> or <strong>“later.”</strong></p>
  </div>`;
}

function starSvg(filled) {
  const cls = filled ? "star" : "star star--muted";
  return `<svg class="${cls} lucide" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.906l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.43a2.12 2.12 0 0 0-1.973 0l-4.618 2.43a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.756a2.12 2.12 0 0 0 1.605-1.164z"
      fill="${filled ? "currentColor" : "none"}"
      stroke="${filled ? "none" : "currentColor"}"
      stroke-width="${filled ? 0 : 1.5}"
      stroke-linejoin="round"
    />
  </svg>`;
}

function ratingRowHTML(p) {
  const r = p.rating;
  const filled = Math.min(5, Math.max(0, Math.round(r)));
  const stars = [];
  for (let i = 0; i < 5; i += 1) stars.push(starSvg(i < filled));
  const starsHtml = stars.join("");
  return `
    <div class="rating-row">
      <span class="rating-row__stars">${starsHtml}</span>
      <span>${r.toFixed(1)}</span>
      <span aria-hidden="true">/</span>
      <span>5</span>
      <span class="rating-row__count">(${escapeHtml(p.ratingCount)})</span>
    </div>`;
}

function tagsHTML(tags) {
  return tags
    .map(
      (t) => `
    <span class="tag-chip">
      ${escapeHtml(t.label)}
    </span>`,
    )
    .join("");
}

function productCardHTML(p, tier, index, catalog = "lips") {
  const brandAttr = p.brand === "Maybelline" ? ` data-brand="maybelline"` : "";
  return `
    <article class="product-card" aria-label="${escapeAttr(p.title)}" data-tier="${tier}" data-product-index="${index}" data-catalog="${catalog}"${brandAttr}>
      <div class="product-card__header" aria-hidden="true"></div>
      <div class="product-card__content">
        <div class="product-card__media">
          <img class="product-card__photo" src="${escapeAttr(p.cardImage)}" alt="${escapeAttr(p.title)}" width="120" height="120" loading="lazy" decoding="async" />
        </div>
        <h3 class="product-card__title">${escapeHtml(p.title)}</h3>
        <div class="product-card__tag-row">
          <span class="tag-chip product-card__shade-tag">
            <span class="tag-chip__dot" style="background:${escapeAttr(p.swatch)};"></span>
            ${escapeHtml(p.shadeLabel)}
          </span>
        </div>
      </div>
      <div class="product-card__footer">
        <button type="button" class="btn-primary-lg product-card__btn-primary vto-open">
          <span>Virtual Try-On</span>
          <img class="product-card__vto-mirror-icon" src="${VTO_MIRROR_SRC}" width="20" height="20" alt="" aria-hidden="true" decoding="async" />
        </button>
        <button type="button" class="product-card__learn" aria-label="Learn more about ${escapeAttr(p.title)}">Learn more</button>
      </div>
    </article>`;
}

function carouselDotsHTML(count, activeIndex) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    parts.push(`<span${i === activeIndex ? ' class="is-active"' : ""}></span>`);
  }
  return `<div class="carousel-dots" role="tablist" aria-label="Slides">${parts.join("")}</div>`;
}

/** @param {string} imageUrl */
function skinDiagResultsPeekInlineHtml(imageUrl) {
  return `<button type="button" class="skin-diag-results-peek skin-diag-results-peek--inline" data-skin-diag-results-reopen aria-label="Open your skin diagnosis results">
    <span class="skin-diag-results-peek__thumb-wrap">
      <img class="skin-diag-results-peek__img" src="${escapeAttr(imageUrl)}" alt="" width="44" height="44" decoding="async" />
    </span>
    <span class="skin-diag-results-peek__copy">
      <strong class="skin-diag-results-peek__title">Skin results</strong>
      <span class="skin-diag-results-peek__sub">Tap to reopen</span>
    </span>
  </button>`;
}

/**
 * @param {{ title: string, blurb: string } | null} concern
 * @param {{ showSkinResultsShortcut?: boolean }} [opts] When true, appends reopen control (uses {@link skinDiagResultsPeekUrl}).
 */
function skinRoutinePromptHtml(concern, opts = {}) {
  const concernLabel = concern ? concern.title : "your skin concern";
  const concernBlurb = concern ? concern.blurb : "I can break this down in plain language and tailor the next steps.";
  const peek =
    opts.showSkinResultsShortcut && skinDiagResultsPeekUrl
      ? skinDiagResultsPeekInlineHtml(skinDiagResultsPeekUrl)
      : "";
  return `<div class="assistant-text">
    <p style="margin:0 0 10px"><strong>${escapeHtml(concernLabel)}</strong> is one of your highlighted areas.</p>
    <p style="margin:0 0 12px">${escapeHtml(concernBlurb)}</p>
    <p style="margin:0">Want a <strong>general routine</strong> (for example <strong>top concerns</strong>, <strong>all concerns</strong>, or <strong>general routine</strong>) across your scores, or a <strong>targeted routine</strong> focused on this one? Reply naturally—<strong>targeted</strong>, <strong>this concern only</strong>, or naming the concern works for targeted; <strong>general</strong> or <strong>all concerns</strong> keeps the full picture.</p>
  </div>${peek}`;
}

function getSkinRoutineHeroImage() {
  const selfie = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (selfie) return selfie;
  if (skinRoutineFallbackImageUrl) return skinRoutineFallbackImageUrl;
  const pool = ["assets/tryon-reference-model.png", "assets/ysl-1.jpg", "assets/ysl-2.jpg", "assets/mny-2.jpg"];
  skinRoutineFallbackImageUrl = pool[Math.floor(Math.random() * pool.length)];
  return skinRoutineFallbackImageUrl;
}

/** @param {{ title:string, score:number, scoreMax?: number, severity?: string }[]} top3 */
function skinRoutineHeroCardHTML(top3) {
  const imageUrl = getSkinRoutineHeroImage();
  const metricsClass = top3.length === 1 ? " skin-routine-hero__metrics--single" : "";
  const r = 22;
  const circum = 2 * Math.PI * r;
  const bubbles = top3
    .map((c) => {
      const max = c.scoreMax ?? 40;
      const pct = Math.min(1, c.score / max);
      const dash = circum * pct;
      const sev = skinRoutineDisplaySeverity(c.score, max, c.severity);
      return `
      <div class="skin-routine-hero__metric">
        <div class="skin-routine-hero__ring" aria-hidden="true">
          <svg class="skin-routine-hero__ring-svg" viewBox="0 0 56 56" width="72" height="72">
            <circle class="skin-routine-hero__ring-track" cx="28" cy="28" r="${r}" fill="none" stroke-width="5" />
            <circle class="skin-routine-hero__ring-progress" cx="28" cy="28" r="${r}" fill="none" stroke-width="5"
              stroke-dasharray="${dash} ${circum}" stroke-linecap="round" transform="rotate(-90 28 28)" />
          </svg>
          <span class="skin-routine-hero__ring-num">${c.score}</span>
        </div>
        <p class="skin-routine-hero__metric-severity">${escapeHtml(sev)}</p>
        <p class="skin-routine-hero__metric-title">${escapeHtml(c.title)}</p>
      </div>`;
    })
    .join("");
  return `
    <article class="skin-routine-hero-card">
      <div class="skin-routine-hero__image-wrap">
        <img class="skin-routine-hero__image" src="${escapeAttr(imageUrl)}" alt="" decoding="async" />
        <h3 class="skin-routine-hero__title">Your Curated Routine</h3>
      </div>
      <div class="skin-routine-hero__metrics${metricsClass}">${bubbles}</div>
      <div class="skin-routine-hero__footer">
        <button type="button" class="btn-primary-lg skin-routine-hero__cta" data-routine-see>See routine</button>
      </div>
    </article>`;
}

/** @param {typeof SKIN_ROUTINE_STEPS[number]} step @param {number} index @param {number} total */
function skinRoutineStepCardHTML(step, index, total) {
  const panel = (mode, data) => `
    <div class="skin-routine-product-panel" data-routine-panel="${mode}"${mode === "night" ? " hidden" : ""}>
      <article class="product-card skin-routine-product-card">
        <div class="product-card__header">
          <span class="skin-routine-product-card__match">${data.match}% match</span>
        </div>
        <div class="product-card__content">
          <div class="product-card__media">
            <img class="product-card__photo" src="${escapeAttr(data.image)}" alt="" width="120" height="120" loading="lazy" decoding="async" />
          </div>
          <p class="skin-routine-product-card__brand">${escapeHtml(data.brand)}</p>
          <h3 class="product-card__title">${escapeHtml(data.title)}</h3>
          <div class="product-card__tag-row">
            ${data.tags.map((t) => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
        <div class="product-card__footer">
          <button type="button" class="btn-primary-lg product-card__btn-primary skin-routine-product-card__cta" data-routine-unpack data-routine-unpack-step="${index}" data-routine-unpack-mode="${mode}">
            <span>Unpack my match</span>
            <span class="skin-routine-product-card__cta-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17 17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </article>
    </div>`;
  return `
    <div class="skin-routine-slide" data-step-label="${escapeAttr(step.step)}" data-step-part="${index + 1}" data-step-total="${total}">
      ${panel("day", step.day)}
      ${panel("night", step.night)}
    </div>`;
}

/** @param {'single'|'all'} mode @param {string|null} concernId */
function buildSkinRoutineCarouselBlock(mode, concernId) {
  const mapHero = (c) => ({ title: c.title, score: c.score, scoreMax: c.scoreMax, severity: c.severity });
  const top3 =
    mode === "single" && concernId
      ? (() => {
          const one = SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === concernId);
          return one ? [mapHero(one)] : [...SKIN_DIAG_FAKE_CONCERNS].sort((a, b) => b.score - a.score).slice(0, 3).map(mapHero);
        })()
      : [...SKIN_DIAG_FAKE_CONCERNS].sort((a, b) => b.score - a.score).slice(0, 3).map(mapHero);
  const focus = concernId ? SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === concernId) : null;
  const introHtml = skinRoutineHeroCardHTML(top3);
  const total = SKIN_ROUTINE_STEPS.length;
  const slideParts = [];
  for (let i = 0; i < total; i += 1) {
    slideParts.push(skinRoutineStepCardHTML(SKIN_ROUTINE_STEPS[i], i, total));
  }
  const followUpHtml =
    mode === "single" && focus
      ? `<div class="assistant-text" style="margin-top:14px">
    <p style="margin:0 0 10px">I matched these steps to your profile with extra weight on <strong>${escapeHtml(focus.title)}</strong>, so the flow stays coherent without stacking conflicting actives.</p>
    <p style="margin:0">If you would rather bias toward different brands, textures, or price points, tell me what you are optimizing for and I can suggest alternates for any slot.</p>
  </div>`
      : `<div class="assistant-text" style="margin-top:14px">
    <p style="margin:0 0 10px">I mapped cleanse, treat, moisturize, and a finishing SPF to your top scores so the lineup reads sensibly from a formulation angle—not only “what is trending.”</p>
    <p style="margin:0">If you want parallel picks (gentler options, drugstore equivalents, or a splurge upgrade in one step), say what you would like to lean into and we can swap ideas.</p>
  </div>`;
  return `
    <div class="vto-attribution skin-routine-attribution">
      <span class="vto-attribution__icon"><img src="assets/skin-diag-icon.png" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <section class="skin-routine-widget" data-skin-routine-widget data-mode="day">
      <div class="skin-routine-widget__stage">
        <div class="skin-routine-widget__panels">
          <div class="skin-routine-widget__panel skin-routine-widget__panel--intro" data-routine-intro aria-hidden="false">
            ${introHtml}
          </div>
          <div class="skin-routine-widget__panel skin-routine-widget__panel--routine" data-routine-routine aria-hidden="true">
            <div class="skin-routine-routine-inner">
              <div class="skin-routine-widget__chrome" data-routine-chrome>
                <div class="skin-routine-widget__toggle" role="tablist" aria-label="Routine mode">
                  <button type="button" class="skin-routine-widget__toggle-btn is-active" data-routine-toggle="day" aria-selected="true">Day</button>
                  <button type="button" class="skin-routine-widget__toggle-btn" data-routine-toggle="night" aria-selected="false">Night</button>
                </div>
                <div class="skin-routine-widget__step-row">
                  <h3 class="skin-routine-widget__step-title" data-routine-step-label>Cleanse</h3>
                  <span class="skin-routine-widget__step-index" data-routine-step-index>1/${total}</span>
                </div>
              </div>
              <div class="product-carousel skin-routine-carousel" data-product-carousel>
                <div class="product-carousel__strip">
                  <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous routine cards">
                    <svg class="lucide lucide--16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                  <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next routine cards">
                    <svg class="lucide lucide--16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                  <div class="slide-row">${slideParts.join("")}</div>
                </div>
                ${carouselDotsHTML(total, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${followUpHtml}`;
}

function convActionsHTML() {
  const icon = (paths, label) =>
    `<button type="button" aria-label="${label}">${LUC.svg(16, paths)}</button>`;
  const s = LUC.stroke;
  return `
    <div class="conv-actions">
      ${icon(
        `<rect width="14" height="14" x="8" y="8" rx="2" ry="2" ${s}/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" ${s}/>`,
        "Copy",
      )}
      ${icon(
        `<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" ${s}/><path d="M19 10v2a7 7 0 0 1-14 0v-2" ${s}/><path d="M12 19v3" ${s}/><path d="M8 22h8" ${s}/>`,
        "Read aloud",
      )}
      ${icon(
        `<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" ${s}/><path d="M7 10v12" ${s}/>`,
        "Good response",
      )}
      ${icon(
        `<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" ${s}/><path d="M17 14V2" ${s}/>`,
        "Bad response",
      )}
      ${icon(
        `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" ${s}/><path d="M21 3v5h-5" ${s}/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" ${s}/><path d="M8 16H3v5" ${s}/>`,
        "Regenerate",
      )}
      ${icon(
        `<circle cx="18" cy="5" r="3" ${s}/><circle cx="6" cy="12" r="3" ${s}/><circle cx="18" cy="19" r="3" ${s}/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" ${s}/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" ${s}/>`,
        "Share",
      )}
    </div>`;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {typeof PRODUCTS.luxury} list
 * @param {string} modelResponseInnerHtml
 * @param {ProductCatalogId} catalog
 */
function buildProductCarouselBlock(tier, list, modelResponseInnerHtml, catalog) {
  const cards = list.map((p, i) => productCardHTML(p, tier, i, catalog)).join("");

  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${VTO_TRYON_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Makeup Try-On</span>
    </div>
    <div class="product-carousel" data-product-carousel>
      <div class="product-carousel__strip">
        <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous products">
          ${chevronCarouselSvg("prev")}
        </button>
        <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next products">
          ${chevronCarouselSvg("next")}
        </button>
        <div class="slide-row" role="list">${cards}</div>
      </div>
      ${carouselDotsHTML(list.length, 0)}
    </div>
    <div class="model-response">${modelResponseInnerHtml}${oppositeLaneInviteHtml(tier, catalog)}</div>
    ${convActionsHTML()}
  `;
}

function buildCarousel(label, switched = false) {
  const tier = tierKeyFromLabel(label);
  return buildProductCarouselBlock(tier, PRODUCTS[tier], lipResultsCopyForCarousel(tier, { switched }), "lips");
}

/** @param {'luxury'|'budget'} tier */
function foundationResultsCopy(tier) {
  const isLux = tier === "luxury";
  const vibe = isLux
    ? "I loaded a few <strong>luxe</strong> foundation ideas—finishes from sheer tint to full matte—still in the <strong>luxury</strong> lane you picked earlier."
    : "I loaded a few <strong>budget-friendly</strong> foundation picks—strong shade ranges—still in the <strong>budget-friendly</strong> lane you picked earlier.";
  return `
    <p style="margin:0 0 10px">${vibe} <span aria-hidden="true">🧴</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to keep comparing, or tell me your undertone, coverage, and finish and I will narrow this down further.</p>
  `;
}

/** @param {'luxury'|'budget'} tier @param {boolean} [switched] */
function buildFoundationCarouselBlock(tier, switched = false) {
  return buildProductCarouselBlock(
    tier,
    FOUNDATION_PRODUCTS[tier],
    foundationResultsCopyForCarousel(tier, { switched }),
    "foundation",
  );
}

function resultsCopy(label) {
  const isLux = label === "Luxury";
  if (isLux) {
    return `
      <p style="margin:0 0 10px">I loaded a few <strong>luxe</strong> lip options—gloss, satin, and matte finishes—in the <strong>pinky nude</strong> family you asked about. <span aria-hidden="true">💄</span></p>
      <p style="margin:0">On any card, tap <strong>Virtual Try-On</strong> to compare finishes and undertones live.</p>
    `;
  }
  return `
    <p style="margin:0 0 10px">I loaded a few <strong>budget-friendly</strong> lip options—gloss, liquid matte, and satin—easy ways to try pinky nudes. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Use <strong>Virtual Try-On</strong> on a card to see how each reads on you.</p>
  `;
}

function buildResultsBlock(label, switched = false) {
  return buildCarousel(label, switched);
}

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replaceAll("\n", " ");
}

function enterChatView() {
  if (view === "chat") {
    el.entryView.hidden = true;
    el.chatView.hidden = false;
    return;
  }
  view = "chat";
  el.entryView.hidden = true;
  el.chatView.hidden = false;
}

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function assistantThink() {
  appendTyping();
  await wait(2000 + Math.random() * 600);
  removeTyping();
}

function budgetQuestionHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I would love to help you find something that feels right—once I know how you like to shop, I can line up picks that actually fit.</p>
    <p style="margin:0 0 12px">Are you leaning toward something more <strong>budget-friendly</strong> (think drugstore-friendly picks and gentler price points), or would you like me to focus on <strong>luxury</strong> options (premium brands and higher price points)?</p>
    <p style="margin:0">Just type your answer in the chat—you do not need exact wording. For example <strong>“luxury”</strong> or <strong>“luxe”</strong> points me upscale; <strong>“budget,”</strong> <strong>“drugstore,”</strong> or <strong>“affordable”</strong> keeps things wallet-friendly.</p>
  </div>`;
}

function genericAssistantReply() {
  return `<div class="assistant-text">Tell me what you are trying to shop for (product type, finish, undertone), and I will pull a tight shortlist.</div>`;
}

function chatbotTieredFollowUpHtml() {
  const lane = chatPreferredTier === "luxury" ? "luxury" : "budget-friendly";
  const otherHint =
    chatPreferredTier === "luxury"
      ? "Want <strong>budget-friendly</strong> picks instead? Say something like <strong>“show me budget ones”</strong> or <strong>“drugstore options.”</strong>"
      : "Want <strong>luxury</strong> picks instead? Try <strong>“show me luxury options”</strong> or <strong>“luxe / high-end ones.”</strong>";
  return `<div class="assistant-text"><p style="margin:0 0 10px">I still have you in the <strong>${lane}</strong> lane from earlier. Ask for another category (foundations, mascaras, concealers), a shade tweak, or where to shop—I will keep answers focused.</p><p style="margin:0">${otherHint}</p></div>`;
}

function prepareVtoShellVisible() {
  closeProductDetail();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  setVtoComposerChrome(true);
  syncVtoExperienceBrandUi();
}

function launchVtoAfterTryOnConfirm() {
  tryOnFromChatSingleProduct = true;
  vtoSkinBrandExperienceActive = false;
  prepareVtoShellVisible();
  if (!vtoUserAcceptedTerms) {
    showVtoTermsOnly();
    el.vtoTermsCheckbox.checked = false;
    syncVtoConsentButton();
    requestAnimationFrame(() => el.vtoTermsClose.focus());
    return;
  }
  const selfieReady = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (selfieReady) {
    if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
    showVtoTryOn();
    return;
  }
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

async function sendUserMessage(text, promptMeta) {
  const trimmed = text.trim();
  if (!trimmed) return;
  if (flow === "busy") return;

  const vtoWhereBuyProduct =
    !el.vtoFlow.hidden &&
    !skinDiagFlowActive &&
    !vtoSkinBrandExperienceActive &&
    chatMode === "makeup" &&
    isWhereToBuyPurchaseIntent(trimmed) &&
    hasVtoProductContextForWhereBuy()
      ? productForWhereToBuyFromDetail()
      : null;

  closeVtoFlow();
  closeProductDetail();
  enterChatView();

  chatGenerationEpoch += 1;
  const myGen = chatGenerationEpoch;

  removeQuickReplies();

  if (vtoWhereBuyProduct) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildWhereToBuyMessageHtml(vtoWhereBuyProduct));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (isVtoChatShortcut(trimmed)) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    chatAwaitingTryOnConfirm = false;
    chatAwaitingSkinDiagConfirm = false;
    chatAwaitingBudgetTierReply = false;
    chatAwaitingSkinRoutineChoice = false;
    chatSkinRoutineConcernId = null;
    if (chatMode !== "makeup") {
      chatMode = "makeup";
      updateEntryChromeForChatMode();
    }
    if (composerSelectedApp === "skin_diag") {
      composerSelectedApp = null;
      syncComposerAppPill();
    }
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(vtoChatShortcutAssistantHtml());
    flow = "idle";
    updateComposerTextState();
    launchVtoTryOnFromChatShortcut();
    return;
  }

  if (isNewRoutineShortcut(trimmed)) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    chatAwaitingTryOnConfirm = false;
    chatAwaitingSkinDiagConfirm = false;
    chatAwaitingBudgetTierReply = false;
    chatAwaitingSkinRoutineChoice = false;
    chatSkinRoutineConcernId = null;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildSkinRoutineCarouselBlock("all", null));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatAwaitingTryOnConfirm) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const choice = parseTryOnConfirmFromUserText(trimmed);
    if (choice === null) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(tryOnConfirmClarifyHtml());
      flow = "idle";
      updateComposerTextState();
      return;
    }
    chatAwaitingTryOnConfirm = false;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    if (choice === "decline") {
      appendAssistantBlock(
        `<div class="assistant-text"><p style="margin:0">No problem—whenever you want to try that look, ask again with the same product and shade and we will pick it up from here.</p></div>`,
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
    flow = "idle";
    updateComposerTextState();
    launchVtoAfterTryOnConfirm();
    return;
  }

  if (chatAwaitingSkinDiagConfirm) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const skinChoice = parseTryOnConfirmFromUserText(trimmed);
    if (skinChoice === null) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(tryOnConfirmClarifyHtml());
      flow = "idle";
      updateComposerTextState();
      return;
    }
    chatAwaitingSkinDiagConfirm = false;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    if (skinChoice === "decline") {
      appendAssistantBlock(
        `<div class="assistant-text"><p style="margin:0">No problem—whenever you want to run a skin check-in, say <strong>Analyze my skin</strong> again (or describe what you are seeing) and we will pick it up from here.</p></div>`,
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
    flow = "idle";
    updateComposerTextState();
    launchSkinDiagAfterConfirm();
    return;
  }

  if (chatAwaitingSkinRoutineChoice) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const routineChoice = parseSkinRoutineIntent(trimmed, chatSkinRoutineConcernId);
    if (routineChoice === null) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      const concern = chatSkinRoutineConcernId
        ? SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === chatSkinRoutineConcernId) || null
        : null;
      appendAssistantBlock(skinRoutinePromptHtml(concern, { showSkinResultsShortcut: !!skinDiagResultsPeekUrl }));
      flow = "idle";
      updateComposerTextState();
      return;
    }
    chatAwaitingSkinRoutineChoice = false;
    const focusConcernId = chatSkinRoutineConcernId;
    chatSkinRoutineConcernId = null;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    if (routineChoice === "decline") {
      appendAssistantBlock(
        `<div class="assistant-text"><p style="margin:0">Totally fine. If you want it later, say <strong>build my routine</strong> and I will pick it up from your latest skin results.</p></div>`,
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
    appendAssistantBlock(buildSkinRoutineCarouselBlock(routineChoice, focusConcernId));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatAwaitingBudgetTierReply) {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const tierParsed = parseBudgetTierFromUserText(trimmed);
    if (tierParsed === null || tierParsed === "ambiguous") {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(budgetTierClarifyHtml());
      flow = "idle";
      updateComposerTextState();
      return;
    }
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    chatPreferredTier = tierParsed;
    const pending = chatPendingCarousel;
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    if (pending === "foundation") {
      appendAssistantBlock(buildFoundationCarouselBlock(tierParsed));
      chatLastProductCarouselCatalog = "foundation";
    } else {
      appendAssistantBlock(buildResultsBlock(labelForTier(tierParsed)));
      chatLastProductCarouselCatalog = "lips";
    }
    flow = "idle";
    updateComposerTextState();
    return;
  }

  const product = isProductMessage(trimmed, promptMeta);
  const foundationAsk = isFoundationRequest(trimmed);

  if (!(product && foundationAsk && !chatPreferredTier)) {
    chatPendingCarousel = null;
  }

  const namedTryOn = chatMode === "makeup" ? matchNamedProductTryOnRequest(trimmed) : null;
  if (namedTryOn) {
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    vtoSelectedProductKey = { tier: namedTryOn.tier, index: namedTryOn.index, catalog: namedTryOn.catalog };
    chatPreferredTier = namedTryOn.tier;
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    const { product: namedProduct } = getVtoProduct();
    appendAssistantBlock(namedTryOnConfirmAssistantHtml(namedProduct));
    chatAwaitingTryOnConfirm = true;
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatMode === "skin_diag") {
    appendUserBubble(trimmed);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();

    if (isSkinAnalyzeIntent(trimmed, promptMeta)) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(skinDiagInviteAssistantHtml());
      chatAwaitingSkinDiagConfirm = true;
      flow = "idle";
      updateComposerTextState();
      return;
    }

    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(skinCareGenericReplyHtml());
    flow = "idle";
    updateComposerTextState();
    return;
  }

  appendUserBubble(trimmed);
  el.input.value = "";
  autosizeComposer();
  flow = "busy";
  updateComposerTextState();

  const switchedToTier =
    chatMode === "makeup" && chatPreferredTier
      ? parseOppositeTierCarouselIntent(trimmed, chatPreferredTier)
      : null;

  if (switchedToTier) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    chatPreferredTier = switchedToTier;
    const useFoundation =
      isFoundationRequest(trimmed) || chatLastProductCarouselCatalog === "foundation";
    if (useFoundation) {
      appendAssistantBlock(buildFoundationCarouselBlock(switchedToTier, true));
      chatLastProductCarouselCatalog = "foundation";
    } else {
      appendAssistantBlock(buildResultsBlock(labelForTier(switchedToTier), true));
      chatLastProductCarouselCatalog = "lips";
    }
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (!product) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(genericAssistantReply());
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (foundationAsk && chatPreferredTier) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildFoundationCarouselBlock(chatPreferredTier));
    chatLastProductCarouselCatalog = "foundation";
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (foundationAsk && !chatPreferredTier) {
    chatPendingCarousel = "foundation";
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(budgetQuestionHtml());
    chatAwaitingBudgetTierReply = true;
    chatAwaitingTryOnConfirm = false;
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatPreferredTier && product && !foundationAsk) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(chatbotTieredFollowUpHtml());
    flow = "idle";
    updateComposerTextState();
    return;
  }

  chatPendingCarousel = null;
  await assistantThink();
  if (myGen !== chatGenerationEpoch) return;
  appendAssistantBlock(budgetQuestionHtml());
  chatAwaitingBudgetTierReply = true;
  chatAwaitingTryOnConfirm = false;
  flow = "idle";
  updateComposerTextState();
}

function autosizeComposer() {
  el.input.style.height = "0px";
  el.input.style.height = `${Math.min(el.input.scrollHeight, 120)}px`;
  requestAnimationFrame(() => syncShellComposerStackVar());
}

function updateComposerTextState() {
  const has = el.input.value.trim().length > 0;
  el.composerField.classList.toggle("has-text", has);
  refreshComposerActionState();
}

function syncComposerAppPill() {
  if (!el.composerAppPill) return;
  const show = composerSelectedApp === "vto" || composerSelectedApp === "skin_diag";
  el.composerAppPill.hidden = !show;
  el.composerField?.classList.toggle("has-app", show);
  if (!show) return;
  const img = el.composerAppPill.querySelector("img");
  const label = el.composerAppPill.querySelector(".composer-app-pill__label");
  if (composerSelectedApp === "skin_diag") {
    if (img) img.setAttribute("src", SKIN_DIAG_HEADER_ICON_SRC);
    if (label) label.textContent = "Skin Diag";
  } else {
    if (img) img.setAttribute("src", VTO_TRYON_HEADER_ICON_SRC);
    if (label) label.textContent = "Makeup Try-On";
  }
}

function openComposerAppMenu() {
  if (!el.composerAppMenu) return;
  if (composerAppMenuCloseTimer != null) {
    window.clearTimeout(composerAppMenuCloseTimer);
    composerAppMenuCloseTimer = null;
  }
  el.composerAppMenu.hidden = false;
  el.composerAppMenu.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => el.composerAppMenu?.classList.add("is-open"));
}

function closeComposerAppMenu() {
  if (!el.composerAppMenu) return;
  el.composerAppMenu.classList.remove("is-open");
  el.composerAppMenu.setAttribute("aria-hidden", "true");
  if (composerAppMenuCloseTimer != null) {
    window.clearTimeout(composerAppMenuCloseTimer);
  }
  composerAppMenuCloseTimer = window.setTimeout(() => {
    if (!el.composerAppMenu) return;
    el.composerAppMenu.hidden = true;
    composerAppMenuCloseTimer = null;
  }, 260);
}

function refreshComposerActionState() {
  const busy = flow === "busy";
  const has = el.input.value.trim().length > 0;
  el.composerRoot?.classList.toggle("composer--streaming", busy);
  const sendArrow = el.sendBtn?.querySelector(".composer__send-icon--send");
  const sendStop = el.sendBtn?.querySelector(".composer__send-icon--stop");
  sendArrow?.toggleAttribute("hidden", busy);
  sendStop?.toggleAttribute("hidden", !busy);
  el.sendBtn?.setAttribute("aria-label", busy ? "Stop generating" : "Send");
}

function initComposer() {
  el.input.addEventListener("input", () => {
    autosizeComposer();
    updateComposerTextState();
  });

  el.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (flow === "busy") {
        bumpChatGeneration();
        return;
      }
      void sendUserMessage(el.input.value, undefined);
    }
  });

  el.sendBtn.addEventListener("click", () => {
    if (flow === "busy") {
      bumpChatGeneration();
      return;
    }
    void sendUserMessage(el.input.value, undefined);
  });

  el.composerPlus?.addEventListener("click", () => openComposerAppMenu());
  el.composerAppMenuBackdrop?.addEventListener("click", () => closeComposerAppMenu());
  el.composerAppMenuVto?.addEventListener("click", () => {
    composerSelectedApp = "vto";
    syncComposerAppPill();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });
  el.composerAppMenuSkinDiag?.addEventListener("click", () => {
    composerSelectedApp = "skin_diag";
    syncComposerAppPill();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });
  el.composerAppPillClear?.addEventListener("click", () => {
    composerSelectedApp = null;
    syncComposerAppPill();
    requestAnimationFrame(() => el.input?.focus());
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || el.composerAppMenu?.hidden !== false) return;
    e.preventDefault();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });

  refreshComposerActionState();
  syncComposerAppPill();
}

const PRODUCT_DETAIL_SLIDES = 3;

function productDetailSlideHTML(p) {
  const brandAttr = p.brand === "Maybelline" ? ` data-brand="maybelline"` : "";
  return `
    <div class="product-detail__slide"${brandAttr}>
      <img class="product-detail__slide-photo" src="${escapeAttr(p.cardImage)}" alt="" loading="lazy" decoding="async" />
    </div>`;
}

/** @param {string} src */
function productDetailSlideHTMLFromSrc(src) {
  return `
    <div class="product-detail__slide">
      <img class="product-detail__slide-photo" src="${escapeAttr(src)}" alt="" loading="lazy" decoding="async" />
    </div>`;
}

/** @param {{ match: number, tags: string[] }} d */
function productDetailTagsRowForRoutine(d) {
  const primary = `<span class="tag-chip product-detail__tag-pill product-detail__tag-pill--routine-match">${escapeHtml(String(d.match))}% match</span>`;
  const tagChips = d.tags.map((t) => `<span class="tag-chip product-detail__tag-pill">${escapeHtml(t)}</span>`).join("");
  return primary + tagChips;
}

/** @param {'day'|'night'} mode @param {number} currentStepIndex */
function renderProductDetailRoutineAlternates(mode, currentStepIndex) {
  if (!el.productDetailAlternatesStrip || !el.productDetailAlternatesSub) return;
  const modeLabel = mode === "night" ? "night" : "day";
  el.productDetailAlternatesSub.textContent = `Other picks from your ${modeLabel} routine. Tap a card to view details.`;
  const parts = [];
  for (let i = 0; i < SKIN_ROUTINE_STEPS.length; i += 1) {
    const stepDef = SKIN_ROUTINE_STEPS[i];
    const data = stepDef[mode];
    if (!data) continue;
    const cur = i === currentStepIndex ? " product-detail__alternate-card--current" : "";
    parts.push(`<article class="product-card skin-routine-product-card product-detail__alternate-card${cur}" data-detail-alternate-step="${i}" role="listitem" tabindex="0">
        <div class="product-card__header">
          <span class="skin-routine-product-card__match">${data.match}% match</span>
        </div>
        <div class="product-card__content">
          <div class="product-card__media">
            <img class="product-card__photo" src="${escapeAttr(data.image)}" alt="" width="120" height="120" loading="lazy" decoding="async" />
          </div>
          <p class="skin-routine-product-card__brand">${escapeHtml(data.brand)}</p>
          <h3 class="product-card__title">${escapeHtml(data.title)}</h3>
          <div class="product-card__tag-row">
            ${data.tags.map((t) => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
      </article>`);
  }
  el.productDetailAlternatesStrip.innerHTML = parts.join("");
}

/** @param {typeof SKIN_ROUTINE_STEPS[number]["day"] & { stepLabel: string }} pick */
function routinePickToWhereToBuyProduct(pick) {
  const shade = pick.tags[0] || "Skin routine pick";
  return {
    brand: pick.brand,
    title: pick.title,
    shadeLabel: shade,
    swatch: "#c8c8c8",
  };
}

/** True when there is a concrete makeup product in context (not the generic {@link getVtoProduct} fallback with no selection). */
function hasVtoProductContextForWhereBuy() {
  if (vtoSelectedProductKey) return true;
  return !!(el.vtoTryOnPanel && !el.vtoTryOnPanel.hidden);
}

/** Product row for the “Where to buy” chat message (matches detail sheet + active try-on shade when applicable). */
function productForWhereToBuyFromDetail() {
  const pick = productDetailKind === "skin_routine" ? productDetailSkinRoutinePick : null;
  if (pick) return routinePickToWhereToBuyProduct(pick);
  const { product } = getVtoProduct();
  const key = vtoSelectedProductKey;
  const ctx = key ? `${key.catalog}:${key.tier}:${key.index}` : "";
  const tryOnOpen = !!(el.vtoTryOnPanel && !el.vtoTryOnPanel.hidden);
  const cur = tryOnShadeList[tryOnShadeIndex];
  const shadesMatchProduct =
    tryOnOpen && !tryOnFromChatSingleProduct && cur && tryOnShadeContextKey && tryOnShadeContextKey === ctx;
  if (shadesMatchProduct) {
    return { ...product, shadeLabel: cur.label, swatch: cur.hex };
  }
  if (tryOnOpen && tryOnFromChatSingleProduct && cur) {
    return { ...product, shadeLabel: cur.label, swatch: cur.hex };
  }
  return product;
}

function productDetailTagsRowHTML(p) {
  const primary = `<span class="tag-chip product-detail__tag-pill">${escapeHtml(p.badgePrimary)}</span>`;
  const tagChips = p.tags
    .map(
      (t) => `
    <span class="tag-chip product-detail__tag-pill">${escapeHtml(t.label)}</span>`,
    )
    .join("");
  return primary + tagChips;
}

function syncProductDetailDots() {
  const track = el.productDetailSlides;
  const dotsRoot = el.productDetailDots;
  if (!track || dotsRoot.childElementCount === 0) return;
  const w = track.clientWidth || 1;
  const idx = Math.min(PRODUCT_DETAIL_SLIDES - 1, Math.max(0, Math.round(track.scrollLeft / w)));
  let i = 0;
  for (const dot of dotsRoot.querySelectorAll("span")) {
    dot.classList.toggle("is-active", i === idx);
    i += 1;
  }
}

function closeProductDetail() {
  if (el.productDetail.hidden) return;
  el.productDetail.hidden = true;
  el.productDetail.setAttribute("aria-hidden", "true");
  el.productDetail.classList.remove("product-detail--routine");
  el.productDetailUnpack.hidden = true;
  el.productDetailAlternates.hidden = true;
  el.productDetailShadeRow.hidden = false;
  productDetailKind = "vto";
  productDetailSkinRoutinePick = null;
}

/** Remembered from the budget quick reply so follow-ups (e.g. foundations) match the same tier. */
let chatPreferredTier = /** @type {'luxury'|'budget'|null} */ (null);

/** Last product carousel the user saw (for “show the other lane” follow-ups). */
let chatLastProductCarouselCatalog = /** @type {'lips'|'foundation'|null} */ (null);

/** When set, the next Luxury / Budget chip picks this carousel instead of the default lip grid. */
let chatPendingCarousel = /** @type {null|'foundation'} */ (null);

/** Waiting for a typed budget vs luxury preference after `budgetQuestionHtml`. */
let chatAwaitingBudgetTierReply = false;

/** Waiting for typed confirmation before opening the named-product try-on flow. */
let chatAwaitingTryOnConfirm = false;

/** Waiting for typed confirmation before opening Skin Diagnosis (terms flow). */
let chatAwaitingSkinDiagConfirm = false;

/** Waiting for typed choice after opening a concern from skin results. */
let chatAwaitingSkinRoutineChoice = false;
let chatSkinRoutineConcernId = /** @type {string | null} */ (null);

/** @type {{ tier: 'luxury'|'budget'; index: number; catalog: ProductCatalogId } | null} */
let vtoSelectedProductKey = null;

/** Which flow populated the product detail sheet (controls footer + unpack block). */
let productDetailKind = /** @type {'vto'|'skin_routine'} */ ("vto");

/** Routine row shown in detail + “Where to buy” when opened from Skin Routine unpack. */
let productDetailSkinRoutinePick =
  /** @type {((typeof SKIN_ROUTINE_STEPS)[number]["day"] & { stepLabel: string; stepIndex: number }) | null} */ (null);

/** Day vs night row used for the alternates carousel while a routine product detail is open. */
let productDetailSkinRoutineMode = /** @type {'day'|'night'} */ ("day");

/** @param {number} score @param {number} scoreMax */
function skinRoutineScoreTier(score, scoreMax) {
  const max = scoreMax > 0 ? scoreMax : 40;
  const r = score / max;
  if (r < 0.375) return "Mild";
  if (r < 0.7) return "Moderate";
  return "Significant";
}

/** @param {number} score @param {number} scoreMax @param {string} [explicitFromConcern] */
function skinRoutineDisplaySeverity(score, scoreMax, explicitFromConcern) {
  const e = String(explicitFromConcern || "")
    .trim()
    .toLowerCase();
  if (e === "mild" || e === "moderate" || e === "significant") {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  return skinRoutineScoreTier(score, scoreMax);
}

/** @param {'luxury'|'budget'} tier @param {number} index @param {ProductCatalogId} [catalog] */
function openProductDetail(tier, index, catalog = "lips") {
  const list = getProductList(catalog, tier);
  if (!list || !list[index]) return;
  const p = list[index];
  vtoSelectedProductKey = { tier, index, catalog };
  productDetailKind = "vto";
  productDetailSkinRoutinePick = null;
  el.productDetail.classList.remove("product-detail--routine");
  el.productDetailUnpack.hidden = true;
  el.productDetailAlternates.hidden = true;
  el.productDetailShadeRow.hidden = false;

  el.productDetailBrand.textContent = p.brand;
  el.productDetailTitle.textContent = p.title;
  el.productDetailTags.innerHTML = productDetailTagsRowHTML(p);
  el.productDetailShadeDot.style.background = p.swatch;
  el.productDetailShadeLabel.textContent = p.shadeLabel;
  el.productDetailMeta.innerHTML = "";
  el.productDetailDescription.textContent = p.description;
  el.productDetailIngredientsBody.textContent = p.ingredients;

  const slidesHtml = Array.from({ length: PRODUCT_DETAIL_SLIDES }, () => productDetailSlideHTML(p)).join("");
  el.productDetailSlides.innerHTML = slidesHtml;
  const dotParts = [];
  for (let i = 0; i < PRODUCT_DETAIL_SLIDES; i += 1) {
    dotParts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
  }
  el.productDetailDots.innerHTML = dotParts.join("");

  el.productDetail.hidden = false;
  el.productDetail.setAttribute("aria-hidden", "false");
  el.productDetailScroll.scrollTop = 0;
  el.productDetailSlides.scrollLeft = 0;
  requestAnimationFrame(() => {
    syncProductDetailDots();
    el.productDetailClose.focus();
  });
}

/** @param {number} stepIndex @param {'day'|'night'} mode */
function openSkinRoutineProductDetail(stepIndex, mode) {
  const stepDef = SKIN_ROUTINE_STEPS[stepIndex];
  if (!stepDef) return;
  const row = stepDef[mode];
  if (!row || !row.description || !row.ingredients || !row.unpackBullets) return;

  vtoSelectedProductKey = null;
  productDetailKind = "skin_routine";
  productDetailSkinRoutineMode = mode;
  productDetailSkinRoutinePick = { ...row, stepLabel: stepDef.step, stepIndex };

  el.productDetail.classList.add("product-detail--routine");
  el.productDetailUnpack.hidden = false;
  el.productDetailAlternates.hidden = false;
  el.productDetailShadeRow.hidden = true;
  renderProductDetailRoutineAlternates(mode, stepIndex);

  el.productDetailBrand.textContent = row.brand;
  el.productDetailTitle.textContent = row.title;
  el.productDetailTags.innerHTML = productDetailTagsRowForRoutine(row);
  el.productDetailMeta.innerHTML = row.price
    ? `<div class="price-row"><span class="price-row__now">${escapeHtml(row.price)}</span></div>`
    : "";
  el.productDetailDescription.textContent = row.description;
  el.productDetailIngredientsBody.textContent = row.ingredients;

  el.productDetailUnpackLede.textContent =
    "Based on your Skin Diag scores and concerns, this pick was weighted for formulation fit—not only popularity. A few signals behind the match score:";

  el.productDetailUnpackList.innerHTML = row.unpackBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("");

  const slidesHtml = Array.from({ length: PRODUCT_DETAIL_SLIDES }, () => productDetailSlideHTMLFromSrc(row.image)).join("");
  el.productDetailSlides.innerHTML = slidesHtml;
  const dotParts = [];
  for (let i = 0; i < PRODUCT_DETAIL_SLIDES; i += 1) {
    dotParts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
  }
  el.productDetailDots.innerHTML = dotParts.join("");

  el.productDetail.hidden = false;
  el.productDetail.setAttribute("aria-hidden", "false");
  el.productDetailScroll.scrollTop = 0;
  el.productDetailSlides.scrollLeft = 0;
  requestAnimationFrame(() => {
    syncProductDetailDots();
    el.productDetailClose.focus();
  });
}

function getVtoProduct() {
  const tier = vtoSelectedProductKey?.tier;
  const index = vtoSelectedProductKey?.index;
  const catalog = vtoSelectedProductKey?.catalog ?? "lips";
  if ((tier === "luxury" || tier === "budget") && Number.isFinite(index)) {
    const list = getProductList(catalog, tier);
    const product = list[index];
    if (product) return { tier, index, product, catalog };
  }
  return { tier: "luxury", index: 0, product: PRODUCTS.luxury[0], catalog: /** @type {ProductCatalogId} */ ("lips") };
}

function hexToRgb(hex) {
  let h = String(hex).trim();
  if (h.startsWith("#")) h = h.slice(1);
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (h.length !== 6) return null;
  const n = Number.parseInt(h, 16);
  if (!Number.isFinite(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** @param {{r:number,g:number,b:number}} rgb */
function rgbToHex(rgb) {
  return `#${[rgb.r, rgb.g, rgb.b]
    .map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, "0"))
    .join("")}`;
}

/**
 * Mixes two hex colors by `t` (0 keeps `a`, 1 keeps `b`).
 * @param {string} a
 * @param {string} b
 * @param {number} t
 */
function mixHex(a, b, t) {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  if (!ca || !cb) return ca ? rgbToHex(ca) : "#b97984";
  const clamped = Math.max(0, Math.min(1, t));
  return rgbToHex({
    r: ca.r + (cb.r - ca.r) * clamped,
    g: ca.g + (cb.g - ca.g) * clamped,
    b: ca.b + (cb.b - ca.b) * clamped,
  });
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function buildTryOnShades(p) {
  // Keep the palette intentionally muted (dusty rose / mauve family) to match the calmer carousel treatment.
  const base = mixHex(p.swatch, "#b97a85", 0.2);
  const tones = [
    { hex: base, label: p.shadeLabel },
    { hex: mixHex(base, "#d9919a", 0.55), label: "Soft rose" },
    { hex: mixHex(base, "#a86a74", 0.3), label: "Dusty mauve" },
    { hex: mixHex(base, "#c1867f", 0.4), label: "Muted berry" },
    { hex: mixHex(base, "#d79f90", 0.52), label: "Warm nude rose" },
    { hex: mixHex(base, "#945f8f", 0.38), label: "Muted plum" },
    { hex: mixHex(base, "#c57f8d", 0.47), label: "Rosewood" },
    { hex: mixHex(base, "#b47883", 0.36), label: "Tea rose" },
    { hex: mixHex(base, "#d0a29b", 0.58), label: "Blush nude" },
    { hex: mixHex(base, "#8e5f78", 0.34), label: "Soft wine" },
    { hex: mixHex(base, "#c38d88", 0.43), label: "Warm mauve" },
  ];
  return tones;
}

function teardownTryOnFaceLandmarker() {
  if (tryOnFaceLandmarker) {
    tryOnFaceLandmarker.close();
    tryOnFaceLandmarker = null;
  }
  tryOnCachedLandmarks = null;
}

function hideVtoTryOnPanel() {
  if (!el.vtoTryOnPanel) return;
  el.vtoTryOnPanel.hidden = true;
  el.vtoTryOnPanel.setAttribute("aria-hidden", "true");
  tryOnUseReferenceModel = false;
  el.vtoTryOnPanel.classList.remove("vto-flow__panel--tryon-alt");
  el.vtoTryOnModeToggle.classList.remove("is-active");
  el.vtoTryOnModeToggle.setAttribute("aria-pressed", "false");
  tryOnSliderAborter?.abort();
  tryOnSliderAborter = null;
}

function attachTryOnResizeObserver() {
  tryOnResizeObserver?.disconnect();
  const wrap = el.vtoTryOnAfterWrap;
  if (!wrap) return;
  tryOnResizeObserver = new ResizeObserver(() => {
    if (el.vtoTryOnPanel.hidden) return;
    layoutTryOnLipCanvas();
    drawTryOnLipShade();
  });
  tryOnResizeObserver.observe(wrap);
}

function layoutTryOnLipCanvas() {
  const wrap = el.vtoTryOnAfterWrap;
  const canvas = el.vtoTryOnLipCanvas;
  if (!wrap || !canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(2, Math.round(wrap.clientWidth * dpr));
  const h = Math.max(2, Math.round(wrap.clientHeight * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array<{ x: number; y: number }>} landmarks
 * @param {number} w
 * @param {number} h
 * @param {string} hex
 */
function drawTryOnLipsFromLandmarks(ctx, landmarks, w, h, hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  for (let i = 0; i < TRYON_OUTER_MOUTH_IDX.length; i += 1) {
    const idx = TRYON_OUTER_MOUTH_IDX[i];
    const p = landmarks[idx];
    if (!p || typeof p.x !== "number" || typeof p.y !== "number") return false;
    const x = p.x * w;
    const y = p.y * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.save();
  ctx.filter = "blur(2px)";
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 0.72;
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.filter = "none";
  ctx.globalCompositeOperation = "source-over";
  return true;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} w
 * @param {number} h
 * @param {string} hex
 */
function drawTryOnFallbackMouth(ctx, w, h, hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  ctx.clearRect(0, 0, w, h);
  const cx = w * 0.5;
  const cy = h * 0.58;
  const rx = w * 0.13;
  const ry = h * 0.038;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.save();
  ctx.filter = "blur(2px)";
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 0.65;
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.filter = "none";
  ctx.globalCompositeOperation = "source-over";
}

function syncTryOnReferenceModeUi() {
  const selfieSrc = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (tryOnUseReferenceModel) {
    el.vtoTryOnBefore.style.backgroundImage = `url(${JSON.stringify(TRYON_REFERENCE_BEFORE_IMAGE)})`;
    el.vtoTryOnAfterBase.style.backgroundImage = `url(${JSON.stringify(TRYON_REFERENCE_AFTER_IMAGE)})`;
  } else {
    if (!selfieSrc) return;
    const bg = `url(${JSON.stringify(selfieSrc)})`;
    el.vtoTryOnBefore.style.backgroundImage = bg;
    el.vtoTryOnAfterBase.style.backgroundImage = bg;
  }
  const pos = tryOnUseReferenceModel ? "center top" : "center top";
  el.vtoTryOnBefore.style.backgroundPosition = pos;
  el.vtoTryOnAfterBase.style.backgroundPosition = pos;
  el.vtoTryOnPanel.classList.toggle("vto-flow__panel--tryon-alt", tryOnUseReferenceModel);
  el.vtoTryOnModeToggle.classList.toggle("is-active", tryOnUseReferenceModel);
  el.vtoTryOnModeToggle.setAttribute("aria-pressed", tryOnUseReferenceModel ? "true" : "false");

  if (tryOnUseReferenceModel) {
    tryOnCachedLandmarks = null;
    const ctx = el.vtoTryOnLipCanvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, el.vtoTryOnLipCanvas.width, el.vtoTryOnLipCanvas.height);
  }
}

function syncTryOnReferenceOverlayShade() {
  const hex = tryOnShadeList[tryOnShadeIndex]?.hex;
  if (!hex || !el.vtoTryOnAltLipOverlay) return;
  el.vtoTryOnAltLipOverlay.style.color = hex;
}

function drawTryOnLipShade() {
  if (tryOnUseReferenceModel) {
    syncTryOnReferenceOverlayShade();
    return;
  }
  const canvas = el.vtoTryOnLipCanvas;
  const hex = tryOnShadeList[tryOnShadeIndex]?.hex;
  if (!canvas || !hex) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  if (tryOnCachedLandmarks && drawTryOnLipsFromLandmarks(ctx, tryOnCachedLandmarks, w, h, hex)) return;
  drawTryOnFallbackMouth(ctx, w, h, hex);
}

async function ensureTryOnFaceLandmarker() {
  if (tryOnFaceLandmarker) return tryOnFaceLandmarker;
  const ver = "0.10.14";
  const wasmPath = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/wasm`;
  const modelPath =
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

  async function create(delegate) {
    const vision = await import(/* webpackIgnore: true */ `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/+esm`);
    const { FaceLandmarker, FilesetResolver } = vision;
    const filesetResolver = await FilesetResolver.forVisionTasks(wasmPath);
    return FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: { modelAssetPath: modelPath, delegate },
      runningMode: "IMAGE",
      numFaces: 1,
    });
  }

  try {
    tryOnFaceLandmarker = await create("GPU");
  } catch {
    try {
      tryOnFaceLandmarker = await create("CPU");
    } catch {
      tryOnFaceLandmarker = null;
    }
  }
  return tryOnFaceLandmarker;
}

async function runTryOnFaceLandmarks() {
  tryOnCachedLandmarks = null;
  const src = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (!src) return;

  const landmarker = await ensureTryOnFaceLandmarker();
  if (!landmarker) return;

  const img = new Image();
  img.decoding = "async";
  img.src = src;
  try {
    await img.decode();
  } catch {
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(undefined);
      img.onerror = () => reject(new Error("image"));
    }).catch(() => {});
  }

  try {
    const r = landmarker.detect(img);
    tryOnCachedLandmarks = r.faceLandmarks?.[0] ?? null;
  } catch {
    tryOnCachedLandmarks = null;
  }
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function applyTryOnProductChrome(p) {
  const k = vtoSelectedProductKey;
  tryOnShadeContextKey = k ? `${k.catalog}:${k.tier}:${k.index}` : null;
  el.vtoTryOnMiniTitle.textContent = p.title;
  const selfieForMini = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (el.vtoTryOnMiniPhoto) {
    el.vtoTryOnMiniPhoto.src = p.cardImage;
    el.vtoTryOnMiniPhoto.alt = `${p.title} — ${p.shadeLabel}`;
  }
  if (tryOnFromChatSingleProduct) {
    tryOnShadeList = [{ hex: p.swatch, label: p.shadeLabel }];
    tryOnShadeIndex = 0;
    syncTryOnMiniShadeRow();
    el.vtoTryOnShades.innerHTML = "";
    el.vtoTryOnShades.hidden = true;
    el.vtoTryOnShades.setAttribute("aria-hidden", "true");
    if (selfieForMini && el.vtoTryOnMiniThumb) {
      el.vtoTryOnMiniThumb.classList.add("vto-tryon__mini-thumb--selfie-under");
      el.vtoTryOnMiniThumb.style.backgroundImage = `url(${JSON.stringify(selfieForMini)})`;
    } else if (el.vtoTryOnMiniThumb) {
      el.vtoTryOnMiniThumb.classList.remove("vto-tryon__mini-thumb--selfie-under");
      el.vtoTryOnMiniThumb.style.backgroundImage = "";
    }
    return;
  }
  el.vtoTryOnShades.hidden = false;
  el.vtoTryOnShades.removeAttribute("aria-hidden");
  if (el.vtoTryOnMiniThumb) {
    el.vtoTryOnMiniThumb.classList.remove("vto-tryon__mini-thumb--selfie-under");
    el.vtoTryOnMiniThumb.style.backgroundImage = "";
  }
  tryOnShadeList = buildTryOnShades(p);
  tryOnShadeIndex = 0;
  syncTryOnMiniShadeRow();
  renderTryOnShadeButtons();
}

function syncTryOnMiniShadeRow() {
  const cur = tryOnShadeList[tryOnShadeIndex];
  if (!cur) return;
  el.vtoTryOnMiniDot.style.background = cur.hex;
  el.vtoTryOnMiniShade.textContent = cur.label;
}

function renderTryOnShadeButtons() {
  const root = el.vtoTryOnShades;
  root.innerHTML = "";
  tryOnShadeList.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `vto-tryon__shade-btn${i === tryOnShadeIndex ? " is-selected" : ""}`;
    btn.style.background = s.hex;
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", i === tryOnShadeIndex ? "true" : "false");
    btn.addEventListener("click", () => selectTryOnShade(i));
    root.appendChild(btn);
  });
}

/** @param {number} i */
function selectTryOnShade(i) {
  if (i < 0 || i >= tryOnShadeList.length) return;
  tryOnShadeIndex = i;
  let j = 0;
  for (const btn of el.vtoTryOnShades.querySelectorAll(".vto-tryon__shade-btn")) {
    btn.classList.toggle("is-selected", j === i);
    btn.setAttribute("aria-selected", j === i ? "true" : "false");
    j += 1;
  }
  syncTryOnMiniShadeRow();
  drawTryOnLipShade();
}

/** @param {boolean} useReference */
function setTryOnReferenceMode(useReference) {
  const wasReference = tryOnUseReferenceModel;
  tryOnUseReferenceModel = !!useReference;
  syncTryOnReferenceModeUi();
  drawTryOnLipShade();
  if (wasReference && !tryOnUseReferenceModel) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        layoutTryOnLipCanvas();
        void runTryOnFaceLandmarks().then(() => {
          layoutTryOnLipCanvas();
          drawTryOnLipShade();
        });
      });
    });
  }
}

/** @param {number} pct 0–100 from left */
function setTryOnSplit(pct) {
  const p = Math.min(100, Math.max(4, pct));
  const s = String(p);
  el.vtoTryOnViewport.style.setProperty("--vto-split", s);
  const stack = el.vtoTryOnSliderKnob?.closest(".vto-tryon__after-stack");
  if (stack) stack.style.setProperty("--vto-split", s);
}

function initTryOnSlider() {
  tryOnSliderAborter?.abort();
  tryOnSliderAborter = new AbortController();
  const { signal } = tryOnSliderAborter;
  const vp = el.vtoTryOnViewport;
  const knob = el.vtoTryOnSliderKnob;
  const scrubRoot = /** @type {HTMLElement} */ (knob.closest(".vto-tryon__after-stack") || vp);

  /** @type {number | null} */
  let scrubPointerId = null;
  /** @type {boolean} */
  let scrubMouse = false;

  const onPointer = (clientX) => {
    const r = scrubRoot.getBoundingClientRect();
    if (r.width <= 0) return;
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    setTryOnSplit((x / r.width) * 100);
  };

  const stopScrub = (e) => {
    if (scrubPointerId !== null && e.pointerId === scrubPointerId) {
      try {
        if (typeof vp.hasPointerCapture === "function" && vp.hasPointerCapture(e.pointerId)) {
          vp.releasePointerCapture(e.pointerId);
        }
      } catch {
        //
      }
      scrubPointerId = null;
    }
  };

  const onWindowMove = (e) => {
    if (scrubPointerId !== e.pointerId) return;
    e.preventDefault();
    onPointer(e.clientX);
  };

  const stopMouseScrub = () => {
    scrubMouse = false;
  };

  const onWindowMouseMove = (e) => {
    if (!scrubMouse) return;
    e.preventDefault();
    onPointer(e.clientX);
  };

  window.addEventListener("pointermove", onWindowMove, { signal, passive: false, capture: true });
  window.addEventListener("pointerup", stopScrub, { signal, capture: true });
  window.addEventListener("pointercancel", stopScrub, { signal, capture: true });
  window.addEventListener("mousemove", onWindowMouseMove, { signal, passive: false, capture: true });
  window.addEventListener("mouseup", stopMouseScrub, { signal, capture: true });

  vp.addEventListener(
    "lostpointercapture",
    (e) => {
      if (scrubPointerId !== null && e.pointerId === scrubPointerId) scrubPointerId = null;
    },
    { signal }
  );

  vp.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target.closest(".vto-tryon__dock") || e.target.closest(".vto-tryon__close-frost") || e.target.closest(".vto-tryon__mode-toggle")) return;
      if (knob.contains(e.target)) return;
      scrubPointerId = e.pointerId;
      e.preventDefault();
      onPointer(e.clientX);
      try {
        vp.setPointerCapture(e.pointerId);
      } catch {
        //
      }
    },
    { signal }
  );

  // Mouse fallback for environments where Pointer Events are not reliable.
  vp.addEventListener(
    "mousedown",
    (e) => {
      if (e.button !== 0) return;
      if (e.target.closest(".vto-tryon__dock") || e.target.closest(".vto-tryon__close-frost") || e.target.closest(".vto-tryon__mode-toggle")) return;
      if (knob.contains(e.target)) return;
      scrubMouse = true;
      e.preventDefault();
      onPointer(e.clientX);
    },
    { signal }
  );

  knob.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.stopPropagation();
      e.preventDefault();
      scrubPointerId = e.pointerId;
      onPointer(e.clientX);
      try {
        vp.setPointerCapture(e.pointerId);
      } catch {
        //
      }
    },
    { signal }
  );

  knob.addEventListener(
    "mousedown",
    (e) => {
      if (e.button !== 0) return;
      e.stopPropagation();
      e.preventDefault();
      scrubMouse = true;
      onPointer(e.clientX);
    },
    { signal }
  );
}

function showVtoTryOn() {
  const selfieSrc = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (!selfieSrc) return;
  if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
  stopVtoCameraStream();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTryOnPanel.hidden = false;
  el.vtoTryOnPanel.setAttribute("aria-hidden", "false");
  setTryOnReferenceMode(false);

  applyTryOnProductChrome(getVtoProduct().product);
  setTryOnSplit(50);
  initTryOnSlider();
  attachTryOnResizeObserver();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      layoutTryOnLipCanvas();
      void runTryOnFaceLandmarks().then(() => {
        layoutTryOnLipCanvas();
        drawTryOnLipShade();
      });
    });
  });

  requestAnimationFrame(() => el.vtoTryOnSliderKnob.focus());
}

function initProductDetail() {
  el.chatView.addEventListener("click", (e) => {
    const btn = e.target.closest(".product-card__learn");
    if (!btn) return;
    const card = btn.closest(".product-card");
    if (!card) return;
    const tier = card.getAttribute("data-tier");
    const idx = Number(card.getAttribute("data-product-index"));
    const catalog = card.getAttribute("data-catalog") === "foundation" ? "foundation" : "lips";
    if (tier !== "luxury" && tier !== "budget") return;
    if (!Number.isFinite(idx)) return;
    if (!getProductList(catalog, tier)[idx]) return;
    openProductDetail(tier, idx, catalog);
  });

  el.productDetailClose.addEventListener("click", () => closeProductDetail());

  el.productDetailBuy.addEventListener("click", () => {
    void (async () => {
      const product = productForWhereToBuyFromDetail();
      closeProductDetail();
      enterChatView();
      chatGenerationEpoch += 1;
      const myGen = chatGenerationEpoch;
      flow = "busy";
      updateComposerTextState();
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(buildWhereToBuyMessageHtml(product));
      flow = "idle";
      updateComposerTextState();
      requestAnimationFrame(() => {
        el.input?.focus();
      });
    })();
  });

  el.productDetailSlides.addEventListener("scroll", () => syncProductDetailDots(), { passive: true });

  el.productDetailAlternatesStrip?.addEventListener("click", (e) => {
    const card = e.target.closest("[data-detail-alternate-step]");
    if (!card || !(card instanceof HTMLElement)) return;
    const step = Number(card.getAttribute("data-detail-alternate-step"));
    if (!Number.isFinite(step)) return;
    openSkinRoutineProductDetail(step, productDetailSkinRoutineMode);
  });

  el.productDetailAlternatesStrip?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-detail-alternate-step]");
    if (!card || !(card instanceof HTMLElement)) return;
    e.preventDefault();
    const step = Number(card.getAttribute("data-detail-alternate-step"));
    if (!Number.isFinite(step)) return;
    openSkinRoutineProductDetail(step, productDetailSkinRoutineMode);
  });

  window.addEventListener("resize", () => {
    if (!el.productDetail.hidden) syncProductDetailDots();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el.productDetail.hidden) {
      e.preventDefault();
      closeProductDetail();
    }
  });
}

function syncVtoConsentButton() {
  const ok = el.vtoTermsCheckbox.checked;
  el.vtoConsentBtn.disabled = !ok;
}

function revokeVtoSelfiePreview() {
  if (vtoSelfiePreviewUrl) {
    if (vtoSelfiePreviewUrl !== sessionPersistedSelfieUrl) {
      URL.revokeObjectURL(vtoSelfiePreviewUrl);
    }
    vtoSelfiePreviewUrl = null;
  }
  el.vtoSelfiePreviewImg.removeAttribute("src");
  el.vtoSelfiePreviewImg.alt = "";
}

function queueCaptureTimer(fn, ms) {
  const id = window.setTimeout(() => {
    const i = vtoCaptureTimers.indexOf(id);
    if (i >= 0) vtoCaptureTimers.splice(i, 1);
    fn();
  }, ms);
  vtoCaptureTimers.push(id);
  return id;
}

function clearVtoCaptureTimers() {
  for (const id of vtoCaptureTimers) window.clearTimeout(id);
  vtoCaptureTimers.length = 0;
}

/** @param {SVGPathElement | null} path */
function resetSelfieGuidePathElement(path) {
  if (!path) return;
  path.classList.remove("is-visible");
  path.style.transition = "";
  path.style.removeProperty("stroke-dasharray");
  path.style.removeProperty("stroke-dashoffset");
}

function resetSelfieGuidePath() {
  resetSelfieGuidePathElement(el.vtoSelfieGuidePath);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathLeft);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
}

/**
 * Skin diagnosis head-turn UX: fill only the left or right arc of the oval to match turn direction.
 * @param {'left'|'right'} side
 * @param {number} durationMs
 */
function animateSelfieGuideHalf(side, durationMs) {
  const path = side === "left" ? el.vtoSelfieGuidePathLeft : el.vtoSelfieGuidePathRight;
  if (!path) return Promise.resolve();
  let len = path.getTotalLength();
  if (!Number.isFinite(len) || len <= 0) len = 600;
  path.style.strokeDasharray = String(len);
  path.style.strokeDashoffset = String(len);
  path.classList.add("is-visible");
  return new Promise((resolve) => {
    const sec = Math.max(0.35, durationMs / 1000);
    requestAnimationFrame(() => {
      path.style.transition = `stroke-dashoffset ${sec}s linear`;
      path.style.strokeDashoffset = "0";
    });
    window.setTimeout(resolve, durationMs + 60);
  });
}

function stopVtoCameraStream() {
  clearVtoCaptureTimers();
  if (vtoCameraStream) {
    for (const t of vtoCameraStream.getTracks()) t.stop();
    vtoCameraStream = null;
  }
  el.vtoSelfieVideo.srcObject = null;
  el.vtoSelfieCameraPanel.hidden = true;
  el.vtoSelfieCaptureComplete.hidden = true;
  el.vtoSelfieGuidePill.textContent = "";
  resetSelfieGuidePath();
}

function showVtoSelfieCameraPanel() {
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoSelfieCameraPanel.hidden = false;
  syncVtoExperienceBrandUi();
}

function retakeVtoSelfie() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  if (sessionPersistedSelfieUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
    sessionPersistedSelfieUrl = null;
  }
  revokeVtoSelfiePreview();
  showVtoSelfieStub();
  requestAnimationFrame(() => el.vtoSelfieTake.focus());
}

function waitForSelfieVideoSize() {
  return new Promise((resolve) => {
    const v = el.vtoSelfieVideo;
    if (v.videoWidth > 0 && v.videoHeight > 0) {
      resolve();
      return;
    }
    v.addEventListener("loadeddata", () => resolve(), { once: true });
  });
}

/** Skin Diagnosis: post-countdown head pose prompts + matching half-oval progress ring. */
async function startSkinDiagHeadTurnPhases() {
  resetSelfieGuidePath();
  el.vtoSelfieGuidePill.textContent = "Turn your face to the right ›";
  await animateSelfieGuideHalf("right", 1900);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
  el.vtoSelfieGuidePill.textContent = "‹ Turn your face to the left";
  await animateSelfieGuideHalf("left", 1900);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathLeft);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
  el.vtoSelfieGuidePill.textContent = "Look straight ahead";
  await wait(1100);
  el.vtoSelfieGuidePill.textContent = "";
}

async function runSelfieCountdownOnly() {
  for (let n = 3; n >= 1; n -= 1) {
    el.vtoSelfieGuidePill.textContent = `${n}...`;
    await wait(1000);
  }
}

/**
 * @param {{ skipCountdown?: boolean }} [opts]
 */
function startSelfieCaptureSequence(opts = {}) {
  const skipCountdown = !!opts.skipCountdown;
  clearVtoCaptureTimers();
  resetSelfieGuidePath();

  function runCaptureWindow() {
    el.vtoSelfieGuidePill.textContent = "Stay just like that";
    const path = el.vtoSelfieGuidePath;
    if (path) {
      let len = path.getTotalLength();
      if (!Number.isFinite(len) || len <= 0) len = 900;
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.classList.add("is-visible");
      requestAnimationFrame(() => {
        path.style.transition = "stroke-dashoffset 2.45s linear";
        path.style.strokeDashoffset = "0";
      });
    }
    queueCaptureTimer(() => {
      const p = el.vtoSelfieGuidePath;
      if (p) {
        p.classList.remove("is-visible");
        p.style.transition = "";
      }
      captureSelfieFrameFromVideo();
    }, 2700);
  }

  /** @param {number} n */
  function runCountdown(n, done) {
    if (n <= 0) {
      done();
      return;
    }
    // Keep countdown copy compact to mirror the target selfie UX.
    el.vtoSelfieGuidePill.textContent = `${n}...`;
    queueCaptureTimer(() => runCountdown(n - 1, done), 1000);
  }

  if (skipCountdown) {
    runCaptureWindow();
    return;
  }
  runCountdown(3, runCaptureWindow);
}

function captureSelfieFrameFromVideo() {
  const video = el.vtoSelfieVideo;
  const canvas = el.vtoSelfieCaptureCanvas;
  const w = video.videoWidth;
  const h = video.videoHeight;
  if (!w || !h) {
    stopVtoCameraStream();
    showVtoSelfieStub();
    return;
  }
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.save();
  ctx.translate(w, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, w, h);
  ctx.restore();

  canvas.toBlob(
    (blob) => {
      if (!blob) {
        stopVtoCameraStream();
        showVtoSelfieStub();
        return;
      }
      el.vtoSelfieCaptureComplete.hidden = false;
      queueCaptureTimer(() => {
        el.vtoSelfieCaptureComplete.hidden = true;
        revokeVtoSelfiePreview();
        if (sessionPersistedSelfieUrl) {
          URL.revokeObjectURL(sessionPersistedSelfieUrl);
          sessionPersistedSelfieUrl = null;
        }
        vtoSelfiePreviewUrl = URL.createObjectURL(blob);
        el.vtoSelfiePreviewImg.src = vtoSelfiePreviewUrl;
        el.vtoSelfiePreviewImg.alt = "Captured selfie preview";
        stopVtoCameraStream();
        showVtoSelfieConfirm();
        requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
      }, 850);
    },
    "image/jpeg",
    0.92
  );
}

/** Opens the camera panel and requests access via the browser’s native permission prompt (user gesture from “Take a selfie”). */
async function startVtoSelfieCamera() {
  syncVtoExperienceBrandUi();
  showVtoSelfieCameraPanel();
  el.vtoSelfieGuidePill.textContent = "Starting camera…";

  if (!navigator.mediaDevices?.getUserMedia) {
    stopVtoCameraStream();
    showVtoSelfieStub();
    window.alert("Camera is not available in this browser or context (try HTTPS or a current browser).");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    vtoCameraStream = stream;
    el.vtoSelfieVideo.srcObject = stream;
    await el.vtoSelfieVideo.play();
    await waitForSelfieVideoSize();
    el.vtoSelfieGuidePill.textContent = "";
    if (skinDiagFlowActive || vtoSkinBrandExperienceActive) {
      await runSelfieCountdownOnly();
      await startSkinDiagHeadTurnPhases();
      startSelfieCaptureSequence({ skipCountdown: true });
      return;
    }
    startSelfieCaptureSequence();
  } catch {
    stopVtoCameraStream();
    showVtoSelfieStub();
    window.alert("Camera permission was denied or the camera could not be opened.");
  }
}

/** @param {File} file */
async function handleUploadedSelfieFile(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(undefined);
      img.onerror = () => reject(new Error("image-load-failed"));
      img.src = objectUrl;
    });
  } catch {
    URL.revokeObjectURL(objectUrl);
    window.alert("That file could not be read as an image. Please choose another photo.");
    return;
  }
  stopVtoCameraStream();
  revokeVtoSelfiePreview();
  if (sessionPersistedSelfieUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
    sessionPersistedSelfieUrl = null;
  }
  vtoSelfiePreviewUrl = objectUrl;
  el.vtoSelfiePreviewImg.src = vtoSelfiePreviewUrl;
  el.vtoSelfiePreviewImg.alt = "Uploaded selfie preview";
  showVtoSelfieConfirm();
  requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
}

/** @param {boolean} active */
function setVtoComposerChrome(active) {
  const root = el.composerRoot;
  const plus = el.composerPlus;
  const ta = el.input;
  if (!root || !ta) return;
  root.classList.toggle("composer--vto", active);
  if (plus) plus.hidden = active;
  let ph = ta.dataset.placeholderDefault || "Ask anything";
  if (active) {
    ph = ta.dataset.placeholderVto || "Ask Makeup Try-On...";
  } else if (chatMode === "skin_diag") {
    ph = ta.dataset.placeholderSkincare || "Ask about skincare...";
  }
  ta.placeholder = ph;
  requestAnimationFrame(() => syncShellComposerStackVar());
}

/** Sets `--shell-composer-stack` on `.shell-main` to the measured composer + footnote height (flush with #vtoFlow). */
function syncShellComposerStackVar() {
  const shell = el.shellMain;
  const root = el.composerRoot;
  if (!shell || !root) return;
  const foot = el.composerFootnote;
  const h = Math.ceil(root.offsetHeight + (foot?.offsetHeight ?? 0));
  shell.style.setProperty("--shell-composer-stack", `${Math.max(h, 1)}px`);
}

let shellComposerStackResizeTimer = /** @type {number | null} */ (null);

function initShellComposerStackObserver() {
  const root = el.composerRoot;
  if (!el.shellMain || !root) return;
  syncShellComposerStackVar();
  window.addEventListener("resize", () => {
    if (shellComposerStackResizeTimer != null) window.clearTimeout(shellComposerStackResizeTimer);
    shellComposerStackResizeTimer = window.setTimeout(() => {
      shellComposerStackResizeTimer = null;
      syncShellComposerStackVar();
    }, 50);
  });
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => syncShellComposerStackVar()) : null;
  ro?.observe(root);
  if (el.composerFootnote) ro?.observe(el.composerFootnote);
}

function clearSkinDiagPostQuizTimer() {
  while (skinDiagPostQuizTimers.length > 0) {
    const id = skinDiagPostQuizTimers.pop();
    if (id != null) window.clearTimeout(id);
  }
}

function resetSkinDiagLoadingRows() {
  const panel = el.vtoSkinDiagLoadingPanel;
  if (!panel) return;
  for (const row of panel.querySelectorAll(".vto-skin-diag-loading__row[data-load-row]")) {
    row.classList.remove("vto-skin-diag-loading__row--done");
  }
}

/** @param {number} index */
function markSkinDiagLoadingRowDone(index) {
  const row = el.vtoSkinDiagLoadingPanel?.querySelector(`.vto-skin-diag-loading__row[data-load-row="${index}"]`);
  row?.classList.add("vto-skin-diag-loading__row--done");
}

function hideSkinDiagLoadingPanel() {
  if (!el.vtoSkinDiagLoadingPanel) return;
  el.vtoSkinDiagLoadingPanel.hidden = true;
  el.vtoSkinDiagLoadingPanel.setAttribute("aria-hidden", "true");
  resetSkinDiagLoadingRows();
}

function hideSkinDiagResultsPanel() {
  if (!el.vtoSkinDiagResultsPanel) return;
  el.vtoSkinDiagResultsPanel.hidden = true;
  el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "true");
  skinDiagResultsSelectedId = null;
}

function reopenSkinDiagResultsFromChat() {
  if (!skinDiagResultsPeekUrl) return;
  closeProductDetail();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieCameraPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  vtoSkinBrandExperienceActive = true;
  skinDiagFlowActive = false;
  setVtoComposerChrome(false);
  syncVtoExperienceBrandUi();
  showSkinDiagResultsPanel(skinDiagResultsPeekUrl);
}

function finishSkinDiagFlowToChat() {
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  closeVtoFlow();
  enterChatView();
  requestAnimationFrame(() => el.input?.focus());
}

/** @param {string} concernId */
function openSkinDiagConcernInChat(concernId) {
  const concern = SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === concernId) || null;
  finishSkinDiagFlowToChat();
  chatAwaitingSkinRoutineChoice = true;
  chatSkinRoutineConcernId = concernId;
  appendAssistantBlock(skinRoutinePromptHtml(concern, { showSkinResultsShortcut: true }));
}

function applySkinDiagResultsZoom() {
  const pan = el.vtoSkinDiagResultsPan;
  if (!pan) return;
  const concern = skinDiagResultsSelectedId
    ? SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === skinDiagResultsSelectedId)
    : null;
  if (!concern) {
    pan.style.setProperty("--sd-origin-x", "50%");
    pan.style.setProperty("--sd-origin-y", "50%");
    pan.style.setProperty("--sd-scale", "1");
    return;
  }
  pan.style.setProperty("--sd-origin-x", `${concern.zoom.x * 100}%`);
  pan.style.setProperty("--sd-origin-y", `${skinDiagFaceMapY(concern.zoom.y) * 100}%`);
  pan.style.setProperty("--sd-scale", String(concern.zoom.scale));
}

function syncSkinDiagResultsMarkersUi() {
  const host = el.vtoSkinDiagResultsMarkers;
  if (!host) return;
  for (const btn of host.querySelectorAll(".vto-skin-diag-results__marker")) {
    const id = btn.getAttribute("data-concern-id");
    const active = id === skinDiagResultsSelectedId;
    btn.classList.toggle("vto-skin-diag-results__marker--active", active);
    btn.classList.toggle("vto-skin-diag-results__marker--inactive", !active);
  }
}

function syncSkinDiagResultsCardsUi() {
  const rail = el.vtoSkinDiagResultsCards;
  if (!rail) return;
  for (const card of rail.querySelectorAll(".vto-skin-diag-results__card")) {
    const id = card.getAttribute("data-concern-id");
    card.classList.toggle("vto-skin-diag-results__card--active", id === skinDiagResultsSelectedId);
  }
}

/** @param {string} id */
function selectSkinDiagConcern(id) {
  skinDiagResultsSelectedId = id;
  applySkinDiagResultsZoom();
  syncSkinDiagResultsMarkersUi();
  syncSkinDiagResultsCardsUi();
  const card = el.vtoSkinDiagResultsCards?.querySelector(`[data-concern-id="${id}"]`);
  card?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
}

function resetSkinDiagResultsView() {
  skinDiagResultsSelectedId = null;
  applySkinDiagResultsZoom();
  syncSkinDiagResultsMarkersUi();
  syncSkinDiagResultsCardsUi();
}

function mountSkinDiagResultsMarkers() {
  const host = el.vtoSkinDiagResultsMarkers;
  if (!host) return;
  host.replaceChildren();
  for (const c of SKIN_DIAG_FAKE_CONCERNS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vto-skin-diag-results__marker vto-skin-diag-results__marker--point";
    btn.style.left = `${c.marker.x * 100}%`;
    btn.style.top = `${skinDiagFaceMapY(c.marker.y) * 100}%`;
    btn.dataset.concernId = c.id;
    btn.setAttribute("aria-label", `${c.title} on face`);
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectSkinDiagConcern(c.id);
    });
    host.append(btn);
  }
  syncSkinDiagResultsMarkersUi();
}

/**
 * Interpolates the concern score-ring blue from lighter (lowest) to base (highest).
 * @param {number} score
 * @param {number} minScore
 * @param {number} maxScore
 */
function skinDiagScoreProgressColor(score, minScore, maxScore) {
  const base = { r: 130, g: 130, b: 221 }; // #8282dd
  const light = { r: 201, g: 201, b: 241 }; // #c9c9f1
  const range = maxScore - minScore;
  const ratio = range <= 0 ? 1 : Math.min(1, Math.max(0, (score - minScore) / range));
  const mix = (lo, hi) => Math.round(lo + (hi - lo) * ratio);
  return `rgb(${mix(light.r, base.r)}, ${mix(light.g, base.g)}, ${mix(light.b, base.b)})`;
}

/** @param {string} imageUrl */
function mountSkinDiagResultsCards(imageUrl) {
  const rail = el.vtoSkinDiagResultsCards;
  if (!rail) return;
  rail.replaceChildren();
  const r = 22;
  const circum = 2 * Math.PI * r;
  const concerns = [...SKIN_DIAG_FAKE_CONCERNS].sort((a, b) => b.score - a.score);
  const maxScore = concerns.length ? concerns[0].score : 0;
  const minScore = concerns.length ? concerns[concerns.length - 1].score : 0;
  for (const c of concerns) {
    const pct = Math.min(1, c.score / c.scoreMax);
    const dash = circum * pct;
    const wrap = document.createElement("div");
    wrap.className = "vto-skin-diag-results__card";
    wrap.setAttribute("role", "listitem");
    wrap.tabIndex = 0;
    wrap.dataset.concernId = c.id;
    wrap.innerHTML = `
      <div class="vto-skin-diag-results__card-header">
        <div class="vto-skin-diag-results__card-header-main">
          <div class="vto-skin-diag-results__card-thumb">
            <img class="vto-skin-diag-results__card-thumb-img" src="" alt="" decoding="async" width="64" height="64" />
          </div>
          <div class="vto-skin-diag-results__card-copy">
            <h3 class="vto-skin-diag-results__card-title"></h3>
            <div class="vto-skin-diag-results__card-tag">
              <span class="vto-skin-diag-results__card-tag-label"></span>
            </div>
          </div>
        </div>
        <div class="vto-skin-diag-results__card-score-wrap" aria-hidden="true">
          <svg class="vto-skin-diag-results__card-score-svg" viewBox="0 0 56 56" width="56" height="56">
            <circle class="vto-skin-diag-results__card-score-track" cx="28" cy="28" r="${r}" fill="none" stroke-width="5" />
            <circle class="vto-skin-diag-results__card-score-progress" cx="28" cy="28" r="${r}" fill="none" stroke-width="5"
              stroke-dasharray="${dash} ${circum}" stroke-linecap="round" transform="rotate(-90 28 28)" />
          </svg>
          <span class="vto-skin-diag-results__card-score-num"></span>
        </div>
      </div>
      <div class="vto-skin-diag-results__card-content">
        <p class="vto-skin-diag-results__card-body"></p>
        <button type="button" class="vto-skin-diag-results__card-arrow" aria-label="Open concern details in chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 17 17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    `;
    const img = /** @type {HTMLImageElement} */ (wrap.querySelector(".vto-skin-diag-results__card-thumb-img"));
    img.src = imageUrl;
    img.alt = "";
    const fx = c.marker.x * 100;
    const fy = skinDiagFaceMapY(c.marker.y) * 100;
    const pos = `${fx}% ${fy}%`;
    img.style.objectPosition = pos;
    img.style.transformOrigin = pos;
    const thumbScale = Math.min(3.35, Math.max(2.2, c.zoom.scale * 1.12));
    img.style.transform = `scale(${thumbScale})`;
    const title = wrap.querySelector(".vto-skin-diag-results__card-title");
    if (title) title.textContent = c.title;
    const tagLabel = wrap.querySelector(".vto-skin-diag-results__card-tag-label");
    if (tagLabel) tagLabel.textContent = c.severity;
    const body = wrap.querySelector(".vto-skin-diag-results__card-body");
    if (body) body.textContent = c.blurb;
    const num = wrap.querySelector(".vto-skin-diag-results__card-score-num");
    if (num) num.textContent = String(c.score);
    wrap.style.setProperty("--sd-score-progress", skinDiagScoreProgressColor(c.score, minScore, maxScore));
    wrap.addEventListener("click", (e) => {
      if (e.target.closest(".vto-skin-diag-results__card-arrow")) return;
      selectSkinDiagConcern(c.id);
    });
    wrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest(".vto-skin-diag-results__card-arrow")) return;
        e.preventDefault();
        selectSkinDiagConcern(c.id);
      }
    });
    const arrow = wrap.querySelector(".vto-skin-diag-results__card-arrow");
    arrow?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openSkinDiagConcernInChat(c.id);
    });
    rail.append(wrap);
  }
  syncSkinDiagResultsCardsUi();
}

/** @param {string} imageUrl */
function showSkinDiagResultsPanel(imageUrl) {
  el.vtoSkinDiagResultsImg.src = imageUrl;
  skinDiagResultsSelectedId = null;
  mountSkinDiagResultsMarkers();
  mountSkinDiagResultsCards(imageUrl);
  applySkinDiagResultsZoom();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagQuestionnairePanel();
  hideSkinDiagLoadingPanel();
  setVtoComposerChrome(false);
  el.vtoSkinDiagResultsPanel.hidden = false;
  el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "false");
  skinDiagResultsPeekUrl = imageUrl;
  requestAnimationFrame(() => el.vtoSkinDiagResultsClose?.focus());
}

function showSkinDiagResultsAfterLoad(imageUrl) {
  hideSkinDiagLoadingPanel();
  showSkinDiagResultsPanel(imageUrl);
}

/** @param {string} imageUrl */
function startSkinDiagPostQuizLoading(imageUrl) {
  clearSkinDiagPostQuizTimer();
  hideSkinDiagResultsPanel();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagQuestionnairePanel();
  setVtoComposerChrome(false);
  resetSkinDiagLoadingRows();
  el.vtoSkinDiagLoadingBg.style.backgroundImage = `url(${JSON.stringify(imageUrl)})`;
  el.vtoSkinDiagLoadingPanel.hidden = false;
  el.vtoSkinDiagLoadingPanel.setAttribute("aria-hidden", "false");
  const markDelays = [2000, 4000, 5800];
  markDelays.forEach((delayMs, i) => {
    skinDiagPostQuizTimers.push(
      window.setTimeout(() => {
        markSkinDiagLoadingRowDone(i);
      }, delayMs)
    );
  });
  skinDiagPostQuizTimers.push(
    window.setTimeout(() => {
      showSkinDiagResultsAfterLoad(imageUrl);
    }, 7000)
  );
}

function startSkinDiagPostQuizFlow() {
  const imageUrl = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (!imageUrl) {
    finishSkinDiagFlowToChat();
    return;
  }
  startSkinDiagPostQuizLoading(imageUrl);
}

function hideSkinDiagQuestionnairePanel() {
  if (!el.vtoSkinQuestionnairePanel) return;
  el.vtoSkinQuestionnairePanel.hidden = true;
  el.vtoSkinQuestionnairePanel.setAttribute("aria-hidden", "true");
}

function resetSkinDiagQuestionnaireState() {
  skinDiagQuizStep = 0;
  skinDiagQuizAnswers = { ageBand: null, skinType: null, sensitivity: null };
}

function syncSkinDiagQuizContinueEnabled() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step || !el.vtoSkinQuizContinue) return;
  const v = skinDiagQuizAnswers[step.key];
  const has = v != null && v !== "";
  el.vtoSkinQuizContinue.disabled = !has;
}

function skinDiagQuestionnaireAdvanceFromCurrentStep() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;
  if (step.last) {
    window.__lastSkinDiagQuizAnswers = { ...skinDiagQuizAnswers };
    hideSkinDiagQuestionnairePanel();
    startSkinDiagPostQuizFlow();
    return;
  }
  skinDiagQuizStep += 1;
  renderSkinDiagQuestionnaireStep();
  requestAnimationFrame(() => {
    const first = el.vtoSkinQuizOptions?.querySelector(".vto-skin-quiz__option");
    if (first) first.focus();
    else el.vtoSkinQuizContinue?.focus();
  });
}

function renderSkinDiagQuestionnaireStep() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;

  const pct = ((skinDiagQuizStep + 1) / SKIN_DIAG_QUIZ_STEPS.length) * 100;
  el.vtoSkinQuizProgressFill.style.width = `${pct}%`;

  el.vtoSkinQuizTitle.textContent = step.title;
  if (step.subtitle) {
    el.vtoSkinQuizSubtitle.hidden = false;
    el.vtoSkinQuizSubtitle.textContent = step.subtitle;
  } else {
    el.vtoSkinQuizSubtitle.hidden = true;
    el.vtoSkinQuizSubtitle.textContent = "";
  }

  el.vtoSkinQuizHelpBtn.textContent = step.helpLabel;
  el.vtoSkinQuizContinue.textContent = step.last ? "Submit" : "Next";

  el.vtoSkinQuizPreferNot.hidden = !step.showPreferNot;
  el.vtoSkinQuizPreferNot.classList.toggle(
    "vto-skin-quiz__prefer-not--on",
    !!(step.showPreferNot && skinDiagQuizAnswers.ageBand === "prefer_not")
  );

  el.vtoSkinQuizOptions.className = "vto-skin-quiz__options";
  if (step.layout === "grid") {
    el.vtoSkinQuizOptions.classList.add("vto-skin-quiz__options--grid");
  } else if (step.stackText === "center") {
    el.vtoSkinQuizOptions.classList.add("vto-skin-quiz__options--stack-center");
  }

  const current = skinDiagQuizAnswers[step.key];
  el.vtoSkinQuizOptions.replaceChildren();
  for (const opt of step.options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vto-skin-quiz__option";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", current === opt.value ? "true" : "false");
    btn.dataset.value = opt.value;
    btn.textContent = opt.label;
    if (current === opt.value) btn.classList.add("vto-skin-quiz__option--selected");
    btn.addEventListener("click", () => {
      skinDiagQuizAnswers[step.key] = opt.value;
      if (step.showPreferNot) {
        el.vtoSkinQuizPreferNot.classList.remove("vto-skin-quiz__prefer-not--on");
      }
      renderSkinDiagQuestionnaireStep();
    });
    el.vtoSkinQuizOptions.append(btn);
  }

  syncSkinDiagQuizContinueEnabled();
}

function showSkinDiagQuestionnairePanel() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  setVtoComposerChrome(true);
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  el.vtoSkinQuestionnairePanel.hidden = false;
  el.vtoSkinQuestionnairePanel.setAttribute("aria-hidden", "false");
  renderSkinDiagQuestionnaireStep();
  requestAnimationFrame(() => el.vtoSkinQuizBack.focus());
}

function skinDiagQuestionnaireBack() {
  if (skinDiagQuizStep <= 0) {
    hideSkinDiagQuestionnairePanel();
    showVtoSelfieConfirm();
    requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
    return;
  }
  skinDiagQuizStep -= 1;
  renderSkinDiagQuestionnaireStep();
  requestAnimationFrame(() => el.vtoSkinQuizBack.focus());
}

function skinDiagQuestionnaireContinue() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;
  const v = skinDiagQuizAnswers[step.key];
  if (v == null || v === "") return;
  skinDiagQuestionnaireAdvanceFromCurrentStep();
}

function showVtoTermsOnly() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = false;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  syncVtoExperienceBrandUi();
}

function showVtoLiveStub() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = false;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  syncVtoExperienceBrandUi();
}

function showVtoSelfieStub() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = false;
  el.vtoSelfieConfirmPanel.hidden = true;
  applySelfieStubSkinDiagUi(!!(skinDiagFlowActive || vtoSkinBrandExperienceActive));
  syncVtoExperienceBrandUi();
}

function showVtoSelfieConfirm() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = false;
  syncVtoExperienceBrandUi();
}

function resetVtoFlowPanels() {
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  resetSkinDiagQuestionnaireState();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  tryOnShadeContextKey = null;
  tryOnShadeList = [];
  tryOnShadeIndex = 0;
  revokeVtoSelfiePreview();
  el.vtoTermsCheckbox.checked = false;
  syncVtoConsentButton();
  if (vtoUserAcceptedTerms) {
    showVtoSelfieStub();
  } else {
    showVtoTermsOnly();
  }
}

function closeVtoFlow() {
  if (el.vtoFlow.hidden) return;
  el.vtoFlow.hidden = true;
  el.vtoFlow.setAttribute("aria-hidden", "true");
  tryOnFromChatSingleProduct = false;
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  applySelfieStubSkinDiagUi(false);
  resetVtoFlowPanels();
  setVtoComposerChrome(false);
  setComposerForChatMode();
  syncVtoExperienceBrandUi();
}

function openVtoTermsFlow() {
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  tryOnFromChatSingleProduct = false;
  closeProductDetail();
  resetVtoFlowPanels();
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  setVtoComposerChrome(true);
  syncVtoExperienceBrandUi();
  requestAnimationFrame(() => {
    if (!vtoUserAcceptedTerms) {
      el.vtoTermsClose.focus();
    } else {
      focusSelfieStubPrimaryAction();
    }
  });
}

function goVtoStepAfterConsent() {
  if (skinDiagFlowActive) {
    showSkinDiagSelfieEntry();
    return;
  }
  if (tryOnFromChatSingleProduct && (sessionPersistedSelfieUrl || vtoSelfiePreviewUrl)) {
    if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
    showVtoTryOn();
    return;
  }
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

function initVtoFlow() {
  el.chatView.addEventListener("click", (e) => {
    if (e.target.closest("[data-skin-diag-results-reopen]")) {
      e.preventDefault();
      reopenSkinDiagResultsFromChat();
      return;
    }
    const btn = e.target.closest(".vto-open");
    if (!btn) return;
    const card = btn.closest(".product-card");
    if (card) {
      const tier = card.getAttribute("data-tier");
      const idx = Number(card.getAttribute("data-product-index"));
      const catalog = card.getAttribute("data-catalog") === "foundation" ? "foundation" : "lips";
      if ((tier === "luxury" || tier === "budget") && Number.isFinite(idx) && getProductList(catalog, tier)[idx]) {
        vtoSelectedProductKey = { tier, index: idx, catalog };
      }
    }
    openVtoTermsFlow();
  });

  el.productDetail.addEventListener("click", (e) => {
    if (e.target.closest(".vto-open")) openVtoTermsFlow();
  });

  el.vtoTermsCheckbox.addEventListener("change", () => syncVtoConsentButton());

  el.vtoConsentBtn.addEventListener("click", () => {
    if (!el.vtoTermsCheckbox.checked) return;
    vtoUserAcceptedTerms = true;
    if (skinDiagFlowActive || vtoSkinBrandExperienceActive) {
      skinDiagUserAcceptedTerms = true;
    }
    goVtoStepAfterConsent();
  });

  el.vtoTermsClose.addEventListener("click", () => closeVtoFlow());

  el.vtoStubLiveMode.addEventListener("click", () => {
    showVtoLiveStub();
    requestAnimationFrame(() => el.vtoLiveStubDone.focus());
  });

  el.vtoLiveStubBack.addEventListener("click", () => {
    showVtoSelfieStub();
    focusSelfieStubPrimaryAction();
  });
  el.vtoLiveStubDone.addEventListener("click", () => {
    showVtoSelfieStub();
    focusSelfieStubPrimaryAction();
  });

  el.vtoSelfieStubClose.addEventListener("click", () => closeVtoFlow());

  el.vtoSelfieStubInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieStubPrivacyLearn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieTake.addEventListener("click", () => {
    void startVtoSelfieCamera();
  });

  el.vtoSelfieUploadFallback?.addEventListener("click", () => {
    const input = el.vtoSelfieUploadInput;
    if (!input) return;
    input.value = "";
    input.click();
  });

  el.vtoSelfieUploadInput?.addEventListener("change", (e) => {
    const input = /** @type {HTMLInputElement} */ (e.currentTarget);
    const file = input.files?.[0];
    if (!file) return;
    void handleUploadedSelfieFile(file);
    input.value = "";
  });

  el.vtoSelfieCameraClose.addEventListener("click", () => {
    clearVtoCaptureTimers();
    stopVtoCameraStream();
    showVtoSelfieStub();
    requestAnimationFrame(() => el.vtoSelfieTake.focus());
  });

  el.vtoSelfieCameraInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieConfirmClose.addEventListener("click", () => closeVtoFlow());

  el.vtoSelfieConfirmInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieUseImage.addEventListener("click", () => {
    if (vtoSelfiePreviewUrl) {
      if (sessionPersistedSelfieUrl && sessionPersistedSelfieUrl !== vtoSelfiePreviewUrl) {
        URL.revokeObjectURL(sessionPersistedSelfieUrl);
      }
      sessionPersistedSelfieUrl = vtoSelfiePreviewUrl;
    }
    if (skinDiagFlowActive) {
      resetSkinDiagQuestionnaireState();
      showSkinDiagQuestionnairePanel();
      return;
    }
    showVtoTryOn();
  });

  el.vtoSelfieRetake.addEventListener("click", () => retakeVtoSelfie());

  el.vtoSkinQuizBack.addEventListener("click", () => skinDiagQuestionnaireBack());
  el.vtoSkinQuizContinue.addEventListener("click", () => skinDiagQuestionnaireContinue());
  el.vtoSkinQuizHelpBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  el.vtoSkinQuizPreferNot.addEventListener("click", () => {
    const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
    if (!step?.showPreferNot) return;
    skinDiagQuizAnswers.ageBand = "prefer_not";
    el.vtoSkinQuizPreferNot.classList.add("vto-skin-quiz__prefer-not--on");
    renderSkinDiagQuestionnaireStep();
  });

  el.vtoSkinDiagResultsClose?.addEventListener("click", () => finishSkinDiagFlowToChat());
  el.vtoSkinDiagResultsZoomOut?.addEventListener("click", () => resetSkinDiagResultsView());

  el.vtoTryOnClose.addEventListener("click", () => closeVtoFlow());
  el.vtoTryOnModeToggle.addEventListener("click", () => {
    setTryOnReferenceMode(!tryOnUseReferenceModel);
  });

  el.vtoTryOnMiniInfo.addEventListener("click", (e) => {
    e.preventDefault();
    const { tier, index, catalog } = getVtoProduct();
    openProductDetail(tier, index, catalog);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || el.vtoFlow.hidden) return;
    if (!el.vtoSelfieCameraPanel.hidden) {
      e.preventDefault();
      clearVtoCaptureTimers();
      stopVtoCameraStream();
      showVtoSelfieStub();
      requestAnimationFrame(() => el.vtoSelfieTake.focus());
      return;
    }
    if (!el.vtoTryOnPanel.hidden) {
      e.preventDefault();
      hideVtoTryOnPanel();
      showVtoSelfieConfirm();
      requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
      return;
    }
    if (!el.vtoSkinDiagLoadingPanel.hidden) {
      e.preventDefault();
      clearSkinDiagPostQuizTimer();
      const url = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
      if (url) showSkinDiagResultsAfterLoad(url);
      else finishSkinDiagFlowToChat();
      return;
    }
    if (!el.vtoSkinDiagResultsPanel.hidden) {
      e.preventDefault();
      finishSkinDiagFlowToChat();
      return;
    }
    if (!el.vtoSkinQuestionnairePanel.hidden) {
      e.preventDefault();
      skinDiagQuestionnaireBack();
      return;
    }
    if (!el.vtoSelfieConfirmPanel.hidden) {
      e.preventDefault();
      retakeVtoSelfie();
      return;
    }
    e.preventDefault();
    closeVtoFlow();
  });
}

function initNavChat() {
  el.navNewChatBtn?.addEventListener("click", () => startSkinDiagChat());
  el.navMenuBtn?.addEventListener("click", () => switchToMakeupChat());
}

renderPrompts();
initComposer();
initShellComposerStackObserver();
initProductDetail();
initVtoFlow();
initNavChat();

syncVtoExperienceBrandUi();
