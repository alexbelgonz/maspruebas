
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
    el.innerHTML = `<div>${days}<span>DÍAS</span></div>
                    <div>${h}<span>HORAS</span></div>
                    <div>${m}<span>MIN</span></div>
                    <div>${s}<span>SEG</span></div>`;
  },1000);
}

function activateLegend(){
  const landing=document.getElementById("landing");
  const main=document.getElementById("mainContent");
  const btn=document.getElementById("ctaButton");
  btn.style.opacity="0";
  setTimeout(()=>{landing.classList.add("hidden");main.classList.remove("hidden");},400);
}

let currentImages=[];
let currentIndex=0;

function buildGallery(containerId, folderPath, images){
  const container=document.getElementById(containerId);
  if(!container) return;
  currentImages=images.map(name=>folderPath+name);
  images.forEach((name,index)=>{
    const img=document.createElement("img");
    img.src=folderPath+name;
    img.onclick=()=>openModal(index);
    container.appendChild(img);
  });
}

function openModal(index){
  currentIndex=index;
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-img").src=currentImages[currentIndex];
}

function closeModal(){document.getElementById("modal").style.display="none";}

document.addEventListener("keydown",function(e){
  if(e.key==="ArrowRight"){currentIndex=(currentIndex+1)%currentImages.length;openModal(currentIndex);}
  if(e.key==="ArrowLeft"){currentIndex=(currentIndex-1+currentImages.length)%currentImages.length;openModal(currentIndex);}
  if(e.key==="Escape"){closeModal();}
});
