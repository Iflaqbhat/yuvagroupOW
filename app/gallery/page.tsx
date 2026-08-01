import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Gallery — Yuva Group',
  description:
    'A visual gallery of Yuva Group residential projects across south Bengaluru — exteriors, interiors, amenities, and landscaped spaces.',
};

export default function GalleryPage() {
  const allImages = projects.flatMap((p) =>
    p.gallery.map((g) => ({ ...g, project: p.name }))
  );

  return (
    <>
      <PageHero
        eyebrow="Visual archive"
        title="Project gallery."
        description="A selection of images from Yuva Group developments — exteriors, interiors, amenities, and landscaped spaces across south Bengaluru."
      />
      <section className="section-shell py-16 md:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {allImages.map((img, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.05}>
              <figure className="group relative overflow-hidden rounded-sm border border-foreground/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {img.project}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
