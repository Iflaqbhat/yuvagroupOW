// File purpose: Project unit-mix summary cards and filterable floor-plan table.
import { Building2, Home, MapPinned } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { UnitMixTable } from '@/components/projects/UnitMixTable';
import { SectionHeading } from '@/components/ui/section-heading';
import type { FloorPlanRow } from '@/types';
import type { DetailFact } from '@/components/projects/detail/project-detail-helpers';

export function ProjectUnitMixSection({
  floorPlanRows,
  stats,
}: {
  floorPlanRows: FloorPlanRow[];
  stats: DetailFact[];
}) {
  return (
    <section id="unit-mix" className="border-b border-foreground/10 bg-accent/5 py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Unit mix"
            title="Published typical floor plan table."
            description="Flat numbers, saleable areas, facings and configurations are taken from the official project page."
          />
        </ScrollReveal>

        <div className="mt-10 overflow-hidden rounded-md border border-accent/15 bg-background shadow-[0_18px_45px_hsl(var(--foreground)/0.05)]">
          <div className="grid divide-y divide-foreground/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat, index) => {
              const Icon = index === 0 ? Building2 : index === 1 ? Home : MapPinned;
              return (
                <ScrollReveal key={stat.label} delay={index * 0.05}>
                  <div className="group flex min-h-28 items-start gap-4 bg-background p-5 transition-colors hover:bg-accent/5 md:p-6">
                    <span className="smart-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-accent-foreground shadow-[0_10px_25px_hsl(var(--accent)/0.16)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-lg font-bold leading-snug md:text-xl">{stat.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={0.1}>
          <UnitMixTable rows={floorPlanRows} />
        </ScrollReveal>
      </div>
    </section>
  );
}
