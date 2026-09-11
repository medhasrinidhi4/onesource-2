import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, Menu, X, Phone, ArrowUpRight, ShieldCheck, Truck, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { useShortlist } from "../store/shortlist";
import { CATEGORIES } from "../data/catalog";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const { count, setOpen, lastAdded } = useShortlist();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCatOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-[60] bg-ink-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[12.5px] sm:px-6">
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-white/80 sm:inline-flex">
              <ShieldCheck className="h-3.5 w-3.5 text-brass-400" />
              HIA Member
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <Truck className="h-3.5 w-3.5 text-brass-400" />
              Sydney based · Australia-wide delivery
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-brass-300 md:inline">We don't just supply — we install</span>
            <a href="tel:0412054048" className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-brass-300">
              <Phone className="h-3.5 w-3.5" /> 0412 054 048
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "fixed inset-x-0 top-[33px] z-[60] transition-all duration-500",
          scrolled ? "py-2" : "py-3"
        )}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5",
              scrolled
                ? "border-white/40 bg-white/85 shadow-[0_16px_48px_-16px_rgba(11,14,20,0.35)] backdrop-blur-2xl"
                : "border-white/25 bg-white/60 backdrop-blur-xl"
            )}
          >
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3 focus-ring rounded-xl" aria-label="One Source Building home">
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-ink-950 text-brass-300">
                <span className="font-display text-lg font-semibold">1</span>
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brass-600 via-brass-300 to-brass-600" />
              </span>
              <span className="leading-none">
                <span className="block text-[15px] font-extrabold tracking-tight text-ink-950">
                  ONE<span className="text-brass-600">SOURCE</span>
                </span>
                <span className="block text-[10.5px] font-semibold uppercase tracking-[0.28em] text-ink-950/55">
                  Building
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 lg:flex">
              {LINKS.slice(0, 1).map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "link-underline rounded-lg px-4 py-2 text-[14.5px] font-semibold text-ink-950/75 hover:text-ink-950 focus-ring",
                      isActive && "active text-ink-950"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              {/* Catalogue dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                <button
                  onClick={() => navigate("/catalogue")}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-4 py-2 text-[14.5px] font-semibold text-ink-950/75 hover:text-ink-950 focus-ring",
                    (location.pathname.startsWith("/catalogue") || location.pathname.startsWith("/product")) && "text-ink-950"
                  )}
                  aria-expanded={catOpen}
                  aria-haspopup="true"
                >
                  Catalogue
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", catOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {catOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-ink-950/10 bg-white/95 p-2 shadow-[0_32px_80px_-20px_rgba(11,14,20,0.4)] backdrop-blur-2xl">
                        <div className="grid grid-cols-2 gap-1">
                          {CATEGORIES.map((c) => (
                            <Link
                              key={c.id}
                              to={`/catalogue?cat=${c.id}`}
                              className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-cream-100"
                            >
                              <span className="h-11 w-11 shrink-0 overflow-hidden rounded-lg">
                                <img src={c.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                              </span>
                              <span>
                                <span className="block text-[13.5px] font-bold text-ink-950">{c.short}</span>
                                <span className="block text-[12px] text-ink-950/55">{c.tagline}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/catalogue"
                          className="mt-1 flex items-center justify-between rounded-xl bg-ink-950 px-4 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink-800"
                        >
                          View full catalogue — no prices, just honest quotes
                          <ArrowUpRight className="h-4 w-4 text-brass-300" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {LINKS.slice(2).map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "link-underline rounded-lg px-4 py-2 text-[14.5px] font-semibold text-ink-950/75 hover:text-ink-950 focus-ring",
                      isActive && "active text-ink-950"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(true)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/12 bg-white/70 text-ink-950 transition-all hover:border-brass-500/50 hover:bg-brass-100 focus-ring"
                aria-label={`Open shortlist, ${count} items`}
              >
                <Bookmark className={cn("h-[18px] w-[18px]", count > 0 && "fill-brass-500 text-brass-600")} />
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brass-600 px-1 text-[11px] font-bold text-white"
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {lastAdded && (
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-8 right-0 whitespace-nowrap rounded-full bg-ink-950 px-3 py-1 text-[11px] font-semibold text-white"
                    >
                      Added to shortlist
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <Link
                to="/contact"
                className="group hidden items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_rgba(11,14,20,0.5)] focus-ring sm:inline-flex"
              >
                Get Quote
                <ArrowUpRight className="h-4 w-4 text-brass-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/12 bg-white/70 lg:hidden focus-ring"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-ink-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-3 mt-[104px] overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl"
            >
              <div className="grid gap-1">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between rounded-2xl px-5 py-4 text-[17px] font-bold",
                          isActive ? "bg-ink-950 text-white" : "text-ink-950 hover:bg-cream-100"
                        )
                      }
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 px-1 pb-1">
                <a
                  href="tel:0412054048"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-ink-950/15 px-4 py-3.5 text-[14px] font-bold"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brass-600 to-brass-500 px-4 py-3.5 text-[14px] font-bold text-ink-950"
                >
                  Get Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="px-4 py-2 text-center text-[12px] text-ink-950/50">
                sales@onesourcebuilding.com.au · Darlinghurst NSW
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
