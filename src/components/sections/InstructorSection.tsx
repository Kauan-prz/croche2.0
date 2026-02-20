import { motion } from "framer-motion";
import { instructorData } from "@/data/content";

export function InstructorSection() {
  return (
    <section className="px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
            {instructorData.name}
          </h2>
          <p className="mt-1 font-baloo text-sm text-gray-500 sm:text-base">
            {instructorData.title}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-brand-purple/10 bg-white p-5 shadow-lg sm:p-6 md:p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-magenta text-white shadow-lg md:h-32 md:w-32">
              <span className="font-passion text-3xl font-bold md:text-4xl">J</span>
            </div>
            <div className="text-center md:text-left">
              <p className="mb-6 font-baloo text-base leading-relaxed text-gray-600 md:text-lg">
                {instructorData.bio}
              </p>
              <div className="flex justify-center gap-8 md:justify-start">
                {instructorData.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-passion text-2xl font-bold text-brand-purple md:text-3xl">
                      {stat.number}
                    </p>
                    <p className="font-baloo text-xs text-gray-500 md:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
