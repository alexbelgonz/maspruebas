
// Countdown
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
      <div>${days}<span>días</span></div>
      <div>${h}<span>horas</span></div>
      <div>${m}<span>min</span></div>
      <div>${s}<span>seg</span></div>
    `;
  },1000);
}

// Subtle music autoplay on first interaction
let musicStarted = false;
function startMusic(){
  if(musicStarted) return;
  musicStarted = true;
  const audio = document.getElementById("bgmusic");
  audio.volume = 0;
  audio.play();
  let fade = setInterval(()=>{
    if(audio.volume < 0.4){
      audio.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  },200);
}

window.addEventListener("scroll", startMusic);
window.addEventListener("mousemove", startMusic);
window.addEventListener("touchstart", startMusic);
