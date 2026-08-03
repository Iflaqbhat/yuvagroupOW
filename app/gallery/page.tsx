// File purpose: Gallery page: a visual archive of project photos.
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedUnderline } from '@/components/ui/animated-underline';

export const metadata: Metadata = {
  title: 'Gallery — Yuva Group',
  description:
    'A visual gallery of Yuva Group residential projects across south Bengaluru — exteriors, interiors, amenities, and landscaped spaces.',
};

// Temporary hero photo (Pexels). Swap to /photos/… once downloaded.
const heroImage =
  'https://images.pexels.com/photos/13752348/pexels-photo-13752348.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function GalleryPage() {
  const allImages = projects.flatMap((p) =>
    p.gallery.map((g) => ({ ...g, project: p.name }))
  );

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Visual archive"
        title="Project gallery."
        description="A selection of images from Yuva Group developments — exteriors, interiors, amenities, and landscaped spaces across south Bengaluru."
      />
      <section className="section-shell py-16 md:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The archive"
            title="Built for the everyday."
            description="Every image below comes from a real Yuva Group development — the same materials, light, and detailing you will find on a site visit."
          />
          <AnimatedUnderline className="mt-6" />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allImages.map((img, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.05}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-foreground/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
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
