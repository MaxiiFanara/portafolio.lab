import { useEffect, useReducer } from 'react'
import Hero           from './components/Hero/Hero'
import Experiencia    from './components/Experiencia/Experiencia'
import Educacion      from './components/Educacion/Educacion'
import Certificaciones from './components/Certificaciones/Certificaciones'
import Aptitudes      from './components/Aptitudes/Aptitudes'
import Proyectos      from './components/Proyectos/Proyectos'
import Contacto       from './components/Contacto/Contacto'
import Footer         from './components/Footer/Footer'
import GoTop          from './components/GoTop/GoTop'

const initialState = {
  showGoTop: false,
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SHOW_GOTOP':
      return { ...state, showGoTop: action.payload }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: 'SET_SHOW_GOTOP', payload: window.pageYOffset > 200 })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Hero />
      <main>
        <Experiencia />
        <Educacion />
        <Certificaciones />
        <Aptitudes />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <GoTop showGoTop={state.showGoTop} />
    </div>
  )
}
