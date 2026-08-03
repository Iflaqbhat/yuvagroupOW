// File purpose: Accent rule placed under a section heading — draws left → right, filling the
// full width of the heading's container, once it scrolls into view. Part of the site's design
// language (used under the first content-section heading of each page).
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedUnderline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn('h-px w-full origin-left bg-accent', className)}
      aria-hidden
    />
  );
}
