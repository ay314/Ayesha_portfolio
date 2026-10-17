const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const P=+document.body.dataset.p;
const L=[['Home','index.html'],['About me','about.html'],['My work','work.html'],['What I’ve done','results.html']];
const T=['Start here','Layer 1 · Who I am','Layer 2 · Where I’ve worked','Layer 3 · What I’ve achieved'];
document.body.insertAdjacentHTML('afterbegin',`<div id="bar"></div><div id="glow"></div><nav aria-label="Layers"><div class="w"><a class="logo" href="index.html">Ayesha<i>.</i></a><div class="rail">${L.slice(1).map((l,i)=>`${i?`<s class="${P>i+1?'done':''}"></s>`:''}<a href="${l[1]}" class="${P==i+1?'on':P>i+1?'done':''}"><b>${i+1}</b><span>${l[0]}</span></a>`).join('')}</div></div></nav>`);
const cols=['var(--vio)','var(--pink)','var(--lime);color:var(--bg)'];
const main=$('main');
if(P<3){const n=L[P+1];main.insertAdjacentHTML('beforeend',`<div class="w"><a class="next" style="background:${cols[P]}" href="${n[1]}"><small>Next layer</small><h2>${n[0]}</h2><span class="arr" aria-hidden="true">→</span></a></div>`)}
else main.insertAdjacentHTML('beforeend',`<div class="w"><div class="box rv"><div class="blob"></div><h2>Let’s make something happen.</h2><p>I’m open to roles in Digital Marketing, Performance Marketing, Marketing Analytics and Growth Marketing.</p><div class="cta"><a class="btn hot" href="mailto:your-email@example.com">Email me</a><a class="btn" href="https://www.linkedin.com/in/ayesha-khanumm/" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="https://github.com/" target="_blank" rel="noopener">GitHub</a></div></div></div>`);
main.insertAdjacentHTML('afterend','<footer><div class="w"><span>© 2026 Ayesha Khanum</span><span>Built with curiosity + data.</span></div></footer>');
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%'},{passive:true});
addEventListener('mousemove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
const fmt=(el,v)=>{const d=+el.dataset.d||0;el.textContent=(d?v.toFixed(d):Math.round(v).toLocaleString('en-IN'))+(el.dataset.s||'')};
function count(b){const n=+b.dataset.n;if(calm)return fmt(b,n);const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1600,1);fmt(b,n*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)})(t0)}
$$('.fl b').forEach(count);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target;el.classList.add('in');el.querySelectorAll('b[data-n]').forEach(count);
 if(el.id==='fun')[...el.children].forEach((b,i)=>setTimeout(()=>b.style.width=b.dataset.w,i*300))}),{threshold:.2});
$$('.rv,#fun').forEach(e=>io.observe(e));if(calm)$$('.fb').forEach(b=>b.style.width=b.dataset.w);
const tabs=$$('.tab'),pn=$$('.pn');tabs.forEach(b=>b.onclick=()=>{tabs.forEach(x=>x.setAttribute('aria-selected',x===b));pn.forEach((p,i)=>p.classList.toggle('on',i==b.dataset.t))});
const ty=$('#type');if(ty){const ws=['lead generation.','performance campaigns.','audience targeting.','data-driven growth.'];let wi=0,ci=0,del=false;
 (function tick(){const w=ws[wi];if(calm){ty.textContent=w;return}ty.textContent=w.slice(0,ci);
 if(!del&&ci<w.length)ci++;else if(!del){del=true;return setTimeout(tick,1500)}else if(ci>0)ci--;else{del=false;wi=(wi+1)%ws.length}setTimeout(tick,del?35:75)})()}
const t=$('#tilt');if(t){const v=$('.vis');if(!calm)v.onmousemove=e=>{const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`rotateY(${x*16}deg) rotateX(${-y*16}deg)`};v.onmouseleave=()=>t.style.transform=''}
