export async function generarTOKEN(){

    let URI="https://accounts.spotify.com/api/token"
    let client_id="client_id=a441114d08b645cdafddd28a88ba96e1"
    let client_secret="client_secret=e80838796547469899ebe01f93ca429a"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    
    }

    let respuesta= await fetch(URI,parametros)
    let respuestaFinal = await respuesta.json()

    let token=respuestaFinal.access_token+""+respuestaFinal.token_type

    return(token) 
  

   /*fetch(URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta.access_token+""+respuesta.token_type)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })*/
}

generarTOKEN()