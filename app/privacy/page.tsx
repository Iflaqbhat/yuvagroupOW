// File purpose: Privacy Policy page (legal) — full policy text, ported from the company's original site.
import { PageHero } from '@/components/layout/PageHero';

const sections = [
  {
    title: 'Non-Personal Information We Record',
    paragraphs: [
      'When you visit our website and browse, read, or download information, our system may automatically record certain general details about your visit. This may include:',
    ],
    list: [
      'Your Internet domain (example: "xyz.net" or "xyz.com").',
      'The type of browser you are using (Chrome, Safari, Firefox, etc.).',
      'The operating system (Windows, MacOS, Linux, Android, etc.).',
      'The date and time of your visit and the pages viewed.',
      'The previous website link you came from (if applicable).',
    ],
    closing:
      'This information is recorded solely for statistical analysis to improve user experience. No individual identity is recorded.',
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Certain pages on our website may use cookies to enhance navigation. Cookies do not collect personal information — they only track browser sessions for convenience.',
      'To protect yourself, close your browser after completing your session. Most browsers also allow blocking or reviewing cookies before they are accepted.',
    ],
  },
  {
    title: 'Emails & Communication',
    paragraphs: [
      'If you send us an email, your return email address may be stored. As email is not fully secure, please avoid sending unnecessary sensitive information. Submitted information may be used to respond to your query.',
    ],
  },
  {
    title: 'Information Submitted Through Interactive Forms',
    paragraphs: [
      'Some sections allow voluntary submission of personal details (name, phone number, or email) for enquiries, downloads, or services from Yuva Structures Pvt. Ltd.',
      'By submitting such details, you agree that we may contact you via Call, SMS, Email, or WhatsApp — even if your number is listed under DND.',
    ],
  },
  {
    title: 'Links to External Websites',
    paragraphs: [
      'This policy applies only to the Yuva Structures Pvt. Ltd. website. External links may follow different privacy rules. We recommend reviewing privacy policies before sharing personal information on third-party sites.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        description="How Yuva Group collects, uses, and protects your information when you browse this site or get in touch."
      />
      <section className="section-shell prose-invert max-w-3xl py-16 md:py-24">
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <p className="text-foreground">
              Thank you for visiting the Yuva Structures Pvt. Ltd. website and reviewing our
              privacy policy. Our policy is simple: we do not collect personal information unless
              you choose to provide it.
            </p>
            <p className="border-l-2 border-accent pl-4 text-foreground">
              We strictly do not share, transfer, sell, or disclose any personal information to any
              third party under any circumstances.
            </p>
          </div>

          {sections.map((s) => (
            <div key={s.title} className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc space-y-1.5 pl-5">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.closing && <p>{s.closing}</p>}
            </div>
          ))}

          <div className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">Final Note</h2>
            <p>
              Your privacy matters to us. We are committed to transparency and secure handling of
              information. Stay informed — your privacy is your right.
            </p>
            <p>
              For any privacy queries, contact us at{' '}
              <a
                href="mailto:enquiry@yuvastructures.com"
                className="text-accent underline underline-offset-2"
              >
                enquiry@yuvastructures.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
