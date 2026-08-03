// File purpose: Reusable hero at the top of inner pages (eyebrow, title, description).
// With an `image` it renders the full-bleed photography hero used on About (cinematic
// scrim, oversized display type, white text); without one it keeps the light grid banner.
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <section
      className={cn(
        'relative flex overflow-hidden',
        image
          ? 'min-h-screen items-end bg-charcoal'
          : 'min-h-[60vh] items-end border-b border-foreground/10 bg-stone-50 pt-32'
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic scrim stack — strong at the bottom where the text sits, photo breathing at the top */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-charcoal to-transparent" />
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
      <div className={cn('section-shell relative', image ? 'py-24 md:py-32' : 'py-16 md:py-24')}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className={cn(image && 'max-w-4xl')}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className={cn('eyebrow mb-5', image && '!text-background/90')}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className={cn(
              'font-display leading-[1.02] tracking-tight',
              image
                ? 'max-w-4xl text-5xl text-background md:text-7xl'
                : 'text-4xl leading-[1.05] md:text-6xl'
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className={cn(
                'mt-6 text-lg leading-relaxed md:text-xl',
                image ? 'max-w-2xl text-background/75' : 'max-w-xl text-muted-foreground'
              )}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
