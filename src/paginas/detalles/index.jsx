import { Cargando } from '../../componentes/cargando'
import { useProductos } from '../../hooks/useProductos'
import './styles.css'

import { motion } from 'framer-motion'

export function Detalles ({ params }) {
  const { cargando, productos } = useProductos()
  const { id } = params
  const buscarProducto = productos.find((producto) => producto.id_producto === id)

  return (
    <motion.section className='seccion-detalles' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      {
        cargando
          ? <Cargando />
          : (
            <motion.div className='detalles' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
              <div className='detalles-imagen imagen'>
                <motion.img src={buscarProducto?.producto_imagen} alt='' className='imagen__img' />
              </div>
              <div className='detalles-info info'>
                <h3 className='info__nombre'>{buscarProducto?.producto_nombre}</h3>
                <h4 className='info__productoId'>
                  <span>Id del producto: </span>
                  {buscarProducto?.id_producto}
                </h4>
                <h4 className='info__precio'>
                  <span>Precio: </span>
                  $/{buscarProducto?.producto_precio}
                </h4>
                <h4 className='info__stock'>
                  <span>Cantidad: </span>
                  {buscarProducto?.producto_stock}
                </h4>
                <h4 className='info__categoria'>
                  <span>Categoria: </span>
                  {buscarProducto?.producto_categoria}
                </h4>

                <button className='info__btn'>Agregar al carrito</button>
              </div>
            </motion.div>
            )
      }
    </motion.section>
  )
}
