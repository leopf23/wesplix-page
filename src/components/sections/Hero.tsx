"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, TrendingUp, Layers } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-52 pb-28 md:pb-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
      <div
        className="-z-10 absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="-top-40 left-1/2 absolute blur-[140px] rounded-full w-225 h-140 -translate-x-1/2 bg-accent-violet/20" />

      <div className="relative mx-auto px-6 md:px-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.04] px-4 py-1.5 border border-border-strong rounded-full text-muted text-xs">
            Soluciones digitales &amp; creatividad, nivel 2026
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-semibold text-[13vw] sm:text-[64px] md:text-[86px] lg:text-[75px] text-center leading-[0.98] tracking-[-0.03em]"
        >
          Construimos el software
          <br />
          y la marca de tu{" "}
          <span className="text-gradient">próximo negocio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-xl text-muted md:text-[15px] text-base text-center"
        >
          Desarrollo de software, sitios web, branding y gestión de redes
          sociales en un solo equipo. Diseño y tecnología pensados para
          crecer contigo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10"
        >
          <MagneticButton
            href="#contacto"
            className="bg-foreground hover:brightness-95 text-background"
          >
            Iniciar un proyecto
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton
            href="#software"
            className="hover:bg-white/[0.05] border border-border-strong text-foreground"
          >
            Ver software
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
          <div className="top-0 left-1/2 absolute bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] border border-border-strong rounded-2xl w-[90%] sm:w-[640px] md:w-[760px] -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-4 py-3 border-border border-b">
              <span className="bg-white/15 rounded-full w-2.5 h-2.5" />
              <span className="bg-white/15 rounded-full w-2.5 h-2.5" />
              <span className="bg-white/15 rounded-full w-2.5 h-2.5" />
              <div className="flex-1 bg-white/[0.05] ml-4 rounded-full max-w-[220px] h-5" />
            </div>
            <div className="gap-4 grid grid-cols-3 p-6">
              <div className="space-y-3 col-span-2">
                <div className="bg-white/[0.08] rounded w-2/3 h-4" />
                <div className="bg-white/[0.04] rounded w-full h-3" />
                <div className="bg-white/[0.04] rounded w-5/6 h-3" />
                <div className="bg-white/[0.03] mt-4 border border-border rounded-xl h-28" />
              </div>
              <div className="space-y-3">
                <div
                  className="border border-border-strong rounded-xl h-24"
                  style={{ background: "var(--gradient-primary)", opacity: 0.85 }}
                />
                <div className="bg-white/[0.05] rounded w-full h-3" />
                <div className="bg-white/[0.05] rounded w-4/5 h-3" />
              </div>
            </div>
          </div>

          {/* floating stat card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="top-16 md:top-24 left-0 sm:left-2 absolute shadow-2xl p-4 border border-border-strong rounded-2xl w-44 glass"
          >
            <div className="flex items-center gap-2 text-muted text-xs">
              <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
              Conversión
            </div>
            <div className="mt-2 font-semibold text-2xl">+38%</div>
          </motion.div>

          {/* floating badge card */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="top-8 md:top-6 right-0 sm:right-2 absolute shadow-2xl p-4 border border-border-strong rounded-2xl w-48 glass"
          >
            <div className="flex items-center gap-2 text-muted text-xs">
              <Layers className="w-3.5 h-3.5 text-accent-violet" />
              Sistema de diseño
            </div>
            <div className="flex gap-1.5 mt-3">
              <span className="rounded-md w-6 h-6 bg-accent-violet/70" />
              <span className="rounded-md w-6 h-6 bg-accent-cyan/60" />
              <span className="rounded-md w-6 h-6 bg-accent-orange/60" />
              <span className="bg-white/10 rounded-md w-6 h-6" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden sm:block right-4 sm:right-10 bottom-0 md:bottom-6 absolute shadow-2xl p-4 border border-border-strong rounded-2xl w-40 glass"
          >
            <div className="text-muted text-xs">Lanzamiento</div>
            <div className="bg-white/[0.08] mt-2 rounded-full w-full h-1.5 overflow-hidden">
              <div className="w-[92%] h-full" style={{ background: "var(--gradient-primary)" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
