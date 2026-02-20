import { motion } from "framer-motion";
import { targetAudience } from "@/data/content";

export function TargetAudienceSection() {
  return (
    <section className="overflow-hidden px-4 py-14 sm:py-16 md:py-20" id="para-quem">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          Para quem é este curso?
        </h2>
        <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          Este curso foi feito especialmente para você que:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {targetAudience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 sm:p-6 md:p-7"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple/10 font-passion text-sm font-bold text-brand-purple">
                {i + 1}
              </span>
              <h3 className="mb-1 font-baloo text-lg font-bold text-brand-purple">
                {item.title}
              </h3>
              <p className="font-baloo text-sm text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
