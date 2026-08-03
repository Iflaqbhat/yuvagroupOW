// File purpose: Homepage: hero with full-bleed video, stats, featured projects, amenities preview, philosophy, locations, testimonials, and the final call-to-action.
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowUpRight, ArrowDown, MapPin, Building2, Hammer, ShieldCheck, Clock, Youtube, ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeaturedProjectCard } from '@/components/projects/FeaturedProjectCard';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import {
  projects,
  getFeaturedProjects,
  testimonials,
  companyStats,
  allAmenities,
  youtubeVideos,
  type Amenity,
} from '@/data/projects';

const philosophy = [
  { icon: Building2, title: 'Architectural intent', text: 'Every Yuva project begins with how light, air, and movement flow through a place — not with a floor plate to maximise.' },
  { icon: Hammer, title: 'Build quality', text: 'We supervise structural and finishing work on site, not just on paper, and hold ourselves to the standard set by our completed projects.' },
  { icon: ShieldCheck, title: 'Dependable delivery', text: 'Our completed communities are our reference. We measure new projects against the ones already handed over and lived in.' },
  { icon: Clock, title: 'Long-term value', text: 'We build homes meant to age well — materials, layouts, and common areas chosen for decades of use, not a brochure photograph.' },
];

const homeFaqs = [
  {
    question: 'Why should I choose Yuva Group when looking for flats near Electronic City?',
    answer:
      'Yuva Group offers premium and affordable homes across south Bengaluru with practical layouts, everyday amenities, and locations close to Electronic City, Attibele, Hosur Road, Chandapura, and Anekal Road.',
  },
  {
    question: 'Do you offer 1, 2 and 3 BHK apartments?',
    answer:
      'Yes. Yuva Group projects include 1, 2 and 3 BHK apartment options. Exact availability depends on the project stage and should be confirmed with the sales team.',
  },
  {
    question: 'What amenities can I expect in Yuva Group apartments?',
    answer:
      'Published project amenities include clubhouse spaces, landscaped areas, gymnasium, children’s play areas, parking, security, power backup, indoor games, and community-use facilities, depending on the project.',
  },
  {
    question: 'Are Yuva Group apartments well connected?',
    answer:
      'Yuva Group projects are placed along Bengaluru’s southern growth corridor, with access to Electronic City, Hosur Road, schools, hospitals, daily conveniences, and major road networks.',
  },
  {
    question: 'How can I book a flat or schedule a site visit?',
    answer:
      'You can enquire through the website or schedule a personalized site visit. The sales team can help with project availability, payment plans, home loan support, and next steps.',
  },
];

export default function Home() {
  const amenityPhotos: Array<Amenity & { photo: string }> = allAmenities.filter(
    (a): a is Amenity & { photo: string } => Boolean(a.photo),
  );
  const galleryImages = projects
    .flatMap((project) => project.gallery.map((image) => ({ ...image, project: project.name })))
    .slice(0, 14);
  // One shared observer for the stats section so every counter starts and
  // finishes together the first time the section enters the viewport.
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  return (
    <>
      {/* HERO — full-bleed film behind the text with a refined scrim stack:
          text seated on the left, film breathing on the right, and a soft
          ramp into the white section below */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
        {/* Background hero video — Yuva Group's own footage, sharpened via CSS
            filter (brightness/contrast/saturation). A still image variant lives
            at /photos/hero/home-hero.jpg if we ever want to swap back. */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(1.12) contrast(1.18) saturate(1.18)' }}
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
              className="font-display text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl"
            >
              Homes built with
              <br />
              <span className="text-sun">architectural intent.</span>
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
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-charcoal shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
              <Link
                href="/schedule-visit"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Schedule a Site Visit
              </Link>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/75"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-sun" />
              {projects.filter((p) => p.status !== 'completed').length} ongoing & ready-to-move projects
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue — click to glide into the section below the hero */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -6, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => {
            // Glide to the section right below the hero; fall back to one viewport step.
            const heroSection = (e.currentTarget as HTMLElement).closest('section');
            const next = heroSection?.nextElementSibling;
            if (next instanceof HTMLElement) {
              next.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
          className="absolute bottom-8 left-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-charcoal/55 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 hover:border-white/70"
          aria-label="Scroll down to content"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-white" />
        </motion.button>
      </section>

      {/* STATS — proof immediately after the hero, before asking visitors to browse */}
      <section ref={statsRef} className="border-b border-foreground/10 py-14 md:py-16">
        <div className="section-shell">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {companyStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p className="font-display text-4xl md:text-5xl">
                    <AnimatedCounter value={parseInt(s.value, 10)} active={statsInView} />
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {getFeaturedProjects().map((p, i) => (
              <FeaturedProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-end">
            <Link
              href="/projects"
              className="smart-gradient group relative inline-flex items-center gap-3 overflow-hidden rounded-md px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.22)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View all projects</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT SELECTOR — ongoing, ready, completed */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Find your stage"
              title="Choose the right project stage."
              description="The original Yuva site separates projects into three buyer moments: under construction, ready to move, and completed communities."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                desc: 'Move into finished homes available for immediate possession, with the project and neighbourhood already visible.',
                href: '/ready-to-move-projects',
                count: projects.filter((p) => p.status === 'ready-to-move').length,
              },
              {
                tag: 'Completed',
                title: 'Delivered homes',
                desc: 'Explore completed Yuva communities that are occupied, settled, and useful as proof of delivery quality.',
                href: '/completed-projects',
                count: projects.filter((p) => p.status === 'completed').length,
              },
            ].map((c) => (
              <ScrollReveal key={c.href}>
                <Link
                  href={c.href}
                  className="smart-panel group relative block overflow-hidden rounded-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-md bg-accent/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                      {c.tag}
                    </span>
                    <span className="text-[0.95rem] font-medium text-muted-foreground">{c.count} projects</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight">{c.title}</h3>
                  <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-muted-foreground">{c.desc}</p>
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

      {/* YOUTUBE VIDEOS */}
      <section className="border-b border-foreground/10 py-20 md:py-24">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Latest videos"
              title="Project films from Yuva Group."
              description="Walkthroughs and project updates from the official Yuva Group YouTube channel, kept close to the project browsing flow."
              align="center"
            />
          </ScrollReveal>
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video) => (
              <StaggerItem key={video.id}>
                <article className="group overflow-hidden rounded-md border border-foreground/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.08)]">
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      <Youtube className="h-4 w-4 text-[#ff0000]" />
                      Official video
                    </div>
                    <div className="mt-3 flex min-h-[7.5rem] flex-col">
                      <h3 className="text-[0.95rem] font-semibold leading-6 text-foreground">
                        {video.title}
                      </h3>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group/watch mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-foreground/15 px-3.5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <Youtube className="h-4 w-4 text-[#ff0000] transition-colors group-hover/watch:text-background" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PROOF COPY — original-site homepage content, kept lower so browsing stays first */}
      <section className="border-b border-foreground/10 py-20 md:py-24">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <ScrollReveal className="md:col-span-5">
            <p className="eyebrow mb-4">Builders in Bangalore</p>
            <h2 className="font-display text-3xl leading-[1.08] md:text-5xl">
              Residential projects with location, quality, and long-term value.
            </h2>
          </ScrollReveal>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.08}>
              <div className="border-l border-foreground/15 pl-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  A Bengaluru developer measured by completed homes.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Yuva Group, incorporated as Yuva Structures Pvt. Ltd., builds apartments, villas,
                  plotted developments, and mixed-use communities across south Bengaluru&apos;s
                  growth corridor.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className="border-l border-foreground/15 pl-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  Practical homes near Electronic City and Hosur Road.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  The portfolio focuses on usable layouts, family amenities, and access to schools,
                  hospitals, daily conveniences, IT hubs, Attibele, Chandapura, and Anekal Road.
                </p>
                <Link
                  href="/about"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Read our story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </ScrollReveal>
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
          {/* Two rows of four comfortable tiles — big enough to read, compact enough to scan */}
          <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amenityPhotos.slice(0, 8).map((a) => (
              <StaggerItem key={a.name}>
                <figure className="group relative overflow-hidden rounded-sm border border-foreground/10 bg-card">
                  <div className="relative aspect-square">
                    <Image
                      src={a.photo}
                      alt={a.name}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 50vw, 25vw"
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
              size="lg"
            />
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group h-full border border-foreground/10 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.25)]">
                  <span className="flex h-12 w-12 items-center justify-center border border-foreground/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
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

      {/* TESTIMONIALS */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
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
                <TestimonialCard t={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* LOCATION PREVIEW — charcoal band (mirrors the About page achievements band) */}
      <section className="bg-charcoal py-24 md:py-32">
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
            {[
              { name: 'Attibele Industrial Area', project: 'Yuva Sunrise' },
              { name: 'Electronic City Ph-2', project: 'Yuva Utsav' },
              { name: 'Chandapura', project: 'Yuva Sunshine' },
              { name: 'Anekal Road', project: 'Yuva Residency' },
              { name: 'Hosur Road', project: 'Yuva Heritage' },
              { name: 'Singasandra', project: 'Yuva Lake View' },
            ].map((l) => (
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

      {/* FAQS */}
      <section className="border-b border-foreground/10 py-24 md:py-32">
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
              className="smart-gradient group mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)] transition-transform hover:-translate-y-0.5"
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
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-stone-50 md:px-7">
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
                className="smart-gradient group inline-flex items-center gap-2 rounded-md px-7 py-4 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)] transition-transform hover:-translate-y-0.5"
              >
                Schedule a Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-accent/25 bg-background px-7 py-4 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
              >
                Enquire Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MOVING GALLERY STRIP */}
      <section className="overflow-hidden border-t border-foreground/10 bg-stone-50 py-10 md:py-12">
        <div className="section-shell mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Gallery</p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              A moving look at Yuva spaces.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            Open gallery
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="gallery-marquee" aria-label="Moving Yuva Group project gallery">
          <div className="gallery-marquee-track">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="relative mx-2 h-44 w-64 shrink-0 overflow-hidden rounded-sm border border-foreground/10 bg-card md:h-56 md:w-80"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-xs font-medium text-background">
                  {image.project}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
