// File purpose: Homepage animated company stats section.
'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { companyStats } from '@/data/projects';

export function HomeStats() {
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section ref={statsRef} className="border-b border-foreground/10 py-14 md:py-16">
      <div className="section-shell">
        <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {companyStats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl">
                  <AnimatedCounter value={parseInt(s.value, 10)} active={statsInView} />
                  <span className="text-accent">{s.suffix}</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
