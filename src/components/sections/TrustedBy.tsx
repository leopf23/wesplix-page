const brands = [
  "Aurora Finance",
  "Nortec Retail",
  "Studio Marea",
  "Vantera Health",
  "Loop Logistics",
  "Kairos Capital",
  "Nimbus Cloud",
  "Palet Studio",
];

export function TrustedBy() {
  const row = [...brands, ...brands];
  return (
    <section className="relative border-y border-border py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-8">
          Empresas que confían en nosotros
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-16 animate-marquee">
          {row.map((brand, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl font-semibold tracking-tight text-white/25 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
