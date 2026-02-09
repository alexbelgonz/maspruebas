import React from 'react'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('inicio')

  return (
    <div className="container">
      <h1>Tricumple 2026</h1>
      <h2>La Leyenda Continúa</h2>

      <nav>
        {['inicio','highlights2024','highlights2025','resenas','calendario'].map(t => (
          <button key={t} onClick={() => setTab(t)}>
            {{
              inicio:'Inicio',
              highlights2024:'Highlights 2024',
              highlights2025:'Highlights 2025',
              resenas:'Reseñas',
              calendario:'Calendario 2026'
            }[t]}
          </button>
        ))}
      </nav>

      {tab === 'inicio' && <p>Bienvenidos al evento más legendario del año.</p>}

      {tab === 'highlights2024' && (
        <section>
          <h3>Tricumple 2024 — el origen de la leyenda</h3>
          <p>(Galería existente)</p>
        </section>
      )}

      {tab === 'highlights2025' && (
        <section>
          <h3>Highlights Tricumple 2025</h3>
          <p>Próximamente…</p>
        </section>
      )}

      {tab === 'resenas' && (
        <section className="reviews">
          <h3>Reseñas</h3>
          <blockquote>
            “El Tricumple 2024 fue una experiencia mística. El de 2025 lo superó.
            Ahora solo pienso en marzo de 2026.”
            <span>— Susana Oria</span>
          </blockquote>
          <blockquote>
            “Pensé que era solo un cumpleaños… salí formando parte de una leyenda.
            Tricumple 2026 no me lo pierdo.”
            <span>— Elsa Pato</span>
          </blockquote>
          <blockquote>
            “Cada Tricumple eleva el listón. 2024 creó el mito, 2025 lo confirmó,
            2026 lo va a romper.”
            <span>— Esteban Dido</span>
          </blockquote>
        </section>
      )}

      {tab === 'calendario' && (
        <section>
          <h3>Calendario 2026</h3>
          <p>(Por definir)</p>
        </section>
      )}
    </div>
  )
}
