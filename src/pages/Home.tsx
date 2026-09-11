import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Building2, Check, ChevronDown, Clock,
  FileText, Hammer, Home as HomeIcon, KeyRound, MapPin, Package, Phone, Ruler,
  Send, ShieldCheck, Sparkles, Star, TrendingUp, Truck, Users, Gem, CookingPot,
  AppWindow, Warehouse, LayoutGrid, Bath, Minus, Plus, Quote,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, PROJECTS, TESTIMONIALS, FAQS } from "../data/catalog";
import { Reveal, Stagger, StaggerItem, SectionHeading, Counter, BrassButton, PrimaryButton, GhostButton } from "../components/ui";
import ProductCard from "../components/ProductCard";
import { cn } from "../utils/cn";

const ICONS: Record<string, React.ReactNode> = {
  Gem: <Gem className="h-5 w-5" />,
  CookingPot: <CookingPot className="h-5 w-5" />,
  AppWindow: <AppWindow className="h-5 w-5" />,
  Warehouse: <Warehouse className="h-5 w-5" />,
  LayoutGrid: <LayoutGrid className="h-5 w-5" />,
  Bath: <Bath className="h-5 w-5" />,
};

const AUDIENCES = [
  {
    id: "builders",
    icon: <Building2 className="h-5 w-5" />,
    label: "Builders",
    title: "One program. Six trades off your critical path.",
    copy: "Windows, joinery, stone, tiles, doors and bathroomware on a single supply + install program — documented for certifiers, staged per floor or dwelling.",
    bullets: ["Single quote with lead times vs your program", "Staged deliveries + install sequencing", "BASIX, WELS + NCC docs supplied"],
    stat: "6 weeks",
    statLabel: "average program saving on multi-dwelling",
  },
  {
    id: "renovators",
    icon: <Hammer className="h-5 w-5" />,
    label: "Renovation companies",
    title: "Room-by-room staging your clients will rave about.",
    copy: "Live-in friendly programs: kitchens, bathrooms and laundries sequenced so households keep functioning while you transform them.",
    bullets: ["Live-in staging, dust + access managed", "Stone-to-joinery junctions we own end-to-end", "Zero-defect handover standard"],
    stat: "0",
    statLabel: "defects at handover — our target, every job",
  },
  {
    id: "owner",
    icon: <HomeIcon className="h-5 w-5" />,
    label: "Owner-builders",
    title: "Send a rough list. Get a builder-grade schedule back.",
    copy: "No window schedule? No cabinet elevations? No problem. We turn rough plans and lists into proper supply + install pricing with honest lead times.",
    bullets: ["We quote from whatever you have", "Plain-English guidance on finishes", "Up to 30% under the piecemeal trade route"],
    stat: "30%",
    statLabel: "typical saving vs sourcing trades separately",
  },
  {
    id: "investors",
    icon: <KeyRound className="h-5 w-5" />,
    label: "Investors",
    title: "Dwelling packs that scale across your portfolio.",
    copy: "One code per dwelling type. Boxed per bathroom, batched per project, spares held for defects. Repeatable quality your PM will thank you for.",
    bullets: ["One code per dwelling type", "Batched finishes across stages", "Spares held for 5 years"],
    stat: "42",
    statLabel: "dwellings in our largest single package",
  },
];

export default function Home() {
  const [audience, setAudience] = useState(AUDIENCES[0]);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [projectValue, setProjectValue] = useState(180000);

  const featured = useMemo(() => PRODUCTS.filter((p) => p.featured).slice(0, 6), []);
  const saving = Math.round(projectValue * 0.22);
  const savingHigh = Math.round(projectValue * 0.3);

  return (
    <div className="overflow-x-clip">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950 pt-[120px] sm:items-center" aria-label="Hero">
        {/* BG */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.pexels.com/photos/33326580/pexels-photo-33326580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Marble island kitchen with pendant lighting supplied and installed by One Source Building"
            className="h-full w-full object-cover"
          />
          <div className="hero-vein absolute inset-0" />
          {/* floating orbs */}
          <div className="absolute left-[8%] top-[22%] h-56 w-56 rounded-full bg-brass-500/20 blur-[100px] animate-float" />
          <div className="absolute bottom-[20%] right-[10%] h-72 w-72 rounded-full bg-brass-300/10 blur-[120px] animate-float-slow" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:pb-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.12em] text-brass-300">
                  <Sparkles className="h-3.5 w-3.5" /> Supply + Install · Sydney → Australia-wide
                </span>
                <span className="glass-dark hidden items-center gap-1.5 rounded-full px-4 py-2 text-[12.5px] font-semibold text-white/85 sm:inline-flex">
                  <ShieldCheck className="h-3.5 w-3.5 text-brass-400" /> HIA Member
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display mt-6 text-[2.7rem] leading-[1.02] font-medium text-white text-balance sm:text-6xl lg:text-[4.6rem]"
              >
                We don't just supply —{" "}
                <span className="text-gradient-brass italic">we install.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/75 sm:text-lg"
              >
                Marble, joinery, double glazed windows, garage doors, tiles & bathroomware —{" "}
                <span className="font-semibold text-white">supplied, delivered to site and installed by our own teams.</span>{" "}
                Builders and owners save up to 30% against the usual trade route.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.48 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <BrassButton to="/contact" className="px-8 py-4 text-base">
                  Get supply + install pricing
                </BrassButton>
                <GhostButton to="/catalogue" dark className="px-8 py-4 text-base">
                  View catalogue
                </GhostButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] font-medium text-white/70"
              >
                {["No catalogue prices — honest quotes in days", "Staged to your build program", "One install team, zero chasing"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-brass-400" /> {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Glass quote card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="glass-dark relative overflow-hidden rounded-[1.8rem] p-7 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.6)]">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brass-500/25 blur-[60px]" />
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">Get supply + install pricing</p>
                <h3 className="font-display mt-2 text-2xl text-white">Send your schedule — we'll do the rest.</h3>
                <div className="mt-5 space-y-3">
                  {[
                    { icon: <FileText className="h-4 w-4" />, text: "Plans, schedules or a simple list — whatever you have" },
                    { icon: <Clock className="h-4 w-4" />, text: "Priced in days, not weeks, with lead times" },
                    { icon: <Truck className="h-4 w-4" />, text: "Staged delivery + install, Australia-wide" },
                  ].map((r) => (
                    <div key={r.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white/85">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass-500/20 text-brass-300">{r.icon}</span>
                      {r.text}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl bg-gradient-to-r from-brass-600/25 to-transparent p-4">
                  <div>
                    <p className="font-display text-3xl text-white">30<span className="text-brass-300">%</span></p>
                    <p className="text-[12.5px] text-white/60">saved on supply + install schedules</p>
                  </div>
                  <Link to="/contact" className="flex h-12 w-12 items-center justify-center rounded-full bg-brass-500 text-ink-950 transition-transform hover:scale-110" aria-label="Request a quote">
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-4 flex items-center justify-between text-[13px] text-white/60">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Darlinghurst NSW</span>
                  <a href="tel:0412054048" className="inline-flex items-center gap-1.5 font-bold text-white"><Phone className="h-3.5 w-3.5 text-brass-400" /> 0412 054 048</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="glass-dark mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4"
          >
            {[
              { v: 6, s: "", label: "Supply + install categories" },
              { v: 1200, s: "+", label: "Projects supplied + installed" },
              { v: 48, s: "h", label: "Typical first response" },
              { v: 30, s: "%", label: "Saving vs usual trade route" },
            ].map((st) => (
              <div key={st.label} className="bg-white/[0.02] px-6 py-5 text-center sm:text-left">
                <p className="font-display text-3xl text-white sm:text-4xl">
                  <Counter to={st.v} suffix={st.s} />
                </p>
                <p className="mt-1 text-[12.5px] font-medium text-white/60">{st.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.a
          href="#categories"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50 lg:inline-flex"
        >
          Scroll <ChevronDown className="h-4 w-4" />
        </motion.a>
      </section>

      {/* ============ SOCIAL PROOF MARQUEE ============ */}
      <section className="border-b border-ink-950/8 bg-white py-6" aria-label="Capabilities">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-3 pr-3">
            {[...Array(2)].flatMap((_, k) =>
              ["Marble & Natural Stone", "Cabinetry & Joinery", "Double Glazed Windows", "Garage Doors", "Tiles & Pavers", "Bathroomware", "Supply + Install", "Australia-wide Delivery", "HIA Member", "Staged to Program"].map((t, i) => (
                <span key={`${k}-${i}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-950/10 bg-cream-50 px-5 py-2.5 text-[13.5px] font-semibold text-ink-950/70">
                  <BadgeCheck className="h-4 w-4 text-brass-600" /> {t}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section id="categories" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="What we supply and install"
          title={<>Six categories. <span className="italic text-brass-600">One team</span> on site.</>}
          copy="Residential, multi-residential and commercial projects — consolidated into one quote, one delivery program, one install crew."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.id}>
              <Link
                to={`/catalogue?cat=${c.id}`}
                className="card-lift group relative block overflow-hidden rounded-[1.8rem] bg-ink-950 focus-ring"
              >
                <div className="relative aspect-[4/4.4] sm:aspect-[4/4.1]">
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="glass-dark flex h-10 w-10 items-center justify-center rounded-xl text-brass-300">{ICONS[c.icon]}</span>
                    <span className="glass-dark rounded-full px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white/90">{c.index} · {c.tagline}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-white">{c.name}</h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-white/70">{c.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-brass-300">
                      Browse range
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-brass-500 group-hover:text-ink-950">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <PrimaryButton to="/catalogue">View full catalogue</PrimaryButton>
        </Reveal>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28" aria-label="How it works">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-brass-600/15 blur-[130px]" />
          <img src="https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="How it works"
            title={<>Built to fit the way a job <span className="text-gradient-brass italic">actually runs.</span></>}
            copy="No showroom runaround. No chasing six trades. Just a schedule in, and a finished install out."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: <Send className="h-5 w-5" />, t: "Send your schedule", d: "Plans, a window or cabinet schedule, or a simple list of what the job needs. We work from whatever you have." },
              { n: "02", icon: <FileText className="h-5 w-5" />, t: "Priced in days, not weeks", d: "One quote covering supply and installation, with lead times against your build program so you can plan the trades." },
              { n: "03", icon: <Truck className="h-5 w-5" />, t: "Delivered to site", d: "Staged deliveries anywhere in Australia, timed to the stage that actually needs the material — per floor, dwelling or room." },
              { n: "04", icon: <Ruler className="h-5 w-5" />, t: "Installed by our team", d: "No more chasing separate trades. Our install team fits marble, joinery, windows, garage doors, tiles and bathroomware." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors duration-500 hover:border-brass-500/40 hover:bg-white/[0.07]">
                  <span className="font-display text-[3.4rem] leading-none text-white/10 transition-colors duration-500 group-hover:text-brass-500/25">{s.n}</span>
                  <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brass-500 to-brass-700 text-ink-950 shadow-glow">{s.icon}</span>
                  <h3 className="mt-5 text-[19px] font-bold text-white">{s.t}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/60">{s.d}</p>
                  {i < 3 && <span className="absolute right-6 top-8 hidden text-brass-500/40 lg:block"><ArrowRight className="h-5 w-5" /></span>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BrassButton to="/contact">Start with your schedule</BrassButton>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/80 hover:text-brass-300">
              See recent supply + install work <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODUCT SHOWCASE ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28" aria-label="Featured products">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Catalogue highlights"
            title={<>Specified by builders. <span className="italic text-brass-600">Loved</span> by owners.</>}
            copy="A taste of the range — every product below is supplied and installed by our own teams. Bookmark to build your quote."
          />
          <Reveal delay={0.1}>
            <Link to="/catalogue" className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-950/15 bg-white px-6 py-3 text-[14.5px] font-bold hover:border-ink-950 focus-ring">
              All {PRODUCTS.length} products <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ============ BENEFITS + SAVINGS CALCULATOR ============ */}
      <section className="relative overflow-hidden bg-cream-100/60 py-20 lg:py-28" aria-label="Benefits">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-brass-400/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-brass-600/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why one source"
            title={<>One quote beats <span className="italic text-brass-600">six phone calls.</span></>}
            copy="Consolidation is where the saving lives — one buying program, one delivery run, one install crew, zero junction blame-games."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* Comparison */}
            <Reveal>
              <div className="h-full overflow-hidden rounded-[1.8rem] border border-ink-950/10 bg-white p-7 shadow-card sm:p-9">
                <h3 className="font-display text-2xl">Us vs the usual trade route</h3>
                <div className="mt-6 space-y-3">
                  {[
                    { us: "One quote, supply + install", them: "6+ quotes to chase and reconcile" },
                    { us: "One program, staged to your build", them: "Six lead times that never align" },
                    { us: "Junctions owned end-to-end", them: "\"Not my trade\" at every junction" },
                    { us: "One delivery run, boxed per room", them: "Deliveries scattered across weeks" },
                    { us: "Single defects contact", them: "Warranty ping-pong for months" },
                  ].map((r) => (
                    <div key={r.us} className="grid gap-2 rounded-2xl bg-cream-50 p-4 sm:grid-cols-2 sm:gap-4">
                      <span className="inline-flex items-start gap-2 text-[14px] font-semibold text-ink-950">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"><Check className="h-3 w-3" /></span>{r.us}
                      </span>
                      <span className="inline-flex items-start gap-2 text-[14px] text-ink-950/50">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-950/10 text-ink-950/50"><Minus className="h-3 w-3" /></span>{r.them}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Calculator */}
            <Reveal delay={0.12}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-ink-950 p-7 text-white shadow-luxe sm:p-9">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brass-500/25 blur-[80px]" />
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-brass-300">
                  <TrendingUp className="h-4 w-4" /> Interactive estimator
                </div>
                <h3 className="font-display mt-3 text-2xl sm:text-3xl">What could consolidation save you?</h3>
                <p className="mt-2 text-[14.5px] text-white/60">Drag to your combined supply + install budget. Clients typically save 22–30%.</p>

                <div className="mt-8">
                  <div className="flex items-end justify-between">
                    <span className="text-[13px] font-semibold uppercase tracking-widest text-white/50">Project package value</span>
                    <span className="font-display text-3xl text-brass-300">${projectValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={30000}
                    max={500000}
                    step={5000}
                    value={projectValue}
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    className="mt-4 w-full accent-[#c19a5b]"
                    aria-label="Project package value"
                  />
                  <div className="mt-2 flex justify-between text-[12px] text-white/40"><span>$30k</span><span>$500k</span></div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-white/50">Conservative</p>
                    <p className="font-display mt-1 text-3xl text-white">${saving.toLocaleString()}</p>
                    <p className="mt-1 text-[12.5px] text-white/55">at 22% consolidation saving</p>
                  </div>
                  <div className="rounded-2xl border border-brass-500/40 bg-gradient-to-br from-brass-600/25 to-transparent p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-brass-300">Full package</p>
                    <p className="font-display mt-1 text-3xl text-brass-300">${savingHigh.toLocaleString()}</p>
                    <p className="mt-1 text-[12.5px] text-white/55">at 30% consolidation saving</p>
                  </div>
                </div>

                <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">Indicative only — your quote depends on scope, finishes and site. No catalogue prices, ever.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <BrassButton to="/contact" className="flex-1">Get my real number</BrassButton>
                  <a href="tel:0412054048" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-semibold hover:bg-white/5 focus-ring">
                    <Phone className="h-4 w-4" /> 0412 054 048
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ AUDIENCES ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28" aria-label="Who we serve">
        <SectionHeading
          eyebrow="Who we serve"
          title={<>Different jobs. Same headache. <span className="italic text-brass-600">Same fix.</span></>}
          copy="Pick your lane — every path ends at one quote and one install team."
        />
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Audiences">
            {AUDIENCES.map((a) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={audience.id === a.id}
                onClick={() => setAudience(a)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold transition-all duration-300 focus-ring",
                  audience.id === a.id
                    ? "bg-ink-950 text-white shadow-lg"
                    : "border border-ink-950/12 bg-white text-ink-950/65 hover:border-ink-950/30"
                )}
              >
                {a.icon} {a.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid overflow-hidden rounded-[2rem] border border-ink-950/10 bg-white shadow-card lg:grid-cols-[1fr_320px]"
            >
              <div className="p-8 sm:p-12">
                <h3 className="font-display text-2xl sm:text-[2rem] sm:leading-tight">{audience.title}</h3>
                <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ink-950/60">{audience.copy}</p>
                <ul className="mt-6 space-y-3">
                  {audience.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] font-semibold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brass-100 text-brass-700"><Check className="h-4 w-4" /></span>{b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton to="/contact">Request a quote as {audience.label.toLowerCase().replace(" companies", "").replace("builders", "a builder")}</PrimaryButton>
                  <Link to="/catalogue" className="inline-flex items-center gap-2 px-2 py-3 text-[15px] font-bold text-brass-700 hover:text-brass-600">
                    Browse the catalogue <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col justify-center overflow-hidden bg-ink-950 p-8 text-white sm:p-10">
                <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brass-500/25 blur-[70px]" />
                <p className="font-display text-6xl text-brass-300">{audience.stat}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{audience.statLabel}</p>
                <div className="mt-6 border-t border-white/10 pt-5 text-[13px] text-white/50">
                  Darlinghurst NSW · delivering + installing Australia-wide
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============ PROJECTS PREVIEW ============ */}
      <section className="bg-white py-20 lg:py-28" aria-label="Recent work">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Recent supply + install work"
              title={<>Supplied, scheduled, delivered <span className="italic text-brass-600">and installed.</span></>}
            />
            <Reveal><GhostButton to="/projects">All projects</GhostButton></Reveal>
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" gap={0.12}>
            {PROJECTS.slice(0, 3).map((p) => (
              <StaggerItem key={p.id}>
                <Link to="/projects" className="card-lift group block overflow-hidden rounded-[1.6rem] border border-ink-950/8 bg-cream-50 focus-ring">
                  <div className="img-zoom relative aspect-[4/3]">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                    <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wide">{p.type}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="mt-1.5 text-[14px] font-medium text-brass-700">{p.scope}</p>
                    <p className="mt-2.5 line-clamp-2 text-[14px] leading-relaxed text-ink-950/60">{p.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28" aria-label="Testimonials">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[-10%] h-80 w-80 rounded-full bg-brass-600/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="Client words"
            title={<>Builders come back. <span className="text-gradient-brass italic">Owners tell neighbours.</span></>}
          />
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur sm:p-12">
              <Quote className="absolute right-8 top-8 h-10 w-10 text-brass-500/30" />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brass-400 text-brass-400" />
                    ))}
                  </div>
                  <blockquote className="font-display mt-5 text-xl leading-relaxed text-white sm:text-2xl">
                    "{TESTIMONIALS[testimonialIdx].text}"
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brass-400 to-brass-700 text-[15px] font-extrabold text-ink-950">
                      {TESTIMONIALS[testimonialIdx].initials}
                    </span>
                    <span>
                      <span className="block text-[15px] font-bold text-white">{TESTIMONIALS[testimonialIdx].name}</span>
                      <span className="block text-[13.5px] text-white/55">{TESTIMONIALS[testimonialIdx].role} · {TESTIMONIALS[testimonialIdx].project}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      aria-label={`Show testimonial ${i + 1}`}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        i === testimonialIdx ? "w-8 bg-brass-400" : "w-2 bg-white/20 hover:bg-white/40"
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brass-400 hover:text-brass-300 focus-ring"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 text-ink-950 transition-transform hover:scale-105 focus-ring"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13.5px] text-white/50">
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-brass-400" /> 1,200+ projects supplied + installed</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brass-400" /> HIA Member</span>
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-brass-400" /> 4.9 average across reviews</span>
          </Reveal>
        </div>
      </section>

      {/* ============ ENGAGEMENT MODELS (pricing alternative) ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28" aria-label="Engagement models">
        <SectionHeading
          eyebrow="How pricing works"
          title={<>No catalogue prices. <span className="italic text-brass-600">One honest quote.</span></>}
          copy="Every job prices on scope, finishes and program — so instead of misleading list prices, you get proper supply + install pricing in days. Pick your project type to start."
        />
        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3" gap={0.12}>
          {[
            {
              name: "Single dwelling",
              for: "For custom homes, knockdown-rebuilds + owner-builders",
              features: ["Full-house multi-category package", "Single quote, supply + install", "Staged to your build program", "Finishes board + shop drawings", "One install crew, sequenced"],
              cta: "Price my house",
              highlight: false,
            },
            {
              name: "Multi-dwelling",
              for: "For duplexes, townhouses + apartments",
              features: ["One code per dwelling type", "Batched finishes across stages", "Boxed-per-bathroom delivery", "BASIX + WELS docs included", "Spares held for defects"],
              cta: "Price my development",
              highlight: true,
            },
            {
              name: "Renovation",
              for: "For reno companies + live-in upgrades",
              features: ["Room-by-room staging", "Kitchen + bathroom priority lanes", "Stone/joinery junction ownership", "Live-in friendly scheduling", "Zero-defect handover target"],
              cta: "Price my renovation",
              highlight: false,
            },
          ].map((tier) => (
            <StaggerItem key={tier.name}>
              <div className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-8 transition-transform duration-500 hover:-translate-y-1.5",
                tier.highlight
                  ? "border-brass-500/50 bg-ink-950 text-white shadow-luxe"
                  : "border-ink-950/10 bg-white shadow-card"
              )}>
                {tier.highlight && (
                  <>
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brass-500/30 blur-[70px]" />
                    <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-brass-500 to-brass-400 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">Most popular</span>
                  </>
                )}
                <h3 className={cn("font-display text-2xl", tier.highlight ? "text-white" : "text-ink-950")}>{tier.name}</h3>
                <p className={cn("mt-1.5 text-[14px]", tier.highlight ? "text-white/60" : "text-ink-950/55")}>{tier.for}</p>
                <div className={cn("mt-6 border-t pt-6", tier.highlight ? "border-white/10" : "border-ink-950/8")}>
                  <p className={cn("text-[13px] font-bold uppercase tracking-[0.14em]", tier.highlight ? "text-brass-300" : "text-brass-700")}>Quote in days — includes</p>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className={cn("flex items-start gap-2.5 text-[14.5px] font-medium", tier.highlight ? "text-white/85" : "text-ink-950/75")}>
                        <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", tier.highlight ? "bg-brass-500/20 text-brass-300" : "bg-brass-100 text-brass-700")}><Check className="h-3 w-3" /></span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  {tier.highlight
                    ? <BrassButton to="/contact" className="w-full">{tier.cta}</BrassButton>
                    : <PrimaryButton to="/contact" className="w-full">{tier.cta}</PrimaryButton>}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center text-[13.5px] text-ink-950/50">
          Commercial + fit-out work? <Link to="/contact" className="font-bold text-brass-700 underline-offset-2 hover:underline">Talk to us about volume programs →</Link>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-20 lg:py-28" aria-label="FAQs">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions, answered"
              title={<>Everything builders <span className="italic text-brass-600">ask us first.</span></>}
              copy="Still unsure? Call 0412 054 048 — you'll talk to someone who's actually installed what we sell."
            />
            <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButton to="/contact">Ask about your job</PrimaryButton>
              <a href="tel:0412054048" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-950/15 px-7 py-3.5 text-[15px] font-semibold hover:border-ink-950 focus-ring">
                <Phone className="h-4 w-4" /> 0412 054 048
              </a>
            </Reveal>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const open = faqOpen === i;
              return (
                <Reveal key={f.q} delay={Math.min(i * 0.05, 0.3)}>
                  <div className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    open ? "border-brass-500/50 bg-cream-50 shadow-card" : "border-ink-950/10 bg-cream-50/50 hover:border-ink-950/25"
                  )}>
                    <button
                      onClick={() => setFaqOpen(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-ring"
                    >
                      <span className="text-[16px] font-bold tracking-tight">{f.q}</span>
                      <span className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        open ? "rotate-45 bg-ink-950 text-white" : "bg-white text-ink-950 shadow-sm"
                      )}>
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-950/65">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28" aria-label="Get a quote">
        <img src="https://images.pexels.com/photos/6634140/pexels-photo-6634140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-600/20 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="glass-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-brass-300">
              <Package className="h-4 w-4" /> One form · Every category · No obligation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Send us your next schedule and we'll <span className="text-gradient-brass italic">supply + install</span> it.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] text-white/65">
              0412 054 048 · sales@onesourcebuilding.com.au · Darlinghurst NSW, delivering Australia-wide
            </p>
          </Reveal>
          <Reveal delay={0.26} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BrassButton to="/contact" className="w-full px-9 py-4 text-base sm:w-auto">Request a quote</BrassButton>
            <GhostButton to="/catalogue" dark className="w-full px-9 py-4 text-base sm:w-auto">Browse catalogue</GhostButton>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13.5px] text-white/50">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-brass-400" /> Response within 48 hours</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-brass-400" /> No obligation</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-brass-400" /> HIA Member</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
