// File purpose: Homepage final site-visit call to action.
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="section-shell relative text-center">
        <ScrollReveal>
          <p className="eyebrow mb-5">See it for yourself</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-6xl">
            Walk through a Yuva home before you decide.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
            Book a guided site visit to any ongoing or completed Yuva Group development. Our
            sales team will walk you through the property, the floor plans, and the
            neighbourhood.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/schedule-visit"
              className="smart-action group inline-flex items-center gap-2 rounded-md px-7 py-4 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)]"
            >
              Schedule a Site Visit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="smart-action inline-flex items-center gap-2 rounded-md px-7 py-4 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.18)]"
            >
              Enquire Now
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
