// File purpose: Homepage full-bleed video hero.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          style={{ filter: 'brightness(1.12) contrast(1.18) saturate(1.18)' }}
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-charcoal/15" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-transparent" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="section-shell relative z-10 pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 text-xs uppercase tracking-[0.25em] text-white/80"
          >
            Yuva Structures Pvt. Ltd. · Bengaluru
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-4xl leading-[1.04] text-white sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Homes built with
            <br />
            <span className="text-white">architectural intent.</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/85"
          >
            Premium and affordable apartments, villas, and residential communities across south
            Bengaluru — from Electronic City to Attibele, Chandapura, and Anekal Road.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="smart-action group inline-flex w-full items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground shadow-[0_12px_35px_hsl(var(--accent)/0.28)] sm:w-auto"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/schedule-visit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Schedule a Site Visit
            </Link>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/75"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sun" />
            {projects.filter((p) => p.status !== 'completed').length} ongoing & ready-to-move projects
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: -6, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => {
          const heroSection = (e.currentTarget as HTMLElement).closest('section');
          const next = heroSection?.nextElementSibling;
          if (next instanceof HTMLElement) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-charcoal/55 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 hover:border-white/70"
        aria-label="Scroll down to content"
      >
        <ArrowDown className="h-4 w-4 animate-bounce text-white" />
      </motion.button>
    </section>
  );
}
