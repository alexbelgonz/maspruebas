
const target = new Date("2026-03-27T18:00:00").getTime();
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

function activateLegend(){
  const btn = document.getElementById("ctaButton");
  const countdown = document.getElementById("countdown");
  const nav = document.getElementById("mainNav");
  const title = document.getElementById("heroTitle");
  const audio = document.getElementById("bgmusic");
  const info = document.getElementById("eventInfo");

  btn.classList.add("fade-button");
  title.classList.add("title-activated");

  countdown.classList.remove("countdown-hidden");
  countdown.classList.add("countdown-visible");

  nav.classList.remove("nav-hidden");
  nav.classList.add("nav-visible");

  info.classList.remove("hidden-info");
  info.classList.add("visible-info");

  if(audio){
    audio.volume = 0;
    audio.play().catch(()=>{});
    let fade = setInterval(()=>{
      if(audio.volume < 0.4){
        audio.volume += 0.02;
      } else {
        clearInterval(fade);
      }
    },200);
  }
}
