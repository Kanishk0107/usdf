# Current USDF website

The current static bilingual website is in `website/`; its image library is the flat `WEBSITE IMG/` folder. Existing Next.js sources are preserved. The root Vercel configuration intentionally builds the static website.

## Vercel

Import this repository and use the repository root (`.`) as Root Directory. Framework Preset: Other. The root vercel.json specifies installation, build and output:

- Install: `npm --prefix website ci`
- Build: `npm --prefix website run build`
- Output: `website/dist`

Do not select `website/` as Root Directory: its build reads the sibling image folder. If this repository already has a Vercel project with a different Root Directory, reset it to the repository root. See https://vercel.com/docs/project-configuration/vercel-json.

## Local development

`npm --prefix website ci`

`npm --prefix website run build`

`npm --prefix website test`

`npm --prefix website start`

Open http://localhost:3000.

## Publication state

Preview is noindex pending owner review. Live payments are disabled; donation-config.json contains public configuration only. Verify the payment recipient, account activation, settlement, donor scope and receipt terms before enabling a hosted checkout. No payment credentials belong in Git.

Local legal documents, private source briefs, reference screenshots, internal reports, environment files, node_modules and generated output are excluded from this upload. Public website copy and assets are intentionally included.
