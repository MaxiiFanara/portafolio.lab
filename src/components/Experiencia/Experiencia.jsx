import './Experiencia.css'
import data from '../../data/data.json'

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.experiencia.titulo}</h2>
        <div className="exp__lista">
          {data.experiencia.items.map((item) => (
            <div key={item.id} className="exp__card">
              <div className="exp__header">
                <div>
                  <h3 className="exp__cargo">{item.cargo}</h3>
                  <p className="exp__empresa">{item.empresa}</p>
                </div>
                <span className="exp__periodo">{item.periodo}</span>
              </div>
              <ul className="exp__actividades">
                {item.actividades.map((act, i) => (
                  <li key={i} className="exp__actividad">
                    <span className="exp__bullet">▹</span>
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
