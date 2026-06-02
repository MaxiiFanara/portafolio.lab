import './Contacto.css'
import data from '../../data/data.json'

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="section__inner">
        <h2 className="section__title">{data.contacto.titulo}</h2>
        <div className="cont__contenido">
          <p className="cont__texto">{data.contacto.texto}</p>
          <div className="cont__links">
            {data.contacto.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="cont__link"
                target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                <img src={link.icono} alt={link.nombre} className="cont__icono" />
                <span>{link.nombre}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
