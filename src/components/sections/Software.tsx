"use client";

import { ArrowUpRight } from "lucide-react";
import { software } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Software() {
  return (
    <section id="software" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-orange mb-4">
              Nuestro software
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl">
              Productos propios, construidos por nosotros
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted text-sm md:text-base">
              Además de construir para nuestros clientes, desarrollamos y
              mantenemos nuestras propias herramientas de software.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {software.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <motion.a
                href="#contacto"
                whileHover="hover"
                className="group relative block rounded-3xl border border-border overflow-hidden bg-surface h-full"
              >
                <div
                  className={`relative h-56 bg-gradient-to-br ${product.color} flex items-end p-6`}
                >
                  <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                  <motion.div
                    variants={{ hover: { scale: 1.03 } }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full flex items-end justify-between"
                  >
                    <span className="text-6xl font-semibold text-white/10">
                      {product.id}
                    </span>
                    <motion.span
                      variants={{ hover: { scale: 1.1, rotate: 45 } }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 backdrop-blur"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-muted mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
