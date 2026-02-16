
const target = new Date("2026-03-28T12:00:00").getTime();
const el = document.getElementById("countdown");

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

function toggleMusic(){
  const audio = document.getElementById("bgmusic");
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
}
