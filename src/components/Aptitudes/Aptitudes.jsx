import './Aptitudes.css'
import data from '../../data/data.json'

export default function Aptitudes() {
  return (
    <section id="aptitudes" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.aptitudes.titulo}</h2>
        <div className="apt__contenido">

          <div className="apt__habilidades">
            <h3 className="apt__subtitulo">Habilidades</h3>
            <ul className="apt__lista">
              {data.aptitudes.habilidades.map((h, i) => (
                <li key={i} className="apt__item">
                  <span className="apt__bullet">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="apt__stack">
            <h3 className="apt__subtitulo">Stack Tecnologico</h3>
            <div className="apt__grid">
              {data.aptitudes.stack.map((tec, i) => (
                <div key={i} className="apt__card">
                  <img src={tec.icono} alt={tec.nombre} className="apt__icono" />
                  <span className="apt__nombre">{tec.nombre}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
