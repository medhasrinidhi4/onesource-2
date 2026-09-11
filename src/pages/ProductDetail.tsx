import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Bookmark, Check, ChevronRight, Clock, FileText,
  MapPin, Phone, Ruler, ShieldCheck, Star, Truck, Package, BadgeCheck, Plus, Minus,
} from "lucide-react";
import { getProduct, getCategory, getRelatedProducts, getProductsByCategory } from "../data/catalog";
import { Reveal } from "../components/ui";
import ProductCard from "../components/ProductCard";
import { useShortlist } from "../store/shortlist";
import { cn } from "../utils/cn";

const TABS = ["Overview", "Specifications", "Finishes", "Installation"] as const;

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  // Hooks must run before any early return
  const [imgIdx, setImgIdx] = useState(0);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");
  const [finishIdx, setFinishIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const { has, toggle, add } = useShortlist();

  const related = useMemo(() => (product ? getRelatedProducts(product, 3) : []), [product]);
  const siblings = useMemo(() => (product ? getProductsByCategory(product.categoryId).filter((p) => p.id !== product.id) : []), [product]);
  const category = product ? getCategory(product.categoryId) : undefined;

  if (!product || !category) return <Navigate to="/catalogue" replace />;

  const saved = has(product.id);

  return (
    <div className="pt-[104px]">
      {/* Breadcrumb bar */}
      <div className="border-b border-ink-950/8 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-[13px] font-medium text-ink-950/55 sm:px-6">
          <Link to="/" className="hover:text-ink-950">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/catalogue" className="hover:text-ink-950">Catalogue</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to={`/catalogue?cat=${category.id}`} className="hover:text-ink-950">{category.name}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-bold text-ink-950">{product.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Gallery */}
          <div>
            <Reveal>
              <div className="relative overflow-hidden rounded-[1.8rem] bg-ink-950 shadow-card">
                <div className="relative aspect-[4/3]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIdx}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={product.images[imgIdx]}
                      alt={`${product.name} — view ${imgIdx + 1}`}
                      className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
                      onClick={() => setLightbox(true)}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex gap-2">
                    {product.badge && (
                      <span className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">
                        {product.badge}
                      </span>
                    )}
                    <span className="glass rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">
                      {category.short}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {product.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIdx(i)}
                          aria-label={`View image ${i + 1}`}
                          className={cn("h-1.5 rounded-full transition-all", i === imgIdx ? "w-8 bg-brass-400" : "w-1.5 bg-white/50")}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setImgIdx((imgIdx - 1 + product.images.length) % product.images.length)}
                        className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-950 focus-ring"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setImgIdx((imgIdx + 1) % product.images.length)}
                        className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-950 focus-ring"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "overflow-hidden rounded-2xl border-2 transition-all focus-ring",
                      i === imgIdx ? "border-brass-500 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={0.15}>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: <Truck className="h-4 w-4" />, t: "Staged delivery", d: "Australia-wide" },
                  { icon: <Ruler className="h-4 w-4" />, t: "Our install team", d: "No sub-chasing" },
                  { icon: <ShieldCheck className="h-4 w-4" />, t: product.warranty.split(" ").slice(0, 2).join(" "), d: "workmanship" },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl border border-ink-950/8 bg-white p-3.5 text-center sm:p-4">
                    <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brass-100 text-brass-700">{b.icon}</span>
                    <p className="mt-2 text-[13px] font-bold">{b.t}</p>
                    <p className="text-[12px] text-ink-950/50">{b.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Info */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-ink-950/55">
                <span className="inline-flex items-center gap-1 rounded-full bg-brass-100 px-3 py-1 text-brass-800">
                  <Star className="h-3.5 w-3.5 fill-brass-600 text-brass-600" /> {product.rating}
                </span>
                <span>{product.projects} projects installed</span>
                <span className="h-1 w-1 rounded-full bg-ink-950/25" />
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {product.leadTime}</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display mt-4 text-4xl leading-[1.05] sm:text-5xl">{product.name}</h1>
              <p className="mt-2 text-[17px] font-medium text-brass-700">{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-950/65">{product.description}</p>
            </Reveal>

            {/* Finish selector */}
            <Reveal delay={0.14}>
              <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">
                    Finish — <span className="text-ink-950">{product.finishes[finishIdx].name}</span>
                  </p>
                  <span className="text-[12.5px] font-semibold text-ink-950/45">{product.finishes.length} options</span>
                </div>
                <div className="mt-3 flex gap-2.5">
                  {product.finishes.map((f, i) => (
                    <button
                      key={f.name}
                      onClick={() => setFinishIdx(i)}
                      title={f.name}
                      aria-label={`Select finish ${f.name}`}
                      aria-pressed={i === finishIdx}
                      className={cn(
                        "h-11 w-11 rounded-full border-2 transition-all focus-ring",
                        i === finishIdx
                          ? "scale-110 border-brass-600 shadow-[0_0_0_3px_rgba(193,154,91,0.3)]"
                          : "border-white shadow-[0_0_0_1px_rgba(11,14,20,0.2)] hover:scale-105"
                      )}
                      style={{ backgroundColor: f.hex }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Qty + CTAs */}
            <Reveal delay={0.18}>
              <div className="mt-4 rounded-2xl bg-ink-950 p-5 text-white sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brass-300">Catalogue mode</p>
                    <p className="mt-1 text-[14.5px] text-white/70">Priced on quote — supply + install, staged to program.</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/15 px-2 py-1.5">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center font-display text-xl" aria-live="polite">{qty}</span>
                    <button onClick={() => setQty(Math.min(99, qty + 1))} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-[1fr_auto]">
                  <Link
                    to={`/contact?product=${product.slug}&finish=${encodeURIComponent(product.finishes[finishIdx].name)}&qty=${qty}`}
                    className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brass-600 via-brass-500 to-brass-600 bg-[length:200%_100%] px-6 py-3.5 text-[15px] font-bold text-ink-950 transition-all duration-500 hover:bg-[position:100%_0] focus-ring"
                  >
                    Price this — supply + install
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => toggle(product.id)}
                    aria-pressed={saved}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-bold transition-all focus-ring",
                      saved ? "border-brass-400 bg-brass-500/15 text-brass-300" : "border-white/20 text-white hover:border-white/50"
                    )}
                  >
                    <Bookmark className={cn("h-4 w-4", saved && "fill-brass-400 text-brass-400")} />
                    {saved ? "Shortlisted" : "Shortlist"}
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between text-[13px] text-white/55">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Darlinghurst · installs Australia-wide</span>
                  <a href="tel:0412054048" className="inline-flex items-center gap-1.5 font-bold text-white"><Phone className="h-3.5 w-3.5 text-brass-400" /> 0412 054 048</a>
                </div>
              </div>
            </Reveal>

            {/* Includes */}
            <Reveal delay={0.22}>
              <div className="mt-4 rounded-2xl border border-ink-950/10 bg-white p-5">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">Your quote includes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.includes.map((inc) => (
                    <span key={inc} className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3.5 py-1.5 text-[13px] font-semibold text-ink-950/75">
                      <Check className="h-3.5 w-3.5 text-brass-600" /> {inc}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2 border-t border-ink-950/8 pt-3">
                  {product.compliance.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-950/55">
                      <BadgeCheck className="h-4 w-4 text-emerald-600" /> {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Tabs */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[1.8rem] border border-ink-950/10 bg-white shadow-card">
            <div className="flex gap-1 overflow-x-auto border-b border-ink-950/8 bg-cream-50 p-2 no-scrollbar" role="tablist" aria-label="Product information">
              {TABS.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "shrink-0 rounded-full px-6 py-3 text-[14.5px] font-bold transition-all focus-ring",
                    tab === t ? "bg-ink-950 text-white shadow-md" : "text-ink-950/55 hover:text-ink-950"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="p-7 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab === "Overview" && (
                    <div className="grid gap-8 lg:grid-cols-2">
                      <div className="space-y-4">
                        {product.longDescription.map((para, i) => (
                          <p key={i} className="text-[16px] leading-relaxed text-ink-950/70">{para}</p>
                        ))}
                        <div className="rounded-2xl bg-cream-100 p-5">
                          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brass-700">Best for</p>
                          <div className="mt-2.5 flex flex-wrap gap-2">
                            {product.applications.map((a) => (
                              <span key={a} className="rounded-full bg-white px-4 py-2 text-[13.5px] font-bold shadow-sm">{a}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">Key features</p>
                        <ul className="mt-4 space-y-3">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 rounded-2xl border border-ink-950/8 bg-cream-50 p-4 text-[14.5px] font-medium">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-950 text-brass-300"><Check className="h-3.5 w-3.5" /></span>{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {tab === "Specifications" && (
                    <div className="overflow-hidden rounded-2xl border border-ink-950/10">
                      {product.specs.map((s, i) => (
                        <div key={s.label} className={cn("grid gap-1 px-6 py-4 sm:grid-cols-[240px_1fr] sm:gap-6", i % 2 === 0 ? "bg-cream-50" : "bg-white")}>
                          <dt className="text-[13.5px] font-bold uppercase tracking-wide text-ink-950/50">{s.label}</dt>
                          <dd className="text-[15px] font-semibold">{s.value}</dd>
                        </div>
                      ))}
                      <div className="flex flex-wrap items-center justify-between gap-3 bg-ink-950 px-6 py-4 text-white">
                        <span className="inline-flex items-center gap-2 text-[14px]"><FileText className="h-4 w-4 text-brass-300" /> Full spec sheet prepared with your quote</span>
                        <Link to={`/contact?product=${product.slug}`} className="text-[14px] font-bold text-brass-300 hover:text-brass-200">Request spec sheet →</Link>
                      </div>
                    </div>
                  )}
                  {tab === "Finishes" && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {product.finishes.map((f) => (
                        <div key={f.name} className="overflow-hidden rounded-2xl border border-ink-950/10">
                          <div className="h-32" style={{ backgroundColor: f.hex }} />
                          <div className="bg-white p-4">
                            <p className="text-[15px] font-bold">{f.name}</p>
                            {f.note && <p className="text-[13px] text-ink-950/55">{f.note}</p>}
                          </div>
                        </div>
                      ))}
                      <div className="rounded-2xl bg-cream-100 p-5 sm:col-span-2 lg:col-span-4">
                        <p className="text-[14.5px] text-ink-950/65">
                          <span className="font-bold text-ink-950">Need samples?</span> Mention it in your quote request — we post finish samples for stone, joinery, powdercoat and tapware.
                        </p>
                      </div>
                    </div>
                  )}
                  {tab === "Installation" && (
                    <div className="grid gap-6 lg:grid-cols-2">
                      <ol className="space-y-3">
                        {[
                          { t: "Measure + shop drawings", d: "Site measure and drawings approved before manufacture — no surprises." },
                          { t: "Manufacture to program", d: `Made to order with a ${product.leadTime.toLowerCase()} window, held per project for consistency.` },
                          { t: "Staged delivery to site", d: "Delivered boxed and labelled per room, dwelling or floor — Australia-wide." },
                          { t: "Installed by our team", d: "Fitted, sealed, adjusted and cleaned by the same crew that templated it." },
                        ].map((s, i) => (
                          <li key={s.t} className="flex gap-4 rounded-2xl border border-ink-950/8 bg-cream-50 p-5">
                            <span className="font-display text-2xl text-brass-600">0{i + 1}</span>
                            <span>
                              <span className="block text-[15.5px] font-bold">{s.t}</span>
                              <span className="mt-1 block text-[14px] text-ink-950/60">{s.d}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                      <div className="flex flex-col gap-4">
                        <div className="rounded-2xl bg-ink-950 p-6 text-white">
                          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-brass-300"><ShieldCheck className="h-4 w-4" /> Warranty</p>
                          <p className="font-display mt-2 text-2xl">{product.warranty}</p>
                          <p className="mt-2 text-[14px] text-white/60">Plus manufacturer warranties on hardware, motors and tapware. Spares held for volume jobs.</p>
                        </div>
                        <div className="rounded-2xl border border-ink-950/10 p-6">
                          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-950/55"><Package className="h-4 w-4" /> Compliance docs</p>
                          <ul className="mt-3 space-y-2">
                            {product.compliance.map((c) => (
                              <li key={c} className="flex items-center gap-2 text-[14.5px] font-medium"><Check className="h-4 w-4 text-emerald-600" /> {c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Siblings */}
        {siblings.length > 0 && (
          <div className="mt-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brass-700">More {category.short}</p>
                <h2 className="font-display mt-2 text-3xl">Complete the {category.short.toLowerCase()} package</h2>
              </div>
              <Link to={`/catalogue?cat=${category.id}`} className="hidden items-center gap-2 text-[14.5px] font-bold text-brass-700 sm:inline-flex">
                All {category.short} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Related */}
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brass-700">Pairs well with</p>
              <h2 className="font-display mt-2 text-3xl">Build a multi-category package</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-2">
            <div className="p-8 text-white sm:p-12">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">Ready to price it?</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">Get {product.name} priced — supply + install.</h2>
              <p className="mt-3 text-white/60">Tell us quantities, finishes and your program. We'll come back with pricing + lead times in days.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/contact?product=${product.slug}&finish=${encodeURIComponent(product.finishes[finishIdx].name)}&qty=${qty}`}
                  className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-8 py-3.5 text-center text-[15px] font-bold text-ink-950 focus-ring"
                >
                  Request a quote
                </Link>
                <button
                  onClick={() => { add(product.id); }}
                  className="rounded-full border border-white/20 px-8 py-3.5 text-[15px] font-semibold hover:bg-white/5 focus-ring"
                >
                  {saved ? "✓ In your shortlist" : "+ Add to shortlist"}
                </button>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src={product.images[1] || product.images[0]} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sticky mobile CTA */}
      <div className="sticky bottom-0 z-30 border-t border-ink-950/10 bg-white/95 p-3 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <Link
            to={`/contact?product=${product.slug}`}
            className="flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3.5 text-[14.5px] font-bold text-white"
          >
            Price this — supply + install <ArrowRight className="h-4 w-4 text-brass-300" />
          </Link>
          <button
            onClick={() => toggle(product.id)}
            aria-label="Toggle shortlist"
            className={cn("flex h-[52px] w-[52px] items-center justify-center rounded-full border", saved ? "border-brass-500 bg-brass-100 text-brass-700" : "border-ink-950/15")}
          >
            <Bookmark className={cn("h-5 w-5", saved && "fill-brass-500 text-brass-600")} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur"
            role="dialog"
            aria-label="Image viewer"
          >
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={product.images[imgIdx]}
              alt={product.name}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setLightbox(false)}
              className="absolute right-5 top-5 rounded-full bg-white px-5 py-2.5 text-[14px] font-bold"
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
