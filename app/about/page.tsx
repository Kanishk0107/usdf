import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
export const metadata: Metadata = {
  title: "About & Leadership | USDF",
  description: "Our purpose, values and the people responsible for USDF.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <PageShell
      kicker="Our foundation"
      title="Shared purpose. Clear responsibility."
      intro="Rooted in Uttarakhand, Unified Social Development Foundation brings six connected areas of social development under one charitable purpose."
    >
      <section className="wrap section mission">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2>
            Opportunity with <em>dignity.</em>
          </h2>
        </div>
        <div className="mission-copy">
          <p className="large-copy">
            To advance inclusive social development through education, wellbeing
            and stronger, more sustainable communities.
          </p>
          <p>
            Our Memorandum of Association sets out charitable objects serving
            the general public, including children, youth, women, senior
            citizens, persons with disabilities and disadvantaged communities.
          </p>
          <p>
            We are at the beginning of this journey. We describe our intended
            direction openly, without presenting planned work as completed
            impact.
          </p>
        </div>
      </section>
      <section className="section pillars-section">
        <div className="wrap">
          <p className="eyebrow">Our approach</p>
          <h2>People at the centre.</h2>
          <div className="content-grid">
            <article>
              <h3>Inclusion</h3>
              <p>
                Recognising barriers to participation and keeping dignity at the
                heart of our purpose.
              </p>
            </article>
            <article>
              <h3>Connection</h3>
              <p>
                Understanding that education, health, livelihoods and the
                environment shape one another.
              </p>
            </article>
            <article>
              <h3>Accountability</h3>
              <p>
                Distinguishing our charitable intentions from verified
                activities, and our board from executive roles.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="leadership" className="wrap section">
        <p className="eyebrow">Our leadership</p>
        <div className="leadership">
          <article className="director">
            <p className="eyebrow">Director · Registered chief functionary</p>
            <h3>Manjula</h3>
            <p>
              Manjula is an MCA-listed director and the chief functionary
              recorded in NGO DARPAN. She is the primary face of the
              foundation’s leadership.
            </p>
          </article>
          <div className="governance">
            <article>
              <span className="small-label">THREE MCA DIRECTORS</span>
              <h3>Manjula · Mamta Sharma · Simran</h3>
              <p>
                The supplied MCA record identifies these three director
                positions.
              </p>
            </article>
            <article>
              <span className="small-label">EXECUTIVE ROLE</span>
              <h3>Kanishk Bhardwaj · CEO</h3>
              <p>
                Listed as CEO in DARPAN, separately from the three MCA
                directors.
              </p>
            </article>
          </div>
        </div>
        <p className="fine section-note">
          Based on the supplied MCA and DARPAN records. No biographical claims
          or portraits have been added without source material.
        </p>
      </section>
    </PageShell>
  );
}
