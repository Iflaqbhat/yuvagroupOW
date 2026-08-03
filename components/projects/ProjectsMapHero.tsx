// File purpose: Projects page header with clear buyer-stage navigation.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, CheckCircle2, Clock3 } from 'lucide-react';
import { projects } from '@/data/projects';
import type { ProjectStatus } from '@/types';

const statusLabel: Record<ProjectStatus, string> = {
  'ongoing': 'Ongoing',
  'ready-to-move': 'Ready to Move',
  completed: 'Completed',
};

const statusDescription: Record<ProjectStatus, string> = {
  ongoing: 'Projects currently under construction.',
  'ready-to-move': 'Finished homes available for immediate possession.',
  completed: 'Delivered communities that show Yuva Group’s track record.',
};

const statusHref: Record<ProjectStatus, string> = {
  ongoing: '/ongoing-projects',
  'ready-to-move': '/ready-to-move-projects',
  completed: '/completed-projects',
};

const statusIcon: Record<ProjectStatus, typeof Clock3> = {
  ongoing: Clock3,
  'ready-to-move': Building2,
  completed: CheckCircle2,
};

export function ProjectsMapHero() {
  const stageCards = (['ongoing', 'ready-to-move', 'completed'] as ProjectStatus[]).map((status) => ({
    status,
    count: projects.filter((project) => project.status === status).length,
  }));

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden border-b border-foreground/10 bg-background pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <div className="section-shell relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.72fr)]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="eyebrow mb-6"
          >
            Our developments
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl"
          >
            Find your next Yuva home.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Browse Yuva Group’s ongoing, ready-to-move, and completed residential projects across
            Electronic City, Attibele, Chandapura, Hosur Road, and Anekal Road.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#project-list"
              className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View project list
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ready-to-move-projects"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ready to move homes
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="border border-foreground/10 bg-card p-5 shadow-[0_24px_80px_-48px_hsl(var(--foreground)/0.35)] md:p-6"
        >
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
            <div>
              <p className="eyebrow mb-2">Browse by stage</p>
              <p className="font-display text-3xl font-semibold leading-none">{projects.length} projects</p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
              All
            </Link>
          </div>

          <div className="grid gap-3">
            {stageCards.map(({ status, count }) => {
              const Icon = statusIcon[status];
              return (
                <Link
                  key={status}
                  href={statusHref[status]}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-foreground/10 p-4 transition-all duration-300 hover:border-accent/35 hover:bg-stone-50"
                >
                  <span className="flex h-11 w-11 items-center justify-center bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold leading-tight">
                      {statusLabel[status]}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {statusDescription[status]}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block font-display text-3xl leading-none">{count}</span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Projects
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
