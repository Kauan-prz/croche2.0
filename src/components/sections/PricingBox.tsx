import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricing, PAYMENT_URL, ctaText } from "@/data/content";
import { CountdownTimer } from "./CountdownTimer";

const valueStack = [
  { item: "Curso completo (5 módulos)", value: "R$197,90" },
  { item: "+500 Receitas Exclusivas", value: "R$97,00" },
  { item: "Grupo VIP no WhatsApp", value: "R$97,00" },
  { item: "Guia de Precificação", value: "R$91,00" },
  { item: "Acesso vitalício", value: "Incluso" },
];

export function PricingBox() {
  return (
    <section className="flex justify-center px-4 py-14 sm:py-16 md:py-20" id="preco">
      <Card className="w-full max-w-md border border-brand-gold/40 bg-white shadow-lg sm:max-w-lg">
        <CardContent className="space-y-5 p-6 text-center sm:p-8 md:p-10">
          <h3 className="font-passion text-xl font-bold text-brand-purple sm:text-2xl md:text-3xl">
            {pricing.heading}
          </h3>

          <div className="space-y-2 text-left">
            {valueStack.map((entry, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5"
              >
                <span className="font-baloo text-sm text-gray-700">
                  {entry.item}
                </span>
                <span className="font-baloo text-sm font-bold text-gray-400 line-through">
                  {entry.value}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-brand-purple/5 px-4 py-2.5">
              <span className="font-baloo text-sm font-bold text-brand-purple">
                Valor total
              </span>
              <span className="font-baloo text-sm font-bold text-gray-400 line-through">
                R$482,90
              </span>
            </div>
          </div>

          <CountdownTimer />

          <div className="space-y-1">
            <p className="font-baloo text-sm text-gray-500">
              Você leva tudo isso hoje por apenas:
            </p>
            <p className="font-passion text-3xl font-bold text-brand-purple sm:text-4xl md:text-5xl">
              {pricing.discountedPrice}
            </p>
            <p className="font-baloo text-sm text-gray-500">
              ou {pricing.installment} sem juros
            </p>
          </div>

          <Badge className="bg-brand-gold px-4 py-1 text-base font-bold text-white hover:bg-brand-gold/90">
            {pricing.discountPercent}% OFF — Economia de R$455,00
          </Badge>

          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-gradient-to-r from-brand-purple to-brand-magenta py-4 font-passion text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(126,97,204,0.5)]"
          >
            {ctaText}
          </a>

          <p className="font-baloo text-xs text-gray-400">
            Garantia de 7 dias — Acesso imediato — Pagamento seguro
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
