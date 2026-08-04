// File purpose: Homepage trust cards after the stats.
'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { buyerReasons } from '@/components/home/home-content';

export function BuyerTrustSection() {
  return (
    <section className="border-b border-foreground/10 bg-accent/5 py-16 md:py-20">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why buyers choose Yuva Group"
            title="Clear information before the site visit."
            description="The redesign keeps the project journey practical: published details first, polished visuals second, and easy enquiry paths throughout."
            align="center"
          />
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {buyerReasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group h-full rounded-md border border-accent/15 bg-background p-5 shadow-[0_14px_35px_hsl(var(--foreground)/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.07)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <reason.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-tight">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
