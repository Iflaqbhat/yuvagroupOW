// File purpose: Sticky in-page navigation for project detail sections.
import type { DetailNavSection } from '@/components/projects/detail/project-detail-helpers';

export function ProjectDetailNav({ sections }: { sections: DetailNavSection[] }) {
  return (
    <div className="sticky top-[4.375rem] z-40 border-b border-foreground/10 bg-background/95 backdrop-blur">
      <div className="section-shell flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {section.label}
          </a>
        ))}
      </div>
    </div>
  );
}
