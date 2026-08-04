// File purpose: Compact related-project links with no extra tags.
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function RelatedProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Keep exploring" title="Related projects." />
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex min-h-64 flex-col rounded-md border border-accent/15 bg-background p-6 shadow-[0_14px_35px_hsl(var(--foreground)/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.08)]"
            >
              <p className="flex items-start gap-2 text-sm font-semibold leading-snug text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {project.location}
              </p>
              <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                View project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
