import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { team, companyStats } from '@/data/projects';
import { Building2, Hammer, ShieldCheck, Eye, Handshake, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Yuva Group',
  description:
    'Yuva Structures Pvt. Ltd. — a Bengaluru real-estate developer building premium and affordable homes with architectural intent, dependable delivery, and long-term value.',
};

const values = [
  { icon: Eye, title: 'Transparency', text: 'We share project status, pricing, and timelines as they are — not as we wish them to be.' },
  { icon: Hammer, title: 'Quality', text: 'Build quality is supervised on site. Our completed communities are the benchmark for every new project.' },
  { icon: Handshake, title: 'Customer satisfaction', text: 'Handover is a beginning, not an end. We stay reachable after possession and support resident communities.' },
  { icon: Leaf, title: 'Long-term value', text: 'Materials, layouts, and common areas are chosen for decades of use, not a brochure photograph.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A developer measured by its completed homes."
        description="Yuva Group, incorporated as Yuva Structures Pvt. Ltd., is a Bengaluru-based real-estate developer building residential apartments, villas, plotted developments, and commercial and mixed-use projects across the city's southern corridor."
      />

      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">What drives us</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                We build homes meant to be lived in for decades.
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Yuva Group develops residential apartments, premium and affordable housing,
                villas, plotted developments, and commercial and mixed-use projects across
                south Bengaluru. Our projects cluster along the city's southern growth
                corridor — close to Electronic City, Attibele, Chandapura, Anekal Road, and
                Hosur Road.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We treat each project as a long-term commitment to the people who will live in
                it. Our completed communities — occupied, settled, and managed — are the
                reference we measure every new development against.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 py-20">
        <div className="section-shell">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {companyStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p className="font-display text-4xl tracking-tight md:text-5xl">
                    {s.value}<span className="text-accent">{s.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="What we stand for" title="Our values." align="center" />
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full border border-foreground/10 p-6">
                  <v.icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 font-display text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Leadership" title="The leadership behind Yuva Group." align="center" />
          </ScrollReveal>
          <StaggerGroup className="mx-auto mt-14 max-w-3xl gap-6">
            {team.map((m) => (
              <StaggerItem key={m.role}>
                <div className="flex flex-col gap-6 border border-foreground/10 p-6 sm:flex-row">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{m.name}</h3>
                    <p className="text-sm text-accent">{m.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
