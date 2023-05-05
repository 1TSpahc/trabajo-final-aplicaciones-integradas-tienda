import { Banner } from '../../componentes/banner'
import { Productos } from '../../componentes/productos'

import { motion } from 'framer-motion'

export function Inicio () {
  return (
    <motion.main initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Banner />
      <Productos />
    </motion.main>
  )
}
