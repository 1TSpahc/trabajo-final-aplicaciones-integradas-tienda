import { Link } from 'wouter'

import { Navegacion } from './navegacion'
import './styles.css'

export function Cabecera () {
  return (
    <header className='cabecera'>
      <Link to='/'>
        <h2 className='cabecera__logo'>Sport Center</h2>
      </Link>
      <Navegacion />
    </header>
  )
}
