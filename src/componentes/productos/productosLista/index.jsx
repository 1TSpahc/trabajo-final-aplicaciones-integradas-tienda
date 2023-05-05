import { Item } from '../item'

export function ProductosLista ({ productos }) {
  return (
    <>
      {
                productos.map((producto) => {
                  return (
                    <Item key={producto.id} producto={producto} />
                  )
                })
            }
    </>
  )
}
