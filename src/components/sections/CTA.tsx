"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto px-6 md:px-10 max-w-6xl">
        <Reveal>
          <div className="relative px-8 md:px-20 py-16 md:py-24 border border-border-strong rounded-[2.5rem] overflow-hidden text-center">
            <div
              className="-z-10 absolute inset-0 opacity-90"
              style={{ background: "var(--gradient-radial)" }}
            />
            <div className="-z-10 absolute inset-0 bg-grid opacity-40" />
            <h2 className="mx-auto max-w-2xl font-semibold text-4xl md:text-5xl tracking-tight">
              Hagamos que tu marca se vea{" "}
              <span className="text-gradient">imposible de ignorar</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted">
              Cuéntanos sobre tu proyecto y conversemos sin costo sobre cómo
              podemos ayudarte a construirlo.
            </p>
            <div className="flex justify-center mt-10">
              <MagneticButton
                href="#contacto"
                className="bg-foreground hover:brightness-95 text-background"
              >
                Agendar una llamada
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
