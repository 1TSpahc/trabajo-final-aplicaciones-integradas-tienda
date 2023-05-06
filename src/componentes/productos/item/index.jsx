import { motion } from 'framer-motion'
import { Link } from 'wouter'

import './styles.css'

export function Item ({ producto }) {
  return (
    <motion.div initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Link to={`/producto/${producto.id_producto}`} className='item'>
        <motion.img src={producto.producto_imagen} alt='pelota' className='item__imagen' />
        <p className='item__descripcion'>
          {producto.producto_nombre}
        </p>
        <span className='item__precio'>
          s/{producto.producto_precio}

        </span>
      </Link>
    </motion.div>
  )
}
