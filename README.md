# USDF — Phase 1 homepage

A working local homepage using Next.js 16.4.5, TypeScript, Tailwind CSS, Playfair Display and Inter. No deployment or domain connection has been performed.

## Run locally

Use Node.js 20.9+ and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production checks, run `npm run build` then `npm start`. Run `npm test` against the running production server at http://127.0.0.1:3000. Tests use installed Google Chrome; install Chrome or adapt the channel in tests/homepage.mjs. Screenshots go into ignored test-results/. Run `npm run typecheck` for a standalone type check.

## What is implemented

Responsive navigation, truthful hero, mission, six MOA-derived focus areas, Manjula leadership spotlight, three-director board and separate CEO, institutional details, external support CTA and footer. Server-rendered content with only navigation requiring client JavaScript. Responsive Next Image, self-hosted fonts, semantic metadata, canonical URL, sitemap, skip link, keyboard controls, reduced motion and lightweight CSS animation. No Motion library is needed for these interactions.

The original transparent logo is copied without modification to public/brand/usdf-original.png. Navy, blue, coral and peach tokens draw from its palette, with darker text shades for legibility. No synthetic logo, beneficiary photographs, invented activities or metrics are used.

## Content provenance

Reviewed supplied local files: MOA.pdf; Ministry Of Corporate Affairs - MCA Services.pdf (record dated 3 November 2026); Darpan ID.pdf (generated 12 October 2026); USDF_Board_Resolution_Bank_Account_Authorised_Signatory.pdf.

The MOA supports all six editorial groupings. MCA confirms CIN, incorporation date and three directors (Manjula, Mamta Sharma, Simran). DARPAN confirms Section 8 company registration, public DARPAN ID, Manjula as chief functionary and Kanishk Bhardwaj as CEO. DARPAN's four member entries are not presented as four MCA directors. The board resolution supports Manjula's bank authorisation, but these internal banking details are not used as donation-compliance evidence.

The supplied Section 8 licence number 193200 was not located in these records and is withheld from the public page pending the licence certificate. Verification here means checked against supplied documents, not a live government registry query or authentication of originals.

Private source PDFs, extracted text, identifiers (PAN, Aadhaar, DIN), signatures, personal phone numbers, dates of birth and residential addresses are not included in this project. Only the public institutional contact email is shown.

## Donation configuration

Change the donation URL and provider in lib/site.ts when the approved Razorpay setup is ready. Currently it opens Buy Me a Coffee in a new tab with an explicit external notice and noopener/noreferrer. No payment transaction was attempted. No payout verification, tax exemption, FCRA, 80G or payment-compliance claim is made.

## Security and launch

No database, admin area, analytics, payment processing or user data collection. Configured response headers include nosniff, DENY framing, referrer policy, restricted device permissions and baseline CSP. This is not a strict script CSP or a security audit. Next.js production image optimisation handles the local logo.

Indexing is deliberately disabled in app/layout.tsx and app/robots.ts until launch. Sitemap includes only the implemented homepage. Canonical and sitemap use the intended usdfindia.org address; this does not imply DNS or hosting is connected.

Next: confirm the five-page information architecture from the full original plan, provide the licence certificate, approve homepage copy and any authentic leadership portraits, then implement the remaining four pages. Suggested page names for confirmation: About, Focus Areas, Transparency, Contact & Support. Create GitHub repository and Vercel preview later, verify that preview, then connect the domain and enable indexing. Nothing has been pushed or deployed.

## Four-page development update

Implemented /about, /focus-areas, /transparency and /contact. Navigation now exposes Contact and Donate explicitly. Contact uses the verified office email through mailto; no server-side form or database. Donate links to the temporary external platform from the Contact & Support page. Sitemap includes all five pages. Run `node tests/pages.mjs` against the production server for the four new pages at desktop and phone widths. The homepage suite remains `npm test`. Licence certificate verification and deployment remain pending.

Contact update: user-authorised CEO phone +91 82730 56607 is now public with telephone and WhatsApp links. WhatsApp prefills a visitor greeting; it does not automatically send a message or configure a business auto-response. Donation button now says Donate now, retaining the same external destination and redirect notice.
