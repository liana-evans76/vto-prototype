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
    text: "Build a gentle routine for sensitive, redness-prone skin.",
    skincareIntent: true,
  },
  {
    id: "hydration",
    text: "Best ingredients for dehydrated, breakout-prone skin.",
    skincareIntent: true,
  },
  {
    id: "spf-daily",
    text: "Daily sunscreen that won’t sting around my eyes.",
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
      badgeSecondary: "Editor's pick",
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
      shadeLabel: "35 — Cheeky",
      swatch: "#c45a6e",
      swatchBg: "linear-gradient(135deg, #f8c9d4, #c45a6e)",
      cardImage: "assets/mny-1.jpg",
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
      title: "Color Sensational Made For All",
      shadeLabel: "382 — Red For Me",
      swatch: "#b3394b",
      swatchBg: "linear-gradient(135deg, #f5b8c0, #b3394b)",
      cardImage: "assets/mny-2.jpg",
      badgePrimary: "Universal red",
      badgeSecondary: "Satin",
      tags: [
        { dot: "#b3394b", label: "True red" },
        { dot: "#e96ce8", label: "Satin" },
        { dot: "#e96ce8", label: "Pigmented" },
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
      shadeLabel: "008 — Stone",
      swatch: "#c99592",
      swatchBg: "linear-gradient(135deg, #f1d5d2, #c99592)",
      cardImage: "assets/mny-3.jpg",
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
      title: "Super Stay Matte Ink",
      shadeLabel: "65 — Seductress",
      swatch: "#b5656d",
      swatchBg: "linear-gradient(135deg, #f0c4c8, #b5656d)",
      cardImage: "assets/mny-4.jpg",
      badgePrimary: "Matte",
      badgeSecondary: "Cult favorite",
      tags: [
        { dot: "#b5656d", label: "Mauve nude" },
        { dot: "#e96ce8", label: "Transfer-resistant" },
        { dot: "#e96ce8", label: "Comfort matte" },
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
  productDetailBadges: /** @type {HTMLElement} */ (document.getElementById("productDetailBadges")),
  productDetailTags: /** @type {HTMLElement} */ (document.getElementById("productDetailTags")),
  productDetailShadeDot: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeDot")),
  productDetailShadeLabel: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeLabel")),
  productDetailMeta: /** @type {HTMLElement} */ (document.getElementById("productDetailMeta")),
  productDetailDescription: /** @type {HTMLElement} */ (document.getElementById("productDetailDescription")),
  productDetailIngredientsBody: /** @type {HTMLElement} */ (document.getElementById("productDetailIngredientsBody")),
  productDetailBuy: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailBuy")),
  vtoFlow: /** @type {HTMLElement} */ (document.getElementById("vtoFlow")),
  vtoTermsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTermsPanel")),
  vtoModePanel: /** @type {HTMLElement} */ (document.getElementById("vtoModePanel")),
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
  vtoSelfieFileInput: /** @type {HTMLInputElement} */ (document.getElementById("vtoSelfieFileInput")),
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
  vtoSelfiePermModal: /** @type {HTMLElement} */ (document.getElementById("vtoSelfiePermModal")),
  vtoSelfiePermBackdrop: /** @type {HTMLElement} */ (document.getElementById("vtoSelfiePermBackdrop")),
  vtoSelfiePermDeny: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfiePermDeny")),
  vtoSelfiePermAllow: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfiePermAllow")),
  vtoSelfieCameraPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCameraPanel")),
  vtoSelfieVideo: /** @type {HTMLVideoElement} */ (document.getElementById("vtoSelfieVideo")),
  vtoSelfieGuidePill: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieGuidePill")),
  vtoSelfieGuidePath: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePath")),
  vtoSelfieCameraClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraClose")),
  vtoSelfieCameraInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraInfo")),
  vtoSelfieCaptureComplete: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCaptureComplete")),
  vtoSelfieCaptureCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById("vtoSelfieCaptureCanvas")),
  vtoSelfieStubClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubClose")),
  vtoSelfieStubInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubInfo")),
  vtoSelfieStubPrivacyLearn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubPrivacyLearn")),
  vtoTermsCheckbox: /** @type {HTMLInputElement} */ (document.getElementById("vtoTermsCheckbox")),
  vtoConsentBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoConsentBtn")),
  vtoTermsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTermsClose")),
  vtoModeClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoModeClose")),
  vtoModeLive: /** @type {HTMLButtonElement} */ (document.getElementById("vtoModeLive")),
  vtoModeSelfie: /** @type {HTMLButtonElement} */ (document.getElementById("vtoModeSelfie")),
  vtoModePrivacyLearn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoModePrivacyLearn")),
  vtoLiveStubBack: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubBack")),
  vtoLiveStubDone: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubDone")),
  vtoSelfieStubDone: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubDone")),
  vtoSelfieTake: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieTake")),
  vtoSelfieUpload: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieUpload")),
  composerRoot: /** @type {HTMLElement | null} */ (document.getElementById("composerRoot")),
  composerPlus: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerPlus")),
  composerAppMenu: /** @type {HTMLElement | null} */ (document.getElementById("composerAppMenu")),
  composerAppMenuBackdrop: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuBackdrop")),
  composerAppMenuVto: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuVto")),
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
    title: "What is your age band?",
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
 * Fake skin-concern hotspots (normalized 0–1 on the portrait). Used for results UI only.
 * Card thumbnails use `marker` as the focal point and `zoom.scale` to derive crop zoom.
 * @type {readonly { id: string, title: string, severity: string, score: number, scoreMax: number, blurb: string, marker: { x: number, y: number }, zoom: { x: number, y: number, scale: number } }[]}
 */
const SKIN_DIAG_FAKE_CONCERNS = [
  {
    id: "forehead",
    title: "Forehead texture",
    severity: "Mild",
    score: 14,
    scoreMax: 40,
    blurb: "Sun exposure and repeated expressions can deepen lines over time. Daily SPF helps protect this high-exposure zone.",
    marker: { x: 0.5, y: 0.26 },
    zoom: { x: 0.5, y: 0.28, scale: 2.08 },
  },
  {
    id: "undereye",
    title: "Undereye area",
    severity: "Moderate",
    score: 22,
    scoreMax: 40,
    blurb: "Sleep and hydration play a big role here. Cool compresses and a steady sleep schedule can soften the look of shadows.",
    marker: { x: 0.38, y: 0.44 },
    zoom: { x: 0.38, y: 0.44, scale: 2.22 },
  },
  {
    id: "cheek",
    title: "Cheek redness",
    severity: "Mild",
    score: 11,
    scoreMax: 40,
    blurb: "Weather and stress can trigger flushing on the cheeks. Fragrance-free routines often feel more comfortable.",
    marker: { x: 0.72, y: 0.48 },
    zoom: { x: 0.72, y: 0.48, scale: 2.12 },
  },
  {
    id: "pores",
    title: "Large pores",
    severity: "Mild",
    score: 12,
    scoreMax: 40,
    blurb: "Oil flow and genetics influence pore visibility. Clay masks a few times per week can help keep pores clear.",
    marker: { x: 0.55, y: 0.52 },
    zoom: { x: 0.56, y: 0.54, scale: 2.18 },
  },
  {
    id: "blemishes",
    title: "Blemishes",
    severity: "Moderate",
    score: 24,
    scoreMax: 40,
    blurb: "Hormones and humidity can invite breakouts around the chin. Avoid over-stripping the skin while treating spots.",
    marker: { x: 0.5, y: 0.71 },
    zoom: { x: 0.5, y: 0.68, scale: 2.15 },
  },
];

/** Pending skin-diag post-quiz timeouts (loading steps + handoff to results). */
const skinDiagPostQuizTimers = /** @type {number[]} */ ([]);

/** @type {string | null} */
let skinDiagResultsSelectedId = null;

/** Bumped to cancel in-flight assistant “generation” (typing + follow-up). */
let chatGenerationEpoch = 0;

function bumpChatGeneration() {
  chatGenerationEpoch += 1;
  removeTyping();
  flow = "idle";
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  chatAwaitingSkinDiagConfirm = false;
  refreshComposerActionState();
}

/** @type {string | null} */
let vtoSelfiePreviewUrl = null;

/** Blob URL kept after a successful selfie try-on so chat can reopen without re-uploading. */
let sessionPersistedSelfieUrl = /** @type {string | null} */ (null);

/** True after the user accepts VTO terms once this session (chat flow can skip the terms sheet). */
let vtoUserAcceptedTerms = false;

/** Try-on opened from chat “named product” path: single shade + selfie-backed mini card. */
let tryOnFromChatSingleProduct = false;

/** Selected composer app from plus menu (null means none). */
let composerSelectedApp = /** @type {null|'vto'} */ (null);

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

function scrollMainToBottom() {
  requestAnimationFrame(() => {
    el.mainScroll.scrollTop = el.mainScroll.scrollHeight;
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
    <p style="margin:0 0 12px">Next, we will use the same full-screen consent flow as our makeup try-on partner experience, so you know exactly how your image may be used.</p>
    <p style="margin:0">When you are ready for me to open that screen, reply in plain language—<strong>“yes,” “sure,” “go ahead,” “continue,”</strong> or <strong>“I am ready”</strong> all work. If you want to stay in chat for now, say something like <strong>“not now”</strong> or <strong>“later.”</strong></p>
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
    h.textContent = "How can I help with your skin today?";
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
}

function showSkinDiagSelfieEntry() {
  applySelfieStubSkinDiagUi(true);
  showVtoSelfieStub();
  requestAnimationFrame(() => el.vtoSelfieTake.focus());
}

function resetSkinDiagSessionFlags() {
  chatPreferredTier = null;
  chatPendingCarousel = null;
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  chatAwaitingSkinDiagConfirm = false;
}

function startSkinDiagChat() {
  if (!el.vtoFlow.hidden) closeVtoFlow();
  bumpChatGeneration();
  chatMode = "skin_diag";
  skinDiagFlowActive = false;
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
  skinDiagFlowActive = true;
  prepareVtoShellVisible();
  if (chatMode === "skin_diag") {
    el.composerRoot?.classList.remove("composer--vto");
    setComposerForChatMode();
  }
  if (!vtoUserAcceptedTerms) {
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
 * Applies a lightweight word-by-word reveal to assistant prose.
 * This preserves inline tags (e.g. <strong>) by only replacing text nodes.
 * @param {HTMLElement} root
 */
function streamAssistantText(root) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  const textBlocks = root.querySelectorAll(".assistant-text");
  for (const block of textBlocks) {
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
      }
    };
    window.setTimeout(tick, tickMs);
  }
}

function appendAssistantBlock(html, withAnim = true) {
  removeTyping();
  const wrap = document.createElement("div");
  wrap.className = `msg msg--assistant${withAnim ? " msg-anim" : ""}`;
  wrap.innerHTML = `<div class="assistant-surface">${html}</div>`;
  el.chatView.appendChild(wrap);
  wrap.querySelectorAll("[data-product-carousel]").forEach((host) => wireProductCarousel(/** @type {HTMLElement} */ (host)));
  if (withAnim) streamAssistantText(wrap);
  scrollMainToBottom();
}

/** Matches product card horizontal stride (276px card + 8px gap in CSS). */
const PRODUCT_CAROUSEL_FALLBACK_STEP = 284;

function carouselScrollStepPx(row) {
  const card = row.querySelector(".product-card");
  if (!card) return PRODUCT_CAROUSEL_FALLBACK_STEP;
  const cs = getComputedStyle(row);
  const gap = parseFloat(cs.columnGap || cs.gap || "8") || 8;
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
    prev.disabled = row.scrollLeft <= 2;
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

  return `<div class="where-buy">
    <div class="assistant-text">
      <p>
        Here is a quick way to get oriented in the <strong>U.S.</strong> for <strong>${escapeHtml(p.title)}</strong>
        <span class="where-buy__shade">(${escapeHtml(p.shadeLabel)})</span>. I can help you compare listings (price, shipping, minis vs. full size, return policies) and flag things to watch for with third-party sellers—I can not check out for you or see live inventory, but I can narrow options once you tell me what you care about most.
      </p>
    </div>
    <p class="where-buy__label">Places to start</p>
    <ul class="where-buy__list" role="list">${tilesHtml}</ul>
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
    /\b(budget(?:[\s-]friendly)?|drugstore|affordable|inexpensive|cheaper|cheapest|save\s+money|save\s+a\s+bit|lower\s*prices?|value\s*picks?|mass\s*market|drug\s+store|wallet[\s-]?friendly)\b/i;
  const hasL = luxuryRe.test(n);
  const hasB = budgetRe.test(n);
  if (hasL && hasB) return "ambiguous";
  if (hasL) return "luxury";
  if (hasB) return "budget";
  return null;
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
      <span class="tag-chip__dot" style="background:${escapeAttr(t.dot)};"></span>
      ${escapeHtml(t.label)}
    </span>`,
    )
    .join("");
}

function productCardHTML(p, tier, index, catalog = "lips") {
  return `
    <article class="product-card" aria-label="${escapeAttr(p.title)}" data-tier="${tier}" data-product-index="${index}" data-catalog="${catalog}">
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
    <div class="model-response">${modelResponseInnerHtml}</div>
    ${convActionsHTML()}
  `;
}

function buildCarousel(label) {
  const tier = tierKeyFromLabel(label);
  return buildProductCarouselBlock(tier, PRODUCTS[tier], resultsCopy(label), "lips");
}

/** @param {'luxury'|'budget'} tier */
function foundationResultsCopy(tier) {
  const isLux = tier === "luxury";
  const brand = isLux ? "Yves Saint Laurent" : "Maybelline";
  const vibe = isLux
    ? "luxe finishes from sheer tint to full matte—still in the <strong>luxury</strong> lane you picked earlier"
    : "drugstore-friendly staples with strong shade ranges—still in the <strong>budget-friendly</strong> lane you picked earlier";
  return `
    <p style="margin:0 0 10px">Here are four <strong>${brand}</strong> foundation ideas—${vibe}. <span aria-hidden="true">🧴</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to keep comparing, or tell me your undertone, coverage, and finish and I will narrow this down further.</p>
  `;
}

/** @param {'luxury'|'budget'} tier */
function buildFoundationCarouselBlock(tier) {
  return buildProductCarouselBlock(tier, FOUNDATION_PRODUCTS[tier], foundationResultsCopy(tier), "foundation");
}

function resultsCopy(label) {
  const isLux = label === "Luxury";
  if (isLux) {
    return `
      <p style="margin:0 0 10px">Here are four <strong>Yves Saint Laurent</strong> lip picks—gloss, satin, and matte finishes—in the <strong>pinky nude</strong> family you asked about. <span aria-hidden="true">💄</span></p>
      <p style="margin:0">On any card, tap <strong>Virtual Try-On</strong> to compare finishes and undertones live.</p>
    `;
  }
  return `
    <p style="margin:0 0 10px">Here are four <strong>Maybelline</strong> lip options—gloss, liquid matte, and satin—great <strong>budget-friendly</strong> ways to try pinky nudes. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Use <strong>Virtual Try-On</strong> on a card to see how each reads on you.</p>
  `;
}

function buildResultsBlock(label) {
  return buildCarousel(label);
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
  return `<div class="assistant-text">I still have you in the <strong>${lane}</strong> lane from earlier. Ask for another category (foundations, mascaras, concealers), a shade tweak, or where to shop—I will keep answers focused.</div>`;
}

function prepareVtoShellVisible() {
  closeProductDetail();
  stopVtoCameraStream();
  hideSelfiePermModal();
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
}

function launchVtoAfterTryOnConfirm() {
  tryOnFromChatSingleProduct = true;
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
  showVtoModeOnly();
  requestAnimationFrame(() => el.vtoModeLive.focus());
}

async function sendUserMessage(text, promptMeta) {
  const trimmed = text.trim();
  if (!trimmed) return;
  if (flow === "busy") return;
  closeVtoFlow();
  closeProductDetail();
  enterChatView();

  chatGenerationEpoch += 1;
  const myGen = chatGenerationEpoch;

  removeQuickReplies();

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
    } else {
      appendAssistantBlock(buildResultsBlock(labelForTier(tierParsed)));
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
}

function updateComposerTextState() {
  const has = el.input.value.trim().length > 0;
  el.composerField.classList.toggle("has-text", has);
  refreshComposerActionState();
}

function syncComposerAppPill() {
  if (!el.composerAppPill) return;
  el.composerAppPill.hidden = composerSelectedApp !== "vto";
}

function openComposerAppMenu() {
  if (!el.composerAppMenu) return;
  el.composerAppMenu.hidden = false;
  el.composerAppMenu.setAttribute("aria-hidden", "false");
}

function closeComposerAppMenu() {
  if (!el.composerAppMenu) return;
  el.composerAppMenu.hidden = true;
  el.composerAppMenu.setAttribute("aria-hidden", "true");
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
  return `
    <div class="product-detail__slide">
      <img class="product-detail__slide-photo" src="${escapeAttr(p.cardImage)}" alt="" loading="lazy" decoding="async" />
    </div>`;
}

function productDetailBadgesHTML(p) {
  return `
    <span class="badge badge--filled">${escapeHtml(p.badgePrimary)}</span>
    <span class="badge badge--outline">${escapeHtml(p.badgeSecondary)}</span>`;
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
}

/** Remembered from the budget quick reply so follow-ups (e.g. foundations) match the same tier. */
let chatPreferredTier = /** @type {'luxury'|'budget'|null} */ (null);

/** When set, the next Luxury / Budget chip picks this carousel instead of the default lip grid. */
let chatPendingCarousel = /** @type {null|'foundation'} */ (null);

/** Waiting for a typed budget vs luxury preference after `budgetQuestionHtml`. */
let chatAwaitingBudgetTierReply = false;

/** Waiting for typed confirmation before opening the named-product try-on flow. */
let chatAwaitingTryOnConfirm = false;

/** Waiting for typed confirmation before opening Skin Diagnosis (terms flow). */
let chatAwaitingSkinDiagConfirm = false;

/** @type {{ tier: 'luxury'|'budget'; index: number; catalog: ProductCatalogId } | null} */
let vtoSelectedProductKey = null;

/** @param {'luxury'|'budget'} tier @param {number} index @param {ProductCatalogId} [catalog] */
function openProductDetail(tier, index, catalog = "lips") {
  const list = getProductList(catalog, tier);
  if (!list || !list[index]) return;
  const p = list[index];
  vtoSelectedProductKey = { tier, index, catalog };

  el.productDetailBrand.textContent = p.brand;
  el.productDetailTitle.textContent = p.title;
  el.productDetailBadges.innerHTML = productDetailBadgesHTML(p);
  el.productDetailTags.innerHTML = tagsHTML(p.tags);
  el.productDetailShadeDot.style.background = p.swatch;
  el.productDetailShadeLabel.textContent = p.shadeLabel;
  el.productDetailMeta.innerHTML = `
    <div class="price-row">
      <span class="price-row__was">${escapeHtml(p.priceWas)}</span>
      <span>${escapeHtml(p.priceNow)}</span>
    </div>
    ${ratingRowHTML(p)}`;
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

function nudgeHexColor(hex, step) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#c98b93";
  const r = Math.min(255, rgb.r + step);
  const g = Math.max(0, rgb.g - Math.round(step / 3));
  const b = Math.max(0, rgb.b - Math.round(step / 2));
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function buildTryOnShades(p) {
  /** @type {{ hex: string; label: string }[]} */
  const list = [];
  list.push({ hex: p.swatch, label: p.shadeLabel });
  for (const tag of p.tags) {
    if (!tag.dot) continue;
    if (list.some((x) => x.hex.toLowerCase() === tag.dot.toLowerCase())) continue;
    list.push({ hex: tag.dot, label: tag.label });
  }
  let k = 0;
  while (list.length < 16) {
    const prev = list[k % list.length].hex;
    k += 1;
    const hex = nudgeHexColor(prev, 5 + k * 4 + (k % 3) * 7);
    if (list.some((x) => x.hex.toLowerCase() === hex.toLowerCase())) {
      list.push({ hex: nudgeHexColor(prev, 11 + k * 13), label: `Shade ${list.length + 1}` });
    } else {
      list.push({ hex, label: `Shade ${list.length + 1}` });
    }
  }
  return list.slice(0, 16);
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
  el.vtoTryOnViewport.style.setProperty("--vto-split", String(p));
}

function initTryOnSlider() {
  tryOnSliderAborter?.abort();
  tryOnSliderAborter = new AbortController();
  const { signal } = tryOnSliderAborter;
  const vp = el.vtoTryOnViewport;
  const knob = el.vtoTryOnSliderKnob;

  /** @type {number | null} */
  let scrubPointerId = null;
  /** @type {boolean} */
  let scrubMouse = false;

  const onPointer = (clientX) => {
    const r = vp.getBoundingClientRect();
    if (r.width <= 0) return;
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    setTryOnSplit((x / r.width) * 100);
  };

  const stopScrub = (e) => {
    if (scrubPointerId !== null && e.pointerId === scrubPointerId) scrubPointerId = null;
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
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target.closest(".vto-tryon__dock") || e.target.closest(".vto-tryon__close-frost") || e.target.closest(".vto-tryon__mode-toggle")) return;
      if (knob.contains(e.target)) return;
      scrubPointerId = e.pointerId;
      e.preventDefault();
      onPointer(e.clientX);
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
  hideSelfiePermModal();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
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
      const { product } = getVtoProduct();
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

function resetSelfieGuidePath() {
  const path = el.vtoSelfieGuidePath;
  if (!path) return;
  path.classList.remove("is-visible");
  path.style.transition = "";
  path.style.removeProperty("stroke-dasharray");
  path.style.removeProperty("stroke-dashoffset");
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

function hideSelfiePermModal() {
  el.vtoSelfiePermModal.hidden = true;
}

function showSelfiePermModal() {
  el.vtoSelfiePermModal.hidden = false;
  requestAnimationFrame(() => el.vtoSelfiePermDeny.focus());
}

function showVtoSelfieCameraPanel() {
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoSelfieCameraPanel.hidden = false;
}

function retakeVtoSelfie() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  if (sessionPersistedSelfieUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
    sessionPersistedSelfieUrl = null;
  }
  revokeVtoSelfiePreview();
  el.vtoSelfieFileInput.value = "";
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

/** Skin Diagnosis: head pose prompts before the existing countdown + capture. */
async function startSkinDiagHeadTurnPhases() {
  el.vtoSelfieGuidePill.textContent = "Slowly turn your head to the left — keep moving for 2 seconds";
  await wait(2000);
  el.vtoSelfieGuidePill.textContent = "Now slowly turn your head to the right — keep moving for 2 seconds";
  await wait(2000);
  el.vtoSelfieGuidePill.textContent = "Great. Face forward and stay relaxed for the next step.";
  await wait(900);
  el.vtoSelfieGuidePill.textContent = "";
}

function startSelfieCaptureSequence() {
  clearVtoCaptureTimers();
  resetSelfieGuidePath();

  /** @param {number} n */
  function runCountdown(n, done) {
    if (n <= 0) {
      done();
      return;
    }
    el.vtoSelfieGuidePill.textContent = `Get ready…${n}`;
    queueCaptureTimer(() => runCountdown(n - 1, done), 1000);
  }

  runCountdown(3, () => {
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
  });
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

async function startSelfieCameraFromPermAllow() {
  hideSelfiePermModal();
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
    if (skinDiagFlowActive) {
      await startSkinDiagHeadTurnPhases();
    }
    startSelfieCaptureSequence();
  } catch {
    stopVtoCameraStream();
    showVtoSelfieStub();
    window.alert("Camera permission was denied or the camera could not be opened.");
  }
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

function finishSkinDiagFlowToChat() {
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  closeVtoFlow();
  enterChatView();
  requestAnimationFrame(() => el.input?.focus());
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
  pan.style.setProperty("--sd-origin-y", `${concern.zoom.y * 100}%`);
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
    btn.style.top = `${c.marker.y * 100}%`;
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

/** @param {string} imageUrl */
function mountSkinDiagResultsCards(imageUrl) {
  const rail = el.vtoSkinDiagResultsCards;
  if (!rail) return;
  rail.replaceChildren();
  const r = 24;
  const circum = 2 * Math.PI * r;
  for (const c of SKIN_DIAG_FAKE_CONCERNS) {
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
              <span class="vto-skin-diag-results__card-tag-dot" aria-hidden="true"></span>
              <span class="vto-skin-diag-results__card-tag-label"></span>
            </div>
          </div>
        </div>
        <div class="vto-skin-diag-results__card-score-wrap" aria-hidden="true">
          <svg class="vto-skin-diag-results__card-score-svg" viewBox="0 0 60 60" width="60" height="60">
            <circle class="vto-skin-diag-results__card-score-track" cx="30" cy="30" r="${r}" fill="none" stroke-width="3" />
            <circle class="vto-skin-diag-results__card-score-progress" cx="30" cy="30" r="${r}" fill="none" stroke-width="3"
              stroke-dasharray="${dash} ${circum}" stroke-linecap="round" />
          </svg>
          <span class="vto-skin-diag-results__card-score-num"></span>
        </div>
      </div>
      <div class="vto-skin-diag-results__card-content">
        <p class="vto-skin-diag-results__card-body"></p>
        <button type="button" class="vto-skin-diag-results__card-arrow" aria-label="Open concern details (coming soon)">
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
    const fy = c.marker.y * 100;
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
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagQuestionnairePanel();
  hideSkinDiagLoadingPanel();
  setVtoComposerChrome(false);
  el.vtoSkinDiagResultsPanel.hidden = false;
  el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "false");
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
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
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
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  setVtoComposerChrome(true);
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
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
  if (step.last) {
    window.__lastSkinDiagQuizAnswers = { ...skinDiagQuizAnswers };
    hideSkinDiagQuestionnairePanel();
    startSkinDiagPostQuizFlow();
    return;
  }
  skinDiagQuizStep += 1;
  renderSkinDiagQuestionnaireStep();
  requestAnimationFrame(() => el.vtoSkinQuizContinue.focus());
}

function showVtoTermsOnly() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = false;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
}

function showVtoModeOnly() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = false;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
}

function showVtoLiveStub() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = false;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
}

function showVtoSelfieStub() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = false;
  el.vtoSelfieConfirmPanel.hidden = true;
  applySelfieStubSkinDiagUi(!!skinDiagFlowActive);
}

function showVtoSelfieConfirm() {
  stopVtoCameraStream();
  hideSelfiePermModal();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoModePanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = false;
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
  revokeVtoSelfiePreview();
  el.vtoSelfieFileInput.value = "";
  el.vtoTermsCheckbox.checked = false;
  syncVtoConsentButton();
  if (vtoUserAcceptedTerms) {
    showVtoModeOnly();
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
  applySelfieStubSkinDiagUi(false);
  resetVtoFlowPanels();
  setVtoComposerChrome(false);
  setComposerForChatMode();
}

function openVtoTermsFlow() {
  skinDiagFlowActive = false;
  tryOnFromChatSingleProduct = false;
  closeProductDetail();
  resetVtoFlowPanels();
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  setVtoComposerChrome(true);
  requestAnimationFrame(() => {
    if (!vtoUserAcceptedTerms) {
      el.vtoTermsClose.focus();
    } else {
      el.vtoModeLive.focus();
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
  showVtoModeOnly();
  requestAnimationFrame(() => el.vtoModeLive.focus());
}

function initVtoFlow() {
  el.chatView.addEventListener("click", (e) => {
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
    goVtoStepAfterConsent();
  });

  el.vtoTermsClose.addEventListener("click", () => closeVtoFlow());
  el.vtoModeClose.addEventListener("click", () => closeVtoFlow());

  el.vtoModeLive.addEventListener("click", () => {
    showVtoLiveStub();
    requestAnimationFrame(() => el.vtoLiveStubDone.focus());
  });

  el.vtoModeSelfie.addEventListener("click", () => {
    showVtoSelfieStub();
    requestAnimationFrame(() => el.vtoSelfieTake.focus());
  });

  el.vtoModePrivacyLearn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoLiveStubBack.addEventListener("click", () => {
    showVtoModeOnly();
    requestAnimationFrame(() => el.vtoModeLive.focus());
  });
  el.vtoLiveStubDone.addEventListener("click", () => {
    showVtoModeOnly();
    requestAnimationFrame(() => el.vtoModeLive.focus());
  });

  el.vtoSelfieStubClose.addEventListener("click", () => closeVtoFlow());

  el.vtoSelfieStubInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieStubPrivacyLearn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieStubDone.addEventListener("click", () => {
    showVtoModeOnly();
    requestAnimationFrame(() => el.vtoModeSelfie.focus());
  });

  el.vtoSelfieTake.addEventListener("click", () => {
    showSelfiePermModal();
  });

  el.vtoSelfiePermDeny.addEventListener("click", () => {
    hideSelfiePermModal();
    requestAnimationFrame(() => el.vtoSelfieTake.focus());
  });

  el.vtoSelfiePermBackdrop.addEventListener("click", () => {
    hideSelfiePermModal();
    requestAnimationFrame(() => el.vtoSelfieTake.focus());
  });

  el.vtoSelfiePermAllow.addEventListener("click", () => {
    void startSelfieCameraFromPermAllow();
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

  el.vtoSelfieUpload.addEventListener("click", () => {
    el.vtoSelfieFileInput.click();
  });

  el.vtoSelfieFileInput.addEventListener("change", () => {
    const file = el.vtoSelfieFileInput.files?.[0];
    el.vtoSelfieFileInput.value = "";
    if (!file || !file.type.startsWith("image/")) return;
    if (sessionPersistedSelfieUrl) {
      URL.revokeObjectURL(sessionPersistedSelfieUrl);
      sessionPersistedSelfieUrl = null;
    }
    revokeVtoSelfiePreview();
    vtoSelfiePreviewUrl = URL.createObjectURL(file);
    el.vtoSelfiePreviewImg.src = vtoSelfiePreviewUrl;
    el.vtoSelfiePreviewImg.alt = "Preview of selected selfie";
    showVtoSelfieConfirm();
    requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
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
    if (!el.vtoSelfiePermModal.hidden) {
      e.preventDefault();
      hideSelfiePermModal();
      requestAnimationFrame(() => el.vtoSelfieTake.focus());
      return;
    }
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
initProductDetail();
initVtoFlow();
initNavChat();
