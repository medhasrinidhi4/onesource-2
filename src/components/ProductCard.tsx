import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Bookmark, Clock, Star } from "lucide-react";
import { cn } from "../utils/cn";
import type { Product } from "../data/catalog";
import { getCategory } from "../data/catalog";
import { useShortlist } from "../store/shortlist";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const cat = getCategory(product.categoryId);
  const { has, toggle } = useShortlist();
  const saved = has(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-lift group relative flex flex-col overflow-hidden rounded-[1.6rem] border border-ink-950/8 bg-white shadow-[0_8px_32px_-16px_rgba(11,14,20,0.25)]"
    >
      <Link to={`/product/${product.slug}`} className="img-zoom relative block aspect-[4/3] focus-ring" aria-label={`View ${product.name}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent opacity-70" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge && (
            <span className="rounded-full bg-gradient-to-r from-brass-600 to-brass-500 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">
              {product.badge}
            </span>
          )}
          {cat && (
            <span className="glass rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-ink-950">
              {cat.short}
            </span>
          )}
        </div>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-950 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/product/${product.slug}`} className="focus-ring rounded-lg">
              <h3 className="font-display text-[20px] leading-snug font-medium text-ink-950 transition-colors group-hover:text-brass-700">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-[13.5px] font-medium text-ink-950/55">{product.tagline}</p>
          </div>
          <button
            onClick={() => toggle(product.id)}
            aria-label={saved ? `Remove ${product.name} from shortlist` : `Add ${product.name} to shortlist`}
            aria-pressed={saved}
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 focus-ring",
              saved
                ? "border-brass-500 bg-brass-100 text-brass-700"
                : "border-ink-950/12 text-ink-950/50 hover:border-brass-500/60 hover:text-brass-600"
            )}
          >
            <Bookmark className={cn("h-[17px] w-[17px]", saved && "fill-brass-500 text-brass-600")} />
          </button>
        </div>

        <p className="mt-3 line-clamp-2 text-[14.5px] leading-relaxed text-ink-950/60">{product.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.finishes.slice(0, 4).map((f) => (
            <span
              key={f.name}
              title={f.name}
              className="h-6 w-6 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(11,14,20,0.15)]"
              style={{ backgroundColor: f.hex }}
            />
          ))}
          <span className="ml-1 self-center text-[12px] font-medium text-ink-950/50">
            {product.finishes.length} finishes
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink-950/8 pt-4 text-[13px]">
          <span className="inline-flex items-center gap-1.5 font-semibold text-ink-950/60">
            <Clock className="h-3.5 w-3.5 text-brass-600" /> {product.leadTime}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-ink-950/70">
            <Star className="h-3.5 w-3.5 fill-brass-500 text-brass-500" /> {product.rating}
            <span className="font-normal text-ink-950/45">({product.projects})</span>
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="rounded-full border border-ink-950/15 px-4 py-2.5 text-center text-[13.5px] font-bold text-ink-950 transition-all hover:border-ink-950 hover:bg-ink-950 hover:text-white focus-ring"
          >
            View detail
          </Link>
          <Link
            to={`/contact?product=${product.slug}`}
            className="rounded-full bg-brass-500/15 px-4 py-2.5 text-center text-[13.5px] font-bold text-brass-700 transition-all hover:bg-brass-600 hover:text-white focus-ring"
          >
            Price this
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
