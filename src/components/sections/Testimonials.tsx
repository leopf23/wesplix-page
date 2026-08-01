"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent-orange mb-4">
            Testimonios
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl mb-16">
            Lo que dicen quienes ya trabajaron con nosotros
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between"
            >
              <Quote className="h-6 w-6 text-accent-violet mb-6" />
              <p className="text-[15px] leading-relaxed text-foreground/90 mb-8">
                “{t.quote}”
              </p>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
