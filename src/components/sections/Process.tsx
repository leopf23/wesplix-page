"use client";

import { process } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="proceso" className="relative py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan mb-4">
            Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mb-20">
            Un método claro, de la idea al lanzamiento
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute left-[16px] top-4 bottom-4 w-px bg-border" />
          <div className="flex flex-col gap-12 md:gap-0">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.05}>
                <div className="relative md:grid md:grid-cols-[40px_1fr] gap-8 py-8 md:border-t md:border-border first:md:border-t-0">
                  <div className="relative flex md:block items-center gap-4 mb-3 md:mb-0">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border-strong text-xs font-mono text-muted">
                      {item.step}
                    </span>
                  </div>
                  <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
                    <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-0">
                      {item.title}
                    </h3>
                    <p className="text-muted max-w-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
