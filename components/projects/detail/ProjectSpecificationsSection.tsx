// File purpose: Project construction specification cards.
import { Ruler } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function ProjectSpecificationsSection({ project }: { project: Project }) {
  return (
    <section id="specifications" className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow="Specifications" title="How it is built." />
        </ScrollReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {project.specifications.map((spec) => (
            <ScrollReveal key={spec.category}>
              <div className="h-full rounded-md border border-accent/15 bg-background p-6 shadow-[0_18px_45px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35">
                <div className="flex items-start gap-4">
                  <span className="smart-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-accent-foreground">
                    <Ruler className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold leading-tight">{spec.category}</h3>
                </div>
                <dl className="mt-6 space-y-5">
                  {spec.items.map((item) => (
                    <div key={item.label} className="border-b border-foreground/10 pb-5 last:border-b-0 last:pb-0">
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">{item.label}</dt>
                      <dd className="mt-2 text-[0.95rem] font-medium leading-7 text-muted-foreground">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
