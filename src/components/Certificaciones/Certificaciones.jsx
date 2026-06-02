import './Certificaciones.css'
import data from '../../data/data.json'

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.certificaciones.titulo}</h2>
        <div className="cert__grid">
          {data.certificaciones.items.map((item) => (
            <div key={item.id} className="cert__card">
              <div className="cert__icono">&#10003;</div>
              <div className="cert__info">
                <p className="cert__nombre">{item.nombre}</p>
                <div className="cert__meta">
                  <span className="cert__institucion">{item.institucion}</span>
                  <span className="cert__fecha">{item.fecha}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
