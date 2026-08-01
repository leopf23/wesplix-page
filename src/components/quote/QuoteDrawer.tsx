"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Mail, User, X } from "lucide-react";
import { services } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

type QuoteDrawerContextValue = {
  openDrawer: () => void;
};

const QuoteDrawerContext = createContext<QuoteDrawerContextValue | null>(null);

export function useQuoteDrawer() {
  const ctx = useContext(QuoteDrawerContext);
  if (!ctx) {
    throw new Error("useQuoteDrawer must be used within a QuoteDrawerProvider");
  }
  return ctx;
}

export function QuoteDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteDrawerContext.Provider value={{ openDrawer }}>
      {children}
      <QuoteDrawer isOpen={isOpen} onClose={closeDrawer} />
    </QuoteDrawerContext.Provider>
  );
}

const steps = [
  { id: 1, label: "Contacto" },
  { id: 2, label: "Servicio" },
  { id: 3, label: "Proyecto" },
];

const quoteServices = [
  ...services.map((s) => ({ id: s.id, title: s.title })),
  { id: "other", title: "Otro" },
];

const stepVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -24 : 24 }),
};

function QuoteDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function resetAndClose() {
    onClose();
    window.setTimeout(() => {
      setStep(1);
      setDirection(1);
      setSent(false);
      setName("");
      setEmail("");
      setService(null);
      setMessage("");
    }, 400);
  }

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }

  function submitQuote() {
    setSent(true);
  }

  const step1Valid = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email);
  const step2Valid = Boolean(service);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={resetAndClose}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cotiza tu proyecto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full flex-col border-l border-border-strong bg-surface sm:max-w-md md:max-w-lg"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-6 md:px-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
                  <span
                    className="h-3 w-3 rounded-[3px]"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </span>
                <span className="text-sm font-semibold tracking-tight">
                  Cotiza tu proyecto
                </span>
              </div>
              <button
                onClick={resetAndClose}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {!sent && (
              <div className="px-6 pt-6 md:px-8">
                <div className="flex items-center">
                  {steps.map((s, i) => (
                    <div
                      key={s.id}
                      className="flex flex-1 items-center last:flex-none"
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-mono transition-colors",
                            step > s.id
                              ? "border-transparent text-white"
                              : step === s.id
                                ? "border-accent-violet text-accent-violet"
                                : "border-border text-muted"
                          )}
                          style={
                            step > s.id
                              ? { background: "var(--gradient-primary)" }
                              : undefined
                          }
                        >
                          {step > s.id ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            s.id
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-[11px] whitespace-nowrap",
                            step >= s.id ? "text-foreground/80" : "text-muted"
                          )}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="relative mx-2 mb-4 h-px flex-1 overflow-hidden bg-border">
                          <motion.div
                            className="absolute inset-y-0 left-0 h-full"
                            style={{ background: "var(--gradient-primary)" }}
                            initial={false}
                            animate={{ width: step > s.id ? "100%" : "0%" }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="relative flex-1 overflow-y-auto px-6 py-8 md:px-8">
              <AnimatePresence mode="wait" custom={direction}>
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-full flex-col items-center justify-center py-16 text-center"
                  >
                    <span
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Check className="h-7 w-7 text-white" />
                    </span>
                    <h3 className="mb-3 text-2xl font-semibold">
                      ¡Tu cotización fue enviada!
                    </h3>
                    <p className="mb-8 max-w-xs text-sm text-muted">
                      Ya estamos revisando los detalles de tu proyecto.
                      Nuestro equipo te contactará a{" "}
                      <span className="text-foreground/90">{email}</span> en
                      menos de 24 horas hábiles.
                    </p>
                    <MagneticButton
                      onClick={resetAndClose}
                      className="bg-foreground text-background hover:brightness-95"
                    >
                      Listo
                    </MagneticButton>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="mb-1 text-xl font-medium">
                      Cuéntanos quién eres
                    </h3>
                    <p className="mb-8 text-sm text-muted">
                      Así podemos ponernos en contacto contigo.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-xs text-muted">
                          Nombre completo
                        </label>
                        <div className="relative">
                          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                          <input
                            autoFocus
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                            className="w-full rounded-xl border border-border bg-white/[0.02] py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent-violet"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs text-muted">
                          Correo electrónico
                        </label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@empresa.com"
                            className="w-full rounded-xl border border-border bg-white/[0.02] py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent-violet"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="mb-1 text-xl font-medium">
                      ¿Qué servicio te interesa?
                    </h3>
                    <p className="mb-8 text-sm text-muted">
                      Selecciona el que mejor se ajuste a tu proyecto.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {quoteServices.map((s, i) => {
                        const selected = service === s.id;
                        return (
                          <motion.button
                            key={s.id}
                            type="button"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                            onClick={() => setService(s.id)}
                            className={cn(
                              "relative rounded-2xl border p-4 text-left text-sm transition-colors",
                              selected
                                ? "border-accent-violet bg-accent-violet/10"
                                : "border-border bg-background hover:border-border-strong"
                            )}
                          >
                            {selected && (
                              <span
                                className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full"
                                style={{ background: "var(--gradient-primary)" }}
                              >
                                <Check className="h-3 w-3 text-white" />
                              </span>
                            )}
                            <span className="font-medium">{s.title}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="mb-1 text-xl font-medium">
                      Cuéntanos sobre tu proyecto
                    </h3>
                    <p className="mb-8 text-sm text-muted">
                      Cuantos más detalles nos des, más precisa será tu
                      cotización.
                    </p>
                    <textarea
                      autoFocus
                      rows={8}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Estamos buscando..."
                      className="w-full resize-none rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-violet"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!sent && (
              <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-6 md:px-8">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 1}
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowLeft className="h-4 w-4" /> Atrás
                </button>
                {step < 3 ? (
                  <MagneticButton
                    onClick={goNext}
                    disabled={step === 1 ? !step1Valid : !step2Valid}
                    className="bg-foreground text-background hover:brightness-95"
                  >
                    Siguiente
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    onClick={submitQuote}
                    className="bg-foreground text-background hover:brightness-95"
                  >
                    Enviar cotización
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
