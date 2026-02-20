import { motion } from "framer-motion";
import { bonusText, bonuses } from "@/data/content";

export function BonusSection() {
  return (
    <section className="px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          {bonusText}
        </h2>
        <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base">
          Bônus exclusivos inclusos na sua inscrição
        </p>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-brand-gold/20 bg-white p-4 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 sm:p-6"
            >
              <span className="mb-3 flex mx-auto h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10 font-passion text-lg font-bold text-brand-gold">
                {i + 1}
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
