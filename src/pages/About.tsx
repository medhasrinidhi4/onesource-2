import { Link } from "react-router-dom";
import { ShieldCheck, Truck, Users, Award, Check, ArrowUpRight, MapPin, Building2, Gem, Hammer } from "lucide-react";
import { Reveal, SectionHeading, Counter } from "../components/ui";

export default function About() {
  return (
    <div className="pt-[104px]">
      <section className="relative overflow-hidden bg-ink-950 pb-16 pt-14 lg:pt-20">
        <img src="https://images.pexels.com/photos/30112371/pexels-photo-30112371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-white/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About us</span>
            </nav>
          </Reveal>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <Reveal delay={0.08}>
                <h1 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Not a middleman with a <span className="text-gradient-brass italic">catalogue.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 text-[17px] leading-relaxed text-white/70">
                  A supply + installation business. Every category we carry is one our directors have personally specified, ordered and installed on their own projects.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="glass-dark grid grid-cols-3 gap-px overflow-hidden rounded-3xl">
                {[
                  { v: 1200, s: "+", l: "Projects" },
                  { v: 30, s: "%", l: "Max saving" },
                  { v: 8, s: "", l: "States + territories" },
                ].map((st) => (
                  <div key={st.l} className="bg-white/[0.03] p-5 text-center">
                    <p className="font-display text-3xl text-white sm:text-4xl"><Counter to={st.v} suffix={st.s} /></p>
                    <p className="mt-1 text-[12.5px] text-white/55">{st.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={<>Quotes with the detail a certifier, estimator <span className="italic text-brass-600">and foreman</span> all need.</>}
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-950/70">
                <p>
                  One Source Building started with a frustration every builder knows: six suppliers, six lead times, six install crews — and nobody owning the junctions where stone meets joinery, tile meets plumbing, or glass meets frame.
                </p>
                <p>
                  So we built the opposite. We supply marble, joinery, windows, garage doors, tiles and bathroomware — and we install them with our own teams, on one program, under one quote.
                </p>
                <p>
                  Because we price full houses and full developments as one package instead of line items, clients typically save up to 30% against sourcing and coordinating each trade separately.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-950/12 bg-white px-4 py-2 text-[13.5px] font-bold">
                  <ShieldCheck className="h-4 w-4 text-brass-600" /> HIA Member
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-950/12 bg-white px-4 py-2 text-[13.5px] font-bold">
                  <MapPin className="h-4 w-4 text-brass-600" /> Darlinghurst NSW 2010
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-950/12 bg-white px-4 py-2 text-[13.5px] font-bold">
                  <Truck className="h-4 w-4 text-brass-600" /> Australia-wide
                </span>
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal>
              <div className="img-zoom overflow-hidden rounded-[1.8rem] shadow-card">
                <img src="https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Marble kitchen installed by One Source Building" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={0.08}>
                <div className="img-zoom overflow-hidden rounded-[1.4rem]">
                  <img src="https://images.pexels.com/photos/7031210/pexels-photo-7031210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Joinery kitchen" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="img-zoom overflow-hidden rounded-[1.4rem]">
                  <img src="https://images.pexels.com/photos/34119216/pexels-photo-34119216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Marble bathroom" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Three promises, <span className="italic text-brass-600">kept on every job.</span></>}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: <Gem className="h-6 w-6" />, t: "We install what we sell", d: "No hand-offs to unknown subbies. Our stonemasons, joiners, glaziers, tilers and plumbers fit what we supply — and own the junctions." },
              { icon: <Award className="h-6 w-6" />, t: "Honest lead times", d: "We'd rather lose a job than lie about a program. Your quote shows real lead times against your build stages — staged per floor or dwelling." },
              { icon: <Users className="h-6 w-6" />, t: "One throat to choke", d: "Single defects contact, spares held for volume jobs, and a crew that comes back. Builders stay because handover stays clean." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="card-lift h-full rounded-[1.8rem] border border-ink-950/10 bg-cream-50 p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 text-brass-300">{v.icon}</span>
                  <h3 className="font-display mt-5 text-2xl">{v.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-950/60">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-2">
          <div className="p-8 text-white sm:p-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brass-300">Coverage</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Based in Darlinghurst. Working in every state + territory.</h2>
            <p className="mt-4 text-white/60">Sydney metro installation as standard. Scheduled install runs to regional NSW, interstate metro and major regional centres.</p>
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"].map((s) => (
                <span key={s} className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-center text-[14px] font-bold">{s}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-7 py-3.5 text-center text-[15px] font-bold text-ink-950">Check your postcode</Link>
              <a href="tel:0412054048" className="rounded-full border border-white/20 px-7 py-3.5 text-center text-[15px] font-semibold">0412 054 048</a>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <img src="https://images.pexels.com/photos/6414285/pexels-photo-6414285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Australian residence" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/20 to-transparent" />
          </div>
        </div>

        {/* Who we work with */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Building2 className="h-5 w-5" />, t: "Builders", d: "Custom, project + tier 2" },
            { icon: <Hammer className="h-5 w-5" />, t: "Reno companies", d: "Live-in + full-gut" },
            { icon: <MapPin className="h-5 w-5" />, t: "Owner-builders", d: "Knockdown + new build" },
            { icon: <Award className="h-5 w-5" />, t: "Investors", d: "Duplex to multi-unit" },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-ink-950/10 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass-100 text-brass-700">{a.icon}</span>
                <span>
                  <span className="block text-[15px] font-bold">{a.t}</span>
                  <span className="block text-[13px] text-ink-950/55">{a.d}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-[1.6rem] bg-cream-100 p-7 sm:p-9">
          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 shrink-0 text-brass-700" />
              <div>
                <h3 className="font-display text-2xl">Proud member of the Housing Industry Association.</h3>
                <p className="mt-1 text-[14.5px] text-ink-950/60">The peak body for residential building in Australia — backing professional, compliant supply + install.</p>
              </div>
            </div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-[15px] font-bold text-white">
              Work with us <ArrowUpRight className="h-4 w-4 text-brass-300" />
            </Link>
          </div>
          <ul className="mt-6 grid gap-2 border-t border-ink-950/10 pt-6 sm:grid-cols-3">
            {["Up to 30% saving vs trade route", "Staged to your program", "Single defects contact"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-[14px] font-semibold"><Check className="h-4 w-4 text-brass-700" /> {t}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
