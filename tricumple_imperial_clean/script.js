
const target = new Date("2026-03-28T12:00:00").getTime();
const el = document.getElementById("countdown");

if(el){
  setInterval(()=>{
    const now = new Date().getTime();
    const d = target-now;
    if(d<0){ el.innerHTML="LA LEYENDA HA COMENZADO"; return;}
    const days = Math.floor(d/(1000*60*60*24));
    const h = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((d%(1000*60*60))/(1000*60));
    const s = Math.floor((d%(1000*60))/1000);
    el.innerHTML = `
      <div>${days}<span>DÍAS</span></div>
      <div>${h}<span>HORAS</span></div>
      <div>${m}<span>MIN</span></div>
      <div>${s}<span>SEG</span></div>
    `;
  },1000);
}

// Music (add your own mp3 inside /audio and name it imperial_theme.mp3)
let started=false;
function startMusic(){
  if(started) return;
  started=true;
  const audio=document.getElementById("bgmusic");
  if(!audio) return;
  audio.volume=0;
  audio.play().catch(()=>{});
  let fade=setInterval(()=>{
    if(audio.volume<0.4){ audio.volume+=0.01; }
    else{ clearInterval(fade); }
  },200);
}

window.addEventListener("scroll",startMusic);
window.addEventListener("mousemove",startMusic);
window.addEventListener("touchstart",startMusic);
