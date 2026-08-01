import { PageHero } from '@/components/layout/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." />
      <section className="section-shell max-w-3xl py-16 md:py-24">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>[ADD FULL TERMS & CONDITIONS] — This page is a placeholder. Replace with the verified Yuva Group terms before launch.</p>
          <p>The content on yuvagroup.in is provided for general information about Yuva Structures Pvt. Ltd. and its residential projects. Project specifications, pricing, possession dates, and availability are subject to change and must be confirmed with the sales team.</p>
          <p>[CONFIRM RERA DISCLOSURES, BOOKING TERMS, AND REFUND POLICY]</p>
        </div>
      </section>
    </>
  );
}
