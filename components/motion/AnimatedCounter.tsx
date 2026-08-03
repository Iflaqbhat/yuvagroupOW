// File purpose: Premium count-up stat number. Animates 0 → target once, with
// ease-out timing, when the parent section scrolls into view. Updates the DOM
// node directly (no per-frame React renders), so it stays smooth and never
// jitters or flickers. Pass `active` from one shared observer so every counter
// starts and finishes on the same frame.
'use client';

import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Shared ease-out curve so all counters behave identically — a gentle
// Apple-style deceleration that glides rather than snaps to the target.
export const COUNTER_EASE = [0.16, 1, 0.3, 1] as const;
export const COUNTER_DURATION = 2.6;

export function AnimatedCounter({
  value,
  active,
  duration = COUNTER_DURATION,
  className,
}: {
  value: number;
  active: boolean;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    const controls = animate(0, value, {
      duration,
      ease: COUNTER_EASE,
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [active, value, duration]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
