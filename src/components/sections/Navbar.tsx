import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PAYMENT_URL, navItems } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
    return () => document.body.classList.remove("body-lock");
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span
          className={`font-passion text-xl font-bold transition-colors ${
            scrolled ? "text-brand-purple" : "text-white"
          }`}
        >
          Crochê Pro{" "}
          <span className={`font-baloo text-xs font-normal ${scrolled ? "text-gray-400" : "text-white/60"}`}>
            por Juliana
          </span>
        </span>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-baloo text-sm font-medium transition-colors hover:text-brand-gold ${
                scrolled ? "text-brand-purple" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-gold px-5 py-2 font-baloo text-sm font-bold text-white transition-transform hover:scale-105"
          >
            INSCREVA-SE
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-brand-purple" : "bg-white"
            } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-brand-purple" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-brand-purple" : "bg-white"
            } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-[52px] z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="relative z-50 overflow-hidden bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-lg px-4 py-3 text-left font-baloo text-base font-medium text-brand-purple transition-colors hover:bg-brand-purple/10"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-brand-gold px-5 py-3 text-center font-baloo text-base font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                INSCREVA-SE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
