import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProductCarouselProps {
  title: string;
  images: Array<{ src: string; alt: string }>;
}

export function ProductCarousel({ title, images }: ProductCarouselProps) {
  return (
    <section className="my-6">
      <div className="gradient-band py-6">
        <h2 className="mb-4 text-center font-passion text-lg font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="mx-auto max-w-6xl px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-300 hover:scale-110 sm:h-48 md:h-56 lg:h-64"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
