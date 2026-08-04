// File purpose: Local project gallery images with captions.
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

export function ProjectGallerySection({ project }: { project: Project }) {
  return (
    <section id="gallery" className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gallery"
            title={project.status === 'completed' ? 'Official project media.' : 'Project renders and plans.'}
            description="Images shown here are pulled into the redesign as local project assets, with unverified stock imagery removed."
          />
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((image, index) => (
            <StaggerItem key={image.src} className={cn(index === 0 && project.gallery.length > 2 && 'sm:col-span-2')}>
              <figure className="group relative overflow-hidden rounded-md border border-foreground/10 bg-background shadow-[0_18px_45px_hsl(var(--foreground)/0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={cn(
                    'w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105',
                    index === 0 && project.gallery.length > 2 ? 'aspect-[16/9]' : 'aspect-[4/3]',
                  )}
                />
                {image.caption && (
                  <figcaption className="absolute bottom-0 left-0 bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
