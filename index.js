
//let usuarios = []

/*
function alta_usuario () {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");

    console.log(nombre_usuario.value);
    console.log(pass_usuario.value);

}

function login_usuario(){


}



//EVENTOS

let btn_registro = document.getElementById("btn_registro");
let btn_login = document.getElementById("btn_login");


btn_registro.addEventListener("click" , alta_usuario);
btn_login.addEventListener("click" , login_usuario);

*/


let alfajor1 = {
    id: 0,
    nombre: "Chocolates",
    precio: 150

}

let alfajor2 = {
    id: 1,
    nombre: "Maizena",
    precio: 130
}


let alfajor3 = {
    id: 2,
    nombre: "Choco70",
    precio: 170
}


//arreglo de objetos que contiene los productos en venta
let alfajores = [alfajor1, alfajor2, alfajor3];
// TENGO QUE USAR ESTE ARREGLO DE OBJETOS PARA RENDERIZAR Y MOSTRAR EN LA PANTALLA

console.log(alfajores);



let carrito = [];


function agregar_a_carrito (e){
    //console.log("boton compra");

    
    let hijo = e.target;
    let padre = e.target.parentNode;
    let abuelo = e.target.parentNode.parentNode;

    /* 
    console.log(hijo);
    console.log(padre);
    console.log(abuelo);
     */

    let img_producto = abuelo.querySelector("img").src;
    let nombre_producto = abuelo.querySelector("h3").textContent;
    let precio_producto = abuelo.querySelector("h5").textContent;


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    };


    //agregar un push del objeto seleccionado al arreglo "carrito"
    carrito.push(producto); //Nota: aca habria que hacer una copia del carrito en local storage, actualizando la cantidad, si ya existe no agregarlo de nuevo, etc. Tener la copia en el local storage
    localStorage.setItem("carrito_compras", carrito);
    console.log(carrito);
    mostrar_carrito();

//mostrar carrito sin duplicados
// con un REDUCE puedo mostrar el total del carrito

}


//funcion que se encarga de renderizar el producto en el carrito
function mostrar_carrito (){
    
    let tabla = document.getElementById("tablaCarrito");
    //tabla.innerHTML = ""; // esta parte no deberia estar, deberia ir a buscar al local storage lo que hay guardado y renderizarlo
    let carrito_guardado = localStorage.getItem("carrito_compras");
    console.log(carrito_guardado);

    for (let producto of carrito) {

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.precio}</td>
                          <td>${producto.cantidad}</td>`;

        tabla.append(fila);
    }
}


//EVENTOS CARRITO

let btn_comprar = document.querySelectorAll(".btn_comprar"); // tambien se puede usar getElementbyID("btn_comprar")

console.log(btn_comprar);


for(let boton of btn_comprar){
    
    boton.addEventListener("click", agregar_a_carrito);

}