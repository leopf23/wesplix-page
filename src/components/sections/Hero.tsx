"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, TrendingUp, Layers } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full bg-accent-violet/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-4 py-1.5 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
            Soluciones digitales &amp; creatividad, nivel 2026
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center font-semibold tracking-[-0.03em] text-[13vw] leading-[0.98] sm:text-[64px] md:text-[86px] lg:text-[96px]"
        >
          Construimos marcas
          <br />
          que se sienten{" "}
          <span className="text-gradient">inevitables</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-xl text-center text-base md:text-lg text-muted"
        >
          Wesplix Media diseña y desarrolla branding, productos digitales y
          campañas que transmiten innovación, creatividad y confianza —
          desde la primera idea hasta el lanzamiento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contacto"
            className="bg-foreground text-background hover:brightness-95"
          >
            Iniciar un proyecto
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            href="#portafolio"
            className="border border-border-strong text-foreground hover:bg-white/[0.05]"
          >
            Ver portafolio
          </MagneticButton>
        </motion.div>

        {/* Floating mockup composition */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-24 md:mt-28 h-[360px] sm:h-[420px] md:h-[520px]"
        >
          {/* center browser mockup */}
          <div className="absolute left-1/2 top-0 w-[90%] sm:w-[640px] md:w-[760px] -translate-x-1/2 rounded-2xl border border-border-strong bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="ml-4 h-5 flex-1 max-w-[220px] rounded-full bg-white/[0.05]" />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="h-4 w-2/3 rounded bg-white/[0.08]" />
                <div className="h-3 w-full rounded bg-white/[0.04]" />
                <div className="h-3 w-5/6 rounded bg-white/[0.04]" />
                <div className="mt-4 h-28 rounded-xl bg-white/[0.03] border border-border" />
              </div>
              <div className="space-y-3">
                <div
                  className="h-24 rounded-xl border border-border-strong"
                  style={{ background: "var(--gradient-primary)", opacity: 0.85 }}
                />
                <div className="h-3 w-full rounded bg-white/[0.05]" />
                <div className="h-3 w-4/5 rounded bg-white/[0.05]" />
              </div>
            </div>
          </div>

          {/* floating stat card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 sm:left-2 top-16 md:top-24 w-44 rounded-2xl glass border border-border-strong p-4 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-xs text-muted">
              <TrendingUp className="h-3.5 w-3.5 text-accent-cyan" />
              Conversión
            </div>
            <div className="mt-2 text-2xl font-semibold">+38%</div>
          </motion.div>

          {/* floating badge card */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute right-0 sm:right-2 top-8 md:top-6 w-48 rounded-2xl glass border border-border-strong p-4 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-xs text-muted">
              <Layers className="h-3.5 w-3.5 text-accent-violet" />
              Sistema de diseño
            </div>
            <div className="mt-3 flex gap-1.5">
              <span className="h-6 w-6 rounded-md bg-accent-violet/70" />
              <span className="h-6 w-6 rounded-md bg-accent-cyan/60" />
              <span className="h-6 w-6 rounded-md bg-accent-orange/60" />
              <span className="h-6 w-6 rounded-md bg-white/10" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-4 sm:right-10 bottom-0 md:bottom-6 w-40 rounded-2xl glass border border-border-strong p-4 shadow-2xl hidden sm:block"
          >
            <div className="text-xs text-muted">Lanzamiento</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
              <div className="h-full w-[92%]" style={{ background: "var(--gradient-primary)" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
