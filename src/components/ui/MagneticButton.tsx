"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className="relative inline-flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn(
      "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors",
      className
    ),
  };

  if (href) {
    return (
      <motion.a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...sharedProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      type="button"
      {...sharedProps}
    >
      {content}
    </motion.button>
  );
}
