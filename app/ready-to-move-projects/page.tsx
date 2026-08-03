// File purpose: Ready-to-move projects page: lists finished homes available for immediate possession.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { getProjectsByStatus } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Ready to Move Projects — Yuva Group',
  description:
    'Ready-to-move Yuva Group homes across south Bengaluru. Explore finished residential projects available for immediate possession.',
};

export default function ReadyToMoveProjectsPage() {
  const ready = getProjectsByStatus('ready-to-move');

  return (
    <>
      <PageHero
        eyebrow="Ready to move"
        title="Ready-to-move projects."
        description="Finished Yuva Group homes available for immediate possession — visit the property, review the floor plans, and move with confidence."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#project-list"
            className="smart-gradient inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)] transition-transform hover:-translate-y-0.5"
          >
            View ready homes
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-accent/25 bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            All projects
          </Link>
        </div>
      </PageHero>
      <section id="project-list" className="section-shell py-16 md:py-24">
        <ProjectsExplorer projects={ready} activeStatus="ready-to-move" statusNavigation />
      </section>
    </>
  );
}
