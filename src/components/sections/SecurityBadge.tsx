import { securityBadge } from "@/data/images";

export function SecurityBadge() {
  return (
    <section className="flex justify-center px-4 py-4 sm:py-6">
      <img
        src={securityBadge}
        alt="Compra segura"
        loading="lazy"
        className="h-auto w-40 rounded-lg border border-brand-purple/10 p-2 sm:w-48 md:w-56"
      />
    </section>
  );
}
