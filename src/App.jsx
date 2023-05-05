import { Route } from 'wouter'

import './index.css'
import { Cabecera } from './componentes/cabecera'
import { Inicio } from './paginas/inicio'
import { Tienda } from './paginas/tienda'
import { Detalles } from './paginas/detalles'
import { Carrito } from './paginas/carrito'
import { FinalizarCompra } from './paginas/finalizarCompra'

function App () {
  return (
    <>
      <Cabecera />
      <Route path='/' component={Inicio} />
      <Route path='/tienda' component={Tienda} />
      <Route path='/producto/:id' component={Detalles} />
      <Route path='/carrito' component={Carrito} />
      <Route path='/finalizar' component={FinalizarCompra} />
    </>
  )
}

export default App
