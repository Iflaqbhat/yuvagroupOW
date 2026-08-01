import type { Metadata } from 'next';
import { ProjectsMapHero } from '@/components/projects/ProjectsMapHero';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects — Yuva Group Bengaluru',
  description:
    'Explore all Yuva Group residential projects across south Bengaluru — apartments, villas, and plotted developments in Electronic City, Attibele, Chandapura, Anekal Road, and Hosur Road.',
};

export default function ProjectsPage() {
  const ongoing = projects.filter((p) => p.status === 'ongoing').length;
  const ready = projects.filter((p) => p.status === 'ready-to-move').length;
  const completed = projects.filter((p) => p.status === 'completed').length;

  const stats = [
    { value: `${projects.length}`, label: 'Total Projects' },
    { value: `${ongoing}`, label: 'Under Construction' },
    { value: `${ready}`, label: 'Ready to Move' },
    { value: `${completed}`, label: 'Completed' },
  ];

  return (
    <>
      <ProjectsMapHero />
      <section className="border-b border-foreground/10 bg-stone-50">
        <div className="section-shell grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {stats.map((s) => (
            <ScrollReveal key={s.label}>
              <div className="text-center md:text-left">
                <p className="font-display text-4xl tracking-tight md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="section-shell py-16 md:py-24">
        <ProjectsExplorer projects={projects} />
      </section>
    </>
  );
}
