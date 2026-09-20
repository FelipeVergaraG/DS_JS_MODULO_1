//ENTRADA Y SALIDA DE DATOS

¿De dónde salen los datos que procesa un programa?
En una app real vienen de afuera: del usuario, de otra app o de internet.

//POR EL MOMENTO SOLO VEREMOS SALIDA DE DATOS, SE UTIZIA console.log();

//PROBLEMA DEL 510 - Por qué 5 + 10 da 510

//Simulamos un precio que llega como texto (como llegaría de un formulario)
//y, sin convertirlo, le sumamos un número.

const precioProducto = "5";
const precioEnvio = 10;
const total = precioProducto + precioEnvio;

console.log(total); // 510

// JavaScript no se equivocó: vio un texto ("5") y, como el + también sirve para pegar textos, pegó el 10 en vez de sumar.
// A eso se le llama coerción: JavaScript convierte tipos por su cuenta, en silencio, mientras corre.

//El + es especial porque también une texto. Los demás operadores no tienen esa doble función, 
// así que con ellos JavaScript sí convierte a número solo:

console.log("5" + 2);  // 52  ← pega (el + une texto)
console.log("5" - 2);  // 3   ← resta (convierte a número)
console.log("5" * 2);  // 10  ← multiplica (convierte a número)

//Ya viste una cura: convertir a mano con Number().
//Funciona, pero exige que el programador se acuerde de hacerlo siempre.


