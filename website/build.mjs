import {mkdir,copyFile,readFile,writeFile,readdir,rm} from 'node:fs/promises';
import path from 'node:path';
import {parseHTML} from 'linkedom';
import vm from 'node:vm';
import {routes} from './routes.mjs';
import {applySEO} from './seo.mjs';
import {validateDonationConfig} from './donations.mjs';
import {discoveryConfig,discoveryFiles} from './discovery.mjs';
const discovery=discoveryConfig();
const analyticsEnabled=process.env.VERCEL_ENV==='production'&&process.env.ANALYTICS_ENABLED!=='false';
const assetOutput=path.resolve('dist/assets');if(assetOutput!==path.join(process.cwd(),'dist','assets'))throw Error('Unexpected output path');
await rm(assetOutput,{recursive:true,force:true});await mkdir(assetOutput,{recursive:true});
for(const file of await readdir('../WEBSITE IMG'))if(file.endsWith('.webp'))await copyFile('../WEBSITE IMG/'+file,'dist/assets/'+file);
for(const f of ['style.css','hero.css','site-ui.css','app.js','enhance.js','slideshow.js']) await copyFile(f,'dist/'+f);
for(const f of ['analytics-client.mjs','analytics-policy.mjs'])await copyFile(f,'dist/'+f);
await copyFile('node_modules/@vercel/analytics/dist/index.mjs','dist/vercel-analytics.mjs');
// Use the same first photograph in the initial render and the enhanced carousel.
const appSource=await readFile('app.js','utf8');
await writeFile('dist/app.js',appSource.replace('src="${image(pillars[0])}"','src="/assets/student-classroom.webp"'));
const expandedPages=JSON.parse(await readFile('expanded-content.json','utf8'));
for(const [route,locales]of Object.entries(expandedPages))for(const lang of ['en','hi']){const p=locales[lang];if(!p?.title||!p?.intro||!p.sections?.length)throw Error(`Missing expanded content: ${route}/${lang}`)}
const donationConfig=JSON.parse(await readFile('donation-config.json','utf8'));validateDonationConfig(donationConfig);
const expansion='const webAnalyticsEnabled='+JSON.stringify(analyticsEnabled)+';\nconst donationConfig='+JSON.stringify(donationConfig)+';\nconst expandedPages='+JSON.stringify(expandedPages)+';\n'+await readFile('expansion.js','utf8');
await writeFile('dist/expansion.js',expansion);await copyFile('expansion.css','dist/expansion.css');
const html=(await readFile('index.html','utf8')).replace('noindex,nofollow',discovery.indexable?'index,follow':'noindex,nofollow').replace('<script src="/enhance.js"','<script src="/expansion.js" defer></script><script src="/enhance.js"').replace('</head>','<link rel="stylesheet" href="/site-ui.css"><link rel="stylesheet" href="/expansion.css"><script src="/slideshow.js" defer></script>'+(analyticsEnabled?'<script type="module" src="/analytics-client.mjs"></script>':'')+'</head>');
const app=await readFile('dist/app.js','utf8');
const content=JSON.parse(await readFile('content.json','utf8'));
for(const [slug,entry]of Object.entries(content))for(const lang of ['en','hi'])if(!entry[lang]?.need||!entry[lang]?.approach?.length)throw Error(`Incomplete content: ${slug}/${lang}`);
function render(pathname,lang){const {document,window}=parseHTML(html.replace('lang="en"',`lang="${lang}"`));const context={document,location:{pathname},addEventListener(){},matchMedia:()=>({matches:true}),setInterval(){},clearInterval(){},innerHeight:900,scrollY:0,navigator:{},URL,encodeURIComponent,FormData:class{}};vm.runInNewContext(app,context);vm.runInNewContext(expansion,context);applySEO(document,{pathname,lang,origin:discovery.origin,indexingEnabled:discovery.indexable});if(pathname==='/missing'||/\/search\/?$/.test(pathname))document.querySelector('meta[name="robots"]').setAttribute('content','noindex,follow');return document.toString();}
await writeFile('dist/index.html',render('/','en'));
for(const lang of ['en','hi']) for(const route of routes){const dir=`dist/${lang}/${route}`;await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',render(`/${lang}/${route}`,'en'===lang?'en':'hi'));}
await writeFile('dist/content.json',JSON.stringify(content));
await writeFile('dist/404.html',render('/missing','en'));
const files=discoveryFiles(discovery,routes);await writeFile('dist/robots.txt',files.robots);await writeFile('dist/sitemap.xml',files.sitemap);await writeFile('dist/llms.txt',files.llms);
console.log(`Built ${routes.length*2} localized pages. Indexing ${discovery.indexable?'enabled':'disabled'}; sitemap.xml, robots.txt and optional llms.txt generated.`);
