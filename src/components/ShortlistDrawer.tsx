import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trash2, ArrowRight, Bookmark, Package } from "lucide-react";
import { useShortlist } from "../store/shortlist";

export default function ShortlistDrawer() {
  const { isOpen, setOpen, products, remove, clear, count } = useShortlist();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] bg-ink-950/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-[81] flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl"
            role="dialog"
            aria-label="Your shortlist"
          >
            <div className="flex items-center justify-between border-b border-ink-950/10 bg-white px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 text-brass-300">
                  <Bookmark className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-[17px] font-extrabold tracking-tight">Your shortlist</h2>
                  <p className="text-[13px] text-ink-950/55">
                    {count === 0 ? "Nothing saved yet" : `${count} item${count > 1 ? "s" : ""} for your quote`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-950/12 hover:bg-cream-100 focus-ring"
                aria-label="Close shortlist"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {products.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brass-100 text-brass-700">
                    <Package className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-display text-xl">Start building your package</p>
                    <p className="mx-auto mt-2 max-w-[260px] text-[14px] text-ink-950/55">
                      Tap the bookmark on any product to collect everything you want priced in one quote.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-ink-950 px-6 py-3 text-[14px] font-bold text-white"
                  >
                    Browse catalogue
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {products.map((p) => (
                      <motion.li
                        key={p.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex gap-3 rounded-2xl border border-ink-950/8 bg-white p-3 shadow-sm"
                      >
                        <img src={p.images[0]} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[14.5px] font-bold">{p.name}</p>
                          <p className="truncate text-[12.5px] text-ink-950/55">{p.tagline}</p>
                          <p className="mt-1 text-[12px] font-semibold text-brass-700">{p.leadTime}</p>
                        </div>
                        <button
                          onClick={() => remove(p.id)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-950/40 hover:bg-red-50 hover:text-red-600 focus-ring"
                          aria-label={`Remove ${p.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {products.length > 0 && (
              <div className="border-t border-ink-950/10 bg-white p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between text-[13px]">
                  <span className="text-ink-950/55">Catalogue mode — no checkout</span>
                  <button onClick={clear} className="font-semibold text-ink-950/60 underline-offset-2 hover:underline">
                    Clear all
                  </button>
                </div>
                <Link
                  to={`/contact?shortlist=${products.map((p) => p.slug).join(",")}`}
                  onClick={() => setOpen(false)}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-4 text-[15px] font-bold text-white transition-all hover:bg-ink-800 focus-ring"
                >
                  Request quote for {count} item{count > 1 ? "s" : ""}
                  <ArrowRight className="h-4 w-4 text-brass-300 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-3 text-center text-[12.5px] text-ink-950/50">
                  One quote, one install team — priced in days, not weeks.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
