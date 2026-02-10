import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/content";

export function FaqSection() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:py-16 md:py-20" id="faq">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-center font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mb-6 text-center font-baloo text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg">
          Tire suas dúvidas antes de se inscrever
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-2xl border-2 border-brand-purple/15 bg-white"
            >
              <AccordionTrigger className="px-4 py-3 font-baloo text-sm font-bold text-brand-purple hover:bg-brand-purple/5 hover:no-underline sm:px-5 sm:py-4 sm:text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="bg-brand-purple/5 px-5 py-4 font-baloo text-sm leading-relaxed text-gray-600 md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
