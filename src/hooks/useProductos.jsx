import { useEffect, useState } from 'react'
import { obtenerProductos } from '../servicios/API'

export function useProductos () {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)

    obtenerProductos()
      .then((datos) => {
        setProductos(datos)
      })
      .finally(() => setCargando(false))
  }, [])

  return {
    cargando,
    productos
  }
}
