'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

type StatusFilter = 'all' | Project['status'];
type CategoryFilter = 'all' | Project['category'];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [status, setStatus] = useState<StatusFilter>('all');
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (status !== 'all' && p.status !== status) return false;
      if (category !== 'all' && p.category !== category) return false;
      return true;
    });
  }, [projects, status, category]);

  const statusFilters: { label: string; value: StatusFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Ready to Move', value: 'ready-to-move' },
    { label: 'Completed', value: 'completed' },
  ];
  const categoryFilters: { label: string; value: CategoryFilter }[] = [
    { label: 'All Types', value: 'all' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'Villas', value: 'villas' },
    { label: 'Plotted', value: 'plotted' },
    // 'Commercial' filter removed — no commercial projects are listed on this site; the
    // real business does commercial/mixed-use work (see About page), but it has no projects here.
  ];

  const chipClass = (active: boolean) =>
    cn(
      'px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300',
      active
        ? 'bg-foreground text-background'
        : 'border border-foreground/15 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
    );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 border-b border-foreground/10 pb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatus(f.value)}
              className={chipClass(status === f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setCategory(f.value)}
              className={chipClass(category === f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No projects match these filters.</p>
      ) : (
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
