// File purpose: Project overview copy, highlights, and official-at-a-glance facts.
import Link from 'next/link';
import { ArrowUpRight, Calendar, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import type { Project } from '@/types';
import type { DetailFact } from '@/components/projects/detail/project-detail-helpers';

export function ProjectOverviewSection({
  project,
  keyFacts,
}: {
  project: Project;
  keyFacts: DetailFact[];
}) {
  return (
    <section id="overview" className="border-b border-foreground/10 py-16 md:py-20">
      <div className="section-shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <ScrollReveal>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-balance md:text-[2.75rem]">
              {project.tagline}
            </h2>
            <p className="mt-6 max-w-3xl text-[1.05rem] font-medium leading-8 text-muted-foreground md:text-lg">
              {project.longDescription}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-md border border-accent/15 bg-background p-5 shadow-[0_14px_35px_hsl(var(--foreground)/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.07)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-base font-bold leading-snug md:text-lg">{highlight.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <div className="md:col-span-5">
          <ScrollReveal delay={0.1}>
            <aside className="rounded-md border border-accent/15 bg-background p-6 shadow-[0_24px_80px_-50px_hsl(var(--foreground)/0.45)] md:sticky md:top-36">
              <p className="eyebrow mb-5">At a glance</p>
              <dl className="grid gap-3">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-4 border-b border-foreground/10 pb-3 text-sm last:border-b-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{fact.label}</dt>
                    <dd className="text-right font-bold leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid gap-3">
                <Link
                  href="#visit"
                  className="smart-action flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.18)]"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Visit
                </Link>
              </div>
              {project.sourceUrl && (
                <div className="mt-5 rounded-md border border-accent/20 bg-accent/5 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Official details checked
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Publicly available specifications, unit mix, plans and location notes are matched to the official source where available.
                  </p>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    Open official page
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
