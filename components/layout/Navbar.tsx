// File purpose: Sticky top navigation: logo, menu links, Projects dropdown, and mobile menu.
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Calendar } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'glass fixed inset-x-0 top-0 z-50 !border-b !border-foreground/25 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <nav className="section-shell flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Yuva Group home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Yuva Group" className="h-11 w-auto object-contain" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item, idx) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              const hasMega = item.label === 'Projects';
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    if (hasMega) setMegaOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    if (hasMega) setMegaOpen(false);
                  }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    data-active={active}
                    className={cn(
                      'nav-underline relative flex items-center gap-1 px-4 py-2 text-sm font-bold transition-colors duration-300',
                      active ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/schedule-visit"
              className="group flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-accent"
            >
              <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
              Site Visit
            </Link>
            <Link
              href="/contact"
              className="smart-action group inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.22)]"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden lg:block"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="section-shell pt-2">
                <div className="smart-panel overflow-hidden rounded-md">
                  <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-3 border-r border-foreground/10 p-6">
                      <p className="eyebrow mb-4">Browse by</p>
                      <ul className="space-y-1">
                        {[
                          { label: 'All Projects', href: '/projects' },
                          { label: 'Ongoing Projects', href: '/ongoing-projects' },
                          { label: 'Ready to Move Projects', href: '/ready-to-move-projects' },
                          { label: 'Completed Projects', href: '/completed-projects' },
                        ].map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="group flex items-center gap-2 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                            >
                              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-9 p-6">
                      <p className="eyebrow mb-4">Featured Developments</p>
                      <div className="grid grid-cols-3 gap-4">
                        {projects.slice(0, 3).map((p) => (
                          <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="group block overflow-hidden rounded-md border border-foreground/10 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_hsl(var(--foreground)/0.08)]"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={p.heroImage}
                                alt={p.heroAlt}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <span className="absolute left-3 top-3 rounded-md bg-background/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent shadow-sm">
                                {p.status === 'ready-to-move'
                                  ? 'Ready'
                                  : p.status === 'ongoing'
                                  ? 'Ongoing'
                                  : 'Completed'}
                              </span>
                            </div>
                            <div className="p-3">
                              <p className="font-display text-sm font-bold transition-colors group-hover:text-accent">{p.name}</p>
                              <p className="mt-0.5 text-xs text-muted-foreground">{p.location}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-background lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Yuva Group" className="h-11 w-auto object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {mainNav.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block border-b border-foreground/5 py-4 font-display text-2xl font-extrabold transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <ul className="mb-2 ml-2 space-y-1">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/schedule-visit"
                    className="flex items-center justify-center gap-2 rounded-md border border-foreground/20 py-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a Site Visit
                  </Link>
                  <Link
                    href="/contact"
                    className="smart-action flex items-center justify-center gap-2 rounded-md py-3 text-sm font-bold text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    Enquire Now
                  </Link>
                </div>
              </div>

              <div className="border-t border-foreground/10 px-6 py-5 text-xs text-muted-foreground">
                <p>Yuva Structures Pvt. Ltd.</p>
                <p className="mt-1">Bengaluru, Karnataka</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
