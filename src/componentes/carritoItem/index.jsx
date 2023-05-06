import { motion } from 'framer-motion'
import { useProductos } from '../../hooks/useProductos'
import { guardarEnLocalStorage } from '../../utils'

import { Cargando } from '../cargando'
import { IconoEliminar } from '../iconos'

export function CarritoItem ({ productoId, actualizarCarrito, carritoItems }) {
  const { cargando, productos } = useProductos()
  const buscarProducto = productos.find((producto) => producto.id_producto === productoId)

  const eliminarProductoDeCarrito = () => {
    const nuevosItems = [...carritoItems]
    const eliminarProducto = nuevosItems.filter((id) => id !== productoId)

    guardarEnLocalStorage('carrito', JSON.stringify(eliminarProducto))
    actualizarCarrito(eliminarProducto)
  }
  return (
    <>
      {
            cargando
              ? <Cargando />
              : (
                <motion.div className='carrito-item' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} layoutId={productoId}>
                  <motion.div className='carrito__producto producto' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
                    <img src={buscarProducto?.producto_imagen} alt={buscarProducto?.producto_nombre} className='producto__img' />
                    <div className='carrito__info'>
                      <p className='carrito__info-nombre'>{buscarProducto?.producto_nombre}</p>
                      <span className='carrito__info-precio'>s/{buscarProducto?.producto_precio}</span>
                    </div>
                  </motion.div>
                  <span className='carrito__eliminar' onClick={eliminarProductoDeCarrito}><IconoEliminar /></span>
                </motion.div>

                )
        }
    </>
  )
}
