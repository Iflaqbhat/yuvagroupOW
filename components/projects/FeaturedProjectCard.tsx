// File purpose: Larger featured project card for the homepage — subtle tilt on hover, whole card links to the project page.
'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

const statusLabel: Record<Project['status'], string> = {
  'ongoing': 'Under Construction',
  'ready-to-move': 'Ready to Move',
  'completed': 'Completed',
};

export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), { stiffness: 180, damping: 20 });

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
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-foreground/10 bg-card transition-all duration-500 hover:border-foreground/25 hover:shadow-[0_24px_70px_-20px_hsl(var(--foreground)/0.3)]"
    >
      {/* The whole card links to the project page */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name}`}
        className="absolute inset-0 z-30"
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.15] group-hover:brightness-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent transition-opacity duration-500 group-hover:from-foreground/85" />

        {/* Status badge */}
        <span
          className={cn(
            'absolute left-4 top-4 z-20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] backdrop-blur transition-transform duration-500 group-hover:-translate-y-0.5',
            project.status === 'ready-to-move'
              ? 'bg-emerald text-background'
              : project.status === 'ongoing'
              ? 'bg-accent text-accent-foreground'
              : 'bg-background/90 text-foreground'
          )}
        >
          {statusLabel[project.status]}
        </span>

        {/* Hover overlay — highlight chips slide up over the image (no layout shift) */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-foreground/95 via-foreground/85 to-foreground/40 backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          <div className="flex flex-wrap gap-2 p-5">
            {project.highlights.slice(0, 3).map((h) => (
              <span
                key={h.label}
                className="border border-background/25 bg-background/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-background backdrop-blur"
              >
                {h.label}: <span className="font-medium">{h.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            0{index + 1}
          </span>
          <h3 className="mt-1 font-display text-2xl tracking-tight">{project.name}</h3>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
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
        </div>
      </div>
    </motion.div>
  );
}
