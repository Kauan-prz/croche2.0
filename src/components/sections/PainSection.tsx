import { motion } from "framer-motion";
import { painPoints, futurePacing } from "@/data/content";

export function PainSection() {
  return (
    <section className="overflow-hidden bg-gray-50 px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          Você se identifica com isso?
        </h2>
        <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          Se pelo menos uma dessas situações é sua, esse curso foi feito para você:
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
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-500">
                {i + 1}
              </span>
              <p className="font-baloo text-base text-gray-700 md:text-lg">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12"
        >
          <h3 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-3xl">
            Agora imagine...
          </h3>
          <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base">
            Como seria sua vida daqui a 30 dias com o método certo:
          </p>
          <div className="space-y-4">
            {futurePacing.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 rounded-2xl border border-brand-gold/20 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md md:p-6"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-sm font-bold text-brand-gold">
                  {i + 1}
                </span>
                <p className="font-baloo text-base text-gray-700 md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
