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

let infoCarrito = JSON.parse(localStorage.getItem("carrito"))

let carrito
let numberCar = document.getElementById("numberCar")

if(infoCarrito != null){
   carrito=infoCarrito
   numberCar.textContent = carrito.length
}else{
   carrito = []
}

let btnAgregarProducto = document.getElementById("btnagregaralcarrito")

btnAgregarProducto.addEventListener("click", function(){
     
   carrito.push(infoProducto)
   numberCar.textContent = carrito.length

   localStorage.setItem("carrito", JSON.stringify(carrito))
})

let btnClear = document.getElementById("btnClear")
let btnDollar = document.getElementById("btnStotal")
let calcular = document.getElementById("calcular")
let cant = document.getElementById("cant")

btnClear.addEventListener("click", function(){
    
    cant.value = null
    calcular.textContent = null
    carrito = []
    numberCar.textContent = 0
    localStorage.removeItem("carrito")

})

let prices 
let suma = 0
 prices = carrito.map(obj => obj.precio)

   for(let i = 0; i < prices.length; i++){

       suma = parseInt(prices[i]) * prices.length
        
   }

let total
btnDollar.addEventListener("click", function(){

   
    total = cant.value * infoProducto.precio
    calcular.textContent = total 

})
let decimal
btnConvert.addEventListener("click", function(){

   
   total = cant.value * infoProducto.precio / 4813.4
   decimal = total.toFixed(2)
   calcular.textContent = decimal 

})
