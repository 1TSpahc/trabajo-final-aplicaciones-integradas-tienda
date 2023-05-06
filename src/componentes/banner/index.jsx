import { Enlace } from '../enlace'
import './styles.css'

export function Banner () {
  return (
    <div className='banner'>
      <h2 className='banner__titulo'>Bienvenido a Sport Center</h2>
      <p className='banner__descripcion'>
        Sport Center es una marca líder en ropa deportiva, dedicada a proporcionar a sus clientes prendas de alta calidad para la práctica de deportes y actividades físicas. Nos enorgullece ofrecer una amplia variedad de productos, desde ropa para correr y entrenar en el gimnasio hasta equipaciones para deportes de equipo, todo diseñado para brindar comodidad,
        funcionalidad y estilo a nuestros clientes.
      </p>
      <Enlace texto='Empezar' path='/tienda' />
    </div>
  )
}
