import { Waveform } from '@uiball/loaders'
import './styles.css'

export function Cargando () {
  return (
    <div className='cargando'>
      <Waveform
        size={40}
        lineWeight={3.5}
        speed={1}
        color='black'
      />
    </div>
  )
}
