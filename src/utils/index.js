export function guardarEnLocalStorage (propiedad, valor) {
  window.localStorage.setItem(propiedad, valor)
}

export function obtenerDelLocalStorage (propiedad) {
  return window.localStorage.getItem(propiedad)
}
