import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpRight, Bookmark, Check, X } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/catalog";
import { Reveal } from "../components/ui";
import ProductCard from "../components/ProductCard";
import { cn } from "../utils/cn";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "rating", label: "Top rated" },
  { id: "projects", label: "Most installed" },
  { id: "name", label: "A–Z" },
];

export default function Catalogue() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat") || "all";
  const [cat, setCat] = useState(initialCat);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const c = params.get("cat") || "all";
    setCat(c);
  }, [params]);

  const selectCat = (id: string) => {
    setCat(id);
    if (id === "all") {
      params.delete("cat");
    } else {
      params.set("cat", id);
    }
    setParams(params, { replace: true });
  };

  const activeCat = CATEGORIES.find((c) => c.id === cat);

  const results = useMemo(() => {
    let list = [...PRODUCTS];
    if (cat !== "all") list = list.filter((p) => p.categoryId === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q))
      );
    }
    switch (sort) {
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "projects": list.sort((a, b) => b.projects - a.projects); break;
      case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: list.sort((a, b) => Number(b.featured || 0) - Number(a.featured || 0));
    }
    return list;
  }, [cat, query, sort]);

  return (
    <div className="pt-[104px]">
      {/* Header */}
      <section className="relative overflow-hidden bg-ink-950 pb-14 pt-14 lg:pt-20">
        <img
          src="https://images.pexels.com/photos/30112371/pexels-photo-30112371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-brass-500/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-white/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Catalogue</span>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The catalogue. <span className="text-gradient-brass italic">No prices</span> — on purpose.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/65">
              Every product below is supplied <span className="font-semibold text-white">and installed</span> by our own teams.
              Bookmark what you like, then request one consolidated supply + install quote.
            </p>
          </Reveal>

          {/* Search + sort */}
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-col gap-3 lg:flex-row">
              <label className="glass-dark flex flex-1 items-center gap-3 rounded-full px-5 py-3.5">
                <Search className="h-5 w-5 shrink-0 text-brass-300" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search marble, kitchens, stackers, tapware…"
                  className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                  aria-label="Search products"
                />
                {query && (
                  <button onClick={() => setQuery("")} aria-label="Clear search" className="text-white/50 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-[14px] font-bold text-white lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </button>
                <label className="flex flex-1 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-[14px] font-semibold text-white/80 lg:flex-none">
                  Sort
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent font-bold text-white focus:outline-none [&>option]:text-black"
                    aria-label="Sort products"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category pills */}
      <div className="sticky top-[96px] z-30 border-b border-ink-950/8 bg-cream-50/90 py-3 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className={cn("flex gap-2 overflow-x-auto no-scrollbar", filtersOpen ? "flex-wrap lg:flex" : "lg:flex-wrap")} role="tablist" aria-label="Categories">
            <button
              role="tab"
              aria-selected={cat === "all"}
              onClick={() => selectCat("all")}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                cat === "all" ? "bg-ink-950 text-white shadow-md" : "border border-ink-950/12 bg-white text-ink-950/65 hover:border-ink-950/35"
              )}
            >
              All · {PRODUCTS.length}
            </button>
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.categoryId === c.id).length;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={cat === c.id}
                  onClick={() => selectCat(c.id)}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                    cat === c.id ? "bg-ink-950 text-white shadow-md" : "border border-ink-950/12 bg-white text-ink-950/65 hover:border-ink-950/35"
                  )}
                >
                  {c.short} · {n}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        {/* Active category banner */}
        <AnimatePresence mode="wait">
          {activeCat && (
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mb-10 grid overflow-hidden rounded-[1.8rem] border border-ink-950/10 bg-white shadow-card lg:grid-cols-[1fr_1fr]"
            >
              <div className="relative min-h-[220px]">
                <img src={activeCat.image} alt={activeCat.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brass-700">
                  {activeCat.index} · {activeCat.tagline}
                </p>
                <h2 className="font-display mt-2 text-3xl">{activeCat.name}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-950/60">{activeCat.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {activeCat.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13.5px] font-medium text-ink-950/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/contact?category=${activeCat.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-[14px] font-bold text-white hover:bg-ink-800 focus-ring"
                  >
                    Price this category <ArrowUpRight className="h-4 w-4 text-brass-300" />
                  </Link>
                  <span className="text-[13px] font-semibold text-ink-950/50">Lead time: {activeCat.leadTime}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results meta */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[14px] font-medium text-ink-950/55" role="status">
            Showing <span className="font-bold text-ink-950">{results.length}</span> product{results.length !== 1 && "s"}
            {query && <> for “<span className="font-bold text-ink-950">{query}</span>”</>}
          </p>
          <p className="hidden items-center gap-1.5 text-[13px] font-semibold text-ink-950/45 sm:inline-flex">
            <Bookmark className="h-3.5 w-3.5" /> Bookmark to build your quote
          </p>
        </div>

        {results.length === 0 ? (
          <div className="rounded-[1.8rem] border border-dashed border-ink-950/20 bg-white p-14 text-center">
            <p className="font-display text-2xl">Nothing matches that search.</p>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] text-ink-950/55">
              Try “marble”, “kitchen”, “stacker” — or just send us your list and we'll match products for you.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={() => { setQuery(""); selectCat("all"); }} className="rounded-full border border-ink-950/15 px-6 py-3 text-[14px] font-bold hover:border-ink-950">
                Clear filters
              </button>
              <Link to="/contact" className="rounded-full bg-ink-950 px-6 py-3 text-[14px] font-bold text-white">
                Ask us instead
              </Link>
            </div>
          </div>
        ) : (
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {results.map((p, i) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
                  <ProductCard product={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-ink-950 p-8 text-center text-white sm:p-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">Can't find it?</p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-3xl sm:text-4xl">
            If it's stone, joinery, glass or tapware — we can probably supply + install it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">The catalogue is a starting point. Send your schedule and we'll source to match.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-8 py-3.5 text-[15px] font-bold text-ink-950 focus-ring">
              Send your schedule
            </Link>
            <a href="tel:0412054048" className="rounded-full border border-white/20 px-8 py-3.5 text-[15px] font-semibold hover:bg-white/5 focus-ring">
              0412 054 048
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
