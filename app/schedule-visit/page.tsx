// File purpose: Schedule a Site Visit page: what to expect and the booking form.
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { AnimatedUnderline } from '@/components/ui/animated-underline';
import { Calendar, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Schedule a Site Visit — Yuva Group',
  description:
    'Book a guided site visit to any Yuva Group residential development across south Bengaluru.',
};

// Temporary hero photo (Pexels). Swap to /photos/… once downloaded.
const heroImage =
  'https://images.pexels.com/photos/34538286/pexels-photo-34538286.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function ScheduleVisitPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Book a walkthrough"
        title="Schedule a site visit."
        description="Walk through a Yuva home with our sales team before you decide. Choose a project, pick a date, and we will confirm your visit within one working day."
      />
      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-3">Plan your visit</p>
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">What to expect</h2>
              <AnimatedUnderline className="mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                A visit is unhurried and guided — here is how the ninety minutes go.
              </p>
              <div className="mt-6 space-y-6 text-sm">
                <div className="flex gap-4">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">Guided walkthrough</p>
                    <p className="mt-1 text-muted-foreground">A sales team member walks you through the property, floor plans, and the neighbourhood.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">Any Yuva project</p>
                    <p className="mt-1 text-muted-foreground">Visit ongoing, ready-to-move, or completed developments — choose what suits your stage.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">Direct follow-up</p>
                    <p className="mt-1 text-muted-foreground">We confirm by phone within one working day. No automated call centres.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">No obligation</p>
                    <p className="mt-1 text-muted-foreground">A visit is a visit. Take your time, ask questions, and decide when you are ready.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border border-foreground/10 p-5 text-sm text-muted-foreground">
                Prefer to call? Reach us at <span className="text-foreground">{contactInfo.phone}</span>
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
    </>
  );
}
