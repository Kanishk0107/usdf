// Five-image viewport hero. Replaces the earlier six-pillar slideshow controller.
const stage=document.querySelector('.hero');
if(stage){
const heroSlides=[
{file:'student-classroom.webp',pillar:0,en:'Learning opens a lifetime of possibilities.',hi:'शिक्षा नए अवसरों का आधार है।',alt:'A smiling student in a bright classroom',altHi:'उज्ज्वल कक्षा में मुस्कुराता विद्यार्थी'},
{file:'health-checkup.webp',pillar:1,en:'Health awareness. Stronger communities.',hi:'स्वास्थ्य जागरूकता। मजबूत समुदाय।',alt:'A community health camp checkup',altHi:'सामुदायिक स्वास्थ्य शिविर में जांच'},
{file:'women-sewing.webp',pillar:2,en:'Skills, confidence and opportunity for women.',hi:'महिलाओं के लिए कौशल, आत्मविश्वास और अवसर।',alt:'Women taking part in a sewing workshop',altHi:'सिलाई कार्यशाला में भाग लेती महिलाएं'},
{file:'community-learning.webp',pillar:3,en:'Shared knowledge. Stronger rural communities.',hi:'साझा ज्ञान। मजबूत ग्रामीण समुदाय।',alt:'A community learning circle in a rural setting',altHi:'ग्रामीण परिवेश में सामुदायिक शिक्षण समूह'},
{file:'tree-planting.webp',pillar:5,en:'Planting hope for a greener tomorrow.',hi:'हरित कल के लिए आशा का रोपण।',alt:'A community tree planting activity',altHi:'सामुदायिक वृक्षारोपण गतिविधि'}];
function applyCopy(current){const entry=heroSlides[current],p=pillars[entry.pillar];document.querySelector('#hero-copy').textContent=hi?entry.hi:entry.en;const link=document.querySelector('#hero-link');link.href=url('our-work/'+p[0]);link.textContent=title(p);front.alt=hi?entry.altHi:entry.alt;}
const slides=[...document.querySelectorAll('[data-slide]')].slice(0,5);
document.querySelectorAll('[data-slide]').forEach((b,i)=>{if(i>=5)b.remove()});
const front=document.querySelector('#hero-image'),back=front.cloneNode();back.removeAttribute('id');back.alt='';back.setAttribute('aria-hidden','true');back.className='hero-backdrop';front.before(back);
const play=document.querySelector('#play');let index=0,clock=null,paused=false,generation=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function pause(){clearInterval(clock);clock=null;play.textContent='▶';play.setAttribute('aria-label',document.documentElement.lang==='hi'?'स्लाइड शो चलाएं':'Play slideshow')}
function start(){pause();if(reduced.matches||document.hidden)return;clock=setInterval(()=>select(index+1),7000);play.textContent='Ⅱ';play.setAttribute('aria-label',document.documentElement.lang==='hi'?'स्लाइड शो रोकें':'Pause slideshow')}
async function select(next){index=(next+slides.length)%slides.length;const current=index,token=++generation;const loader=new Image();loader.src='/assets/'+heroSlides[current].file.replace('.png','.webp');try{await loader.decode()}catch{return}if(token!==generation)return;back.src=front.src;front.src=loader.src;applyCopy(current);if(!reduced.matches)front.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'ease-in-out'});slides.forEach((b,i)=>{b.classList.toggle('active',i===current);b.setAttribute('aria-pressed',String(i===current))})}
front.src='/assets/'+heroSlides[0].file.replace('.png','.webp');back.src=front.src;applyCopy(0);
slides.forEach((b,i)=>{b.setAttribute('aria-label',title(pillars[heroSlides[i].pillar]));b.setAttribute('aria-pressed',String(i===0));b.onclick=()=>{paused=true;pause();select(i)}});
play.onclick=()=>{paused=!!clock;if(paused)pause();else start()};
// Remove the old pointer-hover pause; focus and explicit pause remain available.
stage.replaceWith(stage);stage.onmouseenter=null;
const oldPlay=play;
stage.addEventListener('focusin',e=>{if(e.target!==oldPlay){paused=true;pause()}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();else if(!paused)start()});
reduced.addEventListener('change',()=>{if(reduced.matches)pause();else if(!paused)start()});
const controls=document.querySelector('.controls');controls.querySelectorAll('button:not([data-slide]):not(#play)').forEach(b=>b.remove());slides.forEach(b=>{b.textContent='';b.classList.add('slide-dot')});play.classList.add('slideshow-pause');stage.append(play);controls.setAttribute('aria-label',hi?'चित्र चुनें':'Choose image');
stage.setAttribute('aria-roledescription','carousel');stage.setAttribute('aria-label',hi?'हमारे कार्य क्षेत्र':'Our areas of focus');start();
}
