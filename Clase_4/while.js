//SINTAXIS GENEREAL DEL WHILE

//Piensa en subir escaleras: MIENTRAS (while) quedan escalones, das un paso mas; cuando se acaba,
//deja de subir

// while (condición) {
//   // bloque que se repite mientras la condición sea verdadera
// }
//Condición: una pregunta que se responde verdadero o falso, Se revisa antes de cada vuelta
//Bloque: lo que se repite
//Cambio: dentro del bloque algo debe cambiar para que la condicion algun día sea falsa y el ciclo termine


//EJEMPLO 1
//Ej: Contador de 1 a 5:

// let numero = 1;

// while (numero <= 5) {
//   console.log("Número: " + numero);
//   numero = numero + 1;
// }

// console.log("El ciclo terminó.");

//Todo while necesita que algo cambie adentro para poder terminar. 

//EJEMPLO 2
//Ej: 
// //const prompt = require("prompt-sync")();

// while (true) {
//   const texto = prompt("Escribe algo (o 'salir'): ");

//   if (texto === "salir") {
//     console.log("Programa terminado.");
//     break;
//   }

//   console.log("Escribiste: " + texto);
// }

