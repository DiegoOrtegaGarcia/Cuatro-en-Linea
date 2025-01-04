import './casilla.css'

let casilla=({valor,funcion})=>{
  let clasname=''
  if(valor!= null){
    clasname= valor ? 'rojo' : 'amarillo'
  }
  return(
    <div className={`casilla ${clasname}`} onClick={funcion}></div>
  )
}
export default casilla;