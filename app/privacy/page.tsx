import { PageHero } from '@/components/layout/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." />
      <section className="section-shell prose-invert max-w-3xl py-16 md:py-24">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>[ADD FULL PRIVACY POLICY] — This page is a placeholder. Replace with the verified Yuva Group privacy policy before launch.</p>
          <p>Yuva Structures Pvt. Ltd. respects the privacy of every visitor to yuvagroup.in. Information submitted through enquiry and site-visit forms is used solely to respond to your request and is not shared with third parties for marketing.</p>
          <p>[CONFIRM DATA HANDLING DETAILS, RETENTION PERIOD, AND CONTACT FOR PRIVACY QUERIES]</p>
        </div>
      </section>
    </>
  );
}
