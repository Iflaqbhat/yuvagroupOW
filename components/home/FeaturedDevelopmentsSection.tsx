// File purpose: Homepage featured project cards.
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FeaturedProjectCard } from '@/components/projects/FeaturedProjectCard';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { getFeaturedProjects } from '@/data/projects';

export function FeaturedDevelopmentsSection() {
  return (
    <section className="border-b border-foreground/10 bg-background py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading title="Featured developments" />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {getFeaturedProjects().map((p, i) => (
            <FeaturedProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-end">
          <Link
            href="/projects"
            className="smart-gradient group relative inline-flex items-center gap-3 overflow-hidden rounded-md px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.22)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">View all projects</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
