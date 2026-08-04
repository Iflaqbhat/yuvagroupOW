// File purpose: Homepage amenity image preview grid.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Amenity } from '@/data/projects';

export function AmenitiesPreviewSection({
  amenityPhotos,
}: {
  amenityPhotos: Array<Amenity & { photo: string }>;
}) {
  return (
    <section className="border-b border-foreground/10 bg-accent/5 py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What you get"
            title="Amenities designed for daily life, not a brochure."
            description="Shared spaces across Yuva communities are built to be used — sized for real gathering, placed where people actually walk, and maintained after handover."
            align="center"
          />
          <div className="mt-6 flex justify-center">
            <Link
              href="/amenities"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Explore all amenities
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>
        <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amenityPhotos.slice(0, 8).map((a) => (
            <StaggerItem key={a.name}>
              <figure className="group relative overflow-hidden rounded-sm border border-foreground/10 bg-card">
                <div className="relative aspect-square">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-2.5 pt-10">
                  <span className="block text-sm font-bold uppercase tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] sm:text-base">
                    {a.name}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
