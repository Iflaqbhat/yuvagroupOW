// File purpose: Project map and official nearby references.
import { MapPinned } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function ProjectLocationSection({
  project,
  mapSrc,
  title,
  description,
}: {
  project: Project;
  mapSrc?: string;
  title: string;
  description: string;
}) {
  return (
    <section id="location" className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Location & connectivity"
            title={title}
            description={description}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            {mapSrc ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-foreground/10 shadow-[0_18px_45px_hsl(var(--foreground)/0.05)]">
                <iframe
                  title={`Map showing ${project.name} at ${project.location}`}
                  src={mapSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="grid min-h-[320px] content-between rounded-md border border-accent/15 bg-background p-7 shadow-[0_18px_45px_hsl(var(--foreground)/0.06)] md:p-8">
                <div>
                  <span className="smart-gradient flex h-12 w-12 items-center justify-center rounded-md text-accent-foreground">
                    <MapPinned className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight">
                    Location reference available.
                  </h3>
                  <p className="mt-4 max-w-xl text-base font-medium leading-7 text-muted-foreground">
                    A public map pin is not published for this completed project, so this page uses only the official location references available in the portfolio and testimonial copy.
                  </p>
                </div>
                <div className="mt-10 border-t border-foreground/10 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                    Listed location
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug">{project.location}</p>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-extrabold">Nearby references</h3>
            {project.connectivity.length ? (
              <ul className="mt-5 space-y-3">
                {project.connectivity.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-3 text-sm">
                    <span className="leading-snug text-muted-foreground">{item.label}</span>
                    <span className="shrink-0 font-bold">{item.distance}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 rounded-md border border-accent/15 bg-accent/5 px-5 py-4 text-sm font-medium leading-relaxed text-muted-foreground">
                Nearby-distance bullets are not published for this project on the official site, so the page avoids estimated travel claims.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
