// File purpose: About page — the founder's story, the team behind Yuva Group, client
// testimonials, and the achievement counters. Content mirrors yuvagroup.in/about-us/.
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { AnimatedStats, type Stat } from '@/components/motion/AnimatedStats';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedUnderline } from '@/components/ui/animated-underline';
import { team, testimonials } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About — Yuva Group',
  description:
    'Yuva Group, incorporated as Yuva Structures Pvt. Ltd., is a Bengaluru real-estate developer with 15 years of experience. Meet the leadership and the team behind our completed communities.',
};

// Hero photo — saved locally (was a Pexels placeholder).
const heroImage = '/photos/hero/about-hero.avif';

// Real numbers confirmed with the client (mirrors the homepage counters).
const achievements: Stat[] = [
  { label: 'Success Rate', value: 100, suffix: '%' },
  { label: 'Completed Projects', value: 10, suffix: '+' },
  { label: 'Awards Winner', value: 15, suffix: '+' },
  { label: 'Years of Experiences', value: 10, suffix: '+' },
  { label: 'Ongoing Projects', value: 3, suffix: '' },
];

export default function AboutPage() {
  const founder = team[0];

  return (
    <>
      {/* HERO — full-bleed photography via the shared PageHero image mode */}
      <PageHero
        image={heroImage}
        eyebrow="About Yuva Group"
        title="Built on quality, measured by homes that last."
        description="A Bengaluru real-estate developer with 15 years of experience — residential apartments, villas, and plotted developments delivered across the city&apos;s southern growth corridor."
      />

      {/* FOUNDER — portrait with an offset accent frame, oversized name, and the
          signature flourish (the original signature image 404s, so a stylised
          display-font signature stands in for it) */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell grid items-center gap-16 md:grid-cols-12">
          <ScrollReveal className="md:col-span-5">
            <div className="relative">
              {/* Blackish aligned frame — the portrait sits fully inside it */}
              <div className="absolute -inset-3 border border-foreground/15" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-foreground/15 bg-charcoal">
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Floating fact card overlapping the portrait */}
              <div className="absolute -bottom-6 right-4 border border-foreground/10 bg-background p-5 shadow-[0_20px_50px_-20px_hsl(var(--foreground)/0.35)] md:-right-8">
                <p className="font-display text-3xl">10+</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Projects delivered
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">The Founder</p>
              <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
                {founder.name}
              </h2>
              <AnimatedUnderline className="mt-6" />
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {founder.role}
              </p>
              <p className="mt-7 font-display text-lg italic leading-relaxed text-muted-foreground">{founder.bio}</p>
              <div className="mt-9 flex items-center gap-4">
                <p className="font-display text-3xl italic text-foreground/80">
                  Mahendra Reddy
                </p>
                <span className="h-px flex-1 bg-foreground/10" aria-hidden />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TEAM — dark charcoal band, oversized heading, portrait cards with a
          gradient nameplate. Mr. Mahendra Reddy leads the grid and is also
          featured above as the founder. */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our dedicated team"
              title="Meet our team behind our success."
              description="Dedicated professionals driving innovation, growth and excellence."
              invert
              size="lg"
              className="max-w-3xl"
            />
          </ScrollReveal>

          <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative overflow-hidden rounded-sm border border-background/10">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      fill
                      loading="lazy"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <p className="font-display text-lg font-bold leading-tight text-background md:text-xl">
                        {m.name}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background/80">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TESTIMONIALS — what residents and partners tell us */}
      <section className="border-b border-foreground/10 bg-background py-16 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="In their words"
              title="Check what clients say."
              align="center"
              size="lg"
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

      {/* ACHIEVEMENTS — soft accent close with count-up counters */}
      <section className="border-b border-foreground/10 bg-accent/5 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our achievements"
              title="We are happy for our achievement."
              size="lg"
              className="max-w-3xl"
            />
          </ScrollReveal>
          <AnimatedStats
            stats={achievements}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5"
            valueClassName="font-display text-5xl text-foreground md:text-6xl"
            labelClassName="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          />
        </div>
      </section>
    </>
  );
}
