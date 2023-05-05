import { apiKey, apiUrl } from './config'

export async function obtenerProductos () {
  const respuesta = await fetch(`${apiUrl}/rest/v1/tabla_productos?apikey=${apiKey}`)
  const datos = await respuesta.json()

  return datos
}
