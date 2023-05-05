import { Link } from 'wouter'
import { IconoCasa, IconoTienda, IconoCarrito } from '../../iconos'

export function Navegacion () {
  const enlaces = [
    {
      icono: IconoCasa,
      texto: 'Inicio',
      url: '/'
    },

    {
      icono: IconoTienda,
      texto: 'Tienda',
      url: '/tienda'
    },

    {
      icono: IconoCarrito,
      texto: 'Carrito',
      url: '/carrito'
    }
  ]

  return (
    <nav className='navegacion'>
      <ul className='navegacion__lista'>
        {
            enlaces.map((enlace, index) => {
              return (
                <li key={index} className='navegacion__elemento'>
                  <Link href={enlace.url} className='navegacion__enlace'>
                    <enlace.icono />
                    {enlace.texto}
                  </Link>
                </li>
              )
            })
        }
      </ul>
    </nav>
  )
}
