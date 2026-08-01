"use client";

import { technologies, stats } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function TechStack() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan mb-4">
            Tecnología
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl mb-16">
            Construido con herramientas modernas y probadas
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-24">
          {technologies.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.03}>
              <span className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted hover:text-foreground hover:border-border-strong transition-colors">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-14">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
