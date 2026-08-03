// File purpose: Site visit booking form: checks name, phone, email, project and date, then shows a success message.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { projects } from '@/data/projects';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function SiteVisitForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const project = data.get('project') as string;
    const date = data.get('date') as string;
    const consent = data.get('consent');

    const errs: Record<string, string> = {};
    if (!name || name.length < 2) errs.name = 'Please enter your full name.';
    if (!phone || !/^[0-9+\-\s]{8,15}$/.test(phone)) errs.phone = 'Enter a valid phone number.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (!project) errs.project = 'Select a project to visit.';
    if (!date) errs.date = 'Choose a preferred date.';
    if (!consent) errs.consent = 'Please accept to be contacted.';

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
    <div className={compact ? '' : 'glass rounded-sm border border-foreground/10 p-6 md:p-8'}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-emerald" />
            <h3 className="mt-4 font-display text-2xl">Visit request received</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thank you. Our sales team will contact you within one working day to confirm your
              site visit.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
            >
              Submit another request
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
            <div className={compact ? '' : 'mb-2'}>
              <h3 className="font-display text-2xl">Schedule a Site Visit</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a guided walkthrough of any Yuva Group development.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input id="name" name="name" type="text" className={fieldClass} placeholder="Your name" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" name="email" type="email" className={fieldClass} placeholder="you@email.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="project" className={labelClass}>Preferred Project</label>
                <select id="project" name="project" className={fieldClass} defaultValue="">
                  <option value="" disabled>Select a project</option>
                  {projects.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.name} — {p.location}</option>
                  ))}
                </select>
                {errors.project && <p className="mt-1 text-xs text-destructive">{errors.project}</p>}
              </div>
              <div>
                <label htmlFor="date" className={labelClass}>Preferred Date</label>
                <input id="date" name="date" type="date" className={fieldClass} />
                {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="time" className={labelClass}>Preferred Time (optional)</label>
              <select id="time" name="time" className={fieldClass} defaultValue="">
                <option value="">Any time</option>
                <option value="morning">Morning (10:00 – 12:00)</option>
                <option value="afternoon">Afternoon (12:00 – 15:00)</option>
                <option value="evening">Evening (15:00 – 18:00)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Message (optional)</label>
              <textarea id="message" name="message" rows={3} className={fieldClass} placeholder="Any specific questions or requirements" />
            </div>

            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-accent" />
              <span>
                I agree to be contacted by Yuva Group regarding my enquiry. Read our{' '}
                <Link href="/privacy" className="text-accent underline underline-offset-2 hover:opacity-80">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="smart-gradient flex w-full items-center justify-center gap-2 rounded-md py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.18)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                'Request Site Visit'
              )}
            </button>

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
