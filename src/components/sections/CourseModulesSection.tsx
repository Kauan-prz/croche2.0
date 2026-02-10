import { motion } from "framer-motion";
import { courseModules } from "@/data/content";

const moduleIcons = ["\u{1F4DA}", "\u{1F457}", "\u{1F9F8}", "\u{1F3E0}", "\u{1F4BC}"];

export function CourseModulesSection() {
  return (
    <section className="overflow-hidden bg-gray-50 px-4 py-14 sm:py-16 md:py-20" id="modulos">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          O que você vai aprender
        </h2>
        <p className="mb-6 text-center font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          Conteúdo completo do zero ao avançado
        </p>
        <div className="space-y-4">
          {courseModules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border-2 border-brand-purple/15 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3 border-b border-brand-purple/5 bg-gradient-to-r from-brand-purple/5 to-transparent px-5 py-4">
                <span className="text-2xl">{moduleIcons[i]}</span>
                <h3 className="font-baloo text-lg font-bold text-brand-purple">
                  {mod.title}
                </h3>
              </div>
              <ul className="space-y-2 px-5 py-4">
                {mod.lessons.map((lesson, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 font-baloo text-sm text-gray-600 md:text-base"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-brand-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {lesson}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
