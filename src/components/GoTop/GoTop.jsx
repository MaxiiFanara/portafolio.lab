import './GoTop.css'

export default function GoTop({ showGoTop }) {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  let cls = 'gotop'
  if (showGoTop) cls += ' gotop--visible'

  return (
    <button className={cls} onClick={handleClick} aria-label="Volver arriba">
      &#8679;
    </button>
  )
}
