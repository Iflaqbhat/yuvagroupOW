import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { allAmenities } from '@/data/projects';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import * as Icons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities — Yuva Group',
  description:
    'Amenities across Yuva Group residential communities in Bengaluru — clubhouses, pools, gyms, landscaped gardens, and shared spaces built for daily use.',
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared spaces"
        title="Amenities built for daily life."
        description="Shared spaces across Yuva communities are designed to be used — sized for real gathering, placed where people walk, and maintained after handover."
      />
      <section className="section-shell py-16 md:py-24">
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allAmenities.map((a) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[a.icon] || Icons.Circle;
            return (
              <StaggerItem key={a.name}>
                <div className="group flex h-full items-start gap-4 border border-foreground/10 p-6 transition-colors hover:border-accent/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-foreground/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{a.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Standard or available across most Yuva Group communities.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </>
  );
}
