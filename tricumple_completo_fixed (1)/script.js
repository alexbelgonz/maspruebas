
const target=new Date("2026-03-27T18:00:00").getTime();
const el=document.getElementById("countdown");
if(el){
setInterval(()=>{
const now=new Date().getTime();
const d=target-now;
if(d<0){el.innerHTML="LA LEYENDA HA COMENZADO";return;}
const days=Math.floor(d/(1000*60*60*24));
const h=Math.floor((d%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((d%(1000*60*60))/(1000*60));
const s=Math.floor((d%(1000*60))/1000);
el.innerHTML=`<div>${days}<span>DÍAS</span></div><div>${h}<span>HORAS</span></div><div>${m}<span>MIN</span></div><div>${s}<span>SEG</span></div>`;
},1000);
}


function activateLegend(){
  const btn=document.getElementById("ctaButton");
  const nav=document.getElementById("mainNav");
  const info=document.querySelector(".event-info");
  const audio=document.getElementById("bgmusic");

  if(btn) btn.classList.add("fade-button");
  if(nav){ nav.classList.remove("nav-hidden"); nav.classList.add("nav-visible"); }
  if(info){ info.classList.remove("hidden-info"); info.classList.add("visible-info"); }

  if(audio){
    audio.volume=0;
    audio.play().catch(()=>{});
    let fade=setInterval(()=>{
      if(audio.volume<0.4){ audio.volume+=0.02; }
      else{ clearInterval(fade); }
    },200);
  }
}
