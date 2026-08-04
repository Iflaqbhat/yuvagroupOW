// File purpose: Homepage moving project-gallery strip.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { GalleryImage } from '@/types';

type GalleryMarqueeImage = GalleryImage & { project: string };

export function MovingGallerySection({ galleryImages }: { galleryImages: GalleryMarqueeImage[] }) {
  return (
    <section className="overflow-hidden border-t border-foreground/10 bg-accent/5 py-10 md:py-12">
      <div className="section-shell mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-3">Gallery</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            A moving look at Yuva spaces.
          </h2>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          Open gallery
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <div className="gallery-marquee" aria-label="Moving Yuva Group project gallery">
        <div className="gallery-marquee-track">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="relative mx-2 h-44 w-64 shrink-0 overflow-hidden rounded-sm border border-foreground/10 bg-card md:h-56 md:w-80"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">
                {image.project}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
