'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { footerNav, contactInfo } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 bg-stone-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />
      <div className="section-shell relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex" aria-label="Yuva Group home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Yuva Group" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Yuva Structures Pvt. Ltd. — building premium and affordable homes across south
              Bengaluru with a focus on architectural quality, dependable delivery, and long-term
              value.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {contactInfo.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {contactInfo.email}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Projects</p>
            <ul className="space-y-2">
              {footerNav.projects.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Resources</p>
            <ul className="space-y-2">
              {footerNav.resources.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Visit Us</p>
            <p className="text-sm text-muted-foreground">
              Book a guided walkthrough of any Yuva Group development.
            </p>
            <Link
              href="/schedule-visit"
              className="group mt-4 inline-flex items-center gap-2 border border-foreground/20 px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Calendar className="h-4 w-4" />
              Schedule Visit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {contactInfo.legalName}. All rights reserved.
          </p>
          <p>
            RERA:{' '}
            <a
              href={contactInfo.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {contactInfo.rera}
            </a>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
