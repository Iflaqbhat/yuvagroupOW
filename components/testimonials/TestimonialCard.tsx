// File purpose: Testimonial card with a premium hover — lifts and deepens the shadow,
// and a soft neutral sheen follows the cursor (no accent/brownish tints).
// Shared by the homepage and the About page.
'use client';

import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

export function TestimonialCard({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);
  const glowBg = useMotionTemplate`radial-gradient(circle 260px at ${glowX} ${glowY}, hsl(var(--foreground) / 0.05), transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <figure
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-foreground/10 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-foreground/20 hover:shadow-[0_24px_50px_-20px_hsl(var(--foreground)/0.25)]"
    >
      {/* Cursor-following neutral sheen, visible only on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: glowBg }}
      />
      <Quote className="relative h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
      <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        {t.quote}
      </blockquote>
      <div className="relative mt-6 flex items-center justify-between border-t border-foreground/10 pt-4">
        <figcaption className="flex items-center gap-3">
          {t.avatar && (
            // Avatar photo as used on the original yuvagroup.in testimonials page
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.avatar}
              alt={`Photo of ${t.name}`}
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-full border border-foreground/10 object-cover"
            />
          )}
          <div>
            <p className="text-sm font-medium">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.project} · {t.location}</p>
          </div>
        </figcaption>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>
    </figure>
  );
}
