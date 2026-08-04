// File purpose: Client-side project FAQ accordion.
'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function ProjectFaqSection({ project }: { project: Project }) {
  return (
    <section id="faqs" className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell max-w-3xl">
        <ScrollReveal>
          <SectionHeading eyebrow="FAQs" title="Questions about this project." />
        </ScrollReveal>
        <div className="mt-10 overflow-hidden rounded-md border border-foreground/10 bg-background shadow-[0_18px_45px_hsl(var(--foreground)/0.05)]">
          <Accordion.Root type="single" collapsible>
            {project.faqs.map((faq, index) => (
              <Accordion.Item key={faq.question} value={`item-${index}`} className="border-b border-foreground/10 last:border-b-0">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-accent/5 md:px-6">
                    <span className="font-display text-lg font-extrabold leading-snug text-foreground">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-5 pb-5 text-sm font-medium leading-relaxed text-muted-foreground md:px-6">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
