"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  "Branding",
  "Diseño UI/UX",
  "Desarrollo Web",
  "Desarrollo de Software",
  "Marketing Digital",
  "Otro",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="relative py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-violet mb-4">
              Contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Hablemos de tu próximo proyecto
            </h2>
            <p className="text-muted leading-relaxed max-w-md mb-10">
              Completa el formulario y te responderemos en menos de 24
              horas hábiles con los próximos pasos.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:hola@wesplixmedia.com"
                className="flex items-center gap-3 text-sm text-foreground/90 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Mail className="h-4 w-4" />
                </span>
                hola@wesplixmedia.com
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Phone className="h-4 w-4" />
                </span>
                +1 (809) 000-0000
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <MapPin className="h-4 w-4" />
                </span>
                República Dominicana · Remoto
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-violet/15 mb-6">
                    <Check className="h-6 w-6 text-accent-violet" />
                  </span>
                  <h3 className="text-xl font-medium mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted text-sm max-w-xs">
                    Gracias por escribirnos. Nuestro equipo se pondrá en
                    contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-muted mb-2">
                        Nombre completo
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-violet"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2">
                        Correo electrónico
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="tu@empresa.com"
                        className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-violet"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-muted mb-2">
                      Servicio de interés
                    </label>
                    <select className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-violet">
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-surface">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-muted mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Estamos buscando..."
                      className="w-full resize-none rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-violet"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.01]"
                  >
                    Enviar mensaje
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
