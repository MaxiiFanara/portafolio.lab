import { useState, useEffect } from 'react'
import './Hero.css'
import data from '../../data/data.json'

const TYPING_TEXT  = data.personal.titulo
const TYPING_SPEED = 120
const PAUSE_AFTER  = 2000
const DELETE_SPEED = 60

export default function Hero() {
  const [displayed,  setDisplayed]  = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    if (!isDeleting && displayed.length < TYPING_TEXT.length) {
      timeout = setTimeout(() => setDisplayed(TYPING_TEXT.slice(0, displayed.length + 1)), TYPING_SPEED)
    } else if (!isDeleting && displayed.length === TYPING_TEXT.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(TYPING_TEXT.slice(0, displayed.length - 1)), DELETE_SPEED)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting])

  return (
    <section className="hero">
      <div className="hero__inner">

        <div className="hero__left">
          <h1 className="hero__nombre">{data.personal.nombre}</h1>
          <p className="hero__typing">
            {displayed}
            <span className="hero__cursor">|</span>
          </p>

          <div className="hero__redes">
            <a href={data.personal.redes.github} target="_blank" rel="noopener noreferrer" className="hero__red" aria-label="GitHub">
              <img src="/assets/images/icon-github.png" alt="GitHub" />
            </a>
            <a href={data.personal.redes.linkedin} target="_blank" rel="noopener noreferrer" className="hero__red" aria-label="LinkedIn">
              <img src="/assets/images/icon-linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__sobre-titulo">Sobre mi</div>
          {data.sobreMi.parrafos.map((p, i) => (
            <p key={i} className="hero__sobre-parrafo">{p}</p>
          ))}
        </div>

      </div>
    </section>
  )
}
