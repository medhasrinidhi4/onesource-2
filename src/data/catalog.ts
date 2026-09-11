export type Category = {
  id: string;
  slug: string;
  index: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  bullets: string[];
  finishes: string[];
  leadTime: string;
};

export type Product = {
  id: string;
  slug: string;
  categoryId: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  finishes: { name: string; hex: string; note?: string }[];
  applications: string[];
  leadTime: string;
  compliance: string[];
  includes: string[];
  warranty: string;
  featured?: boolean;
  badge?: string;
  rating: number;
  projects: number;
};

export const CATEGORIES: Category[] = [
  {
    id: "marble",
    slug: "marble-natural-stone",
    index: "01",
    name: "Marble & Natural Stone",
    short: "Marble",
    tagline: "Slabs & cut-to-size",
    description:
      "Full slabs, benchtops and cut-to-size stone for kitchens, bathrooms, vanities and feature walls — supplied and installed by our own stonemasons.",
    image:
      "https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "Gem",
    bullets: [
      "Calacatta, Carrara, Nero Marquina and travertine",
      "Engineered stone and porcelain slabs",
      "Vein matching and book-matched feature panels",
      "Cut-to-size, edge profiling and templating",
      "Installed by our stonemasons on site",
    ],
    finishes: ["Honed", "Polished", "Leathered", "Brushed"],
    leadTime: "2–4 weeks + install",
  },
  {
    id: "joinery",
    slug: "cabinetry-joinery",
    index: "02",
    name: "Cabinetry & Joinery",
    short: "Joinery",
    tagline: "Kitchens, wardrobes, vanities",
    description:
      "Custom kitchens, wardrobes, laundries and vanities made to your plans — supplied flat-pack or pre-assembled, with full installation by our team.",
    image:
      "https://images.pexels.com/photos/6283972/pexels-photo-6283972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "CookingPot",
    bullets: [
      "Made to your cabinet schedule and elevations",
      "Melamine, veneer, 2-pac and thermolaminated",
      "Soft-close German hardware throughout",
      "Volume pricing for multi-dwelling projects",
      "Installed by our joinery team on site",
    ],
    finishes: ["2-Pac Matte", "Timber Veneer", "Melamine", "Thermo"],
    leadTime: "4–6 weeks + install",
  },
  {
    id: "windows",
    slug: "windows-double-glazing",
    index: "03",
    name: "Windows & Double Glazing",
    short: "Windows",
    tagline: "Aluminium frames & IGUs",
    description:
      "Commercial-grade aluminium window and door systems, including thermally broken frames and double glazed units — supplied and installed.",
    image:
      "https://images.pexels.com/photos/8134763/pexels-photo-8134763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "AppWindow",
    bullets: [
      "Sliding, awning, casement, bifold and stacker",
      "Double glazed IGUs for acoustic + thermal",
      "Powdercoat, anodised and timber-look finishes",
      "Supplied to suit NCC and BASIX requirements",
      "Installed by our glazing team",
    ],
    finishes: ["Monument", "Surfmist", "Black", "Timber-look"],
    leadTime: "5–7 weeks + install",
  },
  {
    id: "garage",
    slug: "garage-doors",
    index: "04",
    name: "Garage Doors",
    short: "Garage",
    tagline: "Sectional, roller, cladded",
    description:
      "Every door type — sectional, roller, tilt and side-hinged — including aluminium cladded architectural doors, supplied and installed.",
    image:
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "Warehouse",
    bullets: [
      "Aluminium cladded + slatted architectural doors",
      "Timber-look, flush panel and perforated designs",
      "Insulated panels and quiet motor packages",
      "Made to opening sizes from your drawings",
      "Installed by our door team on site",
    ],
    finishes: ["Woodgrain", "Flush", "Slatted", "Perforated"],
    leadTime: "3–5 weeks + install",
  },
  {
    id: "tiles",
    slug: "tiles-pavers",
    index: "05",
    name: "Tiles & Pavers",
    short: "Tiles",
    tagline: "Large format & outdoor",
    description:
      "Large format porcelain, ceramic and stone tiles for floors, walls, wet areas and external paving — supplied and laid by our team.",
    image:
      "https://images.pexels.com/photos/8082315/pexels-photo-8082315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "LayoutGrid",
    bullets: [
      "Formats up to 1600 × 3200mm",
      "Matching indoor + outdoor paver ranges",
      "Slip ratings suited to Australian wet areas",
      "Full-project quantities held together",
      "Laid by our tiling team on site",
    ],
    finishes: ["Matte", "Lappato", "Natural", "Anti-slip P5"],
    leadTime: "Ex-stock to 3 weeks + lay",
  },
  {
    id: "bathroom",
    slug: "bathroomware",
    index: "06",
    name: "Bathroomware",
    short: "Bathroom",
    tagline: "Tapware & sanitaryware",
    description:
      "Tapware, showers, toilets, baths, basins and vanities in current designer finishes — packaged per bathroom and installed by our team.",
    image:
      "https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icon: "Bath",
    bullets: [
      "Brushed brass, gunmetal, matte black, chrome",
      "WELS-rated tapware and toilet suites",
      "Freestanding baths, wall-hung basins",
      "Bathroom packs priced per dwelling",
      "Installed by our plumbing team",
    ],
    finishes: ["Brushed Brass", "Gunmetal", "Matte Black", "Chrome"],
    leadTime: "Ex-stock to 2 weeks + install",
  },
];

export const PRODUCTS: Product[] = [
  // MARBLE
  {
    id: "m1",
    slug: "calacatta-oro-honed-slab",
    categoryId: "marble",
    name: "Calacatta Oro Honed Slab",
    tagline: "Book-matched island + splashback stone",
    description:
      "Bold gold-grey veining on a warm white ground. The spec-home closer — reads as luxury in photos and on inspection.",
    longDescription: [
      "Calacatta Oro is our most requested marble for premium kitchens and primary ensuites. We supply full slabs or cut-to-size benchtops with mitred island ends, waterfall legs and vein-matched splashbacks.",
      "Every order is templated on site, cut with CNC accuracy, and installed by our own stonemasons — including sealing, joinery cut-outs and final polish on handover.",
    ],
    images: [
      "https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/3847490/pexels-photo-3847490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Book-matching + vein mapping before cutting",
      "20mm and 30mm thicknesses, mitred to 40–60mm profiles",
      "Waterfall ends, splashbacks and vanity tops to match",
      "On-site templating and CNC cut-outs for sinks/cooktops",
      "Sealed and installed by our stonemasons",
    ],
    specs: [
      { label: "Slab size", value: "≈ 3000 × 1900mm (varies by block)" },
      { label: "Thickness", value: "20 / 30mm, mitred profiles available" },
      { label: "Finish", value: "Honed (polished on request)" },
      { label: "Edge profiles", value: "Sharknose, arris, bullnose, mitred" },
      { label: "Sealing", value: "Premium impregnating sealer included" },
      { label: "Supply scope", value: "Slabs, cut-to-size, splashbacks, vanities" },
    ],
    finishes: [
      { name: "Honed", hex: "#EDE8DD" },
      { name: "Polished", hex: "#FAF8F4" },
      { name: "Leathered", hex: "#D9CDB5" },
    ],
    applications: ["Kitchen islands", "Splashbacks", "Vanities", "Feature walls"],
    leadTime: "2–4 weeks + install",
    compliance: ["Slip + stain guidance supplied", "Care kit on handover"],
    includes: ["Templating", "Supply", "Delivery to site", "Installation", "Sealing"],
    warranty: "10-year installation workmanship warranty",
    featured: true,
    badge: "Most specified",
    rating: 4.9,
    projects: 230,
  },
  {
    id: "m2",
    slug: "carrara-bianco-select",
    categoryId: "marble",
    name: "Carrara Bianco Select",
    tagline: "Soft grey veining for bathrooms + laundries",
    description:
      "Classic Italian Carrara with soft linear veining. Perfect for multi-bathroom packages where consistency matters.",
    longDescription: [
      "Carrara Bianco Select is graded for consistent background and veining across multiple bathrooms — ideal for duplexes, townhouses and unit blocks.",
      "We batch slabs per project so all vanities read as one selection, and we cut shower hob caps, thresholds and niches to match.",
    ],
    images: [
      "https://images.pexels.com/photos/3847490/pexels-photo-3847490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8082315/pexels-photo-8082315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Project-batched slabs for consistency",
      "Vanity tops, hobs, thresholds + niches",
      "Honed finish standard for wet areas",
      "Cut to joinery drawings",
      "Installed + sealed on site",
    ],
    specs: [
      { label: "Slab size", value: "≈ 2800 × 1700mm" },
      { label: "Thickness", value: "20mm standard" },
      { label: "Finish", value: "Honed" },
      { label: "Batching", value: "Held per project / dwelling" },
      { label: "Extras", value: "Hob caps, niches, thresholds" },
    ],
    finishes: [
      { name: "Bianco Honed", hex: "#E8E8E6" },
      { name: "Bianco Polished", hex: "#F5F5F3" },
    ],
    applications: ["Vanities", "Bathrooms", "Laundries", "Powder rooms"],
    leadTime: "2–3 weeks + install",
    compliance: ["Wet-area suitable", "Sealed for residential use"],
    includes: ["Measure", "Supply", "Delivery", "Installation"],
    warranty: "10-year installation workmanship warranty",
    featured: true,
    rating: 4.8,
    projects: 310,
  },
  {
    id: "m3",
    slug: "nero-marquina-dramatic",
    categoryId: "marble",
    name: "Nero Marquina Dramatic",
    tagline: "Black marble with white lightning veins",
    description:
      "High-drama black marble for islands, powder rooms and entries. Pairs beautifully with brushed brass bathroomware.",
    longDescription: [
      "Nero Marquina turns compact spaces into statements. We recommend honed or leathered finishes to soften reflections and hide everyday wear.",
      "Best detailed with mitred edges and full-height splashbacks — our team templates around joinery for shadowline-perfect junctions.",
    ],
    images: [
      "https://images.pexels.com/photos/6634140/pexels-photo-6634140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8142459/pexels-photo-8142459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Dramatic white veining on jet black",
      "Mitred island + waterfall detailing",
      "Full-height splashback capability",
      "Leathered finish hides fingerprints",
      "Brassware pairing packages",
    ],
    specs: [
      { label: "Slab size", value: "≈ 2600 × 1600mm" },
      { label: "Thickness", value: "20 / 30mm" },
      { label: "Finish", value: "Honed / Leathered" },
      { label: "Detailing", value: "Mitred, waterfall, full-height" },
    ],
    finishes: [
      { name: "Honed Black", hex: "#151515" },
      { name: "Leathered", hex: "#232323" },
    ],
    applications: ["Islands", "Powder rooms", "Bars", "Entries"],
    leadTime: "2–4 weeks + install",
    compliance: ["Sealed + care guide included"],
    includes: ["Templating", "Supply", "Delivery", "Installation"],
    warranty: "10-year installation workmanship warranty",
    badge: "Designer pick",
    rating: 4.9,
    projects: 140,
  },
  {
    id: "m4",
    slug: "travertine-porcelain-duo",
    categoryId: "marble",
    name: "Travertine + Porcelain Duo",
    tagline: "Natural look, low-maintenance option",
    description:
      "Classic travertine for feature areas plus matching porcelain for high-wear zones — the investor-smart stone package.",
    longDescription: [
      "Love travertine but worried about maintenance in a rental or spec home? We pair natural travertine features with colour-matched porcelain slabs for benchtops and wet areas.",
      "You get the warmth of natural stone where it photographs best, with wipe-and-go durability where tenants live hardest.",
    ],
    images: [
      "https://images.pexels.com/photos/30112371/pexels-photo-30112371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/33326580/pexels-photo-33326580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Natural travertine features + porcelain workhorses",
      "Colour-matched across materials",
      "Stain-resistant benchtop option",
      "Ideal for rentals + spec homes",
      "Single install team for both",
    ],
    specs: [
      { label: "Natural", value: "Travertine, honed + filled" },
      { label: "Porcelain", value: "12mm sintered slab" },
      { label: "Sizes", value: "Cut to joinery + tiling drawings" },
      { label: "Maintenance", value: "Low (porcelain zones)" },
    ],
    finishes: [
      { name: "Travertine Beige", hex: "#D8C7A8" },
      { name: "Porcelain Greige", hex: "#C9BFAE" },
      { name: "Porcelain Ivory", hex: "#EFE9DC" },
    ],
    applications: ["Spec homes", "Rentals", "Airbnb", "Townhouses"],
    leadTime: "2–3 weeks + install",
    compliance: ["Slip ratings on request"],
    includes: ["Selection pairing", "Supply", "Delivery", "Installation"],
    warranty: "10-year installation workmanship warranty",
    rating: 4.7,
    projects: 180,
  },
  // JOINERY
  {
    id: "j1",
    slug: "designer-kitchen-system",
    categoryId: "joinery",
    name: "Designer Kitchen System",
    tagline: "Made-to-plan kitchens, installed complete",
    description:
      "Custom kitchens built to your cabinet schedule — stone-ready carcasses, soft-close hardware and stone templating coordinated in one program.",
    longDescription: [
      "Send plans or a cabinet schedule and we return shop drawings, finishes board and a supply + install program matched to your build stages.",
      "Carcasses are built stone-ready, appliances are allowed for, and our installers return after stone templating for final adjustments and handles.",
    ],
    images: [
      "https://images.pexels.com/photos/7031210/pexels-photo-7031210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8142459/pexels-photo-8142459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8089083/pexels-photo-8089083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Built to your plans + elevations",
      "2-pac, veneer, melamine or thermo finishes",
      "German soft-close hinges + drawers",
      "Stone templating coordinated",
      "Handles, kickers + end panels included",
    ],
    specs: [
      { label: "Carcass", value: "16mm HMR, edged" },
      { label: "Doors", value: "2-pac / veneer / melamine / thermo" },
      { label: "Hardware", value: "Soft-close German throughout" },
      { label: "Benchtop allowance", value: "Stone-ready, templated on site" },
      { label: "Shop drawings", value: "Supplied for approval pre-build" },
    ],
    finishes: [
      { name: "Oatmeal 2-pac", hex: "#E6DED1" },
      { name: "Smoked Oak", hex: "#6B5844" },
      { name: "Graphite", hex: "#2B2F36" },
      { name: "White Linen", hex: "#F2F0EB" },
    ],
    applications: ["New builds", "Renovations", "Duplexes", "Apartments"],
    leadTime: "4–6 weeks + install",
    compliance: ["Moisture-resistant HMR", "Appliance specs allowed"],
    includes: ["Shop drawings", "Supply", "Delivery", "Installation", "Adjust on stone"],
    warranty: "10-year joinery + install warranty",
    featured: true,
    badge: "Builder favourite",
    rating: 4.9,
    projects: 420,
  },
  {
    id: "j2",
    slug: "wardrobe-walkin-system",
    categoryId: "joinery",
    name: "Wardrobe + Walk-in System",
    tagline: "Robes, walk-ins and linen storage",
    description:
      "Sliding, hinged and walk-in robes with LED, drawers and full-height doors — measured, made and fitted by our team.",
    longDescription: [
      "From investor-grade sliding robes to full walk-ins with island drawers and LED, we detail storage that photographs well and lives even better.",
      "We measure after plaster, manufacture to 2mm tolerance and scribe to walls and floors for a built-in look without filler strips everywhere.",
    ],
    images: [
      "https://images.pexels.com/photos/6580406/pexels-photo-6580406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134812/pexels-photo-8134812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/11701120/pexels-photo-11701120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Sliding, hinged + walk-in configurations",
      "LED + drawer + shoe detailing",
      "Measured after plaster",
      "Scribed to walls + floors",
      "Mirrors + internals available",
    ],
    specs: [
      { label: "Doors", value: "Up to 2700mm high" },
      { label: "Internals", value: "Drawers, hanging, shoe, LED" },
      { label: "Finish", value: "Melamine / veneer / 2-pac" },
      { label: "Measure", value: "Post-plaster site measure" },
    ],
    finishes: [
      { name: "Natural Oak", hex: "#C8A87A" },
      { name: "White", hex: "#F5F5F5" },
      { name: "Charcoal", hex: "#34383F" },
    ],
    applications: ["Bedrooms", "Walk-ins", "Linen", "Study nooks"],
    leadTime: "3–5 weeks + install",
    compliance: ["Soft-close standard"],
    includes: ["Measure", "Supply", "Delivery", "Installation"],
    warranty: "10-year joinery + install warranty",
    rating: 4.8,
    projects: 350,
  },
  {
    id: "j3",
    slug: "vanity-laundry-joinery",
    categoryId: "joinery",
    name: "Vanity + Laundry Joinery",
    tagline: "Wall-hung vanities, tallboys, laundries",
    description:
      "Bathroom vanities and laundry cabinets detailed for stone tops, wall-hung basins and plumbing rough-ins.",
    longDescription: [
      "Vanities and laundries fail at the junctions — stone, plumbing and tiling. Because we supply and install all three, those junctions are our problem, not yours.",
      "Wall-hung, floor-standing or shaker-detailed — all moisture-rated and set out to your tapware and basin selections.",
    ],
    images: [
      "https://images.pexels.com/photos/6758511/pexels-photo-6758511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031734/pexels-photo-7031734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7214728/pexels-photo-7214728.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Wall-hung + floor-standing vanities",
      "Stone tops coordinated",
      "Plumbing rough-in setouts",
      "Tallboys + shaving cabinets",
      "Laundry + broom storage",
    ],
    specs: [
      { label: "Carcass", value: "HMR moisture-resistant" },
      { label: "Tops", value: "Stone / solid surface ready" },
      { label: "Basins", value: "Wall-hung, inset, vessel" },
      { label: "Sizes", value: "600–1800mm + custom" },
    ],
    finishes: [
      { name: "Sage 2-pac", hex: "#9AA88F" },
      { name: "Oak Veneer", hex: "#B8936A" },
      { name: "White Satin", hex: "#F0EEEA" },
      { name: "Navy", hex: "#2B3A4F" },
    ],
    applications: ["Ensuites", "Main bathrooms", "Powder", "Laundries"],
    leadTime: "3–4 weeks + install",
    compliance: ["HMR + wet-area detailing"],
    includes: ["Setouts", "Supply", "Delivery", "Installation"],
    warranty: "10-year joinery + install warranty",
    rating: 4.8,
    projects: 290,
  },
  // WINDOWS
  {
    id: "w1",
    slug: "thermally-broken-sliding-system",
    categoryId: "windows",
    name: "Thermally Broken Sliding System",
    tagline: "Double glazed sliders + stackers",
    description:
      "Commercial-grade thermally broken sliders for street elevations and living zones — quiet, efficient and BASIX-friendly.",
    longDescription: [
      "Our thermally broken sliding and stacking systems hit the numbers certifiers ask for: U-value, SHGC and acoustic ratings documented per opening.",
      "We measure, manufacture to your window schedule, deliver staged and install with flashing + sealing suited to NCC requirements.",
    ],
    images: [
      "https://images.pexels.com/photos/36710315/pexels-photo-36710315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134763/pexels-photo-8134763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134818/pexels-photo-8134818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Thermally broken aluminium frames",
      "Double glazed IGUs standard",
      "Acoustic + BAL options",
      "NCC + BASIX documentation",
      "Flashing + sealing installed",
    ],
    specs: [
      { label: "Frame", value: "Thermally broken aluminium" },
      { label: "Glazing", value: "Double glazed IGU, Low-E options" },
      { label: "U-value", value: "From 2.8 (system dependent)" },
      { label: "Acoustic", value: "Rw options to suit road noise" },
      { label: "Sizes", value: "To schedule, up to 3000mm panels" },
    ],
    finishes: [
      { name: "Monument", hex: "#2E3338" },
      { name: "Surfmist", hex: "#E8E6DF" },
      { name: "Black", hex: "#121212" },
      { name: "Timber-look", hex: "#8A6B4D" },
    ],
    applications: ["Street elevations", "Living zones", "Apartments", "Duplexes"],
    leadTime: "5–7 weeks + install",
    compliance: ["NCC", "BASIX documentation", "Australian Standards"],
    includes: ["Measure", "Supply", "Staged delivery", "Installation", "Cert docs"],
    warranty: "10-year system + install warranty",
    featured: true,
    badge: "BASIX-ready",
    rating: 4.9,
    projects: 260,
  },
  {
    id: "w2",
    slug: "awning-casement-double-glazed",
    categoryId: "windows",
    name: "Awning + Casement Suite",
    tagline: "Bedrooms, bathrooms + laundries",
    description:
      "Awning and casement windows with double glazing, flyscreens and keyed locks — the quiet achiever for upper floors.",
    longDescription: [
      "Awnings and casements give you ventilation control with strong weather sealing. We detail them with restricted openings for upper floors and obscure glazing for bathrooms.",
      "Supplied with screens and locks keyed alike per dwelling, installed and adjusted for smooth operation at handover.",
    ],
    images: [
      "https://images.pexels.com/photos/7587855/pexels-photo-7587855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/13600834/pexels-photo-13600834.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/2371976/pexels-photo-2371976.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Awning + casement configurations",
      "Double glazed IGUs",
      "Flyscreens + keyed locks",
      "Obscure + restricted options",
      "Installed + adjusted",
    ],
    specs: [
      { label: "Operation", value: "Awning / casement / fixed" },
      { label: "Glazing", value: "Double glazed, obscure options" },
      { label: "Screens", value: "Included" },
      { label: "Locks", value: "Keyed alike per dwelling" },
    ],
    finishes: [
      { name: "White", hex: "#F2F2F2" },
      { name: "Monument", hex: "#2E3338" },
      { name: "Anodised", hex: "#9AA0A6" },
    ],
    applications: ["Bedrooms", "Bathrooms", "Laundries", "Stairs"],
    leadTime: "5–6 weeks + install",
    compliance: ["NCC + fall prevention options"],
    includes: ["Measure", "Supply", "Delivery", "Installation"],
    warranty: "10-year system + install warranty",
    rating: 4.8,
    projects: 240,
  },
  {
    id: "w3",
    slug: "bifold-stackers-architectural",
    categoryId: "windows",
    name: "Bifold + Stacker Architectural",
    tagline: "Indoor-outdoor living walls",
    description:
      "Bifold and corner stacker systems that open living zones to alfresco and pool — engineered for large spans.",
    longDescription: [
      "Large openings need engineering, not guesswork. We detail lintels, tracks and drainage with your builder so big glass performs in driving rain and summer heat.",
      "Flush tracks, concealed drainage and Low-E double glazing keep thresholds step-free and interiors comfortable.",
    ],
    images: [
      "https://images.pexels.com/photos/8134818/pexels-photo-8134818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36710315/pexels-photo-36710315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134763/pexels-photo-8134763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Corner + straight configurations",
      "Flush thresholds",
      "Concealed drainage",
      "Low-E double glazing",
      "Engineered for large spans",
    ],
    specs: [
      { label: "Panels", value: "2–7 panels, corner options" },
      { label: "Threshold", value: "Flush / low-profile" },
      { label: "Glazing", value: "Low-E double glazed" },
      { label: "Drainage", value: "Concealed channel" },
    ],
    finishes: [
      { name: "Black Matt", hex: "#17181A" },
      { name: "Monument", hex: "#2E3338" },
      { name: "White", hex: "#F5F5F5" },
    ],
    applications: ["Alfresco", "Pool", "Living", "Entertaining"],
    leadTime: "6–8 weeks + install",
    compliance: ["Engineered + NCC"],
    includes: ["Engineering liaison", "Supply", "Delivery", "Installation"],
    warranty: "10-year system + install warranty",
    rating: 4.9,
    projects: 130,
  },
  // GARAGE
  {
    id: "g1",
    slug: "architectural-slatted-sectional",
    categoryId: "garage",
    name: "Architectural Slatted Sectional",
    tagline: "Aluminium slats, street-appeal hero",
    description:
      "Aluminium slatted sectional doors with negative detailing — the facade upgrade that lifts the whole street elevation.",
    longDescription: [
      "Slatted architectural doors pair with slatted fencing and screening for a cohesive facade. We manufacture to your opening sizes with insulated backing options.",
      "Quiet belt-drive motors, smartphone control and battery backup available — installed, balanced and programmed by our door team.",
    ],
    images: [
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6414285/pexels-photo-6414285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Architectural slatted profiles",
      "Custom powdercoat colours",
      "Insulated backing option",
      "Quiet belt-drive motors",
      "Smartphone + battery backup",
    ],
    specs: [
      { label: "Type", value: "Sectional, slatted aluminium" },
      { label: "Sizes", value: "Made to opening, single + double" },
      { label: "Motor", value: "Belt-drive, quiet package" },
      { label: "Control", value: "Remotes + smartphone option" },
      { label: "Finish", value: "Powdercoat, timber-look options" },
    ],
    finishes: [
      { name: "Monument Slat", hex: "#2E3338" },
      { name: "Spotted Gum Look", hex: "#7A5C3E" },
      { name: "Surfmist", hex: "#E8E6DF" },
      { name: "Black", hex: "#121212" },
    ],
    applications: ["New builds", "Duplexes", "Facade upgrades", "Developments"],
    leadTime: "3–5 weeks + install",
    compliance: ["Auto-reverse safety", "Wind rating on request"],
    includes: ["Measure", "Supply", "Delivery", "Installation", "Programming"],
    warranty: "7-year door + motor warranty",
    featured: true,
    badge: "Street appeal",
    rating: 4.9,
    projects: 210,
  },
  {
    id: "g2",
    slug: "flush-panel-insulated-sectional",
    categoryId: "garage",
    name: "Flush Panel Insulated Sectional",
    tagline: "Minimal, quiet, thermally smart",
    description:
      "Flush-panel insulated sectionals for modern facades — clean lines with genuine thermal and acoustic benefit.",
    longDescription: [
      "Flush panels disappear into rendered facades. With insulated sandwich construction, they also keep rooms above and beside the garage quieter and more temperate.",
      "We set openings with your builder, confirm headroom and sideroom, then install with full sealing and motor commissioning.",
    ],
    images: [
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31406337/pexels-photo-31406337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Flush minimal panels",
      "Insulated sandwich construction",
      "Full perimeter sealing",
      "Quiet motors standard",
      "Made to opening sizes",
    ],
    specs: [
      { label: "Construction", value: "Insulated sandwich panel" },
      { label: "Thickness", value: "40mm" },
      { label: "Sealing", value: "Full perimeter + floor" },
      { label: "Motor", value: "Belt-drive included options" },
    ],
    finishes: [
      { name: "Rendered White", hex: "#EDEAE4" },
      { name: "Monument", hex: "#2E3338" },
      { name: "Woodgrain", hex: "#8A6B4D" },
    ],
    applications: ["Modern homes", "Duplexes", "Townhouses"],
    leadTime: "3–4 weeks + install",
    compliance: ["Safety + wind ratings"],
    includes: ["Measure", "Supply", "Delivery", "Installation"],
    warranty: "7-year door + motor warranty",
    rating: 4.8,
    projects: 190,
  },
  // TILES
  {
    id: "t1",
    slug: "large-format-porcelain-1600",
    categoryId: "tiles",
    name: "Large Format Porcelain 1600 × 3200",
    tagline: "Slab tiles for bathrooms + living",
    description:
      "Book-matched porcelain slabs for shower walls, bathroom floors and living zones — marble look with zero sealing.",
    longDescription: [
      "1600 × 3200 porcelain slabs give you marble drama with grout lines you can count on one hand. We mitre niches and hobs for a solid-stone read.",
      "Supplied with matching 600 × 600 or 800 × 800 floor cuts, laid by our tilers with epoxy options for wet areas.",
    ],
    images: [
      "https://images.pexels.com/photos/8082315/pexels-photo-8082315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7214728/pexels-photo-7214728.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "1600 × 3200 slab format",
      "Book-matched veining",
      "Matching floor cuts",
      "Mitred niches + hobs",
      "Laid by our tilers",
    ],
    specs: [
      { label: "Format", value: "1600 × 3200 × 6mm" },
      { label: "Finish", value: "Matte / lappato" },
      { label: "Slip", value: "P2–P3 (walls + floors)" },
      { label: "Grout", value: "1.5–3mm, epoxy options" },
      { label: "Matching", value: "600/800 floor program" },
    ],
    finishes: [
      { name: "Calacatta Look", hex: "#EFECE5" },
      { name: "Nero Look", hex: "#1E1E1E" },
      { name: "Travertine Look", hex: "#D6C8B0" },
      { name: "Concrete Look", hex: "#B8B5AD" },
    ],
    applications: ["Showers", "Bathrooms", "Living floors", "Feature walls"],
    leadTime: "Ex-stock to 3 weeks + lay",
    compliance: ["Slip ratings documented"],
    includes: ["Setout", "Supply", "Delivery", "Laying"],
    warranty: "7-year tiling workmanship warranty",
    featured: true,
    badge: "Slab format",
    rating: 4.9,
    projects: 280,
  },
  {
    id: "t2",
    slug: "indoor-outdoor-paver-program",
    categoryId: "tiles",
    name: "Indoor–Outdoor Paver Program",
    tagline: "Matching tile + 20mm paver",
    description:
      "Matching 10mm interior tiles and 20mm exterior pavers — one colour from living to alfresco to pool.",
    longDescription: [
      "Nothing sells indoor-outdoor living like one continuous floor. Our matched programs run the same colour inside at 10mm and outside at 20mm on pedestals or bedding.",
      "Pool coping, step treads and drainage grates are cut to match, laid by our team across both zones for lippage-free thresholds.",
    ],
    images: [
      "https://images.pexels.com/photos/7045848/pexels-photo-7045848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031734/pexels-photo-7031734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Matched 10mm + 20mm program",
      "Pool coping + treads",
      "P5 slip options",
      "Pedestal or bedded install",
      "One team inside + out",
    ],
    specs: [
      { label: "Interior", value: "600×600 / 800×800 / 1200×600" },
      { label: "Exterior", value: "20mm paver, matching" },
      { label: "Slip", value: "Up to P5" },
      { label: "Coping", value: "Bullnose + square" },
    ],
    finishes: [
      { name: "Coastal Sand", hex: "#D9CFC0" },
      { name: "Honed Grey", hex: "#A9A9A6" },
      { name: "Charcoal", hex: "#4A4A4A" },
    ],
    applications: ["Alfresco", "Pool surrounds", "Living", "Entries"],
    leadTime: "Ex-stock to 3 weeks + lay",
    compliance: ["P-rated for wet + pool"],
    includes: ["Setout", "Supply", "Delivery", "Laying"],
    warranty: "7-year tiling workmanship warranty",
    rating: 4.8,
    projects: 220,
  },
  // BATHROOM
  {
    id: "b1",
    slug: "brushed-brass-tapware-pack",
    categoryId: "bathroom",
    name: "Brushed Brass Tapware Pack",
    tagline: "Per-bathroom designer pack",
    description:
      "Complete tapware packs per bathroom — mixers, showers, accessories — in brushed brass, gunmetal or matte black.",
    longDescription: [
      "Stop piecing tapware together across suppliers. Our per-bathroom packs include basin mixers, bath/shower mixers, rail or rain showers, spouts and accessories — all finish-matched.",
      "Priced per dwelling for multi-unit jobs, delivered boxed per bathroom and installed by our plumbing team with WELS docs for certifiers.",
    ],
    images: [
      "https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6758511/pexels-photo-6758511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/4154986/pexels-photo-4154986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "Complete per-bathroom packs",
      "Finish-matched mixers + showers",
      "Rain + rail shower options",
      "WELS docs supplied",
      "Installed by our plumbers",
    ],
    specs: [
      { label: "Pack includes", value: "Basin, bath/shower, rail/rain, spout, accessories" },
      { label: "Finishes", value: "Brass / gunmetal / black / chrome" },
      { label: "WELS", value: "Rated, docs per suite" },
      { label: "Pressure", value: "Suitable to 500kPa" },
      { label: "Packaging", value: "Boxed per bathroom" },
    ],
    finishes: [
      { name: "Brushed Brass", hex: "#C49A4B" },
      { name: "Gunmetal", hex: "#4A4A4D" },
      { name: "Matte Black", hex: "#1A1A1A" },
      { name: "Chrome", hex: "#D9D9D9" },
    ],
    applications: ["Ensuites", "Main baths", "Powder", "Multi-unit"],
    leadTime: "Ex-stock to 2 weeks + install",
    compliance: ["WELS", "Watermark"],
    includes: ["Packing per bath", "Supply", "Delivery", "Installation", "WELS docs"],
    warranty: "7-year tapware + install warranty",
    featured: true,
    badge: "Volume packs",
    rating: 4.9,
    projects: 380,
  },
  {
    id: "b2",
    slug: "freestanding-bath-basin-suite",
    categoryId: "bathroom",
    name: "Freestanding Bath + Basin Suite",
    tagline: "Sculptural baths, wall-hung basins",
    description:
      "Freestanding baths, back-to-wall suites and wall-hung basins — sized to your slab, waste positions and tiling setout.",
    longDescription: [
      "Baths and basins are unforgiving if rough-ins are wrong. Because we coordinate joinery, tiling and plumbing, wastes land where they should.",
      "Choose 1500–1800 freestanding baths with matching basins and shrouds, delivered with install templates and fitted by our team.",
    ],
    images: [
      "https://images.pexels.com/photos/4154986/pexels-photo-4154986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/39331232/pexels-photo-39331232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "1500–1800 freestanding baths",
      "Wall-hung + back-to-wall WCs",
      "Rough-in coordination",
      "Install templates supplied",
      "Fitted by our team",
    ],
    specs: [
      { label: "Baths", value: "1500 / 1600 / 1700 / 1800" },
      { label: "Material", value: "Acrylic + stone options" },
      { label: "WCs", value: "Back-to-wall, wall-hung" },
      { label: "Basins", value: "Wall-hung, inset, vessel" },
    ],
    finishes: [
      { name: "Gloss White", hex: "#FFFFFF" },
      { name: "Matte White", hex: "#F2F0EB" },
      { name: "Matte Black", hex: "#1A1A1A" },
    ],
    applications: ["Primary ensuites", "Main baths", "Powder", "Display homes"],
    leadTime: "Ex-stock to 2 weeks + install",
    compliance: ["Watermark", "WELS for WCs"],
    includes: ["Templates", "Supply", "Delivery", "Installation"],
    warranty: "7-year sanitary + install warranty",
    rating: 4.8,
    projects: 300,
  },
  {
    id: "b3",
    slug: "wels-bathroom-pack-dwelling",
    categoryId: "bathroom",
    name: "WELS Bathroom Pack / Dwelling",
    tagline: "Whole-dwelling bathroom package",
    description:
      "Every bathroom in the dwelling packaged together — tapware, sanitaryware, mirrors, accessories — one code, one delivery, one install.",
    longDescription: [
      "For duplexes, townhouses and unit blocks, our dwelling packs compress dozens of SKUs into one code per dwelling type. Estimators love it. Site managers love it more.",
      "Each pack is boxed per bathroom, labelled by unit and bathroom, with spares held for defects and a single WELS pack for certification.",
    ],
    images: [
      "https://images.pexels.com/photos/6758511/pexels-photo-6758511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7214728/pexels-photo-7214728.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031734/pexels-photo-7031734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    features: [
      "One code per dwelling type",
      "Boxed + labelled per bathroom",
      "Spares held for defects",
      "Single WELS cert pack",
      "Staged install program",
    ],
    specs: [
      { label: "Scope", value: "All baths per dwelling" },
      { label: "Coding", value: "One code per type" },
      { label: "Labelling", value: "Per unit + bathroom" },
      { label: "Spares", value: "2% held + cartridges" },
    ],
    finishes: [
      { name: "Brushed Brass", hex: "#C49A4B" },
      { name: "Matte Black", hex: "#1A1A1A" },
      { name: "Chrome", hex: "#D9D9D9" },
    ],
    applications: ["Duplexes", "Townhouses", "Apartments", "NDIS"],
    leadTime: "2–4 weeks + staged install",
    compliance: ["WELS pack", "Watermark"],
    includes: ["Packing", "Supply", "Staged delivery", "Installation"],
    warranty: "7-year + spares held 5 years",
    rating: 4.9,
    projects: 190,
  },
];

export const PROJECTS = [
  {
    id: "marrickville",
    name: "Multi-residential, Marrickville",
    scope: "42 apartments — windows, joinery, tiles",
    location: "Marrickville, NSW",
    type: "Multi-residential",
    dwellings: "42 apartments",
    categories: ["Windows", "Joinery", "Tiles"],
    image:
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7031210/pexels-photo-7031210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8082315/pexels-photo-8082315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    description:
      "Double glazed aluminium window and door systems, kitchen and bathroom joinery, and large format tiles supplied and installed for a four-level residential development.",
    stats: [
      { label: "Dwellings", value: "42" },
      { label: "Window units", value: "380+" },
      { label: "Kitchens", value: "42" },
      { label: "Program saved", value: "6 weeks" },
    ],
    quote: "One program for windows, joinery and tiles took three trades off our critical path.",
    client: "Project Manager, Tier 2 Builder",
  },
  {
    id: "bellevue",
    name: "New build residence, Bellevue Hill",
    scope: "Marble, joinery, bathroomware",
    location: "Bellevue Hill, NSW",
    type: "Custom home",
    dwellings: "5 bed, 4 bath",
    categories: ["Marble", "Joinery", "Bathroomware"],
    image:
      "https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    gallery: [
      "https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6580406/pexels-photo-6580406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    description:
      "Book-matched marble island and splashback, full house joinery in dark veneer, and brushed brass bathroomware supplied and installed across four bathrooms.",
    stats: [
      { label: "Marble slabs", value: "14" },
      { label: "Bathrooms", value: "4" },
      { label: "Joinery zones", value: "9" },
      { label: "Saving vs trade route", value: "28%" },
    ],
    quote: "The book-matched island is the photo every buyer asks about.",
    client: "Owner-builder",
  },
  {
    id: "rhodes",
    name: "Duplex pair, Rhodes",
    scope: "Garage doors, windows, tiles",
    location: "Rhodes, NSW",
    type: "Duplex",
    dwellings: "2 × 4 bed",
    categories: ["Garage Doors", "Windows", "Tiles"],
    image:
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36710315/pexels-photo-36710315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7045848/pexels-photo-7045848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    description:
      "Matching aluminium cladded sectional garage doors, double glazed windows to the street elevation, and outdoor-rated paving supplied and installed.",
    stats: [
      { label: "Dwellings", value: "2" },
      { label: "Garage doors", value: "2" },
      { label: "Paving", value: "180m²" },
      { label: "Handover", value: "On program" },
    ],
    quote: "Matching doors, windows and paving from one team — facade came together fast.",
    client: "Developer-builder",
  },
  {
    id: "cronulla",
    name: "Coastal renovation, Cronulla",
    scope: "Kitchen, stone, bathroomware",
    location: "Cronulla, NSW",
    type: "Renovation",
    dwellings: "4 bed renovation",
    categories: ["Marble", "Joinery", "Bathroomware", "Tiles"],
    image:
      "https://images.pexels.com/photos/33326580/pexels-photo-33326580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    gallery: [
      "https://images.pexels.com/photos/33326580/pexels-photo-33326580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/4154986/pexels-photo-4154986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    description:
      "Full kitchen with Calacatta island, two bathroom rebuilds with large-format porcelain and brushed brass packs — staged around a live-in renovation.",
    stats: [
      { label: "Bathrooms", value: "2" },
      { label: "Kitchen", value: "1" },
      { label: "Live-in staging", value: "Yes" },
      { label: "Defects at handover", value: "0" },
    ],
    quote: "They staged around us living upstairs. Zero defects at handover.",
    client: "Renovation client",
  },
];

export const TESTIMONIALS = [
  {
    name: "Daniel K.",
    role: "Custom Home Builder, Sydney",
    project: "Bellevue Hill Residence",
    text: "One quote for marble, joinery and bathroomware — and one team that actually showed up in sequence. We saved five figures against our usual trade split and finished the wet areas a week early.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Sarah M.",
    role: "Renovation Company Director",
    project: "Cronulla Renovation",
    text: "Live-in reno, two bathrooms plus kitchen. Their staging was flawless — tiles, stone and tapware arrived boxed per bathroom. Client thought we'd hired a concierge, not a supplier.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "James T.",
    role: "Owner-Builder",
    project: "Duplex Pair, Rhodes",
    text: "I sent a rough list and some plans. They came back with a proper schedule, lead times against my program, and pricing that was 26% under what I'd pieced together myself.",
    rating: 5,
    initials: "JT",
  },
  {
    name: "Priya R.",
    role: "Property Investor, 6 dwellings",
    project: "Townhouse Portfolio",
    text: "The dwelling packs are genius for investors. One code per townhouse type, boxed per bathroom, spares held. My property manager hasn't called about tapware once.",
    rating: 5,
    initials: "PR",
  },
  {
    name: "Marcus L.",
    role: "Project Manager, Tier 2 Builder",
    project: "Marrickville 42 Apartments",
    text: "Windows, joinery and tiles on one program took real risk off the job. Documentation for BASIX and WELS landed without chasing. We'll use them on the next two stages.",
    rating: 5,
    initials: "ML",
  },
];

export const FAQS = [
  {
    q: "Are you a builder or a supplier?",
    a: "Neither in the traditional sense — we're a supply + installation partner. We supply marble, joinery, windows, garage doors, tiles and bathroomware and install them with our own teams. You keep your builder; we take six supply-and-install packages off their plate.",
  },
  {
    q: "Why aren't prices listed?",
    a: "Because every job prices differently — sizes, finishes, quantities, site access and program all move the number. Catalogue pricing would mislead you. Send your plans or even a rough list and we return proper supply + install pricing in days, not weeks — typically up to 30% under the usual trade route.",
  },
  {
    q: "How does the 30% saving work?",
    a: "Three things compound: consolidated buying across categories, one delivery and install program instead of six separate trade call-outs, and fewer defects from junctions we control end-to-end (stone-to-joinery, tile-to-plumbing). On full-house or multi-dwelling packages clients typically save up to 30% versus sourcing each trade separately.",
  },
  {
    q: "Do you deliver and install outside Sydney?",
    a: "Yes. We're based in Darlinghurst, NSW and deliver Australia-wide with staged deliveries timed to your build program. Installation is available in metro Sydney and scheduled runs to regional NSW, interstate metro and major regional centres — ask us about your postcode when you request a quote.",
  },
  {
    q: "What do you need from me to quote?",
    a: "Whatever you have: full plans, a window or cabinet schedule, or a simple list of what the job needs. Photos and rough dimensions are enough to start. We'll come back with clarifications, then a single quote covering supply and installation with lead times.",
  },
  {
    q: "Can you work to my build program?",
    a: "That's the point. Your quote includes lead times against your program, staged deliveries per floor or dwelling, and install sequencing coordinated with your site manager. For volume work we hold quantities together so finishes stay consistent across stages.",
  },
  {
    q: "What warranties do you offer?",
    a: "10-year installation workmanship on stone, joinery and windows; 7-year on tiling, bathroomware and garage doors (plus manufacturer warranties on motors and tapware cartridges). Spares are held for volume jobs so defects don't turn into delays.",
  },
  {
    q: "Do you do renovations or just new builds?",
    a: "Both — plus duplexes, townhouses, apartments and commercial fit-outs. For live-in renovations we stage deliveries and installs room-by-room so you can keep living in the house.",
  },
];

export const RESOURCES = [
  {
    slug: "double-glazing-standards-australia",
    category: "Technical guide",
    title: "Double Glazing in Australia: What Builders Need to Check Before Ordering",
    excerpt:
      "U-value, SHGC, acoustic ratings and BASIX — the numbers that decide whether your window schedule passes.",
    image:
      "https://images.pexels.com/photos/36710315/pexels-photo-36710315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "8 min read",
    points: [
      "U-value vs SHGC: which one your certifier actually checks",
      "Acoustic Rw ratings for road and rail corridors",
      "Thermally broken vs standard aluminium — cost vs compliance",
      "How to read a window schedule so it passes first time",
    ],
  },
  {
    slug: "marble-vs-engineered-stone-benchtops",
    category: "Selections",
    title: "Marble or Engineered Stone: Choosing Benchtops for a Spec Home",
    excerpt:
      "Natural stone reads as luxury and sells homes. It also needs care. Here's how to decide per project.",
    image:
      "https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "6 min read",
    points: [
      "Where marble earns its premium (islands, splashbacks, ensuites)",
      "Where porcelain and engineered stone win (rentals, laundries)",
      "Sealing, maintenance and buyer perception",
      "The hybrid package investors actually order",
    ],
  },
  {
    slug: "cabinet-schedule-template-builders",
    category: "Builder tools",
    title: "The Cabinet Schedule That Gets You a Quote in 48 Hours",
    excerpt:
      "What to include (and what to skip) so your joinery quote comes back fast and accurate.",
    image:
      "https://images.pexels.com/photos/7031210/pexels-photo-7031210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "5 min read",
    points: [
      "Elevations vs schedules: what estimators need",
      "Appliance specs that change carcass sizes",
      "Stone overhangs and waterfall allowances",
      "A free checklist you can send with any plans",
    ],
  },
  {
    slug: "bathroom-packs-multi-dwelling",
    category: "Developers",
    title: "Bathroom Packs for Duplexes & Townhouses: One Code Per Dwelling",
    excerpt:
      "How volume bathroom packs cut SKU chaos, defects and certifier chasing on multi-dwelling jobs.",
    image:
      "https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "7 min read",
    points: [
      "From 40 SKUs to one code per dwelling type",
      "Boxed-per-bathroom delivery and labelling",
      "WELS packs certifiers accept first time",
      "Spares strategy for defects periods",
    ],
  },
  {
    slug: "large-format-tiles-install-guide",
    category: "Technical guide",
    title: "Large-Format Tiles: Setouts That Avoid Lippage and Cuts",
    excerpt:
      "1600×3200 slabs and 1200×600 floors — setout rules our tilers use on every job.",
    image:
      "https://images.pexels.com/photos/8082315/pexels-photo-8082315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "6 min read",
    points: [
      "Substrate flatness tolerances that matter",
      "Niche, hob and waste setouts for slab tiles",
      "Epoxy vs cement grout in wet areas",
      "Matching indoor tile to outdoor paver falls",
    ],
  },
  {
    slug: "garage-doors-street-appeal",
    category: "Selections",
    title: "Garage Doors & Street Appeal: What Lifts Value on a Duplex",
    excerpt:
      "Slatted, flush or timber-look? The facade maths for duplex and townhouse resales.",
    image:
      "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    readTime: "4 min read",
    points: [
      "Which profiles photograph best for listings",
      "Insulated vs non-insulated for rooms above",
      "Matching fencing, screening and front doors",
      "Motor packages buyers actually notice",
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id);
export const getProductsByCategory = (catId: string) =>
  PRODUCTS.filter((p) => p.categoryId === catId);
export const getRelatedProducts = (product: Product, count = 3) => {
  const sameCat = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );
  const others = PRODUCTS.filter(
    (p) => p.categoryId !== product.categoryId
  ).slice(0, Math.max(0, count - sameCat.length));
  return [...sameCat, ...others].slice(0, count);
};
