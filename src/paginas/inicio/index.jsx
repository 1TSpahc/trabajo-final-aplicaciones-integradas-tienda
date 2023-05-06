import { motion } from 'framer-motion'

import { Banner } from '../../componentes/banner'
import { Footer } from '../../componentes/footer'
import { Productos } from '../../componentes/productos'

export function Inicio () {
  return (
    <motion.main initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Banner />
      <Productos />
      <Footer />
    </motion.main>
  )
}
