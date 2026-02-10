import { motion } from "framer-motion";
import { guaranteeText } from "@/data/content";
import { guaranteeBadge } from "@/data/images";

export function GuaranteeSection() {
  return (
    <section className="px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 rounded-2xl border-2 border-brand-gold/30 bg-brand-gold/5 p-5 shadow-sm sm:gap-6 sm:p-6 md:flex-row md:p-8"
        >
          <img
            src={guaranteeBadge}
            alt="Selo de garantia 7 dias"
            loading="lazy"
            className="h-auto w-32 shrink-0 rounded-lg md:w-40"
          />
          <div className="text-center md:text-left">
            <h3 className="mb-2 font-passion text-xl font-bold text-brand-purple md:text-2xl">
              Garantia incondicional de 7 dias
            </h3>
            <p className="font-baloo text-sm leading-relaxed text-gray-600 md:text-base">
              {guaranteeText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
