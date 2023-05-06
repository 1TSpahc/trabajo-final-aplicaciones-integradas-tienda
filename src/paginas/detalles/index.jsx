import { motion } from 'framer-motion'
import { useProductos } from '../../hooks/useProductos'

import { Cargando } from '../../componentes/cargando'
import { ProductoDetalle } from '../../componentes/productoDetalle'
import './styles.css'

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
              <ProductoDetalle buscarProducto={buscarProducto} />
            </motion.div>
            )
      }
    </motion.section>
  )
}
