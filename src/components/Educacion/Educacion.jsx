import './Educacion.css'
import data from '../../data/data.json'

export default function Educacion() {
  return (
    <section id="educacion" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.educacion.titulo}</h2>
        <div className="edu__lista">
          {data.educacion.items.map((item) => (
            <div key={item.id} className="edu__card">
              <div className="edu__logo-wrap">
                <img src={item.logo} alt={item.institucion} className="edu__logo" />
              </div>
              <div className="edu__info">
                <h3 className="edu__institucion">{item.institucion}</h3>
                <p className="edu__titulo">{item.titulo}</p>
                <span className="edu__periodo">{item.periodo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
