// File purpose: Homepage official YouTube video section.
'use client';

import { ArrowUpRight, Youtube } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion/ScrollReveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { socialLinks } from '@/data/navigation';
import { youtubeVideos } from '@/data/projects';

const youtubeChannel = socialLinks.find((link) => link.label === 'YouTube')?.href ?? 'https://www.youtube.com/@yuvagroups';

export function YoutubeVideosSection() {
  return (
    <section className="border-b border-foreground/10 bg-background py-16 md:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Latest videos"
            title="Project films from Yuva Group."
            description="Walkthroughs and project updates from the official Yuva Group YouTube channel, kept close to the project browsing flow."
            align="center"
          />
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <StaggerItem key={video.id}>
              <article className="group overflow-hidden rounded-md border border-foreground/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_45px_hsl(var(--foreground)/0.08)]">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <Youtube className="h-4 w-4 text-[#ff0000]" />
                    Official video
                  </div>
                  <div className="mt-3 flex min-h-[7.5rem] flex-col">
                    <h3 className="text-[0.95rem] font-semibold leading-6 text-foreground">
                      {video.title}
                    </h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/watch mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-foreground/15 px-3.5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Youtube className="h-4 w-4 text-[#ff0000] transition-colors group-hover/watch:text-background" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10 flex justify-center">
          <a
            href={youtubeChannel}
            target="_blank"
            rel="noreferrer"
            className="smart-action group inline-flex items-center gap-3 rounded-md px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)]"
          >
            <Youtube className="h-4 w-4" />
            Visit YouTube
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
