import { Link } from 'wouter'

import './styles.css'

export function Enlace ({ texto, path }) {
  return (
    <Link to={path} className='enlace'>{texto}</Link>
  )
}
