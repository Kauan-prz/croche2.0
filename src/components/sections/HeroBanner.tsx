import { heroText, instructorData } from "@/data/content";

export function HeroBanner() {
  return (
    <header
      className="sparkle-header-bg flex min-h-[45vh] items-center justify-center bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-magenta px-5 pt-20 pb-12 text-center sm:min-h-[50vh] sm:pt-24 sm:pb-14 md:min-h-[60vh] md:pt-32 md:pb-20"
      id="inicio"
    >
      <div className="mx-auto max-w-4xl">
        <p className="relative z-10 mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-baloo text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:text-sm">
          Método comprovado por Juliana &mdash; 10+ anos de experiência
        </p>
        <h1 className="relative z-10 font-passion text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          {heroText}
        </h1>
        <p className="relative z-10 mx-auto mt-4 max-w-2xl font-baloo text-base text-white/80 sm:text-lg md:text-xl">
          Método usado por +500 alunas — de R$197,90 por apenas R$27,90
        </p>

        <div className="relative z-10 mx-auto mt-8 flex max-w-md items-center justify-center gap-6 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm sm:gap-8 sm:px-8 md:max-w-lg">
          {instructorData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-passion text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {stat.number}
              </p>
              <p className="font-baloo text-[10px] text-white/70 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
