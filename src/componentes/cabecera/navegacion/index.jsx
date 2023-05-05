import { Link } from 'wouter'

export function Navegacion () {
  const enlaces = [
    {
      texto: 'Inicio',
      url: '/'
    },

    {
      texto: 'Tienda',
      url: '/tienda'
    },

    {
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
                <li key={index} className='navegacion__elemento'><Link href={enlace.url} className='navegacion__enlace'>{enlace.texto}</Link></li>
              )
            })
        }
      </ul>
    </nav>
  )
}
