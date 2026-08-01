'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { contactInfo } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

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
    'w-full bg-stone-50 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors';
  const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground';

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact our sales team."
        description="Questions about a project, a brochure, or a site visit? Reach the Yuva Group sales team directly."
      />
      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ScrollReveal>
              <h2 className="font-display text-2xl">Reach us</h2>
              <div className="mt-6 space-y-5 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{contactInfo.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span>{contactInfo.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span>{contactInfo.email}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Monday – Saturday, 10:00 – 18:00</span>
                </p>
              </div>
              <div className="mt-8 border border-foreground/10 p-5">
                <p className="eyebrow">Legal</p>
                <p className="mt-2 text-sm text-muted-foreground">{contactInfo.legalName}</p>
                <p className="text-sm text-muted-foreground">RERA: {contactInfo.rera}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <div className="glass rounded-sm border border-foreground/10 p-6 md:p-8">
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
                    <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-accent underline-offset-4 hover:underline">
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
                    <h3 className="font-display text-2xl">Send an enquiry</h3>
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
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-foreground/10">
        <div className="section-shell py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl">Find us on the map</h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Our projects span the southern Bengaluru corridor — from Electronic City to Attibele, Chandapura, Anekal Road, and Hosur Road.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-sm border border-foreground/10">
              <iframe
                title="Yuva Group project locations across south Bengaluru"
                src="https://www.google.com/maps?q=Electronic+City,+Bengaluru,+Karnataka&z=11&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
