// File purpose: Focused enquiry call-to-action used inside project detail pages.
import Link from 'next/link';
import { ArrowUpRight, Calendar, MessageCircle, Phone } from 'lucide-react';
import type { Project } from '@/types';
import { contactInfo, whatsapp } from '@/data/navigation';

const primaryPhone = contactInfo.phone.split('/')[0]?.trim() ?? contactInfo.phone;
const phoneHref = `tel:${primaryPhone.replace(/[^\d+]/g, '')}`;

export function ProjectEnquiryStrip({ project }: { project: Project }) {
  const isCompleted = project.status === 'completed';

  return (
    <section className="border-b border-foreground/10 bg-accent/5 py-12 md:py-16">
      <div className="section-shell">
        <div className="grid gap-8 rounded-md border border-accent/15 bg-background p-6 text-foreground shadow-[0_24px_65px_-48px_hsl(var(--foreground)/0.45)] md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              {isCompleted ? 'Project enquiry' : 'Plan a walkthrough'}
            </p>
            <h2 className="font-display text-2xl font-semibold leading-tight md:text-4xl">
              {isCompleted ? `Need current options for ${project.name}?` : `Interested in ${project.name}?`}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              {isCompleted
                ? 'Ask the sales team about current resale, rental, documentation, or availability details before making a decision.'
                : 'Share the configuration you like, confirm current availability, and book a guided site visit with the Yuva Group sales team.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href={isCompleted ? '/contact' : '/schedule-visit'}
              className="smart-action inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.18)]"
            >
              <Calendar className="h-4 w-4" />
              {isCompleted ? 'Contact Sales' : 'Schedule Visit'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/15 bg-background px-5 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/15 bg-background px-5 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
