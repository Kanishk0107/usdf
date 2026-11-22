export function discoveryConfig(env=process.env){
let origin='';if(env.SITE_ORIGIN){const u=new URL(env.SITE_ORIGIN);if(u.protocol!=='https:'||u.username||u.password||u.pathname!=='/'||u.search||u.hash)throw Error('SITE_ORIGIN must be a plain HTTPS origin');origin=u.origin}
const indexable=env.INDEXING_ENABLED==='true'&&!!origin&&env.VERCEL_ENV!=='preview'&&!/(localhost|\.local|\.invalid)$/.test(new URL(origin||'https://localhost').hostname);
return {origin,indexable};
}
export function discoveryFiles({origin,indexable},routes){
const escape=v=>v.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const publicRoutes=routes.filter(r=>!['search','support'].includes(r));
const entries=indexable?['en','hi'].flatMap(lang=>publicRoutes.map(route=>{const suffix=route?route+'/':'';const alternates=['en','hi'].map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${escape(origin+'/'+l+'/'+suffix)}"/>`).join('');return `<url><loc>${escape(origin+'/'+lang+'/'+suffix)}</loc>${alternates}</url>`})):[];
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
const robots=indexable?`User-agent: *\nAllow: /\nDisallow: /en/search/\nDisallow: /hi/search/\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n';
const llms=indexable?`# Unified Social Development Foundation (USDF)\n\n> A foundation based in Uttarakhand, India, focused on inclusive social development.\n\nThis optional reading directory does not establish certification, completed impact, tax relief or donation eligibility. Use the current linked pages as the source of truth.\n\n## Foundation\n- [About](${origin}/en/about/): Mission and intended focus.\n- [Governance](${origin}/en/governance/): Leadership information and distinct roles.\n- [Our work](${origin}/en/our-work/): Six connected areas of charitable purpose.\n- [Transparency](${origin}/en/transparency/): Evidence and document information.\n\n## Participation\n- [Giving guide](${origin}/en/donor-guide/): Enquiries, payment availability and documentation.\n- [Support](${origin}/en/donate/): Current support options; check the page before describing payment availability.\n- [Volunteer guide](${origin}/en/volunteer-guide/)\n- [Partnerships](${origin}/en/partnerships/)\n- [Contact](${origin}/en/contact/)\n\n## Hindi\n- [हिन्दी](${origin}/hi/)\n\n## Technical\n- [Sitemap](${origin}/sitemap.xml)\n- [Privacy](${origin}/en/privacy/)\n`:'# USDF preview\n\nThis preview is not enabled for search indexing. Public reading links are generated after production origin and indexing settings are configured.\n';
return {sitemap,robots,llms};
}
