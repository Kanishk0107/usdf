import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { pillars } from "@/lib/site";
export const metadata: Metadata = {
  title: "Our Focus Areas | USDF",
  description:
    "Six connected areas of charitable purpose drawn from USDF’s Memorandum of Association.",
  alternates: { canonical: "/focus-areas" },
};
const examples = [
  "Learning centres, libraries, digital learning, career guidance, vocational education and capacity building.",
  "Preventive health education, awareness activities, wellness and nutrition-related support.",
  "Women’s empowerment, child and youth welfare, senior citizen welfare, disability support and social inclusion.",
  "Agricultural awareness, sustainable farming practices, technical knowledge and livelihood-oriented education.",
  "Digital skills, cyber safety, responsible technology use and online safety education for all generations.",
  "Environmental awareness, sanitation, hygiene and sustainable community development.",
];
export default function Focus() {
  return (
    <PageShell
      kicker="Six areas of focus"
      title="Connected needs. Shared possibilities."
      intro="These six editorial pillars summarise our MOA’s charitable objects. They describe areas we intend to work in, not a list of active or completed projects."
    >
      <section className="wrap section focus-list">
        {pillars.map(([title, tag, description], i) => (
          <article key={title}>
            <span className="eyebrow">
              0{i + 1} / {tag}
            </span>
            <div>
              <h2>{title}</h2>
              <p className="large-copy">{description}</p>
              <p>{examples[i]}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="section pillars-section">
        <div className="wrap">
          <h2>Start a conversation.</h2>
          <p className="section-note">
            If your interests connect with our purpose, introduce yourself and
            your area of work.
          </p>
          <a className="button" href="/contact">
            Contact USDF →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
