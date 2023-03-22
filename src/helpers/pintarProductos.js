import{productos}from"../helpers/baseDatos.js"

let fila = document.getElementById("fila")

export function pintarProducos(){

    productos.forEach(function(producto){
    

        //creando columnas para alojar los productos
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        //crear tarjeta para almacenar la info del producto
        let tarjeta = document.createElement("div")
        //card es una clase de boostrap, calse de bootstrap (heigth)h-100
        tarjeta.classList.add("card", "h-100", "shadow")
    
        //crear imagen
        let imagen = document.createElement("img")
        //imgfluid es una clase de boostrap que hace la imagen responsive
        imagen.classList.add("img-fluid", "w-100")
        imagen.src = producto.fotos[0]
        
        let name = document.createElement("h2")
        name.classList.add("text-center")
        name.textContent = producto.nombre

        let price = document.createElement("h3")
        price.classList.add("text-center","text-success")
        price.textContent = producto.precio

        let descripcion = document.createElement("p")
        descripcion.classList.add("text-center","oculto")
        descripcion.textContent = producto.descripcion

        tarjeta.addEventListener("mouseover",function(){
            imagen.src = producto.fotos[1]
        })
        tarjeta.addEventListener("mouseleave",function(){
            imagen.src = producto.fotos[0]
        })
    
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(name)
        tarjeta.appendChild(price)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}
