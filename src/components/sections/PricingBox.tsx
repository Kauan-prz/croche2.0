import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricing, PAYMENT_URL } from "@/data/content";
import { CountdownTimer } from "./CountdownTimer";

export function PricingBox() {
  return (
    <section className="flex justify-center px-4 py-14 sm:py-16 md:py-20" id="preco">
      <Card className="w-full max-w-md border border-brand-gold/40 bg-white shadow-lg sm:max-w-lg">
        <CardContent className="space-y-5 p-6 text-center sm:p-8 md:p-10">
          <h3 className="font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-3xl">
            {pricing.heading}
          </h3>

          <CountdownTimer />

          <div className="space-y-1">
            <p className="font-baloo text-base text-gray-500">
              De{" "}
              <span className="text-red-500 line-through">
                {pricing.originalPrice}
              </span>
            </p>
            <p className="font-passion text-2xl font-bold text-brand-purple sm:text-3xl md:text-4xl">
              {pricing.discountedPrice}
            </p>
            <p className="font-baloo text-sm text-gray-500">
              ou {pricing.installment} sem juros
            </p>
          </div>

          <Badge className="bg-brand-gold px-4 py-1 text-base font-bold text-white hover:bg-brand-gold/90">
            {pricing.discountPercent}% OFF
          </Badge>

          <div className="rounded-lg bg-brand-purple/5 p-3">
            <p className="font-baloo text-xs text-gray-500">
              + Bônus no valor de{" "}
              <span className="font-bold text-brand-purple">
                {pricing.bonusTotal}
              </span>{" "}
              inclusos gratuitamente
            </p>
          </div>

          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-gradient-to-r from-brand-purple to-brand-magenta py-4 font-passion text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(126,97,204,0.5)]"
          >
            GARANTIR MINHA VAGA POR R$27,90
          </a>

          <p className="font-baloo text-xs text-gray-400">
            Pagamento 100% seguro - Acesso imediato
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
