'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, MapPin, Star, Quote, Building2, Hammer, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { FeaturedProjectCard } from '@/components/projects/FeaturedProjectCard';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { projects, getFeaturedProjects, testimonials, companyStats, allAmenities, type Amenity } from '@/data/projects';

const philosophy = [
  { icon: Building2, title: 'Architectural intent', text: 'Every Yuva project begins with how light, air, and movement flow through a place — not with a floor plate to maximise.' },
  { icon: Hammer, title: 'Build quality', text: 'We supervise structural and finishing work on site, not just on paper, and hold ourselves to the standard set by our completed projects.' },
  { icon: ShieldCheck, title: 'Dependable delivery', text: 'Our completed communities are our reference. We measure new projects against the ones already handed over and lived in.' },
  { icon: Clock, title: 'Long-term value', text: 'We build homes meant to age well — materials, layouts, and common areas chosen for decades of use, not a brochure photograph.' },
];

export default function Home() {
  const amenityPhotos: Array<Amenity & { photo: string }> = allAmenities.filter(
    (a): a is Amenity & { photo: string } => Boolean(a.photo),
  );
  return (
    <>
      {/* HERO — full-bleed film behind the text with a refined scrim stack:
          text seated on the left, film breathing on the right, and a soft
          ramp into the white section below */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
        {/* Background hero video */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          {/* Horizontal scrim — text readable on the left, film visible on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-charcoal/15" />
          {/* Top scrim — grounds the hero against the page edge */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-transparent" />
          {/* Soft ramp into the white section — near-white only at the seam, fading fast */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
          {/* Whisper of film grain for a premium cinematic finish */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="section-shell relative z-10 pt-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            className="max-w-3xl"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="mb-6 text-xs uppercase tracking-[0.25em] text-white/80"
            >
              Yuva Structures Pvt. Ltd. · Bengaluru
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="font-display text-5xl leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Homes built with
              <br />
              <span className="text-accent-soft">architectural intent.</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/85"
            >
              Premium and affordable apartments, villas, and residential communities across south
              Bengaluru — from Electronic City to Attibele, Chandapura, and Anekal Road.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-charcoal transition-all duration-300 hover:bg-accent hover:text-white"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
              <Link
                href="/schedule-visit"
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Schedule a Site Visit
              </Link>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/75"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
              {projects.filter((p) => p.status !== 'completed').length} ongoing & ready-to-move projects
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue — a quiet glass chip that stays visible over the ramp */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-charcoal/35 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 hover:border-white/50">
            <ArrowDown className="h-4 w-4 animate-bounce text-white/90" />
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">Who we are</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                A Bengaluru developer measured by its completed homes.
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Yuva Group, incorporated as Yuva Structures Pvt. Ltd., is a Bengaluru-based
                real-estate developer building residential apartments, premium and affordable
                housing, villas, plotted developments, and commercial and mixed-use projects
                across the city&apos;s southern corridor.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We treat each project as a long-term commitment to the people who will live in it.
                Our completed communities — occupied, settled, and managed — are the reference we
                measure every new development against.
              </p>
              <Link
                href="/about"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Read our story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS — company track record (client-confirmed counter data), placed above featured */}
      <section className="border-b border-foreground/10 py-20">
        <div className="section-shell">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {companyStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p className="font-display text-4xl tracking-tight md:text-5xl">
                    {s.value}
                    <span className="text-accent">{s.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-b border-foreground/10 bg-stone-50 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading title="Featured developments" />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getFeaturedProjects().map((p, i) => (
              <FeaturedProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-end">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-7 py-4 text-sm font-medium uppercase tracking-wider text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              <span className="relative z-10">View all projects</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT SELECTOR — ongoing vs ready */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Find your stage"
              title="Ongoing or ready to move — start where you are."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                tag: 'Ongoing',
                title: 'Under construction',
                desc: 'Book early into projects still taking shape — follow the build from foundation to handover.',
                href: '/ongoing-projects',
                count: projects.filter((p) => p.status === 'ongoing').length,
              },
              {
                tag: 'Ready to Move',
                title: 'Ready now',
                desc: 'Walk into ready-to-move or completed Yuva homes available for immediate possession or resale enquiry.',
                href: '/completed-projects',
                count: projects.filter((p) => p.status !== 'ongoing').length,
              },
            ].map((c) => (
              <ScrollReveal key={c.href}>
                <Link
                  href={c.href}
                  className="group relative block overflow-hidden rounded-sm border border-foreground/10 bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-accent">
                      {c.tag}
                    </span>
                    <span className="text-sm text-muted-foreground">{c.count} projects</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl tracking-tight">{c.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    Browse
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES PREVIEW */}
      <section className="border-b border-foreground/10 bg-stone-50 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What you get"
              title="Amenities designed for daily life, not a brochure."
              description="Shared spaces across Yuva communities are built to be used — sized for real gathering, placed where people actually walk, and maintained after handover."
              align="center"
            />
            <div className="mt-6 flex justify-center">
              <Link
                href="/amenities"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Explore all amenities
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>
          {/* Two rows of comfortable tiles — big enough to read, compact enough to scan */}
          <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {amenityPhotos.slice(0, 9).map((a) => (
              <StaggerItem key={a.name}>
                <figure className="group relative overflow-hidden border border-foreground/10 bg-card">
                  <div className="relative aspect-square">
                    <Image
                      src={a.photo}
                      alt={a.name}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-2.5 pt-10">
                    <span className="block text-sm font-bold uppercase tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] sm:text-base">
                      {a.name}
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ARCHITECTURAL PHILOSOPHY */}
      <section className="border-b border-foreground/10 bg-stone-50 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our philosophy"
              title="How we build, and why it matters."
              align="center"
            />
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group h-full border border-foreground/10 bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center border border-foreground/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
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

      {/* LOCATION PREVIEW */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Where we build"
              title="South Bengaluru, connected."
              description="Yuva Group developments cluster along the city's southern growth corridor — close to Electronic City, Hosur Road, and the tech parks that drive demand."
              align="center"
            />
          </ScrollReveal>
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Attibele Industrial Area', project: 'Yuva Sunrise' },
              { name: 'Electronic City Ph-2', project: 'Yuva Utsav' },
              { name: 'Chandapura', project: 'Yuva Sunshine' },
              { name: 'Anekal Road', project: 'Yuva Residency' },
              { name: 'Hosur Road', project: 'Yuva Heritage' },
              { name: 'Singasandra', project: 'Yuva Lake View' },
            ].map((l) => (
              <StaggerItem key={l.project}>
                <div className="group flex items-center gap-3 border border-foreground/10 bg-card px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:shadow-sm">
                  <MapPin className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                  <div>
                    <p className="text-sm font-medium">{l.name}</p>
                    <p className="text-xs text-muted-foreground">{l.project}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-foreground/10 bg-stone-50 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="In their words"
              title="What residents tell us."
              align="center"
            />
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.project}>
                <figure className="flex h-full flex-col border border-foreground/10 bg-card p-6 transition-all duration-300 hover:shadow-md">
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                    {t.quote}
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4">
                    <figcaption>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.project} · {t.location}</p>
                    </figcaption>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="section-shell relative text-center">
          <ScrollReveal>
            <p className="eyebrow mb-5">See it for yourself</p>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-6xl">
              Walk through a Yuva home before you decide.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
              Book a guided site visit to any ongoing or completed Yuva Group development. Our
              sales team will walk you through the property, the floor plans, and the
              neighbourhood.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/schedule-visit"
                className="group inline-flex items-center gap-2 bg-foreground px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Schedule a Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-foreground/25 px-7 py-4 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground/5"
              >
                Enquire Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
