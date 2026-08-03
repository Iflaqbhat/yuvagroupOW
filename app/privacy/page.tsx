// File purpose: Privacy Policy page (legal).
import { PageHero } from '@/components/layout/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." />
      <section className="section-shell prose-invert max-w-3xl py-16 md:py-24">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            The official Yuva Group privacy policy is published on the company website —{' '}
            <a
              href="https://yuvagroup.in/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              read the full policy at yuvagroup.in
            </a>
            .
          </p>
          <p>
            Yuva Structures Pvt. Ltd. respects the privacy of every visitor. Information submitted
            through enquiry and site-visit forms is used solely to respond to your request and is
            not shared with third parties for marketing.
          </p>
          <p>
            For details on data handling, retention, or privacy queries, contact us at{' '}
            <a
              href="mailto:enquiry@yuvastructures.com"
              className="text-accent underline underline-offset-2"
            >
              enquiry@yuvastructures.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
