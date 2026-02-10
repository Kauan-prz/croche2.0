import { YOUTUBE_VIDEO_ID } from "@/data/content";

export function VideoSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-10 sm:pb-12">
      <div className="aspect-video overflow-hidden rounded-2xl border-2 border-brand-purple/30 shadow-xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?si=_o2yf0ZFids3bkKP`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
