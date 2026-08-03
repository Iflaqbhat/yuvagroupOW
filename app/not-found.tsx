// File purpose: 404 page shown when a URL does not exist.
import { PageHero } from '@/components/layout/PageHero';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found." description="The page you are looking for may have moved or never existed." />
      <section className="section-shell flex flex-col items-center py-20 text-center">
        <Link href="/" className="group inline-flex items-center gap-2 bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </section>
    </>
  );
}
