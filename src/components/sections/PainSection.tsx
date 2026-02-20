import { motion } from "framer-motion";
import { painPoints } from "@/data/content";

export function PainSection() {
  return (
    <section className="overflow-hidden bg-gray-50 px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          Você se identifica?
        </h2>
        <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          Se respondeu sim para alguma dessas perguntas, esse curso é para você.
        </p>
        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md md:p-6"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-magenta text-sm font-bold text-white shadow-sm">
                {i + 1}
              </span>
              <p className="font-baloo text-base text-gray-700 md:text-lg">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
