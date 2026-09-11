import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------- Reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Buttons ---------- */
export function PrimaryButton({
  to,
  children,
  className,
  external,
  onClick,
}: {
  to?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-[0_16px_40px_-12px_rgba(11,14,20,0.5)] hover:-translate-y-0.5 active:translate-y-0 focus-ring",
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (to && !external)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  if (to && external)
    return (
      <a href={to} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function BrassButton({
  to,
  children,
  className,
  onClick,
}: {
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brass-600 via-brass-500 to-brass-600 bg-[length:200%_100%] bg-[position:0%_0] px-7 py-3.5 text-[15px] font-semibold text-ink-950 shadow-[0_12px_32px_-10px_rgba(193,154,91,0.7)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_16px_44px_-10px_rgba(193,154,91,0.8)] hover:-translate-y-0.5 active:translate-y-0 focus-ring",
    className
  );
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  return (
    <button className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function GhostButton({
  to,
  children,
  className,
  dark,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-ring",
        dark
          ? "border-white/20 text-white hover:border-white/50 hover:bg-white/10"
          : "border-ink-950/15 bg-white/60 text-ink-950 hover:border-ink-950/40 hover:bg-white",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function PhoneButton({ compact }: { compact?: boolean }) {
  return (
    <a
      href="tel:0412054048"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full transition-all focus-ring",
        compact ? "text-sm font-semibold" : "text-sm font-semibold"
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-brass-300 transition-colors group-hover:bg-brass-600 group-hover:text-white">
        <Phone className="h-4 w-4" />
      </span>
      <span className="tracking-tight">0412 054 048</span>
    </a>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
  dark,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em]",
            dark
              ? "border-white/15 bg-white/5 text-brass-300"
              : "border-brass-500/25 bg-brass-100/60 text-brass-700"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brass-500 animate-pulse-soft" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display mt-5 text-3xl leading-[1.08] font-medium text-balance sm:text-4xl lg:text-[3.4rem]",
            dark ? "text-white" : "text-ink-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-[17px] leading-relaxed text-balance",
              dark ? "text-white/65" : "text-ink-950/60"
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
