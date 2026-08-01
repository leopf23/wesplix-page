"use client";

import { Check } from "lucide-react";
import { benefits } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-violet mb-4">
              Por qué Wesplix
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Diseño y tecnología con estándares de agencia global
            </h2>
            <p className="text-muted leading-relaxed max-w-md">
              No entregamos plantillas ni soluciones genéricas. Cada
              proyecto se construye desde cero, con procesos claros y un
              equipo que entiende de diseño, negocio y tecnología por igual.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={revealItem}
                className="rounded-2xl border border-border p-6 bg-background"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-violet/15 mb-4">
                  <Check className="h-4 w-4 text-accent-violet" />
                </span>
                <h3 className="font-medium mb-1.5">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
