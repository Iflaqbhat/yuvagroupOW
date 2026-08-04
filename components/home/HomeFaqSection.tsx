// File purpose: Homepage FAQ accordion.
'use client';

import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { homeFaqs } from '@/components/home/home-content';

export function HomeFaqSection() {
  return (
    <section className="border-b border-foreground/10 py-16 md:py-28">
      <div className="section-shell grid gap-12 md:grid-cols-12">
        <ScrollReveal className="md:col-span-5">
          <p className="eyebrow mb-4">Frequently asked questions</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] text-balance md:text-5xl">
            Clear answers before you book a visit.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            A focused version of the questions buyers ask most often about Yuva Group homes, project locations, amenities, and site visits.
          </p>
          <Link
            href="/contact"
            className="smart-action group mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)]"
          >
            Ask a question
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-7" delay={0.1}>
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-0"
            className="overflow-hidden border border-foreground/10 bg-background shadow-[0_24px_80px_-58px_hsl(var(--foreground)/0.38)]"
          >
            {homeFaqs.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-foreground/10 last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-accent/5 md:px-7">
                    <span className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-5 pb-6 text-[0.95rem] leading-7 text-muted-foreground md:px-7">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  );
}
