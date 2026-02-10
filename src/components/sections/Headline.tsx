import { headlineText, subheadlineText } from "@/data/content";

export function Headline() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center sm:py-12 md:py-14">
      <h2 className="mb-6 font-baloo text-lg font-normal leading-relaxed text-gray-700 sm:text-xl md:mb-8 md:text-2xl">
        {headlineText}
      </h2>
      <h3 className="font-passion text-xl font-bold text-brand-indigo sm:text-2xl md:text-3xl lg:text-4xl">
        {subheadlineText}
      </h3>
    </section>
  );
}
