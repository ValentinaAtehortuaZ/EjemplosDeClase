import{generarTOKEN}from "./generarToken.js"
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'

//detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()
    
    let frutaSeleccionada=document.getElementById("fruta").value
    let URI=generarURI(frutaSeleccionada)

    async function activarAPI(){

        let token=await generarTOKEN()
        console.log(token)

        let datosConsultadosAPI= await consumirAPI(URI,token)
        console.log(datosConsultadosAPI)
    }

    activarAPI()
    
    


})