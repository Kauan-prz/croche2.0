import { WHATSAPP_URL } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-magenta px-4 py-10 pb-24 text-white sm:pb-10 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-1 font-passion text-xl font-bold">Crochê Pro</p>
        <p className="mb-1 font-baloo text-xs text-white/50">por Juliana</p>
        <p className="mb-4 font-baloo text-sm text-white/70">
          O método que já formou +500 alunas em crochê profissional
        </p>
        <div className="mb-4 flex justify-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-baloo text-sm text-white/80 transition-colors hover:text-brand-gold"
          >
            Suporte
          </a>
          <a
            href="#faq"
            className="font-baloo text-sm text-white/80 transition-colors hover:text-brand-gold"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            FAQ
          </a>
          <a
            href="#inicio"
            className="font-baloo text-sm text-white/80 transition-colors hover:text-brand-gold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Voltar ao topo
          </a>
        </div>
        <div className="border-t border-white/20 pt-4">
          <p className="font-baloo text-xs text-white/50">
            {year} Crochê Pro. Todos os direitos reservados.
          </p>
          <p className="mt-1 font-baloo text-xs text-white/40">
            Este site não faz parte do Facebook, Google ou qualquer outro serviço de terceiros.
          </p>
        </div>
      </div>
    </footer>
  );
}
