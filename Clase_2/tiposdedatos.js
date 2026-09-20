// Variables y tipos de datos (variables)
// Sintaxis - Reglas del lenguaje
//TIPOS DE VARIABLES

//string - cadena de carateres - el nombre de un usuario,la dirección,
// el asunto de un correo, una reseña. Casi todo lo que un humano escribe es string

let tituloTarea = "Comprar cafe";
const fechaCreacion = "2026-08-19";

console.log(tituloTarea);
console.log(fechaCreacion);

//number - Enteros y decimales en un solo tipo. JavaScript no los separa como otros lenguajes.

const prioridad = 5;
const precio = 99.99;

// boolean - Solo dos valores: true o false. Es la base de toda decisión en programación.

const completada = false;

// undefined y null — los dos "vacíos"
// Parecen iguales pero la diferencia es quién y con qué intención:
// undefined → lo pone JavaScript cuando algo quedó sin llenar.
//  Ej: un campo opcional "teléfono" que el usuario no completó.
// null → lo pones tú a propósito: "esto está vacío y es deliberado".
//  Ej: un usuario que aún no subió foto de perfil.

//Cuando no se sabe que tiepo de dato es el que se digitó, JS puede ayudarnos con ello: 
//Debemos utilizar typeof: Ejemplos: 

const titulo = "Comprar café";
const prioridad = 5;
const completada = false;

console.log(typeof titulo);     // string
console.log(typeof prioridad);  // number
console.log(typeof completada); // boolean

//.
