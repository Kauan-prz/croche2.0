import { heroText } from "@/data/content";

export function HeroBanner() {
  return (
    <header
      className="sparkle-header-bg flex min-h-[35vh] items-center justify-center bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-magenta px-5 pt-16 pb-10 text-center sm:min-h-[40vh] sm:pt-20 sm:pb-12 md:min-h-[50vh] md:pt-28 md:pb-16"
      id="inicio"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="relative z-10 font-passion text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-5xl lg:text-6xl">
          {heroText}
        </h1>
        <p className="relative z-10 mt-3 font-baloo text-sm text-white/80 sm:text-base md:text-xl">
          Aprenda crochê do zero e transforme em renda
        </p>
      </div>
    </header>
  );
}
