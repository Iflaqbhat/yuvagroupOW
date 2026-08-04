// File purpose: Click-to-zoom floor-plan cards used on project detail pages.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import type { FloorPlan } from '@/types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function FloorPlanGallery({
  floorPlans,
  projectName,
}: {
  floorPlans: FloorPlan[];
  projectName: string;
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {floorPlans.map((fp) => (
        <Dialog key={fp.name}>
          <div className="group overflow-hidden rounded-md border border-foreground/10 bg-background shadow-[0_18px_45px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35">
            <DialogTrigger asChild>
              <button
                type="button"
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Open ${fp.name} floor plan`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={fp.image}
                    alt={fp.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/78 via-foreground/12 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-background/95 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-foreground shadow-[0_12px_30px_hsl(var(--foreground)/0.16)] backdrop-blur">
                    <Maximize2 className="h-3.5 w-3.5 text-accent" />
                    View larger
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xl font-semibold leading-tight text-background">
                      {fp.name}
                    </p>
                    <p className="mt-1 text-sm font-medium text-background/82">
                      {fp.type} · {fp.area}
                    </p>
                  </div>
                </div>
              </button>
            </DialogTrigger>
            <div className="flex items-center justify-between gap-4 p-4">
              <span className="text-sm font-semibold leading-snug text-muted-foreground">{fp.area}</span>
              <Link href="#visit" className="relative z-10 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                Enquire
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <DialogContent className="max-h-[94vh] w-[calc(100vw-1.5rem)] max-w-6xl gap-3 overflow-hidden rounded-md border-background/15 bg-background p-3 sm:p-4">
            <DialogHeader className="pr-8 text-left">
              <DialogTitle className="font-display text-xl font-semibold leading-tight md:text-2xl">
                {fp.name}
              </DialogTitle>
              <DialogDescription>
                {projectName} · {fp.type} · {fp.area}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-[68vh] min-h-[320px] overflow-hidden rounded-md border border-foreground/10 bg-secondary">
              <Image
                src={fp.image}
                alt={fp.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Confirm approved plans and current availability with the sales team before booking.
              </p>
              <DialogClose asChild>
                <Link
                  href="#visit"
                  className="smart-action inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-accent-foreground"
                >
                  Enquire about this plan
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
