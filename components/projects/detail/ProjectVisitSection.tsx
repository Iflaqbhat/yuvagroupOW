// File purpose: Project-specific schedule visit/contact form section.
import { Phone } from 'lucide-react';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { contactInfo } from '@/data/navigation';
import type { Project } from '@/types';

export function ProjectVisitSection({
  project,
  title,
  description,
}: {
  project: Project;
  title: string;
  description: string;
}) {
  return (
    <section id="visit" className="border-b border-foreground/10 bg-accent/5 py-16 md:py-28">
      <div className="section-shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <ScrollReveal>
            <p className="eyebrow mb-4">{project.status === 'completed' ? 'Project enquiry' : 'Book a visit'}</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-6 rounded-md border border-accent/15 bg-background p-5 text-sm shadow-[0_14px_35px_hsl(var(--foreground)/0.04)]">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                {contactInfo.phone}
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="md:col-span-7">
          <ScrollReveal delay={0.1}>
            <SiteVisitForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
