"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "motion/react";

export function Counter({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
