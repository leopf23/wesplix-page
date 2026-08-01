"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Todo lo que necesitas saber
          </h2>
        </Reveal>

        <div className="divide-y divide-border border-t border-b border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
