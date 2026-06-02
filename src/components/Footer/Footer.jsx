import './Footer.css'
import data from '../../data/data.json'

export default function Footer() {
  const anio = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__nombre">{data.footer.nombre}</p>
        <div className="footer__redes">
          {data.footer.redes.map((red, i) => (
            <a
              key={i}
              href={red.url}
              className="footer__link"
              target={red.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={red.nombre}
            >
              <img src={red.icono} alt={red.nombre} />
            </a>
          ))}
        </div>
        <p className="footer__copy">{anio} — Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
