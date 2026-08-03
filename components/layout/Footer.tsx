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
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />
      <div className="section-shell relative py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex" aria-label="Yuva Group home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Yuva Group" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/72">
              Yuva Structures Pvt. Ltd. — building premium and affordable homes across south
              Bengaluru with a focus on architectural quality, dependable delivery, and long-term
              value.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-background/72">
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
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-background/15 text-background/72 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
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
                    <Link href={l.href} className="text-sm text-background/72 transition-colors hover:text-accent">
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
                    <Link href={l.href} className="text-sm text-background/72 transition-colors hover:text-accent">
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
                    <Link href={l.href} className="text-sm text-background/72 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 sm:border-t-0 sm:pt-0 lg:col-span-2">
            <p className="eyebrow mb-4">Visit Us</p>
            <p className="text-sm text-background/72">
              Book a guided walkthrough of any Yuva Group development.
            </p>
            <Link
              href="/schedule-visit"
              className="group mt-4 inline-flex items-center gap-2 rounded-md border border-background/20 px-4 py-2.5 text-sm font-bold text-background transition-colors hover:border-accent hover:text-accent"
            >
              <Calendar className="h-4 w-4" />
              Schedule Visit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-background/15 pt-6 text-xs text-background/60 md:grid-cols-[1fr_auto_auto] md:items-center">
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
