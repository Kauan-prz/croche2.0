import { motion } from "framer-motion";
import { PAYMENT_URL, ctaText, ctaSubText } from "@/data/content";

const particles = [
  { top: "20%", left: "10%", delay: 0.1 },
  { top: "50%", left: "40%", delay: 0.3 },
  { top: "80%", left: "70%", delay: 0.5 },
  { top: "30%", left: "90%", delay: 0.7 },
];

export function CtaButton() {
  return (
    <section className="overflow-hidden flex justify-center px-4 py-6">
      <a
        href={PAYMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-brand-purple to-brand-magenta px-6 py-4 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(126,97,204,0.4)] sm:w-auto sm:max-w-none sm:px-12 sm:py-6 md:px-16 md:py-6"
      >
        <span className="relative z-10 font-passion text-lg font-bold text-white sm:text-2xl md:text-2xl">
          {ctaText}
        </span>
        <span className="relative z-10 mt-1 font-baloo text-sm font-medium text-white/80 sm:text-base">
          {ctaSubText}
        </span>
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white"
              style={{ top: p.top, left: p.left }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </a>
    </section>
  );
}
