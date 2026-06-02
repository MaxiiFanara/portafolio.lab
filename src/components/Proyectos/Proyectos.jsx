import './Proyectos.css'
import data from '../../data/data.json'

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.proyectos.titulo}</h2>
        <div className="proy__lista">
          {data.proyectos.items.map((proyecto) => (
            <div key={proyecto.id} className="proy__card">
              <div className="proy__info">
                <h3 className="proy__titulo">{proyecto.titulo}</h3>
                <p className="proy__descripcion">{proyecto.descripcion}</p>
                <div className="proy__tags">
                  {proyecto.tecnologias.map((tec, i) => (
                    <span key={i} className="tag">{tec}</span>
                  ))}
                </div>
              </div>
              <div className="proy__links">
                <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className="btn--primary">
                  Ver Repo
                </a>
                {proyecto.docker && (
                  <a href={proyecto.docker} target="_blank" rel="noopener noreferrer" className="btn--outline">
                    Docker Hub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
