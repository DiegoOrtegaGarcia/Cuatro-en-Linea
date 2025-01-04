import './App.css'
import { useState} from 'react'
import Tablero from './componentes/tablero/tablero'
import Casilla from './componentes/casillas/casilla'

function App() {
  let [turno,setTurno] = useState(false)
  let cambiarTurno=()=>{
    setTurno((prevTurno) => !prevTurno);
  }

  let colorTurno= turno ? 'rojo' : 'amarillo'
  return (
    <div className='interfaz'>
      <div className='uiInterfaz'>
        <p>Turno De {colorTurno} :</p>
        <Casilla valor={turno}/>
      </div>
      <Tablero toca={turno} actualizar={cambiarTurno} />
     
    </div>
  )
}

export default App
