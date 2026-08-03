// File purpose: Floating "Contact Us" buttons: bottom-right pill on desktop, full-width bar on mobile.
'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function StickyCTA() {
  return (
    <>
      {/* Desktop / tablet: floating Contact Us pill, bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-6 right-6 z-[60] hidden sm:flex"
      >
        <a
          href="/contact"
          aria-label="Contact Yuva Group"
          className="group flex items-center gap-2.5 rounded-full bg-foreground py-3 pl-4 pr-5 text-sm font-semibold text-background shadow-xl shadow-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          Contact Us
        </a>
      </motion.div>

      {/* Mobile: full-width sticky bottom bar with Contact Us */}
      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-foreground/10 bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
        <a
          href="/contact"
          aria-label="Contact Yuva Group"
          className="flex items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3.5 text-sm font-semibold text-background shadow-lg transition-transform duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" />
          Contact Us
        </a>
      </div>
    </>
  );
}
