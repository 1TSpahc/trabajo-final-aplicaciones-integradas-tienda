import { useState } from 'react'
import { Subtitulo } from '../../componentes/subtitulos'
import { Cargando } from '../../componentes/cargando'
import confetti from 'canvas-confetti'

export function FinalizarCompra () {
  const [compra, setCompra] = useState(true)
  setTimeout(() => {
    setCompra(false)
  }, 5000)

  if (!compra) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div>
      {
        compra
          ? <Cargando />
          : (
            <Subtitulo>Gracias por la compra</Subtitulo>
            )
      }
    </div>
  )
}
