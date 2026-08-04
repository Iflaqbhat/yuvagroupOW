// File purpose: Homepage team preview.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { team } from '@/data/projects';

export function TeamPreviewSection() {
  return (
    <section className="border-b border-foreground/10 py-16 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our dedicated team"
              title="Meet the team behind our success."
              description="The people buyers speak to, coordinate with, and see across Yuva Group's daily project work."
              className="max-w-3xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <Link
              href="/about"
              className="smart-action group inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.18)]"
            >
              Full team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6" stagger={0.05}>
          {team.slice(2).map((member) => (
            <StaggerItem key={member.name}>
              <Link href="/about" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-foreground/10 bg-card shadow-[0_18px_45px_-34px_hsl(var(--foreground)/0.45)]">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="mt-3">
                  <p className="font-display text-base font-semibold leading-tight transition-colors duration-300 group-hover:text-accent md:text-lg">
                    {member.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
