// File purpose: Standard project card used in grids and lists — lifted hover, whole card links to the project page.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-foreground/10 bg-card transition-all duration-500 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.08)]"
    >
      {/* The whole card links to the project page */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name}`}
        className="absolute inset-0 z-30"
      />

      <div className="relative aspect-[16/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:brightness-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/62 via-foreground/8 to-transparent transition-opacity duration-500 group-hover:from-foreground/72" />

        <div className="absolute bottom-4 right-4 z-10">
          <span className="flex h-10 w-10 translate-y-2 items-center justify-center bg-background text-foreground opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <span className="smart-gradient mb-5 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20" aria-hidden />
        <h3 className="font-display text-2xl font-bold leading-tight tracking-normal transition-colors duration-300 group-hover:text-accent md:text-[1.9rem]">
          {project.name}
        </h3>
        <p className="mt-3 flex items-start gap-2 text-[0.95rem] font-semibold leading-6 text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          {project.location}
        </p>
        <p className="mt-5 min-h-[5.75rem] border-t border-foreground/10 pt-5 text-[0.98rem] font-medium leading-7 text-foreground/72 line-clamp-3">
          {project.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-foreground transition-colors group-hover:text-accent">
          View project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.div>
  );
}
