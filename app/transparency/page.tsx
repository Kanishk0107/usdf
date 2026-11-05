import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
export const metadata: Metadata = {
  title: "Transparency & Registration | USDF",
  description:
    "Public registration details, source dates and governance information for USDF.",
  alternates: { canonical: "/transparency" },
};
export default function Transparency() {
  return (
    <PageShell
      kicker="Institutional foundations"
      title="Clarity is a responsibility."
      intro="We distinguish public registration information, our intended work and claims that have not been verified."
    >
      <section className="section credibility">
        <div className="wrap">
          <h2>Public registration details</h2>
          <dl className="records section-note">
            <div>
              <dt>Corporate identity number</dt>
              <dd>U88900UT2026NPL022488</dd>
            </div>
            <div>
              <dt>Incorporated</dt>
              <dd>8 October 2026</dd>
            </div>
            <div>
              <dt>Organisation type</dt>
              <dd>Section 8 company</dd>
            </div>
            <div>
              <dt>NGO DARPAN ID</dt>
              <dd>UK/2026/1238655</dd>
            </div>
          </dl>
          <p className="fine">
            Checked against the supplied MCA record dated 3 November 2026 and
            DARPAN record generated 12 October 2026. This is document-based
            verification, not a live registry check.
          </p>
        </div>
      </section>
      <section className="wrap section reading">
        <h2>Governance and records</h2>
        <h3>Board and executive responsibilities</h3>
        <p>
          MCA lists Manjula, Mamta Sharma and Simran as directors. DARPAN
          identifies Manjula as chief functionary and Kanishk Bhardwaj as CEO.
          The CEO is not presented as a fourth MCA director.
        </p>
        <h3>Our charitable objects</h3>
        <p>
          The six focus areas are editorial groupings of the Memorandum of
          Association. They are not evidence of delivered programmes or measured
          results.
        </p>
        <h3>Protecting personal information</h3>
        <p>
          Unredacted records are not published here. Personal identifiers,
          residential details and signatures are excluded from this website.
          Contact the foundation for institutional information enquiries.
        </p>
        <h3>Financial and donation claims</h3>
        <p>
          This website does not claim 80G tax benefits, foreign-contribution
          eligibility, verified platform payouts or audited impact. The
          temporary external support link does not establish any of those
          assurances.
        </p>
        <h3>Licence reference</h3>
        <p>
          The Section 8 company classification is supported by the supplied
          records. The separate licence number will be published after checking
          its certificate.
        </p>
        <a className="button" href="/contact">
          Ask about our records →
        </a>
      </section>
    </PageShell>
  );
}
