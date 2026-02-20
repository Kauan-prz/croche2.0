import { useState, useEffect } from "react";
import { PAYMENT_URL } from "@/data/content";

export function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-purple/20 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm md:hidden">
      <a
        href={PAYMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-2xl bg-gradient-to-r from-brand-purple to-brand-magenta py-3.5 text-center font-passion text-base font-bold text-white shadow-lg"
      >
        GARANTIR VAGA - R$27,90 + 3 BÔNUS
      </a>
    </div>
  );
}
