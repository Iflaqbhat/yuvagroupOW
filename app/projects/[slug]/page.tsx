import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArrowUpRight, MapPin, Calendar, Building2, Check, Phone } from 'lucide-react';
import { contactInfo } from '@/data/navigation';
import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.name} — ${project.location}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Yuva Group`,
      description: project.description,
      images: [{ url: project.heroImage, alt: project.heroAlt }],
    },
  };
}

const statusLabel = {
  'ongoing': 'Under Construction',
  'ready-to-move': 'Ready to Move',
  'completed': 'Completed',
} as const;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'floor-plans', label: 'Floor Plans' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'visit', label: 'Visit' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-stone-50 pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
        <div className="section-shell relative z-10 py-16 md:py-20">
          <ScrollReveal>
            <Link href="/projects" className="text-xs uppercase tracking-[0.2em] text-background/80 hover:text-background">
              ← All Projects
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground backdrop-blur">
                {statusLabel[project.status]}
              </span>
              <span className="bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground backdrop-blur">
                {project.category}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-background md:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-lg text-background/85">
              <MapPin className="h-4 w-4" />
              {project.location}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
        <div className="section-shell flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="border-b border-foreground/10 py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">Overview</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">{project.tagline}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="border border-foreground/10 p-6">
                <p className="eyebrow mb-4">Key facts</p>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Configuration', project.bedrooms],
                    ['Units', project.units],
                    ['Status', statusLabel[project.status]],
                    ['Possession', project.possession],
                    ['Starting price', project.startingPrice],
                    ['RERA', project.rera],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-foreground/10 pb-3">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-medium text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="#visit" className="flex items-center justify-center gap-2 bg-foreground py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground">
                    <Calendar className="h-4 w-4" />
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Location & connectivity" title="Connected to what matters." />
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-foreground/10">
                <iframe
                  title={`Map showing ${project.name} at ${project.location}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${project.coordinates.lng - 0.02}%2C${project.coordinates.lat - 0.02}%2C${project.coordinates.lng + 0.02}%2C${project.coordinates.lat + 0.02}&layer=maptype&marker=${project.coordinates.lat}%2C${project.coordinates.lng}`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-display text-xl">Nearby</h3>
              <ul className="mt-4 space-y-3">
                {project.connectivity.map((c) => (
                  <li key={c.label} className="flex items-center justify-between border-b border-foreground/10 pb-3 text-sm">
                    <span className="text-muted-foreground">{c.label}</span>
                    <span className="font-medium">{c.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-b border-foreground/10 py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Gallery" title="Inside and around the project." />
          </ScrollReveal>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <StaggerItem key={i}>
                <figure className={cn("group relative overflow-hidden rounded-sm border border-foreground/10", i === 0 && "sm:col-span-2")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} loading="lazy" className={cn("w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105", i === 0 ? "aspect-[16/9]" : "aspect-[4/3]")} />
                  {img.caption && <figcaption className="absolute bottom-0 left-0 bg-foreground/80 px-3 py-1.5 text-xs text-background">{img.caption}</figcaption>}
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Amenities" title="What the community offers." />
          </ScrollReveal>
          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.amenities.map((a) => (
              <StaggerItem key={a}>
                <div className="flex items-center gap-3 border border-foreground/10 p-4">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm">{a}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="border-b border-foreground/10 py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Specifications" title="How it is built." />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {project.specifications.map((spec) => (
              <ScrollReveal key={spec.category}>
                <div className="border border-foreground/10 p-6">
                  <h3 className="font-display text-lg">{spec.category}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {spec.items.map((item) => (
                      <div key={item.label} className="border-b border-foreground/10 pb-3">
                        <dt className="text-muted-foreground">{item.label}</dt>
                        <dd className="mt-1 font-medium">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section id="floor-plans" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading eyebrow="Floor plans" title="Choose your layout." />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.floorPlans.map((fp) => (
              <ScrollReveal key={fp.name}>
                <div className="group overflow-hidden rounded-sm border border-foreground/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={fp.image} alt={fp.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-lg text-background">{fp.name}</p>
                      <p className="text-sm text-background/80">{fp.type} · {fp.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <span className="text-sm text-muted-foreground">{fp.area}</span>
                    <Link href="#visit" className="text-sm font-medium text-accent hover:underline">Enquire</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">[ADD APPROVED FLOOR PLAN] — Floor plan images shown are representative. Request the approved plan from the sales team.</p>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="border-b border-foreground/10 py-20 md:py-28">
        <div className="section-shell max-w-3xl">
          <ScrollReveal>
            <SectionHeading eyebrow="FAQs" title="Questions about this project." />
          </ScrollReveal>
          <div className="mt-10">
            <Accordion.Root type="single" collapsible className="divide-y divide-foreground/10 border-y border-foreground/10">
              {project.faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`item-${i}`} className="overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-display text-lg transition-colors hover:text-accent">
                      {faq.question}
                      <span className="ml-4 text-muted-foreground">+</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>

      {/* SCHEDULE VISIT */}
      <section id="visit" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">Book a visit</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Walk through {project.name}.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Schedule a guided walkthrough of {project.name} at {project.location}. Our sales
                team will confirm your visit within one working day.
              </p>
              <div className="mt-6 border border-foreground/10 p-5 text-sm">
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

      {/* RELATED */}
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between">
            <SectionHeading eyebrow="Keep exploring" title="Related projects." />
            <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
