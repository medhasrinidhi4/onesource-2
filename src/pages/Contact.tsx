import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone, MapPin, Clock, Check, ChevronRight, Upload, Send,
  Building2, Hammer, Home as HomeIcon, KeyRound, Trash2, PartyPopper, ArrowRight,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, getProduct } from "../data/catalog";
import { Reveal } from "../components/ui";
import { useShortlist } from "../store/shortlist";
import { cn } from "../utils/cn";

const PROJECT_TYPES = [
  { id: "new-build", label: "New build", icon: <HomeIcon className="h-4 w-4" /> },
  { id: "renovation", label: "Renovation", icon: <Hammer className="h-4 w-4" /> },
  { id: "duplex", label: "Duplex / Townhouse", icon: <Building2 className="h-4 w-4" /> },
  { id: "multi", label: "Apartments / Multi", icon: <Building2 className="h-4 w-4" /> },
  { id: "investment", label: "Investment", icon: <KeyRound className="h-4 w-4" /> },
  { id: "commercial", label: "Commercial", icon: <Building2 className="h-4 w-4" /> },
];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Just researching"];

export default function Contact() {
  const [params] = useSearchParams();
  const { products: shortlisted, remove, clear } = useShortlist();

  const preProduct = params.get("product");
  const preCategory = params.get("category");
  const preShortlist = params.get("shortlist");
  const preFinish = params.get("finish");
  const preQty = params.get("qty");

  const [projectType, setProjectType] = useState("new-build");
  const [selectedCats, setSelectedCats] = useState<string[]>(() => {
    if (preCategory) {
      const c = CATEGORIES.find((x) => x.slug === preCategory);
      return c ? [c.id] : [];
    }
    if (preProduct) {
      const p = getProduct(preProduct);
      return p ? [p.categoryId] : [];
    }
    return ["marble", "joinery"];
  });
  const [timeline, setTimeline] = useState("1–3 months");
  const [form, setForm] = useState({ name: "", phone: "", email: "", suburb: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shortlistFromUrl = useMemo(() => {
    if (!preShortlist) return [];
    return preShortlist.split(",").map((s) => getProduct(s)).filter(Boolean);
  }, [preShortlist]);

  const allShortlisted = useMemo(() => {
    const map = new Map();
    [...shortlisted, ...shortlistFromUrl].forEach((p: any) => p && map.set(p.id, p));
    return Array.from(map.values());
  }, [shortlisted, shortlistFromUrl]);

  useEffect(() => {
    if (preProduct) {
      const p = getProduct(preProduct);
      if (p) {
        setForm((f) =>
          f.message
            ? f
            : {
                ...f,
                message: `Hi, I'd like supply + install pricing for: ${p.name}${preFinish ? ` (${preFinish})` : ""}${preQty ? ` × ${preQty}` : ""}. `,
              }
        );
      }
    } else if (preShortlist) {
      setForm((f) =>
        f.message
          ? f
          : { ...f, message: `Hi, I'd like a consolidated quote for my shortlisted items (${allShortlisted.length} products). ` }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleCat = (id: string) =>
    setSelectedCats((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[\d\s()+]{8,}$/.test(form.phone.trim())) e.phone = "Please enter a valid phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email";
    if (selectedCats.length === 0) e.cats = "Select at least one category";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <div className="flex min-h-[90vh] items-center justify-center px-4 pt-[120px] pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-ink-950/10 bg-white p-8 text-center shadow-card sm:p-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white"
          >
            <PartyPopper className="h-9 w-9" />
          </motion.span>
          <h1 className="font-display mt-6 text-4xl">Request received. We'll be in touch within 48 hours.</h1>
          <p className="mx-auto mt-4 max-w-md text-[16px] text-ink-950/60">
            Thanks {form.name.split(" ")[0] || "there"} — your {selectedCats.length}-category request is with our estimating team. We'll come back with clarifications, then supply + install pricing with lead times.
          </p>
          <div className="mx-auto mt-7 grid max-w-md gap-2.5 text-left">
            {[
              "48-hour first response",
              "One quote, supply + install",
              "Lead times against your program",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl bg-cream-100 px-5 py-3.5 text-[14.5px] font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white"><Check className="h-3.5 w-3.5" /></span>{t}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/catalogue" className="rounded-full border border-ink-950/15 px-7 py-3.5 text-[15px] font-bold hover:border-ink-950">
              Keep browsing catalogue
            </Link>
            <a href="tel:0412054048" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-[15px] font-bold text-white">
              <Phone className="h-4 w-4" /> 0412 054 048
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-[104px]">
      <section className="relative overflow-hidden bg-ink-950 pb-14 pt-14 lg:pt-20">
        <img src="https://images.pexels.com/photos/33326580/pexels-photo-33326580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-white/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Request a quote</span>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Get supply + install <span className="text-gradient-brass italic">pricing.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[16.5px] text-white/65">
              Send plans, a window or cabinet schedule, or a plain list of what the job needs. We'll come back with trade pricing and installation lead times.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <div className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="overflow-hidden rounded-[1.8rem] bg-ink-950 p-7 text-white sm:p-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">Talk to a human</p>
                <a href="tel:0412054048" className="font-display mt-2 block text-4xl hover:text-brass-300">0412 054 048</a>
                <a href="mailto:sales@onesourcebuilding.com.au" className="mt-2 block text-[15px] text-white/70 hover:text-brass-300">
                  sales@onesourcebuilding.com.au
                </a>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[14.5px]">
                  <p className="flex items-start gap-2.5 text-white/75"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" /> Darlinghurst, NSW 2010<br /></p>
                  <p className="flex items-center gap-2.5 text-white/75"><Clock className="h-4 w-4 shrink-0 text-brass-400" /> Mon–Fri 8am–5pm · Sat by appointment</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  {[["48h", "Response"], ["6", "Categories"], ["30%", "Saving"]].map(([v, l]) => (
                    <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="font-display text-xl text-brass-300">{v}</p>
                      <p className="text-[11.5px] font-semibold text-white/55">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Shortlist summary */}
            <Reveal delay={0.08}>
              <div className="rounded-[1.8rem] border border-ink-950/10 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="text-[16px] font-extrabold">Attached to this quote</h2>
                  {allShortlisted.length > 0 && (
                    <button onClick={clear} className="text-[13px] font-semibold text-ink-950/50 hover:text-red-600">Clear</button>
                  )}
                </div>
                {allShortlisted.length === 0 ? (
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-950/55">
                    No products attached yet. <Link to="/catalogue" className="font-bold text-brass-700 underline-offset-2 hover:underline">Browse the catalogue</Link> and bookmark items — or just describe the job in the form.
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2.5">
                    <AnimatePresence initial={false}>
                      {allShortlisted.map((p: any) => (
                        <motion.li
                          key={p.id}
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          className="flex items-center gap-3 rounded-2xl bg-cream-50 p-2.5 pr-3"
                        >
                          <img src={p.images[0]} alt="" className="h-12 w-12 rounded-xl object-cover" />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-bold">{p.name}</span>
                            <span className="block truncate text-[12.5px] text-ink-950/55">{p.tagline}</span>
                          </span>
                          <button onClick={() => remove(p.id)} aria-label={`Remove ${p.name}`} className="flex h-8 w-8 items-center justify-center rounded-full text-ink-950/40 hover:bg-red-50 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.8rem] border border-brass-500/30 bg-brass-100/50 p-6">
                <p className="text-[14.5px] font-bold">What happens next?</p>
                <ol className="mt-3 space-y-2.5 text-[14px] text-ink-950/70">
                  {["We confirm scope + any missing details (48h)", "You get one supply + install quote with lead times", "We stage delivery + install to your program"].map((s, i) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-950 text-[12px] font-bold text-brass-300">{i + 1}</span>{s}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.05}>
            <form onSubmit={submit} noValidate className="rounded-[1.8rem] border border-ink-950/10 bg-white p-6 shadow-card sm:p-9" aria-label="Quote request form">
              <h2 className="font-display text-3xl">Tell us about the job</h2>
              <p className="mt-1.5 text-[14.5px] text-ink-950/55">One form, every category — supply and installation. No obligation.</p>

              {/* Project type */}
              <fieldset className="mt-7">
                <legend className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">Project type</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setProjectType(t.id)}
                      aria-pressed={projectType === t.id}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                        projectType === t.id ? "bg-ink-950 text-white shadow-md" : "border border-ink-950/12 bg-cream-50 text-ink-950/65 hover:border-ink-950/35"
                      )}
                    >
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Categories */}
              <fieldset className="mt-6">
                <legend className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">
                  Categories needed <span className="normal-case tracking-normal text-ink-950/40">(select all that apply)</span>
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {CATEGORIES.map((c) => {
                    const on = selectedCats.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => toggleCat(c.id)}
                        aria-pressed={on}
                        className={cn(
                          "flex items-center gap-2.5 rounded-2xl border p-3 text-left transition-all focus-ring",
                          on ? "border-brass-600 bg-brass-100/70 shadow-sm" : "border-ink-950/10 bg-cream-50 hover:border-ink-950/30"
                        )}
                      >
                        <span className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                          on ? "border-brass-600 bg-brass-600 text-white" : "border-ink-950/20 text-transparent"
                        )}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-[13.5px] font-bold leading-tight">{c.short}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.cats && <p className="mt-2 text-[13px] font-semibold text-red-600" role="alert">{errors.cats}</p>}
              </fieldset>

              {/* Timeline */}
              <fieldset className="mt-6">
                <legend className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950/55">Timeline</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      aria-pressed={timeline === t}
                      className={cn(
                        "rounded-full px-4 py-2.5 text-[13.5px] font-bold transition-all focus-ring",
                        timeline === t ? "bg-brass-600 text-white shadow-md" : "border border-ink-950/12 bg-cream-50 text-ink-950/65 hover:border-ink-950/35"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Contact fields */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { key: "name", label: "Full name *", ph: "Jane Builder", type: "text", auto: "name" },
                  { key: "phone", label: "Phone *", ph: "04XX XXX XXX", type: "tel", auto: "tel" },
                  { key: "email", label: "Email *", ph: "you@company.com.au", type: "email", auto: "email" },
                  { key: "suburb", label: "Site suburb", ph: "e.g. Marrickville", type: "text", auto: "address-level2" },
                ].map((f) => (
                  <div key={f.key} className={cn(f.key === "email" || f.key === "suburb" ? "" : "")}>
                    <label htmlFor={f.key} className="text-[13.5px] font-bold">{f.label}</label>
                    <input
                      id={f.key}
                      type={f.type}
                      autoComplete={f.auto}
                      value={(form as any)[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      aria-invalid={!!errors[f.key]}
                      className={cn(
                        "mt-1.5 w-full rounded-2xl border bg-cream-50 px-4 py-3.5 text-[15px] outline-none transition-all placeholder:text-ink-950/35 focus:border-brass-600 focus:bg-white focus:ring-4 focus:ring-brass-500/15",
                        errors[f.key] ? "border-red-400" : "border-ink-950/12"
                      )}
                    />
                    {errors[f.key] && <p className="mt-1 text-[12.5px] font-semibold text-red-600" role="alert">{errors[f.key]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-[13.5px] font-bold">About the job</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. Double-storey new build in Rhodes — need windows schedule priced, kitchen + 3 vanities, 2 bathrooms tapware, 180m² tiles… Plans attached via email after this form."
                  className="mt-1.5 w-full resize-y rounded-2xl border border-ink-950/12 bg-cream-50 px-4 py-3.5 text-[15px] outline-none transition-all placeholder:text-ink-950/35 focus:border-brass-600 focus:bg-white focus:ring-4 focus:ring-brass-500/15"
                />
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-ink-950/20 bg-cream-50 p-4 text-[14px] text-ink-950/60">
                <Upload className="h-5 w-5 shrink-0 text-brass-700" />
                <p>Have plans or schedules? Hit send, then email them to <span className="font-bold text-ink-950">sales@onesourcebuilding.com.au</span> — we'll link them to your request.</p>
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-8 py-4 text-[16px] font-bold text-white transition-all hover:bg-ink-800 hover:shadow-lg focus-ring"
              >
                Request my supply + install quote
                <Send className="h-4 w-4 text-brass-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-3 text-center text-[12.5px] text-ink-950/50">
                No obligation. We quote from your plans, schedules or a simple list. Prefer to talk? <a href="tel:0412054048" className="font-bold text-ink-950 underline-offset-2 hover:underline">0412 054 048</a>
              </p>

              <div className="mt-5 flex items-center justify-center gap-1.5 text-[13px] text-ink-950/45">
                <Link to="/catalogue" className="inline-flex items-center gap-1 font-semibold hover:text-ink-950">Browse catalogue <ChevronRight className="h-3.5 w-3.5" /></Link>
                <span>·</span>
                <Link to="/projects" className="inline-flex items-center gap-1 font-semibold hover:text-ink-950">See projects <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Products strip if none */}
        {allShortlisted.length === 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl">Popular to price together</h2>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {PRODUCTS.filter((p) => p.featured).slice(0, 6).map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group flex w-64 shrink-0 items-center gap-3 rounded-2xl border border-ink-950/10 bg-white p-3 hover:border-brass-500/60">
                  <img src={p.images[0]} alt="" className="h-14 w-14 rounded-xl object-cover" loading="lazy" />
                  <span>
                    <span className="block truncate text-[14px] font-bold group-hover:text-brass-700">{p.name}</span>
                    <span className="block text-[12.5px] text-ink-950/55">{p.leadTime}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
