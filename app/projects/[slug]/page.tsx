// File purpose: Individual project detail page: photos, highlights, specs, floor plans, location, and FAQs.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Check,
  Home,
  MapPin,
  MapPinned,
  Phone,
  Ruler,
} from 'lucide-react';
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

const formatCategory = (value: string) => value.replace(/-/g, ' ');

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const hasUnitMix = Boolean(project.floorPlanRows?.length);
  const hasLocation = Boolean(project.coordinates || project.connectivity.length);
  const hasGallery = project.gallery.length > 0;
  const hasAmenities = project.amenities.length > 0;
  const hasSpecifications = project.specifications.length > 0;
  const hasFloorPlans = project.floorPlans.length > 0;
  const hasFaqs = project.faqs.length > 0;

  const keyFacts = [
    { label: 'Configuration', value: project.bedrooms },
    { label: 'Official category', value: project.officialCategory },
    { label: 'Unit count', value: project.unitCount },
    { label: 'Units', value: project.units },
    { label: 'Status', value: statusLabel[project.status] },
    { label: 'Possession', value: project.possession },
    { label: 'Starting price', value: project.startingPrice },
    { label: 'RERA', value: project.rera },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));
  const heroFacts = [
    { label: 'Homes', value: project.bedrooms },
    { label: 'Status', value: statusLabel[project.status] },
    { label: 'Price', value: project.startingPrice },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  const floorPlanRows = project.floorPlanRows ?? [];
  const unitMixStats = [
    { label: 'Published rows', value: `${floorPlanRows.length}` },
    { label: 'Configurations', value: Array.from(new Set(floorPlanRows.map((row) => row.bhk))).join(', ') },
    { label: 'Facings', value: Array.from(new Set(floorPlanRows.map((row) => row.facing))).join(', ') },
  ].filter((fact) => fact.value);

  const mapSrc = project.coordinates
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${project.coordinates.lng - 0.02}%2C${project.coordinates.lat - 0.02}%2C${project.coordinates.lng + 0.02}%2C${project.coordinates.lat + 0.02}&layer=mapnik&marker=${project.coordinates.lat}%2C${project.coordinates.lng}`
    : undefined;
  const locationTitle = mapSrc
    ? project.connectivity.length
      ? 'Connected to what matters.'
      : 'Location reference.'
    : 'Official location reference.';
  const locationDescription = mapSrc
    ? project.connectivity.length
      ? 'Nearby landmarks and travel-time references match the official project page wherever those details are published.'
      : 'The official page publishes the project map pin, but not a detailed nearby-distance list.'
    : 'No public map pin is available for this project, so the redesign keeps the location limited to official portfolio and testimonial references.';
  const visitTitle = project.status === 'completed' ? `Ask about ${project.name}.` : `Walk through ${project.name}.`;
  const visitDescription =
    project.status === 'completed'
      ? `${project.name} is a completed project, so current resale, rental or availability options should be confirmed directly with the sales team.`
      : `Schedule a guided walkthrough of ${project.name} at ${project.location}. Our sales team will confirm your visit within one working day.`;

  const navSections = [
    { id: 'overview', label: 'Overview' },
    ...(hasUnitMix ? [{ id: 'unit-mix', label: 'Unit Mix' }] : []),
    ...(hasLocation ? [{ id: 'location', label: 'Location' }] : []),
    ...(hasGallery ? [{ id: 'gallery', label: 'Gallery' }] : []),
    ...(hasAmenities ? [{ id: 'amenities', label: 'Amenities' }] : []),
    ...(hasSpecifications ? [{ id: 'specifications', label: 'Specifications' }] : []),
    ...(hasFloorPlans ? [{ id: 'floor-plans', label: 'Floor Plans' }] : []),
    ...(hasFaqs ? [{ id: 'faqs', label: 'FAQs' }] : []),
    { id: 'visit', label: 'Visit' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-stone-50 pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          // full-bleed photo — its top edge sits behind the glass navbar by design;
          // hero is capped at 90vh so the section nav buttons stay visible in the viewport
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/88 via-foreground/48 to-foreground/12" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="section-shell relative z-10 py-14 md:py-20">
          <ScrollReveal>
            <Link href="/projects" className="text-xs uppercase tracking-[0.2em] text-background/80 hover:text-background">
              ← All Projects
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
                {statusLabel[project.status]}
              </span>
              <span className="bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
                {project.officialCategory ?? formatCategory(project.category)}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-background md:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-lg text-background/85">
              <MapPin className="h-4 w-4" />
              {project.location}
            </p>
            {heroFacts.length > 0 && (
              <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
                {heroFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border border-background/95 bg-background px-5 py-4 text-foreground shadow-[0_18px_50px_-32px_hsl(var(--foreground)/0.75)]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug md:text-base">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#visit"
                className="inline-flex items-center justify-center gap-2 bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Schedule a Visit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {hasGallery && (
                <Link
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 border border-background/40 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background hover:bg-background/10"
                >
                  View Gallery
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      {/* top-[4.375rem] keeps the buttons just below the fixed navbar (shrinks to 70px on scroll) */}
      <div className="sticky top-[4.375rem] z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
        <div className="section-shell flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="border-b border-foreground/10 py-16 md:py-20">
        <div className="section-shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">Overview</p>
              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-balance md:text-[2.75rem]">
                {project.tagline}
              </h2>
              <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-muted-foreground md:text-lg">
                {project.longDescription}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="border border-foreground/10 bg-background p-5 shadow-[0_14px_40px_-32px_hsl(var(--foreground)/0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {highlight.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-snug md:text-lg">{highlight.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5">
            <ScrollReveal delay={0.1}>
              <aside className="border border-foreground/10 bg-background p-6 shadow-[0_24px_80px_-50px_hsl(var(--foreground)/0.45)] md:sticky md:top-36">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="grid gap-3">
                  {keyFacts.map((fact) => (
                    <div key={fact.label} className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-4 border-b border-foreground/10 pb-3 text-sm last:border-b-0 last:pb-0">
                      <dt className="text-muted-foreground">{fact.label}</dt>
                      <dd className="text-right font-semibold leading-snug">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 grid gap-3">
                  <Link href="#visit" className="flex items-center justify-center gap-2 bg-foreground px-4 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground">
                    <Calendar className="h-4 w-4" />
                    Schedule a Visit
                  </Link>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* UNIT MIX */}
      {hasUnitMix && (
        <section id="unit-mix" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Unit mix"
                title="Published typical floor plan table."
                description="Flat numbers, saleable areas, facings and configurations are taken from the official project page."
              />
            </ScrollReveal>

            <div className="mt-10 overflow-hidden border border-foreground/10 bg-background shadow-[0_24px_80px_-58px_hsl(var(--foreground)/0.45)]">
              <div className="grid divide-y divide-foreground/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {unitMixStats.map((stat, index) => {
                const Icon = index === 0 ? Building2 : index === 1 ? Home : MapPinned;
                return (
                  <ScrollReveal key={stat.label} delay={index * 0.05}>
                    <div className="group flex min-h-28 items-start gap-4 p-5 transition-colors hover:bg-stone-50 md:p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold leading-snug md:text-xl">{stat.value}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
              </div>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 overflow-hidden border border-foreground/10 bg-background">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-foreground text-background">
                      <tr>
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                          Flat
                        </th>
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                          Area
                        </th>
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                          Facing
                        </th>
                        <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/10">
                      {floorPlanRows.map((row) => (
                        <tr key={`${row.flat}-${row.area}-${row.facing}`} className="transition-colors hover:bg-stone-50">
                          <td className="px-5 py-4 font-semibold text-foreground">{row.flat}</td>
                          <td className="px-5 py-4 text-muted-foreground">{row.area}</td>
                          <td className="px-5 py-4 text-muted-foreground">{row.facing}</td>
                          <td className="px-5 py-4">
                            <span className="inline-flex min-w-20 justify-center bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                              {row.bhk}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* LOCATION */}
      {hasLocation && (
        <section id="location" className="border-b border-foreground/10 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Location & connectivity"
                title={locationTitle}
                description={locationDescription}
              />
            </ScrollReveal>
            <div className="mt-10 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                {mapSrc ? (
                  <div className="relative aspect-[16/10] overflow-hidden border border-foreground/10">
                    <iframe
                      title={`Map showing ${project.name} at ${project.location}`}
                      src={mapSrc}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div className="grid min-h-[320px] content-between border border-foreground/10 bg-foreground p-7 text-background shadow-[0_28px_80px_-50px_hsl(var(--foreground)/0.55)] md:p-8">
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center bg-background text-accent">
                        <MapPinned className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">
                        Location reference available.
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-background/72">
                        A public map pin is not published for this completed project, so this page uses only the official location references available in the portfolio and testimonial copy.
                      </p>
                    </div>
                    <div className="mt-10 border-t border-background/15 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/55">
                        Listed location
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">{project.location}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl font-semibold">Nearby references</h3>
                {project.connectivity.length ? (
                  <ul className="mt-5 space-y-3">
                    {project.connectivity.map((c) => (
                      <li key={c.label} className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-3 text-sm">
                        <span className="leading-snug text-muted-foreground">{c.label}</span>
                        <span className="shrink-0 font-semibold">{c.distance}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 border-l-2 border-accent bg-stone-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    Nearby-distance bullets are not published for this project on the official site, so the page avoids estimated travel claims.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {hasGallery && (
        <section id="gallery" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Gallery"
                title={project.status === 'completed' ? 'Official project media.' : 'Project renders and plans.'}
                description="Images shown here are pulled into the redesign as local project assets, with unverified stock imagery removed."
              />
            </ScrollReveal>
            <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <StaggerItem key={img.src} className={cn(i === 0 && project.gallery.length > 2 && 'sm:col-span-2')}>
                  <figure className="group relative overflow-hidden border border-foreground/10 bg-background">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={cn(
                        'w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105',
                        i === 0 && project.gallery.length > 2 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      )}
                    />
                    {img.caption && (
                      <figcaption className="absolute bottom-0 left-0 bg-foreground/80 px-3 py-1.5 text-xs text-background">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* AMENITIES */}
      {hasAmenities && (
        <section id="amenities" className="border-b border-foreground/10 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading eyebrow="Amenities" title="What the community offers." />
            </ScrollReveal>
            <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.amenities.map((a) => (
                <StaggerItem key={a}>
                  <div className="group flex min-h-24 items-start gap-4 border border-foreground/10 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_18px_48px_-36px_hsl(var(--foreground)/0.4)]">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base font-semibold leading-snug">{a}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* SPECIFICATIONS */}
      {hasSpecifications && (
        <section id="specifications" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading eyebrow="Specifications" title="How it is built." />
            </ScrollReveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {project.specifications.map((spec) => (
                <ScrollReveal key={spec.category}>
                  <div className="h-full border border-foreground/10 bg-background p-6 shadow-[0_20px_70px_-52px_hsl(var(--foreground)/0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                        <Ruler className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-2xl font-semibold leading-tight">{spec.category}</h3>
                    </div>
                    <dl className="mt-6 space-y-5">
                      {spec.items.map((item) => (
                        <div key={item.label} className="border-b border-foreground/10 pb-5 last:border-b-0 last:pb-0">
                          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">{item.label}</dt>
                          <dd className="mt-2 text-[0.95rem] leading-7 text-muted-foreground">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FLOOR PLANS */}
      {hasFloorPlans && (
        <section id="floor-plans" className="border-b border-foreground/10 py-20 md:py-24">
          <div className="section-shell">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Floor plans"
                title="Representative layouts."
                description="Plan images are shown alongside the published unit table so buyers can compare size, type and orientation before enquiring."
              />
            </ScrollReveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.floorPlans.map((fp) => (
                <ScrollReveal key={fp.name}>
                  <div className="group overflow-hidden border border-foreground/10 bg-background">
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
                      <span className="text-sm font-semibold text-muted-foreground">{fp.area}</span>
                      <Link href="#visit" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                        Enquire
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Floor plan images shown are representative. Approved plans and RERA details are
              available with the sales team — request them before booking.
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      {hasFaqs && (
        <section id="faqs" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-24">
          <div className="section-shell max-w-3xl">
            <ScrollReveal>
              <SectionHeading eyebrow="FAQs" title="Questions about this project." />
            </ScrollReveal>
            <div className="mt-10 bg-background">
              <Accordion.Root type="single" collapsible className="divide-y divide-foreground/10 border border-foreground/10">
                {project.faqs.map((faq, i) => (
                  <Accordion.Item key={faq.question} value={`item-${i}`} className="overflow-hidden px-5">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold leading-snug transition-colors hover:text-accent">
                        {faq.question}
                        <span className="text-muted-foreground">+</span>
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
      )}

      {/* SCHEDULE VISIT */}
      <section id="visit" className="border-b border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">{project.status === 'completed' ? 'Project enquiry' : 'Book a visit'}</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                {visitTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {visitDescription}
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
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex min-h-64 flex-col border border-foreground/10 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_-48px_hsl(var(--foreground)/0.42)]"
              >
                <p className="flex items-start gap-2 text-sm font-medium leading-snug text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {p.location}
                </p>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight transition-colors group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground line-clamp-3">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  View project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
