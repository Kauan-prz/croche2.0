import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsTitle } from "@/data/content";
import { testimonialImages } from "@/data/images";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-gray-50 px-4 py-14 sm:py-16 md:py-20" id="depoimentos">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          {testimonialsTitle}
        </h2>
        <p className="mb-6 font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          A mesma transformação que espera por você
        </p>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="mx-auto w-full max-w-lg"
        >
          <CarouselContent>
            {testimonialImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center p-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="max-h-72 w-auto rounded-2xl shadow-lg sm:max-h-[28rem]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 h-8 w-8 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white sm:-left-12 sm:h-10 sm:w-10" />
          <CarouselNext className="-right-3 h-8 w-8 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white sm:-right-12 sm:h-10 sm:w-10" />
        </Carousel>
      </div>
    </section>
  );
}
