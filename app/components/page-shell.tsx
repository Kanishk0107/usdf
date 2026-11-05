import Image from "next/image";
import logo from "@/public/brand/usdf-original.png";
import { Navigation } from "../navigation";
import { site } from "@/lib/site";
export function PageShell({
  title,
  intro,
  kicker,
  children,
}: {
  title: string;
  intro: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <>
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
        <section className="wrap subpage-heading">
          <a className="text-link" href="/">
            ← Home
          </a>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </section>
        {children}
      </main>
      <footer>
        <div className="wrap footer-main">
          <div>
            <span className="footer-name">USDF</span>
            <p>{site.name}</p>
            <a href={"mailto:" + site.email}>{site.email}</a>
          </div>
          <nav aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/focus-areas">Focus areas</a>
            <a href="/transparency">Transparency</a>
            <a href="/contact">Contact</a>
            <a href="/contact#donate">Donate</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 {site.name}</span>
          <span>usdfindia.org</span>
        </div>
      </footer>
    </>
  );
}
