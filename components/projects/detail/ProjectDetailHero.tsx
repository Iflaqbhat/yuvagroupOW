// File purpose: Full-bleed project detail hero with verified stage and buyer facts.
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import type { Project } from '@/types';
import type { DetailFact } from '@/components/projects/detail/project-detail-helpers';

export function ProjectDetailHero({
  project,
  status,
  category,
  heroFacts,
  hasGallery,
}: {
  project: Project;
  status: string;
  category: string;
  heroFacts: DetailFact[];
  hasGallery: boolean;
}) {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-background pt-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.heroImage}
        alt={project.heroAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/88 via-foreground/48 to-foreground/12" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/60 to-transparent" />

      <div className="section-shell relative z-10 py-14 md:py-20">
        <ScrollReveal>
          <Link
            href="/projects"
            className="text-xs font-bold uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-background"
          >
            ← All Projects
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {[status, category].map((label) => (
              <span
                key={label}
                className="rounded-md border border-background/20 bg-background/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground shadow-[0_10px_28px_-18px_hsl(var(--foreground)/0.75)] backdrop-blur"
              >
                {label}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-5xl font-display text-4xl font-extrabold leading-[1.05] text-background md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 flex max-w-3xl items-start gap-2 text-base font-extrabold leading-7 text-background drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:text-lg">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-background" />
            {project.location}
          </p>

          {heroFacts.length > 0 && (
            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-background/90 bg-background px-5 py-4 text-foreground shadow-[0_18px_50px_-32px_hsl(var(--foreground)/0.75)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-snug md:text-base">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#visit"
              className="smart-action inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_35px_hsl(var(--foreground)/0.18)]"
            >
              Schedule a Visit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {hasGallery && (
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background/45 px-6 py-3.5 text-sm font-bold text-background transition-all duration-300 hover:-translate-y-0.5 hover:border-background hover:bg-background/10"
              >
                View Gallery
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
