// File purpose: Amenities page: photo gallery of community amenities with readable labels, plus an "also included" list.
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { allAmenities, type Amenity } from '@/data/projects';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import * as Icons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities — Yuva Group',
  description:
    'Amenities across Yuva Group residential communities in Bengaluru — clubhouses, pools, gyms, landscaped gardens, and shared spaces built for daily use.',
};

export default function AmenitiesPage() {
  const withPhoto: Array<Amenity & { photo: string }> = allAmenities.filter(
    (a): a is Amenity & { photo: string } => Boolean(a.photo),
  );
  const iconOnly = allAmenities.filter((a) => !a.photo);

  return (
    <>
      <PageHero
        eyebrow="Shared spaces"
        title="Amenities built for daily life."
        description="Shared spaces across Yuva communities are designed to be used — sized for real gathering, placed where people walk, and maintained after handover."
      />
      <section className="section-shell py-16 md:py-24">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withPhoto.map((a) => (
            <StaggerItem key={a.name}>
              <figure className="group relative overflow-hidden rounded-sm border border-foreground/10 bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-3 pt-14">
                  <h3 className="font-display text-xl font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {a.name}
                  </h3>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {iconOnly.length > 0 && (
          <ScrollReveal className="mt-12 border border-foreground/10 p-6 md:p-8">
            <p className="eyebrow mb-4">Also included</p>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {iconOnly.map((a) => {
                const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[a.icon] || Icons.Circle;
                return (
                  <li key={a.name} className="flex items-center gap-3 text-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-foreground/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    {a.name}
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        )}
      </section>
    </>
  );
}
