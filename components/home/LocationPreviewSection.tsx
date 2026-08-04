// File purpose: Homepage South Bengaluru location preview.
'use client';

import { MapPin } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { locationHighlights } from '@/components/home/home-content';

export function LocationPreviewSection() {
  return (
    <section className="bg-charcoal py-16 md:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Where we build"
            title="South Bengaluru, connected."
            description="Yuva Group developments cluster along the city's southern growth corridor — close to Electronic City, Hosur Road, and the tech parks that drive demand."
            align="center"
            invert
            size="lg"
          />
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationHighlights.map((l) => (
            <StaggerItem key={l.project}>
              <div className="group flex items-center gap-3 border border-background/10 bg-background/5 px-5 py-4 transition-all duration-300 hover:border-background/25 hover:bg-background/10">
                <MapPin className="h-4 w-4 text-accent-soft transition-transform group-hover:scale-110" />
                <div>
                  <p className="text-sm font-medium text-background">{l.name}</p>
                  <p className="text-xs text-background/70">{l.project}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
