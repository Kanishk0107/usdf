// Call after rendering main content. No deployment URL is inferred from the DOM.
export function applySEO(document, { pathname = '/', lang, origin, indexingEnabled = false } = {}) {
  const head = document.head;
  if (!head) return;
  const clean = value => String(value || '').replace(/\s+/gu, ' ').trim();
  const text = node => {
    if (!node) return '';
    const copy = node.cloneNode(true);
    copy.querySelectorAll('script,style,template,[hidden],[aria-hidden="true"],nav,form,button').forEach(n => n.remove());
    copy.querySelectorAll('br').forEach(n => n.replaceWith(document.createTextNode(' ')));
    return clean(copy.textContent);
  };
  const meta = (key, value, property = false) => {
    const attr = property ? 'property' : 'name';
    const nodes = [...head.querySelectorAll(`meta[${attr}="${key}"]`)];
    const node = nodes.shift() || document.createElement('meta');
    nodes.forEach(n => n.remove());
    node.setAttribute(attr, key);
    node.setAttribute('content', value);
    if (!node.parentNode) head.appendChild(node);
  };
  head.querySelectorAll('[data-seo="generated"]').forEach(n => n.remove());
  // These fields are owned by this helper, including when a URL becomes invalid.
  head.querySelectorAll('link[rel="canonical"],link[rel="alternate"][hreflang],meta[property="og:url"]').forEach(n => n.remove());
  let base;
  try {
    const candidate = new URL(origin);
    if (typeof origin === 'string' && candidate.protocol === 'https:' &&
        !candidate.username && !candidate.password && candidate.pathname === '/' &&
        !candidate.search && !candidate.hash) base = candidate;
  } catch { /* Absent or invalid origins intentionally produce no absolute metadata. */ }
  let path;
  try {
    if (typeof pathname === 'string' && /^\/(?!\/)/u.test(pathname) && !/[\\?#\s]/u.test(pathname)) {
      path = new URL(pathname, 'https://path.invalid').pathname;
    }
  } catch { /* Invalid paths cannot identify a page. */ }
  const locale = /^(en|hi)$/u.test(lang || '') ? lang :
    path?.match(/^\/(en|hi)(?:\/|$)/u)?.[1] || document.documentElement.lang || 'en';
  const main = document.querySelector('main, #main');
  const heading = text(main?.querySelector('h1'));
  const title = clean(document.title) || heading;
  const paragraphs = [...(main?.querySelectorAll('p') || [])].map(text).filter(Boolean);
  const body = paragraphs.join(' ') || text(main);
  // Prefixing the actual page heading distinguishes pages sharing boilerplate copy.
  const summary = clean([heading, body].filter(Boolean).join(' — '));
  const description = Array.from(summary).slice(0, 170).join('');
  meta('description', description);
  meta('og:type', 'website', true);
  meta('og:title', title, true);
  meta('og:description', description, true);
  meta('og:locale', locale === 'hi' ? 'hi_IN' : 'en_IN', true);
  meta('twitter:card', 'summary');
  meta('twitter:title', title);
  meta('twitter:description', description);
  const host = (base?.hostname || document.location?.hostname || '').toLowerCase();
  const preview = !indexingEnabled || !base || /(^|[.\-])(localhost|staging|stage|preview|dev|test)([.\-]|$)/u.test(host) ||
    /\.(localhost|local|test|invalid)$/u.test(host) ||
    host === '[::1]' || /^127\./u.test(host) || /^10\./u.test(host) || /^192\.168\./u.test(host) ||
    /^172\.(1[6-9]|2\d|3[01])\./u.test(host) || host === '0.0.0.0';
  if (preview) {
    const directives = [...head.querySelectorAll('meta[name="robots"]')]
      .flatMap(n => (n.getAttribute('content') || '').toLowerCase().split(/[,\s]+/u))
      .filter(v => v && v !== 'index' && v !== 'all');
    meta('robots', [...new Set([...directives, 'noindex'])].join(', '));
  }
  if (!base || !path) return;
  const absolute = p => new URL(p, base.origin).href;
  const link = (rel, href, language) => {
    const node = document.createElement('link');
    node.setAttribute('rel', rel);
    node.setAttribute('href', href);
    if (language) node.setAttribute('hreflang', language);
    node.setAttribute('data-seo', 'generated');
    head.appendChild(node);
  };
  const canonicalPath = path === '/' || path.endsWith('/') ? path : `${path}/`;
  const canonical = absolute(canonicalPath);
  link('canonical', canonical);
  meta('og:url', canonical, true);
  // This site publishes equivalent English and Hindi routes.
  const localized = canonicalPath.match(/^\/(en|hi)(\/.*|$)/u);
  if (localized || path === '/') {
    const suffix = localized ? localized[2] || '/' : '/';
    for (const language of ['en', 'hi']) link('alternate', absolute(`/${language}${suffix}`), language);
  }
  if (!heading || !body) return;
  const graph = [
    { '@type': 'WebSite', '@id': `${base.origin}/#website`, url: `${base.origin}/`,
      name: 'Unified Social Development Foundation', alternateName: 'USDF',
      publisher: { '@id': `${base.origin}/#organization` } },
    { '@type': 'Organization', '@id': `${base.origin}/#organization`,
      name: 'Unified Social Development Foundation', alternateName: 'USDF',
      url: `${base.origin}/`, logo: `${base.origin}/assets/usdf-logo.webp`,
      email: 'office.usdf@gmail.com', areaServed: { '@type': 'Place', name: 'Uttarakhand, India' },
      description: 'A foundation based in Uttarakhand, India, focused on inclusive social development.' },
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical,
      name: title, description, inLanguage: locale, isPartOf: { '@id': `${base.origin}/#website` },
      about: { '@id': `${base.origin}/#organization` } }
  ];
  // Use only labels and links present on the rendered page; never invent slug labels.
  const crumbs = [];
  const parts = path.split('/').filter(Boolean);
  const ancestors = parts.slice(0, -1).map((_, i) => `/${parts.slice(0, i + 1).join('/')}/`);
  for (const ancestor of ancestors) {
    const anchor = [...document.querySelectorAll('a[href]')].find(a => {
      try { return new URL(a.getAttribute('href'), canonical).href === absolute(ancestor) && text(a); }
      catch { return false; }
    });
    if (anchor) crumbs.push({ name: text(anchor), item: absolute(ancestor) });
  }
  crumbs.push({ name: heading, item: canonical });
  if (crumbs.length > 1) {
    const id = `${canonical}#breadcrumb`;
    graph[2].breadcrumb = { '@id': id };
    graph.push({ '@type': 'BreadcrumbList', '@id': id,
      itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })) });
  }
  const faqItems = [...document.querySelectorAll('details')].map(detail => {
    const question = text(detail.querySelector('summary'));
    const answer = text(detail.querySelector('p'));
    return question && answer ? { '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer } } : null;
  }).filter(Boolean);
  if (faqItems.length) graph.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`,
    mainEntity: faqItems });
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo', 'generated');
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    .replace(/</gu, '\\u003c').replace(/>/gu, '\\u003e').replace(/&/gu, '\\u0026');
  head.appendChild(script);
}
