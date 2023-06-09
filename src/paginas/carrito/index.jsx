import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { obtenerDelLocalStorage } from '../../utils'

import { CarritoItem } from '../../componentes/carritoItem'
import { Subtitulo } from '../../componentes/subtitulos'
import { Enlace } from '../../componentes/enlace'
import './styles.css'

export function Carrito () {
  const [carritoItems, setCarritoItems] = useState(() => {
    return JSON.parse(obtenerDelLocalStorage('carrito')) ?? []
  })

  return (
    <>
      <motion.section className='seccion-carrito' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
        <Subtitulo>{carritoItems.length === 0 ? 'Tu carrito esta vacio' : 'Tu carrito'}</Subtitulo>
        <AnimatePresence>
          {
            carritoItems && (
              <div className='carrito-productos'>
                {
                    carritoItems.map((itemId) => {
                      return (
                        <CarritoItem key={itemId} actualizarCarrito={setCarritoItems} carritoItems={carritoItems} productoId={itemId} />
                      )
                    })
                }
              </div>

            )
        }
        </AnimatePresence>
        {
              carritoItems.length !== 0 ? <Enlace texto='Comprar' path='/finalizar' /> : ''
        }
      </motion.section>
    </>
  )
}
