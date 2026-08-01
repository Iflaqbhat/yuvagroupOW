import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { contactInfo } from '@/data/navigation';
import { Mail, ArrowUpRight, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers — Yuva Group',
  description:
    'Build a career with Yuva Group — a Bengaluru real-estate developer looking for architects, engineers, sales professionals, and project managers.',
};

const areas = [
  { icon: Briefcase, title: 'Project Management', text: 'Plan, schedule, and supervise delivery across our ongoing developments.' },
  { icon: GraduationCap, title: 'Architecture & Design', text: 'Shape the floor plans, materials, and shared spaces that define a Yuva home.' },
  { icon: HeartHandshake, title: 'Sales & Customer Relations', text: 'Guide homebuyers from first enquiry through handover and beyond.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Build your career with Yuva Group."
        description="We are always looking for architects, engineers, project managers, and sales professionals who care about how homes are built."
      />
      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <div className="h-full border border-foreground/10 p-6">
                <a.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-display text-lg">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 border border-foreground/10 bg-stone-50 p-8 text-center md:p-12">
            <h2 className="font-display text-2xl md:text-3xl">Send us your profile</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              We do not always post open roles publicly. If you would like to be considered,
              share your resume and a short note on what you would bring to Yuva Group.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="group mt-6 inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
