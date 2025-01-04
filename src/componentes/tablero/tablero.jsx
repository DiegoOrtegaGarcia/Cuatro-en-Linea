import './tablero.css'
import Casilla from '../casillas/casilla.jsx';
import { useState,useEffect } from 'react';
import Modal from '../modal/modal.jsx';
const ocupar = Array(7).fill(null);
import { combo7x6 } from '../logic/combos.js';

const Tablero=({toca,actualizar})=>{
  const [modal,setmodal]= useState(false);
  const [winner, setWinner] = useState(false);
  const [ganador, setGanador] = useState(''); 
  const [table,setTable]= useState(Array(42).fill(null))

  let cambiarModal=()=>{
    setmodal(modal=> !modal)
    reiniciarJuego()
  }
  useEffect(() => {
    if (winner) {
      console.log('Hay ganador:', ganador);
      setmodal(true);
      // Aquí puedes agregar lógica para mostrar un mensaje o realizar alguna acción
    }
  }, [winner, ganador]);

  useEffect(()=>{
    actualizar()
  },[table])

  const newTabla=(position)=>{
    let newTable=[...table];
    newTable[position]=getColor();
    return newTable
  }

  let activa=(position)=>{
    if(position==0){
      let posicion=comprobar(35)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==1){
      let posicion=comprobar(36)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==2){
      let posicion=comprobar(37)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==3){
      let posicion=comprobar(38)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==4){
      let posicion=comprobar(39)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==5){
      let posicion=comprobar(40)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
    if(position==6){
      let posicion=comprobar(41)
      if(posicion != null){
        setTable(() => {
          verGanador(posicion); // Verificar el ganador con el nuevo estado
          return posicion;
        });
      }
    }
  }
  let comprobar=(position)=>{
    if(table[position] == null){
      return newTabla(position)
    }else if(table[position-7]== null){
      return newTabla(position-7)
    }else if(table[position-14]== null){
      return newTabla(position-14)
    }else if(table[position-21]== null){
      return newTabla(position-21)
    }else if(table[position-28]== null){
      return newTabla(position-28)
    }else if(table[position-35]== null){
      return newTabla(position-35)
    }else return null
  }
  let getColor=()=>{
    if(toca==false){return false}
    else if(toca==true){return true}
  }
  let verGanador=(tableroToCheack)=>{
    for (const combo of combo7x6) {
      let [a,b,c,d]=combo
      if(tableroToCheack[a] !=null && tableroToCheack[b] == tableroToCheack[a] && tableroToCheack[c] ==tableroToCheack[a] && tableroToCheack[d] ==tableroToCheack[a]){
        console.log('hay ganador')

        setGanador(tableroToCheack[a] ? 'rojo' : 'amarillo'); // Asigna el ganador
        setWinner(true); // Marca que hay un ganador
        return;
      }
    }
    if(tableroToCheack.every(casilla=> casilla != null)){
      console.log('empate')
      setGanador('empate')
      setWinner(true)
    }
    return null
  }
  const reiniciarJuego=()=>{
    setWinner(false);
    setGanador(null);
    setTable(Array(42).fill(null))
  }
  
  return(
    <div className='tablero'>

      <div className='tableroOcupar'>
        {ocupar.map((position,index)=>{
          return(<Casilla  key={index} funcion={() => activa(index)}/>)
        })
        }
      </div>
      <div className="tableroFichas">
        {table.map((position,index) => {
          return(
            <Casilla valor={position} key={index} />
          )
        })}
      </div>
      <button onClick={reiniciarJuego} className='reiniciador'>Reiniciar Juego</button>
      <Modal mostrar={modal} ganador={ganador} funtionRealizar={cambiarModal}/>
    </div>
    
  )
};
export default Tablero