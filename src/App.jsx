import React, { useEffect, useState } from 'react'
import img1 from './assets/2024_1.jpg'
import img2 from './assets/2024_2.jpg'

export default function App() {
  const [tab, setTab] = useState('inicio')
  const [time, setTime] = useState({d:0,h:0,m:0,s:0})

  useEffect(() => {
    const target = new Date('2026-03-28T00:00:00')
    const i = setInterval(() => {
      const now = new Date()
      const diff = target - now
      const d = Math.max(0, Math.floor(diff / (1000*60*60*24)))
      const h = Math.max(0, Math.floor((diff / (1000*60*60)) % 24))
      const m = Math.max(0, Math.floor((diff / (1000*60)) % 60))
      const s = Math.max(0, Math.floor((diff / 1000) % 60))
      setTime({d,h,m,s})
    }, 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <div className="container">
      <h1>Tricumple 2026</h1>
      <h2>La Leyenda Continúa</h2>

      <nav>
        <button onClick={()=>setTab('inicio')}>Inicio</button>
        <button onClick={()=>setTab('2024')}>Highlights 2024</button>
        <button onClick={()=>setTab('2025')}>Highlights 2025</button>
        <button onClick={()=>setTab('resenas')}>Reseñas</button>
        <button onClick={()=>setTab('calendario')}>Calendario 2026</button>
      </nav>

      {tab==='inicio' && (
        <div className="countdown">
          <div><span>{time.d}</span><small>días</small></div>
          <div><span>{time.h}</span><small>horas</small></div>
          <div><span>{time.m}</span><small>min</small></div>
          <div><span>{time.s}</span><small>seg</small></div>
        </div>
      )}

      {tab==='2024' && (
        <div>
          <h3>Tricumple 2024 — el origen de la leyenda</h3>
          <div className="gallery">
            <a href={img1} target="_blank"><img src={img1} /></a>
            <a href={img2} target="_blank"><img src={img2} /></a>
          </div>
        </div>
      )}

      {tab==='2025' && (
        <div>
          <h3>Highlights Tricumple 2025</h3>
          <p>Próximamente…</p>
        </div>
      )}

      {tab==='resenas' && (
        <div className="reviews">
          <h3>Reseñas</h3>
          <blockquote>
            “El Tricumple 2024 fue el inicio de algo que no sabía que necesitaba. En 2025 ya era una cita sagrada. El 2026 es obligación.”
            <span>— Susana Oria</span>
          </blockquote>
          <blockquote>
            “2024 fue irrepetible hasta que llegó 2025. Ya cuento los días para 2026.”
            <span>— Elsa Pato</span>
          </blockquote>
          <blockquote>
            “Entré por curiosidad y ahora es destino. 2026 promete.”
            <span>— Esteban Dido</span>
          </blockquote>
        </div>
      )}

      {tab==='calendario' && (
        <div>
          <h3>Calendario 2026</h3>
        </div>
      )}
    </div>
  )
}
