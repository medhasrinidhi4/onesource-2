import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShortlistDrawer from "./components/ShortlistDrawer";
import { ShortlistProvider } from "./store/shortlist";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductDetail from "./pages/ProductDetail";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, search]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main"
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

function FloatingCall() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/product") || pathname.startsWith("/contact")) return null;
  return (
    <a
      href="tel:0412054048"
      aria-label="Call One Source Building"
      className="fixed bottom-5 right-5 z-[50] flex h-14 w-14 items-center justify-center rounded-full bg-ink-950 text-brass-300 shadow-[0_16px_40px_-10px_rgba(11,14,20,0.6)] transition-transform duration-300 hover:scale-110 lg:hidden"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="absolute inset-0 animate-ping rounded-full bg-brass-500/30 [animation-duration:2.5s]" aria-hidden />
    </a>
  );
}

export default function App() {
  return (
    <ShortlistProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-cream-50 text-ink-950">
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
          <Footer />
          <ShortlistDrawer />
          <FloatingCall />
        </div>
      </HashRouter>
    </ShortlistProvider>
  );
}
