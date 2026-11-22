# Google, Bing and AI search setup

The build generates sitemap.xml, robots.txt and an optional llms.txt. Local and Vercel preview builds stay noindex by default. A production sitemap contains 58 English/Hindi URLs with language alternates, excluding internal search and the duplicate support route. No made-up last-modification dates are emitted.

## Activate on Vercel

1. Connect your chosen public domain and confirm HTTPS works.
2. In Project Settings → Environment Variables, add SITE_ORIGIN with the exact HTTPS origin (no page path), for example your verified domain. Do not copy a sample domain.
3. Add INDEXING_ENABLED=true for Production only. Keep it unset for Preview/Development. Redeploy Production.
4. Check /robots.txt, /sitemap.xml and page source. Public pages should say index,follow; search and 404 pages remain noindex. Confirm Vercel deployment protection or firewall rules do not block public crawlers.

## Submit

In https://search.google.com/search-console add a Domain property for your domain, verify the supplied DNS TXT record at your authoritative DNS provider, then submit sitemap.xml under Sitemaps. Use URL Inspection → Test Live URL and Request Indexing for the English/Hindi homepages and key pages.

In https://www.bing.com/webmasters add or import the verified site and submit the same sitemap. IndexNow can be added for later update notifications; it is not a requirement for this sitemap and is not configured here.

## AI visibility

Production robots allows general crawlers and explicitly OAI-SearchBot. PerplexityBot is covered by the general allow rule. Search bot access is different from training permissions; this change does not add a new training-specific policy. A CDN or firewall can still block requests even when robots allows them.

llms.txt is an optional human-readable link directory, not a submission endpoint, universal standard or ranking guarantee. Google says no special AI files/schema are required for AI Overviews or AI Mode. The pages already render readable HTML, localized metadata and content. Canonical URLs, hreflang and page/breadcrumb JSON-LD use SITE_ORIGIN.

## Primary sources

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/monitor-debug/search-console-start/
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.openai.com/api/docs/bots
- https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a

Discovery and indexing take time and are not guaranteed by submitting a sitemap or permitting a bot. No Search Console/Bing account verification or submission has been performed automatically.
