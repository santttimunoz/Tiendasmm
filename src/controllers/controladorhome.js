import { pintarProducos } from ".././helpers/pintarProductos.js"

//llamando a la fila
let fila = document.getElementById("fila")

//recorrer arreglo
pintarProducos()


fila.addEventListener("click", function(evento){

    let tarjeta = evento.target.parentElement
    
    let datosProductoSeleccionado = {}

     datosProductoSeleccionado.foto = tarjeta.querySelector("img").src
     datosProductoSeleccionado.nombre = tarjeta.querySelector("h2").textContent
     datosProductoSeleccionado.precio =tarjeta.querySelector("h3").textContent
     datosProductoSeleccionado.descripcion = tarjeta.querySelector("p").textContent

     //datosprductoseleccionado deben volverse un string para guardarse el la memorio cache(que es la memoria del servidor)
     localStorage.setItem("productos", JSON.stringify(datosProductoSeleccionado))

     window.location.href = "../../src/view/plantilla.html"

            
        
        })