import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, ArrowUpRight, Quote, Check } from "lucide-react";
import { PROJECTS } from "../data/catalog";
import { Reveal, SectionHeading } from "../components/ui";
import { cn } from "../utils/cn";

const FILTERS = ["All", "Multi-residential", "Custom home", "Duplex", "Renovation"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(PROJECTS[0]);

  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <div className="pt-[104px]">
      <section className="relative overflow-hidden bg-ink-950 pb-14 pt-14 lg:pt-20">
        <img src="https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-white/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Projects</span>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Supplied, scheduled, delivered <span className="text-gradient-brass italic">and installed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] text-white/65">
              Recent supply + install packages across Sydney and regional NSW — from single dwellings to multi-level residential.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-[96px] z-30 border-b border-ink-950/8 bg-cream-50/90 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 no-scrollbar sm:px-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                filter === f ? "bg-ink-950 text-white shadow-md" : "border border-ink-950/12 bg-white text-ink-950/65 hover:border-ink-950/35"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Featured viewer */}
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-ink-950/10 bg-white shadow-card lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={active.image}
                  alt={active.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {active.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive({ ...active, image: g })}
                    className={cn("h-14 w-20 overflow-hidden rounded-xl border-2", active.image === g ? "border-brass-400" : "border-white/30 opacity-80")}
                    aria-label={`View photo ${i + 1}`}
                  >
                    <img src={g} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
            <div className="p-7 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-info"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-ink-950 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wide text-brass-300">{active.type}</span>
                    <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-ink-950/55"><MapPin className="h-3.5 w-3.5" /> {active.location}</span>
                  </div>
                  <h2 className="font-display mt-4 text-3xl sm:text-4xl">{active.name}</h2>
                  <p className="mt-2 text-[15px] font-bold text-brass-700">{active.scope}</p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink-950/65">{active.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.categories.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3.5 py-1.5 text-[13px] font-bold">
                        <Check className="h-3.5 w-3.5 text-brass-600" /> {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {active.stats.map((s) => (
                      <div key={s.label} className="rounded-2xl border border-ink-950/8 bg-cream-50 p-3.5 text-center">
                        <p className="font-display text-xl">{s.value}</p>
                        <p className="mt-0.5 text-[11.5px] font-semibold text-ink-950/50">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <figure className="mt-6 rounded-2xl bg-ink-950 p-5 text-white">
                    <Quote className="h-5 w-5 text-brass-400" />
                    <blockquote className="mt-2 text-[15px] italic leading-relaxed">"{active.quote}"</blockquote>
                    <figcaption className="mt-2 text-[13px] font-semibold text-white/55">— {active.client}</figcaption>
                  </figure>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10">
          <SectionHeading
            align="left"
            eyebrow="All work"
            title="Every project, one standard."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <button
                  onClick={() => { setActive(p); window.scrollTo({ top: 320, behavior: "smooth" }); }}
                  className={cn(
                    "card-lift group block w-full overflow-hidden rounded-[1.6rem] border bg-white text-left focus-ring",
                    active.id === p.id ? "border-brass-500 shadow-card" : "border-ink-950/8"
                  )}
                >
                  <div className="img-zoom relative aspect-[4/3]">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                    <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide">{p.type}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[18px] leading-snug">{p.name}</h3>
                    <p className="mt-1 text-[13px] font-semibold text-brass-700">{p.scope}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink-950 p-8 text-white sm:p-12 lg:flex-row">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Your project could be next.</h2>
              <p className="mt-2 text-white/60">Send plans or a list — we'll return supply + install pricing in days.</p>
            </div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-8 py-4 text-[15px] font-bold text-ink-950 focus-ring">
              Start your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
