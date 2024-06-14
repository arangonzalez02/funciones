// //sumar dos números

// console.log("Salida 1 de la Función");
// sumar(); //llamo a la funcion sumar

// console.log("******************");


// function sumar() {
//     let suma = 5 + 9;
//     console.log(suma);
// }

// console.log("Salida 2 de la Función");
// sumar();
// sumar();
// sumar();

// function mostrar() {
//     console.log("Estoy dentro de la función Mostrar y llamo la función sumar");
//     sumar();
// }
// mostrar();




// let mensaje1 = "Hola, Cristina";
// let mensaje2 = "Voy al médico";

// function mostrarMensaje(texto) {
//     //alert(texto);
// }

// mostrarMensaje(mensaje1);
// mostrarMensaje(mensaje2);
// mostrarMensaje(1);
// //Pasar parámetro a una función
// let numero = prompt("Escribe un número");




// function raizCuadrada(num) { //num es algo que nosotros podemos poner lo que queramos sin hacer coincidir con la variable
//     //alert(Math.sqrt(num)); //solo tiene "funcio" dentro de la function
// }
// raizCuadrada(numero);




// Valor de Retorno
// let numeroPI = prompt("Indica un número");

// function esPar(num) { //si es solo una línea, se puede prescindir de las llaves
//     if (num % 2 == 0) return true;
//     else return false;
// }

// let respuesta=esPar(numeroPI);//es de tipo boolean
// if (respuesta) {//respuesta = true
//     alert("Es par");
// }else{ //respuesta = false
//     alert("Es impar");
// }

//Ejercicio.....pide 10 veces un número y muestra cada vez si es par o impar
// let cont = 0; //esto es para hacer un contador, para cada que dé una vuelta del bucle se vaya incrementando 

// do {
//     let numero = Number(prompt("Indica un número"));
//     darRespuesta(numero);//las funciones se llaman con paréntesis
//     cont++;

// } while (cont < 10);

// function darRespuesta(num) {
//     if (num % 2 == 0) {
//         alert("Es par");
//     } else {
//         alert("Es impar");
//     }
// }




// var numero1 = 7;
// var numero2 = 8;
// function menor(primero, segundo) {
//     var elMenor = primero; //asigna el valor
//     if (segundo < primero) //true o false
//         elMenor = segundo;
//     return elMenor;
// }
// console.log(menor(numero1, numero2));




// 4.1 Descuentos
// Escribe una función que reciba como parámetros un precio y un porcentaje de descuento y devuelva el precio nuevo.

let precio = Number(prompt("Escribe un precio"));
let porcentaje = Number(prompt("Escribe un descuento"));


let resultado = calculo(precio, porcentaje);//=preciofinal

alert(`El resultado final es ${resultado}`);

function calculo(pre, porce) { //esta función pide dos datos
    let desc = (pre * porce / 100);
    let preciofinal = pre - desc;
    return preciofinal;
}


