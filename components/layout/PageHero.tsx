// File purpose: Reusable hero at the top of inner pages (eyebrow, title, description).
// Image mode = the shared photography hero system (the About page is the benchmark): full-bleed
// image with a cinematic scrim, oversized display type, a staggered entrance (label → heading →
// description → CTA), a slow Ken-Burns settle, and a scroll cue. Light mode keeps the grid
// banner but shares the same height, spacing, and typography so every internal page feels
// like one system.
//
// Height: the section fills the full viewport (min-h-screen = 100vh) on every page. The copy
// sits inside a consistent visual window so short titles land in the same place as About.
// The animated underline lives under the first content-section heading of each page.
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        'relative flex overflow-hidden',
        image
          ? 'min-h-screen items-end bg-charcoal'
          : 'min-h-[72vh] items-center border-b border-foreground/10 bg-secondary pt-20'
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          {/* Slow, barely-there settle so the photo feels alive without stealing attention */}
          <motion.div
            className="absolute inset-0 will-change-transform"
            initial={{ scale: reduceMotion ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 16, ease: 'easeOut' }}
          >
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover object-center contrast-[1.05] saturate-[1.05]"
              sizes="100vw"
            />
          </motion.div>
          {/* Cinematic scrim stack — strong at the bottom where the text sits, breathing at the top */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/35" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
      )}
      <div className={cn('section-shell relative', image ? 'py-16 md:py-28' : 'py-14 md:py-20')}>
        {/* Each child carries its own delay so the sequence is always label → heading → description → CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: {} }}
          className={cn(image && 'min-h-[26rem] max-w-4xl md:min-h-[27rem]')}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className={cn('eyebrow mb-6', image && '!text-background/90')}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.12 } },
            }}
            className={cn(
              'max-w-4xl font-display font-extrabold leading-[1.02]',
              image ? 'text-6xl text-background md:text-8xl' : 'text-5xl md:text-7xl'
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.3 } },
              }}
              className={cn(
                'mt-8 max-w-2xl text-lg leading-relaxed md:text-xl',
                image ? 'text-background/75' : 'text-muted-foreground'
              )}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.45 } },
              }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
      {image && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onClick={(e) => {
            // Scroll to the content right below the hero; fall back to one
            // gentle viewport step if no next section exists.
            const heroSection = (e.currentTarget as HTMLElement).closest('section');
            const next = heroSection?.nextElementSibling;
            if (next instanceof HTMLElement) {
              next.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
          className="absolute bottom-6 left-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-background/40 text-background/80 transition-colors duration-300 hover:border-background/70 hover:text-background md:bottom-8"
          aria-label="Scroll down to content"
        >
          <motion.span
            animate={reduceMotion ? {} : { y: [0, 5, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      )}
    </section>
  );
}
