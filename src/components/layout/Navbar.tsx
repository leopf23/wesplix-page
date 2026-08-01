"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Software", href: "#software" },
  { label: "Nosotros", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="top-0 z-50 fixed inset-x-0">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled ? "mt-3 px-4" : "mt-0 px-0"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass rounded-full border border-border px-5 py-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "px-6 md:px-10 py-6"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-blanco.svg"
              alt="Wesplix Media"
              width={85.5}
              height={64}
              className="w-auto h-12"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 bg-foreground py-2 pr-3.5 pl-4 rounded-full font-medium text-background text-sm hover:scale-[1.03] transition-transform"
            >
              Iniciar proyecto
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="md:hidden -mr-2 p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 p-5 border border-border rounded-2xl glass"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-foreground/90 hover:text-white text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center items-center gap-1.5 bg-foreground mt-3 px-4 py-2.5 rounded-full font-medium text-background text-sm"
              >
                Iniciar proyecto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
