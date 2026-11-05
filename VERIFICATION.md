# Verification — 5 November 2026

- Production build and TypeScript compilation: passed (Next.js 16.4.5).
- Browser checks: Chrome at 1440, 768, 390 and 320 pixels; no horizontal overflow.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA checks: zero detected violations at all four widths. This is automated coverage, not a full accessibility certification.
- Menu open/close, Escape focus restoration, close on navigation, six focus areas, unique H1, external donation attributes: passed.
- Reduced-motion CSS, robots and sitemap responses, frame-denial header: passed.
- No browser page errors detected.
- Desktop and phone full-page screenshots visually reviewed.
- Original logo SHA-256 matches the supplied transparent PNG exactly.
- Dependency installation audit: zero known vulnerabilities reported. No penetration test performed.
- Build reports an ignored package-lock outside the project in the user's home directory. This does not affect this project's build or lockfile.
- No real payment, live registry authentication, GitHub push, Vercel deployment or DNS change performed.

Source scripts are under tests/. See README.md to repeat the checks.

Four-page update: production build and TypeScript passed. Homepage regression passed at four widths. About, Focus Areas, Transparency and Contact & Support passed at 1440px and 390px (eight page/viewport checks), including canonical metadata, no horizontal overflow, unique H1 and zero automated axe violations. Contact email and external donation link assertions passed.
