// Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
// Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

// let numero1 = prompt("Elige un número del 1 al 100", "");

// let numero2 = prompt("Elige un número del 1 al 100", "");


// let numero3 = prompt("Elige un número del 1 al 100", "");

// 1.-

// if ((numero1 > numero2) && (numero1 > numero3) ) {
//     alert(numero1 + " es el número mayor");

// } else if ((numero2 > numero1) && (numero2 > numero3) ) {
//     alert(numero2 + " es el número mayor");

// } else {
//     alert(numero3 + " es el número mayor");
// } 

// 2.-

// if ((numero1 <= numero2) && (numero1 <= numero3) ) {
//     alert(numero1 + " es el número más chico");

// } else if ((numero2 <= numero1) && (numero2 <= numero3) ) {
//     alert(numero2 + " es el número más chico");

// } else {
//     alert(numero3 + " es el número más chico");
// } 


// 4.- 

// Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

// let num = prompt("Ingresa un número entero entre 100 y 200", "");

// num = parseInt(num,10); // Para que solo sea entero

// if (num % 3 == 0) {
//     alert("El número que ingresaste es múltiplo de 3")
// } else {
//     alert("El número que ingresaste no es múltilpo de 3")
// }


// 5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

// let x1 = prompt("Ingresa un número");
// let x2 = prompt("Ingresa un número");
// let x3 = prompt("Ingresa un número");

// // Se convierten
// x1=parseFloat(x1,10)
// x2=parseFloat(x2,10)
// x3=parseFloat(x3,10)

// // Proceso como tal

// if ((x1 + x2) == x3) {
//     alert(x3 + " es la suma de los otros números");
    
// } else if ((x1 + x3) == x2) {
//     alert(x2 + " es la suma de los otros números");

// } else if ((x2 + x3) == x1) {
//     alert(x1 + " es la suma de los otros números");

// } else {
//     alert("Los números no son la suma del otro número");
// }

// 6.- Elabora un algoritmo para leer un número y determinar si es par o impar

// let x = prompt("Ingresa cualquier número")
// x = parseFloat(x,10)

// if (x % 2 == 0 ) {
//     alert(x + " es número par");
// } else {
//     alert(x + " es número impar");
// }