import { Cargando } from '../../componentes/cargando'
import { ProductosLista } from '../../componentes/productos/productosLista'
import { Subtitulo } from '../../componentes/subtitulos'
import { useProductos } from '../../hooks/useProductos'

import './styles.css'

import { motion } from 'framer-motion'

export function Tienda () {
  const { cargando, productos } = useProductos()

  return (
    <>
      <Subtitulo>Tienda</Subtitulo>
      {
      cargando
        ? <Cargando />
        : (
          <motion.div className='contenedor-tienda' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
            <ProductosLista productos={productos} />
          </motion.div>
          )
     }
    </>
  )
}
