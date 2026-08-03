// File purpose: Projects page header: a map-style graphic with project pins plus intro text.
'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const pins = projects.map((p) => {
  const x = ((p.coordinates.lng - 77.6423) / (77.7151 - 77.6423)) * 78 + 11;
  const y = 89 - ((p.coordinates.lat - 12.7189) / (12.8456 - 12.7189)) * 78;
  return { x, y, name: p.name, area: p.area, status: p.status };
});

const statusColor: Record<string, string> = {
  'ready-to-move': 'hsl(158 30% 32%)',
  ongoing: 'hsl(348 44% 36%)',
  completed: 'hsl(220 24% 40%)',
};

export function ProjectsMapHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden border-b border-foreground/10 bg-stone-50 pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <div className="section-shell relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="eyebrow mb-5"
          >
            Our developments
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
          >
            Shaping south Bengaluru.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Six residential communities across Electronic City, Attibele, Chandapura, Anekal Road, and Hosur Road — each one shaping how the southern corridor grows.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(348 44% 36%)' }} />
              Under Construction
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(158 30% 32%)' }} />
              Ready to Move
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(220 24% 40%)' }} />
              Completed
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative aspect-square w-full max-w-lg justify-self-center"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
            {/* Abstract road network */}
            <motion.path
              d="M 5 20 Q 30 18 50 25 T 95 30"
              fill="none"
              stroke="hsl(var(--foreground) / 0.08)"
              strokeWidth="0.6"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 10 50 Q 40 45 60 55 T 95 60"
              fill="none"
              stroke="hsl(var(--foreground) / 0.08)"
              strokeWidth="0.6"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 5 80 Q 35 75 55 82 T 95 85"
              fill="none"
              stroke="hsl(var(--foreground) / 0.08)"
              strokeWidth="0.6"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.9, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 30 5 Q 28 40 35 70 T 40 95"
              fill="none"
              stroke="hsl(var(--foreground) / 0.08)"
              strokeWidth="0.6"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 70 5 Q 68 40 75 70 T 80 95"
              fill="none"
              stroke="hsl(var(--foreground) / 0.08)"
              strokeWidth="0.6"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
            />

            {/* Connection lines between projects */}
            {pins.slice(0, -1).map((p, i) => {
              const next = pins[i + 1];
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={p.x}
                  y1={p.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="hsl(var(--accent) / 0.15)"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: 'easeInOut' }}
                />
              );
            })}

            {/* Project pins */}
            {pins.map((p, i) => (
              <g key={p.name}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill="none"
                  stroke={statusColor[p.status]}
                  strokeWidth="0.4"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.4, 1], opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 2.5,
                    delay: 1.5 + i * 0.12,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="1.6"
                  fill={statusColor[p.status]}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.12, ease: 'easeOut' }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <motion.text
                  x={p.x}
                  y={p.y - 3.5}
                  textAnchor="middle"
                  className="fill-foreground"
                  style={{ fontSize: '2.2px', fontWeight: 600 }}
                  initial={{ opacity: 0, y: p.y - 1 }}
                  animate={{ opacity: 1, y: p.y - 3.5 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.12 }}
                >
                  {p.area}
                </motion.text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
