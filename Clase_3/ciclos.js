//CICLOS -
//

//Un ciclo repite un bloque de código mientras se cumpla una condición, 
// o una vez por cada elemento de una colección.

//FOR
//Tiene tres partes: desde dónde empieza, hasta cuándo sigue, y cómo avanza cada vuelta.
//SINTAXIS RESERVADA
//for (inicio; conidicion; incremento o decremento)


// //for (let i = 0; i < 3; i++) {
//   console.log("Vuelta número " + i);
// }

//Imprime las vueltas
//0, 1 y 2. let i = 0 empieza en 0 · i < 3 sigue mientras sea menor a 3 · i++ suma 1 cada vuelta.

//Aquí usamos let i, no const, porque el contador cambia en cada vuelta.
//Es la excepción a la regla de "const por defecto": cuando algo muta de verdad, let.

//FOR.. OF 
//const tareas = ["Pagar factura", "Regar plantas", "Llamar cliente"];

// for (const tarea of tareas) {
//   console.log("Tarea: " + tarea);
// }

//Se lee casi como español: "para cada tarea dentro de tareas…" haz tal cosa...

//LAS ESTRUCTURAS COMO LO SON CICLOS, CONDICIONALES, ARRAYS, OBJETOS Y DEMAS SE PUEDEN COMBINAR

// const tareas = [
//   { titulo: "Pagar factura", prioridad: 5 },
//   { titulo: "Regar plantas", prioridad: 2 },
//   { titulo: "Llamar cliente", prioridad: 4 }
// ];

// for (const tarea of tareas) {
//   if (tarea.prioridad > 3) {
//     console.log(tarea.titulo + " → URGENTE");
//   } else {
//     console.log(tarea.titulo + " → normal");
//   }
// }



