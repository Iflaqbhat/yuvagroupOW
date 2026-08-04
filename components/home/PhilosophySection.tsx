// File purpose: Homepage architectural philosophy cards.
'use client';

import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { philosophy } from '@/components/home/home-content';

export function PhilosophySection() {
  return (
    <section className="border-b border-foreground/10 bg-background py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our philosophy"
            title="How we build, and why it matters."
            align="center"
            size="lg"
          />
        </ScrollReveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full border border-foreground/10 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.25)]">
                <span className="flex h-12 w-12 items-center justify-center border border-foreground/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
