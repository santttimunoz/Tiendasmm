import {productos} from "../helpers/baseDatos.js"

//llamando a la fila
let fila = document.getElementById("fila")

//recorrer arreglo
productos.forEach(function(producto){
    

    //creando columnas para alojar los productos
    let columna = document.createElement("div")
    columna.classList.add("col")

    //crear tarjeta para almacenar la info del producto
    let tarjeta = document.createElement("div")
    //card es una clase de boostrap, calse de bootstrap (heigth)h-100
    tarjeta.classList.add("card", "h-100")

    //crear imagen
    let imagen = document.createElement("img")
    //imgfluid es una clase de boostrap que hace la imagen responsive
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = producto.fotos[0]

    //padres e hijos
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
