// File purpose: Footer: logo, company description, contact details, and link columns.
'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail, Calendar, Facebook, Instagram, Youtube, Linkedin, type LucideIcon } from 'lucide-react';
import { footerNav, contactInfo, socialLinks } from '@/data/navigation';

const socialIcons: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  Youtube,
  LinkedIn: Linkedin,
  Linkedin,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 bg-secondary text-foreground">
      <div className="smart-gradient absolute inset-x-0 top-0 h-1" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />
      <div className="section-shell relative py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex rounded-md border border-foreground/10 bg-background p-2 shadow-[0_12px_35px_hsl(var(--foreground)/0.06)]"
              aria-label="Yuva Group home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Yuva Group" className="h-12 w-auto object-contain md:h-14" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Yuva Structures Pvt. Ltd. — building premium and affordable homes across south
              Bengaluru with a focus on architectural quality, dependable delivery, and long-term
              value.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <p className="flex max-w-md items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {contactInfo.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {contactInfo.email}
              </p>
              {contactInfo.additionalEmails.map((em) => (
                <p key={em} className="flex items-center gap-3">
                  <span className="h-4 w-4 shrink-0" aria-hidden />
                  {em}
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.label] ?? Facebook;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — Yuva Group`}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-foreground/10 bg-background text-accent shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <p className="eyebrow mb-4">Projects</p>
              <ul className="space-y-2">
                {footerNav.projects.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Company</p>
              <ul className="space-y-2">
                {footerNav.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Resources</p>
              <ul className="space-y-2">
                {footerNav.resources.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Visit Us</p>
            <p className="max-w-52 text-sm font-medium leading-7 text-muted-foreground">
              Book a guided walkthrough of any Yuva Group development.
            </p>
            <Link
              href="/schedule-visit"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-accent"
            >
              <span className="smart-gradient flex h-10 w-10 items-center justify-center rounded-md text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.16)] transition-transform group-hover:-translate-y-0.5">
                <Calendar className="h-4 w-4" />
              </span>
              <span>Schedule Visit</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground md:grid-cols-[1fr_auto_auto] md:items-center">
          <p>
            © {new Date().getFullYear()} {contactInfo.legalName}. All rights reserved.
          </p>
          <p className="md:text-center">
            RERA:{' '}
            <a
              href={contactInfo.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              {contactInfo.rera}
            </a>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
