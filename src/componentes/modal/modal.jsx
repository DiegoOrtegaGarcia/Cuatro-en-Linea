import './modal.css'

let Modal=({ganador,funtionRealizar,mostrar})=>{
  let texto=``
  let visibilidad = mostrar ? 'block' : 'none'
  if(ganador == 'empate'){
    texto='Empate'
  }else(texto=`Ganador: ${ganador}`)
  return(
    <div className="modal" style={{display:visibilidad}}>
      <div className="modal-content">
        <h1 className='modal-h1'>{texto}</h1>
        <button onClick={funtionRealizar} className='modal-button'>Reiniciar</button>
      </div>
    </div>
  )
}
export default Modal