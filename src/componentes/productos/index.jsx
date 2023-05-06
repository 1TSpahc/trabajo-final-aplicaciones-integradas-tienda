import { useProductos } from '../../hooks/useProductos'

import { Cargando } from '../cargando'
import { Enlace } from '../enlace'
import { ProductosLista } from './productosLista'
import './styles.css'

export function Productos () {
  const { cargando, productos } = useProductos()

  return (
    <section className='contenedor'>
      <h3 className='contenedor__titulo'>Nuestros Productos</h3>
      <div className='contenedor__productos'>
        {
        cargando
          ? <Cargando />
          : (
            <ProductosLista productos={productos.slice(0, 8)} />
            )
        }
      </div>
      {
        cargando ? '' : <Enlace texto='Ver mas' path='/tienda' />
      }
    </section>
  )
}
