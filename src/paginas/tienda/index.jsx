import { motion } from 'framer-motion'
import { useProductos } from '../../hooks/useProductos'

import { Cargando } from '../../componentes/cargando'
import { Footer } from '../../componentes/footer'
import { ProductosLista } from '../../componentes/productos/productosLista'
import { Subtitulo } from '../../componentes/subtitulos'
import './styles.css'

export function Tienda () {
  const { cargando, productos } = useProductos()

  return (
    <>
      <Subtitulo>Tienda</Subtitulo>
      {
      cargando
        ? <Cargando />
        : (
          <>
            <motion.div className='contenedor-tienda' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
              <ProductosLista productos={productos} />
            </motion.div>
            <Footer />
          </>
          )
     }

    </>
  )
}
