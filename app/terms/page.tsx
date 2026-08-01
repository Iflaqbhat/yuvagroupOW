import { PageHero } from '@/components/layout/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." />
      <section className="section-shell max-w-3xl py-16 md:py-24">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            The content on this website is provided for general information about Yuva Structures
            Pvt. Ltd. and its residential projects. Project specifications, pricing, possession
            dates, and availability are subject to change and must be confirmed with the sales team.
          </p>
          <p>
            Booking terms, refund policy, and RERA disclosures are shared with buyers at the time of
            booking. Contact the sales team at{' '}
            <a
              href="mailto:enquiry@yuvastructures.com"
              className="text-accent underline underline-offset-2"
            >
              enquiry@yuvastructures.com
            </a>{' '}
            or +91 82 82 82 3395 for a copy of the booking terms.
          </p>
        </div>
      </section>
    </>
  );
}
