import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { CATEGORIES } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[600px] rounded-full bg-brass-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-brass-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:pt-20">
        {/* CTA strip */}
        <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">
                Ready when you are
              </p>
              <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
                Send your schedule. We'll supply{" "}
                <span className="text-gradient-brass italic">and install</span> it.
              </h2>
              <p className="mt-3 text-white/60">
                Plans, a window schedule, or a plain list — whatever you have. One quote, one install team, staged to your program.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brass-600 via-brass-500 to-brass-600 bg-[length:200%_100%] px-7 py-3.5 text-[15px] font-bold text-ink-950 transition-all duration-500 hover:bg-[position:100%_0] focus-ring"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:0412054048"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-ring"
              >
                <Phone className="h-4 w-4" /> 0412 054 048
              </a>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white text-ink-950">
                <span className="font-display text-xl font-semibold">1</span>
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brass-600 via-brass-300 to-brass-600" />
              </span>
              <span className="leading-none">
                <span className="block text-[17px] font-extrabold tracking-tight">
                  ONE<span className="text-brass-400">SOURCE</span>
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Building
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/55">
              A single supply + installation partner for builders and developers — marble, joinery, windows, garage doors, tiles and bathroomware.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-white/80">
                <ShieldCheck className="h-3.5 w-3.5 text-brass-400" /> HIA Member
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-white/80">
                <Truck className="h-3.5 w-3.5 text-brass-400" /> Australia-wide
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">Catalogue</h3>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/catalogue?cat=${c.id}`}
                    className="text-[14.5px] text-white/70 transition-colors hover:text-brass-300"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                ["About us", "/about"],
                ["Projects", "/projects"],
                ["Resources", "/resources"],
                ["Catalogue", "/catalogue"],
                ["Request a quote", "/contact"],
              ].map(([label, to]) => (
                <li key={to + label}>
                  <Link to={to} className="text-[14.5px] text-white/70 transition-colors hover:text-brass-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-[14.5px]">
              <li>
                <a href="tel:0412054048" className="flex items-center gap-2.5 text-white/80 hover:text-brass-300">
                  <Phone className="h-4 w-4 text-brass-400" /> 0412 054 048
                </a>
              </li>
              <li>
                <a href="mailto:sales@onesourcebuilding.com.au" className="flex items-center gap-2.5 text-white/80 hover:text-brass-300">
                  <Mail className="h-4 w-4 text-brass-400" /> sales@onesourcebuilding.com.au
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                Darlinghurst, NSW 2010
                <br />
              </li>
              <li className="flex items-center gap-2.5 text-white/60">
                <Clock className="h-4 w-4 text-brass-400" /> Mon–Fri 8am–5pm · Sat by appointment
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} One Source Building. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Catalogue mode — pricing on quote only
            <span className="h-1 w-1 rounded-full bg-white/30" />
            Supply + install, Australia-wide
          </p>
        </div>
      </div>
    </footer>
  );
}
