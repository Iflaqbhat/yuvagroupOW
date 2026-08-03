// File purpose: Careers page: photo hero, why-work points, the open roles exactly as
// listed on yuvagroup.in/careers/ (qualification chips, experience, one-click
// apply-by-email), and a charcoal CTA band for candidates outside the listed roles.
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedUnderline } from '@/components/ui/animated-underline';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { contactInfo } from '@/data/navigation';
import {
  Mail,
  ArrowUpRight,
  GraduationCap,
  Clock,
  Sparkles,
  Building2,
  HardHat,
  TrendingUp,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers — Yuva Group',
  description:
    'Open positions at Yuva Group, Bengaluru — Sales Executive, Civil Engineer, CRM Executive, and Accounts Executive. Apply with your profile today.',
};

// Hero + site photos — saved locally (were Pexels placeholders).
const heroImage = '/photos/hero/careers-hero.avif';
const siteImage = '/photos/careers/life-at-site.avif';

type Opening = {
  title: string;
  qualifications: string[];
  desired?: string;
  experience: string;
};

// Open roles exactly as listed on the yuvagroup.in careers page.
const openings: Opening[] = [
  {
    title: 'Executive / Sr. Executive – Sales',
    qualifications: ['Any Degree', 'MBA'],
    desired: 'Communication skills',
    experience: '2+ years',
  },
  {
    title: 'Engineer / Sr. Engineer',
    qualifications: ['BE – Civil'],
    experience: '4+ years',
  },
  {
    title: 'Executive / Sr. Executive / CRM',
    qualifications: ['Any Degree', 'MBA'],
    experience: '3+ years',
  },
  {
    title: 'Sr. Executive – Accounts',
    qualifications: ['B.Com', 'MBA', 'M.Com'],
    desired: 'Exposure on core accounting process',
    experience: '2+ years',
  },
];

const applyHref = (title: string) =>
  `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `Application — ${title}`,
  )}&body=${encodeURIComponent(
    `Hi Yuva Group,\n\nI would like to apply for the "${title}" position.\n\nName:\nPhone:\nCurrent role:\n\nMy resume is attached.\n\nThank you.`,
  )}`;

const perks = [
  {
    icon: Building2,
    title: 'Work on real projects',
    text: 'Every role sits beside live developments — sales, engineering, and accounts in one loop with the team that builds.',
  },
  {
    icon: HardHat,
    title: 'Hands-on from day one',
    text: 'No long ramp-ups. You work with the people on site and learn the craft of building homes first-hand.',
  },
  {
    icon: TrendingUp,
    title: 'Grow as we grow',
    text: 'A small team means your work is visible, your ideas are heard, and your growth is concrete.',
  },
  {
    icon: MapPin,
    title: 'South Bengaluru base',
    text: 'Roles are based at our Chandapura office and across project sites on the city’s southern corridor.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Careers"
        title="Build more than buildings."
        description="We are hiring across sales, engineering, CRM, and accounts. Join a team that believes in empowering talent — where your ideas are valued and your growth is the priority."
      />

      {/* WHY WORK WITH US — four icon cards, staggered reveal */}
      <section className="section-shell py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Yuva"
            title="Work where things get built."
            description="Yuva is a builder’s company — small enough to stay hands-on, established enough to take on long-term projects across the city."
          />
          <AnimatedUnderline className="mt-6" />
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full border border-foreground/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.25)]">
                <span className="flex h-11 w-11 items-center justify-center border border-foreground/10 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* A TEAM OF BUILDERS — photo + text split for a premium mid-page break */}
      <section className="border-y border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell grid items-center gap-12 md:grid-cols-12">
          <ScrollReveal className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 border border-foreground/15" aria-hidden />
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-foreground/15">
                <Image
                  src={siteImage}
                  alt="A construction worker in safety gear on a Yuva site"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">A team of builders</p>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Your work shows up in homes people live in.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                From the first site meeting to handover, Yuva teams see a project through as one
                group — design, construction, sales, and accounts in the same room, on the same
                plan.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Design, construction, and sales under one roof',
                  'Long-term projects on Bengaluru’s southern corridor',
                  'Direct reporting — your work is seen, not lost in layers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS — divided list with staggered rows */}
      <section className="section-shell py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Open positions"
            title="Current openings."
            description="All roles are based at our Bengaluru office and across project sites on the city's southern corridor."
          />
        </ScrollReveal>

        <StaggerGroup className="mt-12 divide-y divide-foreground/10 border border-foreground/10" stagger={0.06}>
          {openings.map((o, i) => (
            <StaggerItem key={o.title}>
              <div className="group flex flex-col gap-6 bg-card p-6 transition-colors duration-300 hover:bg-stone-50 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
                <div className="flex min-w-0 gap-5">
                  <span className="mt-1 font-display text-sm tabular-nums text-muted-foreground/50 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                      </span>
                      <h3 className="font-display text-xl transition-colors duration-300 group-hover:text-accent md:text-2xl">
                        {o.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/15 bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {o.qualifications.join(' / ')}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/15 bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {o.experience}
                      </span>
                      {o.desired && (
                        <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/25 bg-accent/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                          <Sparkles className="h-3.5 w-3.5" />
                          {o.desired}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  href={applyHref(o.title)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  Apply now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* PROFILE CTA — charcoal band, for candidates outside the listed roles */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              invert
              size="lg"
              align="center"
              eyebrow="Always listening"
              title="Don’t see an open role?"
              description="We are always looking for architects, engineers, project managers, and sales professionals who care about how homes are built. Share your resume and a short note on what you would bring to Yuva Group."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-10 text-center">
            <a
              href={applyHref('Open Application')}
              className="group inline-flex items-center gap-2 bg-background px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
