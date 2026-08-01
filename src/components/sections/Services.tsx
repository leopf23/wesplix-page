"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-violet mb-4">
              Servicios
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl">
              Todo lo que tu marca necesita, en un mismo lugar
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted text-sm md:text-base">
              Combinamos estrategia, diseño y tecnología para construir
              soluciones digitales completas, desde la identidad hasta el
              producto final.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-border bg-border">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={revealItem}
              className="group relative bg-background p-7 min-h-[220px] flex flex-col justify-between transition-colors hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-muted font-mono">{service.tag}</span>
                <ArrowUpRight className="h-4 w-4 text-muted opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
          <motion.a
            href="#contacto"
            variants={revealItem}
            className="group relative flex min-h-[220px] flex-col justify-between p-7 transition-colors"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex items-start justify-between">
              <span className="text-xs text-black/60 font-mono">+</span>
              <ArrowUpRight className="h-4 w-4 text-black/70 -translate-y-1 translate-x-1 transition-all group-hover:translate-y-0 group-hover:translate-x-0" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">
                ¿Buscas algo más?
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Cuéntanos qué necesitas y armamos una propuesta a tu medida.
              </p>
            </div>
          </motion.a>
        </RevealGroup>
      </div>
    </section>
  );
}
