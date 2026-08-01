"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-orange mb-4">
              Portafolio
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl">
              Casos de éxito recientes
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <motion.a
                href="#contacto"
                whileHover="hover"
                className="group relative block rounded-3xl border border-border overflow-hidden bg-surface"
              >
                <div
                  className={`relative h-64 md:h-80 bg-gradient-to-br ${project.color} flex items-end p-6`}
                >
                  <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                  <motion.div
                    variants={{ hover: { scale: 1.03 } }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full flex items-end justify-between"
                  >
                    <span className="text-6xl font-semibold text-white/10">
                      {project.id}
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
                    {project.category}
                  </p>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
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
