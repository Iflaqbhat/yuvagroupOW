// File purpose: Count-up stat strip with one shared IntersectionObserver, so every
// counter starts and finishes on the same frame. Rendering is left to the page via
// className overrides (used on the About page achievement band).
'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

export type Stat = { label: string; value: number; suffix: string };

export function AnimatedStats({
  stats,
  className,
  valueClassName = 'font-display text-5xl tracking-tight md:text-6xl',
  labelClassName = 'mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground',
}: {
  stats: Stat[];
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className={className}>
      {stats.map((s) => (
        <div key={s.label}>
          <p className={valueClassName}>
            <AnimatedCounter value={s.value} active={inView} />
            {s.suffix}
          </p>
          <p className={labelClassName}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
