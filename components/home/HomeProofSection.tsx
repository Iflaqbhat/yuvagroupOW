// File purpose: Homepage proof copy sourced from the original site narrative.
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function HomeProofSection() {
  return (
    <section className="border-b border-foreground/10 py-16 md:py-24">
      <div className="section-shell grid gap-12 md:grid-cols-12">
        <ScrollReveal className="md:col-span-5">
          <p className="eyebrow mb-4">Builders in Bangalore</p>
          <h2 className="font-display text-3xl leading-[1.08] md:text-5xl">
            Residential projects with location, quality, and long-term value.
          </h2>
        </ScrollReveal>
        <div className="space-y-6 md:col-span-6 md:col-start-7">
          <ScrollReveal delay={0.08}>
            <div className="border-l border-foreground/15 pl-6">
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                A Bengaluru developer measured by completed homes.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Yuva Group, incorporated as Yuva Structures Pvt. Ltd., builds apartments, villas,
                plotted developments, and mixed-use communities across south Bengaluru&apos;s
                growth corridor.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="border-l border-foreground/15 pl-6">
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                Practical homes near Electronic City and Hosur Road.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                The portfolio focuses on usable layouts, family amenities, and access to schools,
                hospitals, daily conveniences, IT hubs, Attibele, Chandapura, and Anekal Road.
              </p>
              <Link
                href="/about"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Read our story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
