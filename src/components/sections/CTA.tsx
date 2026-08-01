"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border-strong px-8 py-16 md:px-20 md:py-24 text-center">
            <div
              className="absolute inset-0 -z-10 opacity-90"
              style={{ background: "var(--gradient-radial)" }}
            />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl mx-auto">
              Hagamos que tu marca se vea{" "}
              <span className="text-gradient">imposible de ignorar</span>
            </h2>
            <p className="mt-6 text-muted max-w-lg mx-auto">
              Cuéntanos sobre tu proyecto y conversemos sin costo sobre cómo
              podemos ayudarte a construirlo.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                href="#contacto"
                className="bg-foreground text-background hover:brightness-95"
              >
                Agendar una llamada
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
