import Image from "next/image";
import logo from "@/public/brand/usdf-original.png";
import { site, pillars } from "@/lib/site";
import { Navigation } from "./navigation";
const identity = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: "USDF",
      alternateName: "Unified Social Development Foundation",
      url: `${site.url}/`,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: "Unified Social Development Foundation",
      alternateName: "USDF",
      url: `${site.url}/`,
      logo: `${site.url}/brand/usdf-original.png`,
      email: site.email,
      foundingDate: "2026-10-08",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    },
  ],
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identity) }}
      />
      <header className="header">
        <a className="brand" href="/" aria-label="USDF home">
          <Image src={logo} alt="" width={60} height={60} sizes="60px" />
          <span>
            USDF<small>Unified Social Development Foundation</small>
          </span>
        </a>
        <Navigation />
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> Dignity. Opportunity. Shared progress.
            </p>
            <h1 id="hero-title">
              A more inclusive tomorrow.
              <br />
              <em>Built together.</em>
            </h1>
            <p className="intro">
              Every person deserves the opportunity to learn, thrive and
              participate. We are Unified Social Development Foundation —
              working towards that possibility.
            </p>
            <div className="actions">
              <a className="button" href="#mission">
                Discover our purpose <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#pillars">
                Our focus areas <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="hero-note">
              Rooted in Uttarakhand. United by a shared purpose.
            </p>
          </div>
          <div className="hero-art">
            <span className="art-label">THE ROOTS OF A SHARED FUTURE</span>
            <div className="logo-orbit">
              <Image
                src={logo}
                alt="USDF’s original logo: intertwined people and branches around a globe"
                priority
                sizes="(max-width: 700px) 85vw, 42vw"
              />
            </div>
            <div className="art-bottom">
              <span>Many possibilities.</span>
              <em>One humanity.</em>
            </div>
          </div>
        </section>
        <div className="principle-strip">
          <div className="wrap flex flex-wrap justify-between gap-4">
            <span>Unified in purpose.</span>
            <span>Inclusive by intention.</span>
            <span>Responsible in action.</span>
          </div>
        </div>
        <section id="mission" className="section wrap mission">
          <div>
            <p className="eyebrow">01 / Our purpose</p>
            <h2>
              Progress means more
              <br />
              when it includes <em>everyone.</em>
            </h2>
          </div>
          <div className="mission-copy">
            <p className="large-copy">
              To advance inclusive social development through education,
              wellbeing and stronger, more sustainable communities.
            </p>
            <p>
              Our purpose brings people and possibilities together: supporting
              dignity, widening opportunity and encouraging participation in
              community life.
            </p>
            <p className="fine">
              We are at the beginning of this journey. Our focus areas express
              our charitable objects and intended direction, not claims of
              completed programmes or measured impact.
            </p>
          </div>
        </section>
        <section id="pillars" className="section pillars-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Our areas of focus</p>
                <h2>
                  Six commitments.
                  <br />
                  <em>One shared future.</em>
                </h2>
              </div>
              <p>
                Social development is interconnected.
                <br />
                Our focus reflects the whole community.
              </p>
            </div>
            <div className="pillars">
              {pillars.map(([title, tag, description], i) => (
                <article className="pillar" key={title}>
                  <div className="pillar-top">
                    <span>0{i + 1}</span>
                    <span>{tag}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="pillar-line" />
                </article>
              ))}
            </div>
            <p className="fine pillar-footnote">
              Six editorial groupings drawn from the foundation’s Memorandum of
              Association.
            </p>
          </div>
        </section>
        <section id="leadership" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / People & responsibility</p>
              <h2>
                Purpose needs
                <br />
                <em>accountable leadership.</em>
              </h2>
            </div>
            <p>
              Board oversight and executive leadership.
              <br />
              Distinct roles. A shared responsibility.
            </p>
          </div>
          <div className="leadership">
            <article className="director">
              <p className="eyebrow">Director · Registered chief functionary</p>
              <h3>Manjula</h3>
              <p>
                At the forefront of USDF’s leadership, Manjula is an MCA-listed
                director and the registered chief functionary in the
                foundation’s NGO DARPAN record.
              </p>
              <span className="director-note">
                Unified Social Development Foundation
              </span>
            </article>
            <div className="governance">
              <article>
                <span className="small-label">
                  BOARD OF DIRECTORS · MCA RECORD
                </span>
                <h3>Manjula · Mamta Sharma · Simran</h3>
                <p>
                  The foundation’s three directors, as recorded in the supplied
                  MCA company details.
                </p>
              </article>
              <article>
                <span className="small-label">
                  EXECUTIVE LEADERSHIP · DARPAN RECORD
                </span>
                <h3>
                  Kanishk Bhardwaj <span className="role">CEO</span>
                </h3>
                <p>
                  Listed as CEO in the NGO DARPAN record. This executive role is
                  separate from the three MCA director positions.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="transparency" className="section credibility">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / Institutional foundations</p>
                <h2>
                  Trust begins with
                  <br />
                  <em>clarity.</em>
                </h2>
              </div>
              <p>
                A Section 8 company.
                <br />
                Registered with NGO DARPAN.
              </p>
            </div>
            <dl className="records">
              <div>
                <dt>Corporate identity number</dt>
                <dd>U88900UT2026NPL022488</dd>
              </div>
              <div>
                <dt>Incorporated</dt>
                <dd>8 October 2026</dd>
              </div>
              <div>
                <dt>Registration</dt>
                <dd>Section 8 company</dd>
              </div>
              <div>
                <dt>NGO DARPAN ID</dt>
                <dd>UK/2026/1238655</dd>
              </div>
            </dl>
            <p className="fine">
              Checked against the supplied MCA record dated 3 November 2026 and
              NGO DARPAN record generated 12 October 2026. These are
              document-based details, not a live registry status check.
            </p>
          </div>
        </section>
        <section id="support" className="section wrap">
          <div className="support">
            <p className="eyebrow">A shared purpose starts with people</p>
            <h2>
              Be part of
              <br />
              <em>what comes next.</em>
            </h2>
            <p>
              Support the foundation as we begin our journey towards inclusive
              social development.
            </p>
            <a
              className="button"
              href={site.donation.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to USDF <span aria-hidden="true">↗</span>
              <span className="sr-only">
                {" "}
                — opens an external donation page in a new tab
              </span>
            </a>
            <p className="external-note">
              Continue to our donation page ↗<br />
              Our temporary support link opens an external website in a new tab.
            </p>
            <p className="fine">
              Payment availability and terms are provided by the external
              platform. No payout verification, tax benefit or
              donation-compliance assurance is made here.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-main">
          <div>
            <span className="footer-name">USDF</span>
            <p>Unified Social Development Foundation</p>
            <p className="footer-purpose">
              Dignity. Opportunity. Shared progress.
            </p>
            <a href={"mailto:" + site.email}>{site.email}</a>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#mission">Our purpose</a>
            <a href="#pillars">Focus areas</a>
            <a href="#leadership">Leadership</a>
            <a href="#transparency">Transparency</a>
            <a href="/contact">Contact</a>
            <a href="/contact#donate">Donate</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 Unified Social Development Foundation</span>
          <span>usdfindia.org</span>
        </div>
      </footer>
    </>
  );
}
