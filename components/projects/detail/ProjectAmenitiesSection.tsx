// File purpose: Amenity chips for individual project pages.
import { Check } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function ProjectAmenitiesSection({ project }: { project: Project }) {
  return (
    <section id="amenities" className="border-b border-foreground/10 bg-accent/5 py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow="Amenities" title="What the community offers." />
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.amenities.map((amenity) => (
            <StaggerItem key={amenity}>
              <div className="group flex min-h-24 items-start gap-4 rounded-md border border-accent/15 bg-background p-5 shadow-[0_14px_35px_hsl(var(--foreground)/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.07)]">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-bold leading-snug">{amenity}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
