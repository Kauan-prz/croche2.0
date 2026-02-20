import { headlineText, subheadlineText } from "@/data/content";

export function Headline() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center sm:py-12 md:py-16">
      <h2 className="mb-4 font-passion text-xl font-bold leading-snug text-gray-800 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
        {headlineText}
      </h2>
      <p className="font-baloo text-base text-gray-500 sm:text-lg md:text-xl">
        {subheadlineText}
      </p>
    </section>
  );
}
