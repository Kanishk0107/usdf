import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact & Donate | USDF",
  description:
    "Contact Unified Social Development Foundation or continue to its temporary external support page.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <PageShell
      kicker="Contact & support"
      title="Let’s begin with a conversation."
      intro="For foundation enquiries, ideas for collaboration or questions about our purpose, contact the USDF office."
    >
      <section className="wrap section contact-grid">
        <article className="contact-card">
          <p className="eyebrow">Get in touch</p>
          <h2>Contact USDF</h2>
          <a className="contact-email" href={"mailto:" + site.email}>
            {site.email}
          </a>
          <p>
            This link opens your email app. Include your name, the purpose of
            your enquiry and how you would like us to respond.
          </p>
          <a className="button" href={"mailto:" + site.email}>
            Compose an email ↗
          </a>
          <div className="contact-direct">
            <p className="small-label">DIRECT CONTACT · CEO</p>
            <p className="contact-person">Kanishk Bhardwaj</p>
            <a
              className="contact-email"
              href={"tel:" + site.phone.international}
            >
              {site.phone.display}
            </a>
            <div className="contact-actions">
              <a
                className="button"
                href={
                  "https://wa.me/" +
                  site.phone.whatsapp +
                  "?text=" +
                  encodeURIComponent(site.phone.greeting)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp ↗
                <span className="sr-only"> — opens in a new tab</span>
              </a>
              <a className="text-link" href={"tel:" + site.phone.international}>
                Call us →
              </a>
            </div>
            <p className="fine">
              WhatsApp opens with a greeting ready for you to review and send.
            </p>
          </div>
        </article>
        <article className="contact-card">
          <p className="eyebrow">A thoughtful introduction</p>
          <h2>Share your interest.</h2>
          <p>
            Tell us which focus area you connect with and whether your enquiry
            concerns collaboration, volunteering, institutional records or
            support.
          </p>
          <p className="fine">
            Please do not send Aadhaar, PAN, bank details or other sensitive
            documents in an initial enquiry. This website has no contact form
            and stores no enquiry submissions.
          </p>
          <p>Based in Uttarakhand, India.</p>
        </article>
      </section>
      <section id="donate" className="section pillars-section">
        <div className="wrap support">
          <p className="eyebrow">Support the foundation</p>
          <h2>
            Donate towards
            <br />
            <em>a shared purpose.</em>
          </h2>
          <p>
            Support our purpose through our temporary external donation page.
          </p>
          <a
            className="button"
            href={site.donation.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate now ↗
            <span className="sr-only">
              {" "}
              — external website, opens in a new tab
            </span>
          </a>
          <p className="external-note">
            You are leaving usdfindia.org. This link opens an external website
            in a new tab; payment details are entered there.
          </p>
          <p className="fine">
            Payment availability and terms are set by the platform. No payout
            verification, tax benefit, foreign-contribution eligibility or
            donation-compliance assurance is made here.
          </p>
          <p className="fine">
            For questions before contributing, email{" "}
            <a href={"mailto:" + site.email}>{site.email}</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
