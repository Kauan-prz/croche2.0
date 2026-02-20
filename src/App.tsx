import { Navbar } from "@/components/sections/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyCtaMobile } from "@/components/sections/StickyCtaMobile";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { Headline } from "@/components/sections/Headline";
import { VideoSection } from "@/components/sections/VideoSection";
import { CtaButton } from "@/components/sections/CtaButton";
import { PainSection } from "@/components/sections/PainSection";
import { CourseModulesSection } from "@/components/sections/CourseModulesSection";
import { InstructorSection } from "@/components/sections/InstructorSection";
import { ProductCarousel } from "@/components/sections/ProductCarousel";
import { BonusSection } from "@/components/sections/BonusSection";
import { PricingBox } from "@/components/sections/PricingBox";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import {
  clothingImages,
  amigurumiImages,
  homeImages,
} from "@/data/images";

const allProductImages = [...clothingImages, ...amigurumiImages, ...homeImages];

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />
      <StickyCtaMobile />

      {/* Hero + Proposta de valor */}
      <HeroBanner />
      <Headline />
      <VideoSection />
      <CtaButton />

      {/* Dor */}
      <PainSection />

      {/* O que vai aprender */}
      <CourseModulesSection />
      <ProductCarousel
        title="Veja o que você vai aprender a criar"
        images={allProductImages}
      />
      <CtaButton />

      {/* Instrutora */}
      <InstructorSection />

      {/* Bônus + Prova social */}
      <BonusSection />
      <TestimonialsSection />

      {/* Preço + Confiança */}
      <PricingBox />
      <GuaranteeSection />

      {/* FAQ + Final CTA */}
      <FaqSection />
      <CtaButton />
      <Footer />
    </div>
  );
}

export default App;
