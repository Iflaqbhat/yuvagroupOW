'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

const statusLabel: Record<Project['status'], string> = {
  'ongoing': 'Under Construction',
  'ready-to-move': 'Ready to Move',
  'completed': 'Completed',
};

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);
  const glowBg = useMotionTemplate`radial-gradient(circle 200px at ${glowX} ${glowY}, hsl(var(--accent) / 0.12), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-foreground/10 bg-card transition-all duration-500 hover:border-foreground/20 hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.25)]"
    >
      {/* Spotlight glow following cursor */}
      <motion.div
        style={{ background: glowBg }}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.12] group-hover:brightness-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent transition-opacity duration-500 group-hover:from-foreground/80" />

        {/* Status badge */}
        <span
          className={cn(
            'absolute left-4 top-4 z-30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] backdrop-blur transition-transform duration-500 group-hover:-translate-y-0.5',
            project.status === 'ready-to-move'
              ? 'bg-emerald text-background'
              : project.status === 'ongoing'
              ? 'bg-accent text-accent-foreground'
              : 'bg-background/90 text-foreground'
          )}
        >
          {statusLabel[project.status]}
        </span>

        {/* Hover overlay — slides up over the image on hover (no layout shift) */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-foreground/95 via-foreground/85 to-foreground/40 backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-wrap gap-2">
              {project.highlights.slice(0, 3).map((h) => (
                <span
                  key={h.label}
                  className="border border-background/25 bg-background/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-background backdrop-blur"
                >
                  {h.label}: <span className="font-medium">{h.value}</span>
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="group/btn inline-flex flex-1 items-center justify-center gap-2 bg-background px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                View Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
              <Link
                href="/schedule-visit"
                className="group/btn inline-flex flex-1 items-center justify-center gap-2 border border-background/40 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-all duration-300 hover:border-background hover:bg-background/10"
              >
                <Calendar className="h-3.5 w-3.5" />
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Accent sweep line at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100" />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        {/* Left accent bar that grows on hover */}
        <div className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-y-100" />

        <div className="flex items-center justify-between">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-display text-xl tracking-tight transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h3>
          </Link>
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-accent" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="mt-4 flex items-center gap-4 border-t border-foreground/10 pt-4 text-xs text-muted-foreground">
            <span>{project.bedrooms}</span>
            <span className="h-3 w-px bg-foreground/15" />
            <span>{project.category}</span>
            {project.possession && (
              <>
                <span className="h-3 w-px bg-foreground/15" />
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.possession}
                </span>
              </>
            )}
          </div>

          {/* Touch fallback — always-visible actions on coarse-pointer devices (no hover) */}
          <div className="coarse-only mt-4 gap-3 border-t border-foreground/10 pt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex flex-1 items-center justify-center gap-2 bg-foreground px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              View Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/schedule-visit"
              className="inline-flex flex-1 items-center justify-center gap-2 border border-foreground/20 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Calendar className="h-3.5 w-3.5" />
              Schedule Visit
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
