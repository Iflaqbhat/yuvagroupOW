// File purpose: Filterable project grid (by status and type) used on the projects pages.
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

type StatusFilter = 'all' | Project['status'];
type CategoryFilter = 'all' | Project['category'];

const categoryLabel: Record<Project['category'], string> = {
  apartments: 'Apartments',
  villas: 'Villas',
  plotted: 'Plotted',
  commercial: 'Commercial',
};

export function ProjectsExplorer({
  projects,
  activeStatus = 'all',
  statusNavigation = false,
}: {
  projects: Project[];
  activeStatus?: StatusFilter;
  statusNavigation?: boolean;
}) {
  const [localStatus, setLocalStatus] = useState<StatusFilter>(activeStatus);
  const [category, setCategory] = useState<CategoryFilter>('all');
  const status = statusNavigation ? activeStatus : localStatus;

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (status !== 'all' && p.status !== status) return false;
      if (category !== 'all' && p.category !== category) return false;
      return true;
    });
  }, [projects, status, category]);

  const statusFilters: { label: string; value: StatusFilter; href: string }[] = [
    { label: 'All', value: 'all', href: '/projects' },
    { label: 'Ongoing', value: 'ongoing', href: '/ongoing-projects' },
    { label: 'Ready to Move', value: 'ready-to-move', href: '/ready-to-move-projects' },
    { label: 'Completed', value: 'completed', href: '/completed-projects' },
  ];
  const categoryFilters: { label: string; value: CategoryFilter }[] = [
    { label: 'All Types', value: 'all' },
    ...Array.from(new Set(projects.map((p) => p.category))).map((value) => ({
      label: categoryLabel[value],
      value,
    })),
  ];

  const chipClass = (active: boolean) =>
    cn(
      'inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300',
      active
        ? 'smart-gradient text-accent-foreground shadow-[0_10px_25px_hsl(var(--accent)/0.18)]'
        : 'border border-foreground/15 bg-background text-muted-foreground hover:border-accent/35 hover:text-foreground'
    );

  return (
    <div>
      <div className="mb-8 grid gap-5 rounded-md border border-accent/15 bg-background p-5 shadow-[0_18px_45px_hsl(var(--foreground)/0.05)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Project stage
          </p>
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((f) =>
              statusNavigation ? (
                <Link
                  key={f.value}
                  href={f.href}
                  aria-current={status === f.value ? 'page' : undefined}
                  className={chipClass(status === f.value)}
                >
                  {f.label}
                </Link>
              ) : (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setLocalStatus(f.value)}
                  className={chipClass(status === f.value)}
                >
                  {f.label}
                </button>
              ),
            )}
          </div>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:text-right">
            Type
          </p>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setCategory(f.value)}
                className={chipClass(category === f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-2">Project list</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} available.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
          Use the filters above to compare by construction stage and property type.
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No projects match these filters.</p>
      ) : (
        <motion.div
          layout
          className="grid gap-7 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -12 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
