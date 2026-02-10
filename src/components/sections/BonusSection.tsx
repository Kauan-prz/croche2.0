import { motion } from "framer-motion";
import { bonusText, bonuses } from "@/data/content";

const iconMap: Record<string, string> = {
  book: "\u{1F4D6}",
  users: "\u{1F465}",
  calculator: "\u{1F4B2}",
};

export function BonusSection() {
  return (
    <section className="px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          {bonusText}
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand-indigo to-brand-gold" />

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border-2 border-brand-gold/30 bg-gradient-to-b from-white to-amber-50/40 p-4 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 sm:p-6"
            >
              <span className="mb-3 block text-4xl">
                {iconMap[bonus.icon]}
              </span>
              <h3 className="mb-2 font-baloo text-base font-bold text-brand-purple">
                {bonus.title}
              </h3>
              <p className="mb-3 font-baloo text-sm leading-relaxed text-gray-600">
                {bonus.description}
              </p>
              <p className="font-baloo text-xs text-gray-400">
                Valor:{" "}
                <span className="font-bold text-brand-gold">{bonus.value}</span>
              </p>
              <span className="mt-2 inline-block rounded-full bg-brand-gold px-3 py-1 font-baloo text-xs font-bold text-white shadow-sm">
                GRÁTIS
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
