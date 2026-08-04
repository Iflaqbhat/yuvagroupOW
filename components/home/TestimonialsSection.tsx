// File purpose: Homepage testimonials section.
'use client';

import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { testimonials } from '@/data/projects';

export function TestimonialsSection() {
  return (
    <section className="border-b border-foreground/10 py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="In their words"
            title="What residents tell us."
            align="center"
          />
        </ScrollReveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.project}>
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
