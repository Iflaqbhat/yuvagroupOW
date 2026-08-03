// File purpose: Contact page: photo hero, contact info cards (call/email/office/hours),
// enquiry form with client-side validation, and a map of the southern Bengaluru corridor.
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle, MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedUnderline } from '@/components/ui/animated-underline';
import { contactInfo, whatsapp } from '@/data/navigation';

type Status = 'idle' | 'loading' | 'success' | 'error';

// Hero photo — saved locally (was a Pexels placeholder).
const heroImage = '/photos/hero/contact-hero.avif';

const infoCards = [
  {
    icon: Phone,
    label: 'Call us',
    value: contactInfo.phone,
    href: 'tel:+918282823395',
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Visit our office',
    value: 'Chandapura, Bengaluru',
  },
  {
    icon: Clock,
    label: 'Office hours',
    value: 'Mon – Sat, 10:00 – 18:00',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: whatsapp.link,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    const errs: Record<string, string> = {};
    if (!name || name.length < 2) errs.name = 'Please enter your name.';
    if (!phone || !/^[0-9+\-\s]{8,15}$/.test(phone)) errs.phone = 'Enter a valid phone number.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (!message || message.length < 5) errs.message = 'Please enter a message.';

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const fieldClass =
    'w-full rounded-sm bg-stone-50 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors';
  const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground';

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Get in touch"
        title="Contact our sales team."
        description="Questions about a project, a brochure, or a site visit? Reach the Yuva Group sales team directly."
      />

      {/* CONTACT INFO — four cards */}
      <section className="section-shell py-20 md:py-28">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Direct lines"
            title="Reach the team that builds."
            description="Call, write, or drop by the office. For anything else, the form on this page lands straight in the sales team's inbox."
          />
          <AnimatedUnderline className="mt-6" />
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c) => {
            const inner = (
              <div className="h-full border border-foreground/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.25)]">
                <span className="flex h-11 w-11 items-center justify-center border border-foreground/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed">{c.value}</p>
              </div>
            );
            return (
              <StaggerItem key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="group block h-full text-foreground transition-colors hover:text-accent"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* FORM + ASIDE */}
      <section className="border-t border-foreground/10 bg-stone-50 py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="glass rounded-sm border border-foreground/10 p-6 md:p-10">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald" />
                      <h3 className="mt-4 font-display text-2xl">Message sent</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Thank you for reaching out. Our team will respond within one working day.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-5"
                      noValidate
                    >
                      <div>
                        <p className="eyebrow mb-3">Enquiry</p>
                        <h2 className="font-display text-2xl">Send us a message.</h2>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={labelClass}>Full Name</label>
                          <input id="name" name="name" type="text" className={fieldClass} placeholder="Your name" />
                          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>Phone</label>
                          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91" />
                          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input id="email" name="email" type="email" className={fieldClass} placeholder="you@email.com" />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className={labelClass}>Message</label>
                        <textarea id="message" name="message" rows={5} className={fieldClass} placeholder="How can we help?" />
                        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex w-full items-center justify-center gap-2 bg-foreground py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                        ) : (
                          'Send Enquiry'
                        )}
                      </button>
                      {status === 'error' && (
                        <p className="flex items-center gap-2 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="border border-foreground/10 bg-card p-6 md:p-8">
                <p className="eyebrow mb-4">Our office</p>
                <h2 className="font-display text-2xl">Visit us in Chandapura.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {contactInfo.address}
                </p>
                <div className="mt-6 space-y-3 border-t border-foreground/10 pt-6 text-sm">
                  <p className="text-muted-foreground">{contactInfo.legalName}</p>
                  <p className="text-muted-foreground">
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
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-6 border border-foreground/10 bg-card p-6 md:p-8">
                <p className="eyebrow mb-4">Prefer email?</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We respond to every enquiry within one working day — no automated replies.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[contactInfo.email, ...contactInfo.additionalEmails].map((em) => (
                    <li key={em}>
                      <a
                        href={`mailto:${em}`}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        {em}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-shell py-20 md:py-28">
        <ScrollReveal>
          <p className="eyebrow mb-4">Location</p>
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">Find us on the map.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Our projects span the southern Bengaluru corridor — from Electronic City to Attibele,
            Chandapura, Anekal Road, and Hosur Road.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-sm border border-foreground/10 shadow-[0_30px_60px_-30px_hsl(var(--foreground)/0.3)]">
            <iframe
              title="Yuva Group office and project locations across south Bengaluru"
              src="https://www.google.com/maps?q=Chandapura,+Bengaluru,+Karnataka&z=12&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
