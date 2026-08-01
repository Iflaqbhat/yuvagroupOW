'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '91828223395';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function StickyCTA() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Yuva Group, I'd like to know more about your projects."
  )}`;

  return (
    <>
      {/* Desktop / tablet: floating buttons, bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-6 right-6 z-[60] hidden flex-col items-end gap-3 sm:flex"
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Yuva Group on WhatsApp"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fbd59] hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        >
          <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          WhatsApp
        </a>
        <a
          href="/contact"
          aria-label="Contact Yuva Group"
          className="group flex items-center gap-2.5 rounded-full bg-foreground py-3 pl-4 pr-5 text-sm font-semibold text-background shadow-xl shadow-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          Contact Us
        </a>
      </motion.div>

      {/* Mobile: full-width sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-foreground/10 bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Yuva Group on WhatsApp"
            className="flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href="/contact"
            aria-label="Contact Yuva Group"
            className="flex items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3.5 text-sm font-semibold text-background shadow-lg transition-transform duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
