import { motion } from 'framer-motion'
import { useState } from 'react'
import { guardarEnLocalStorage, obtenerDelLocalStorage } from '../../utils'
import { IconoAgregado } from '../iconos'

export function ProductoDetalle ({ buscarProducto }) {
  const [carrito, setCarrito] = useState(false)
  const [carritoItems, setCarritoItems] = useState(() => {
    return JSON.parse(obtenerDelLocalStorage('carrito')) ?? []
  })

  const agregarAlCarrito = () => {
    const nuevoArray = [...carritoItems]
    nuevoArray.push(buscarProducto.id_producto)
    setCarritoItems(nuevoArray)

    setCarrito(true)
  }

  const guardarProductoLocalStorage = () => {
    guardarEnLocalStorage('carrito', JSON.stringify(carritoItems))
  }

  if (carrito) {
    guardarProductoLocalStorage()
  }

  return (
    <>
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
          <span>Stock: </span>
          {buscarProducto?.producto_stock}
        </h4>
        <h4 className='info__categoria'>
          <span>Categoria: </span>
          {buscarProducto?.producto_categoria}
        </h4>

        <button className={`info__btn ${carrito ? 'info__btn-desactivar' : ''}`} onClick={agregarAlCarrito}>
          {
            carrito ? <IconoAgregado /> : 'Agregar al carrito'
          }
        </button>
      </div>
    </>
  )
}
