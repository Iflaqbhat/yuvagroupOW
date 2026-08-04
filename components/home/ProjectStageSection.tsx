// File purpose: Homepage project-stage selector.
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects } from '@/data/projects';

export function ProjectStageSection() {
  const stages = [
    {
      tag: 'Ongoing',
      title: 'Under construction',
      desc: 'Book early into projects still taking shape — follow the build from foundation to handover.',
      href: '/ongoing-projects',
      count: projects.filter((p) => p.status === 'ongoing').length,
    },
    {
      tag: 'Ready to Move',
      title: 'Ready now',
      desc: 'Move into finished homes available for immediate possession, with the project and neighbourhood already visible.',
      href: '/ready-to-move-projects',
      count: projects.filter((p) => p.status === 'ready-to-move').length,
    },
    {
      tag: 'Completed',
      title: 'Delivered homes',
      desc: 'Explore completed Yuva communities that are occupied, settled, and useful as proof of delivery quality.',
      href: '/completed-projects',
      count: projects.filter((p) => p.status === 'completed').length,
    },
  ];

  return (
    <section className="border-b border-foreground/10 bg-accent/5 py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Find your stage"
            title="Choose the right project stage."
            description="The original Yuva site separates projects into three buyer moments: under construction, ready to move, and completed communities."
            align="center"
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stages.map((c) => (
            <ScrollReveal key={c.href}>
              <Link
                href={c.href}
                className="group relative block h-full overflow-hidden rounded-md border border-accent/15 bg-background p-7 shadow-[0_14px_35px_hsl(var(--foreground)/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_55px_hsl(var(--foreground)/0.08)] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-md bg-accent/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                    {c.tag}
                  </span>
                  <span className="text-[0.95rem] font-medium text-muted-foreground">{c.count} projects</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight">{c.title}</h3>
                <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-muted-foreground">{c.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  Browse
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
