//llamar a la memoria para acceder a los datos guardados del objeto datosProductoSeleccionado
//producto es el nombre que se le dieron a los datos en la memoria

let infoProducto = JSON.parse(localStorage.getItem("productos"))
console.log(infoProducto)

let foto = document.getElementById("foto")
foto.src = infoProducto.foto

let nombre = document.getElementById("name")
nombre.textContent = infoProducto.nombre

let price = document.getElementById("price")
price.textContent = infoProducto.precio

let descripcion = document.getElementById("descripcion")
descripcion.textContent = infoProducto.descripcion