// File purpose: Project floor-plan image gallery and buyer note.
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { FloorPlanGallery } from '@/components/projects/FloorPlanGallery';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types';

export function ProjectFloorPlansSection({ project }: { project: Project }) {
  return (
    <section id="floor-plans" className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Floor plans"
            title="Representative layouts."
            description="Plan images are shown alongside the published unit table so buyers can compare size, type and orientation before enquiring."
          />
        </ScrollReveal>
        <FloorPlanGallery floorPlans={project.floorPlans} projectName={project.name} />
        <p className="mt-6 text-xs text-muted-foreground">
          Click any plan to inspect it larger. Approved plans and RERA details are available with the sales team — request them before booking.
        </p>
      </div>
    </section>
  );
}
