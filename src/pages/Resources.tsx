import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Check, X } from "lucide-react";
import { RESOURCES } from "../data/catalog";
import { Reveal } from "../components/ui";
import { cn } from "../utils/cn";

const CATS = ["All", "Technical guide", "Selections", "Builder tools", "Developers"];

export default function Resources() {
  const [filter, setFilter] = useState("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const list = filter === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === filter);
  const openArticle = RESOURCES.find((r) => r.slug === openSlug);

  return (
    <div className="pt-[104px]">
      <section className="relative overflow-hidden bg-ink-950 pb-14 pt-14 lg:pt-20">
        <img src="https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-white/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Resources</span>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Guides builders <span className="text-gradient-brass italic">actually use.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] text-white/65">
              Technical guides, selection advice and builder tools — written by people who install what they write about.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[96px] z-30 border-b border-ink-950/8 bg-cream-50/90 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 no-scrollbar sm:px-6">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                filter === c ? "bg-ink-950 text-white shadow-md" : "border border-ink-950/12 bg-white text-ink-950/65 hover:border-ink-950/35"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 0.07}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-ink-950/8 bg-white shadow-[0_8px_32px_-16px_rgba(11,14,20,0.2)]">
                <button onClick={() => setOpenSlug(r.slug)} className="img-zoom relative block aspect-[16/10] text-left focus-ring" aria-label={`Read ${r.title}`}>
                  <img src={r.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wide">{r.category}</span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-[21px] leading-snug">{r.title}</h2>
                  <p className="mt-2.5 line-clamp-2 text-[14.5px] leading-relaxed text-ink-950/60">{r.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-ink-950/8 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-950/50">
                      <Clock className="h-3.5 w-3.5" /> {r.readTime}
                    </span>
                    <button
                      onClick={() => setOpenSlug(r.slug)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-bold text-brass-700 hover:text-brass-600 focus-ring rounded-lg"
                    >
                      Read guide <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 text-white sm:p-12">
              <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">
                <BookOpen className="h-4 w-4" /> Free for builders
              </p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">The 48-hour quote checklist.</h2>
              <p className="mt-3 text-white/60">What to send so your joinery + window quote comes back in 48 hours — elevations, schedules, appliance specs and the five details everyone forgets.</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-7 py-3.5 text-[15px] font-bold text-ink-950 focus-ring">
                Get the checklist <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[240px]">
              <img src="https://images.pexels.com/photos/7031210/pexels-photo-7031210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Kitchen joinery" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Article modal */}
      <AnimatePresence>
        {openArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-end justify-center bg-ink-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setOpenSlug(null)}
            role="dialog"
            aria-label={openArticle.title}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white sm:rounded-[2rem]"
            >
              <div className="relative aspect-[16/8]">
                <img src={openArticle.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <button
                  onClick={() => setOpenSlug(null)}
                  className="glass absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full focus-ring"
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="rounded-full bg-brass-500 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">{openArticle.category}</span>
                  <h2 className="font-display mt-3 text-2xl leading-tight text-white sm:text-3xl">{openArticle.title}</h2>
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-[16px] leading-relaxed text-ink-950/70">{openArticle.excerpt}</p>
                <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.14em] text-brass-700">What you'll learn</p>
                <ul className="mt-3 space-y-2.5">
                  {openArticle.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 rounded-2xl bg-cream-50 p-4 text-[15px] font-medium">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-950 text-brass-300"><Check className="h-3.5 w-3.5" /></span>{pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-ink-950 p-6 text-white">
                  <p className="font-display text-xl">Want the full guide + a quote on your job?</p>
                  <p className="mt-1 text-[14px] text-white/60">Send your schedule — we'll attach the full guide with your pricing.</p>
                  <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                    <Link to="/contact" onClick={() => setOpenSlug(null)} className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-6 py-3 text-center text-[14.5px] font-bold text-ink-950">
                      Request quote + guide
                    </Link>
                    <button onClick={() => setOpenSlug(null)} className="rounded-full border border-white/20 px-6 py-3 text-[14.5px] font-semibold">
                      Keep browsing
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
