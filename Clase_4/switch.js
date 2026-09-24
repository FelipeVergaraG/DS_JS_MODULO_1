//SWITCH CASE
//Switch compara un valor contra varios case y ejecuta el que coincida. 

// const prompt = require("prompt-sync")();

// while (true) {
//   console.log("\n--- GESTOR DE TAREAS ---");
//   console.log("1. Agregar tarea");
//   console.log("2. Listar tareas");
//   console.log("3. Completar tarea");
//   console.log("4. Eliminar tarea");
//   console.log("5. Salir");

//   const opcion = prompt("Elige una opción: ");

//   switch (opcion) {
//     case "1":
//       console.log("Elegiste: Agregar");
//       break;
//     case "2":
//       console.log("Elegiste: Listar");
//       break;
//     case "5":
//       console.log("Hasta luego.");
//       break;
//     default:
//       console.log("Opción no válida.");
//   }

//   if (opcion === "5") break;
// }

//LAS CUATRO OPERACIONES REALES

//Se debe declarar el array antes del while , para que las tareas sobrevivan en cas vuelta del ciclo.
//Si se declara el array dentro del while, se eliminaria encada repeticion. 

// const prompt = require("prompt-sync")();
// const tareas = [];

//AGREGAR

// case "1": {
//   const titulo = prompt("Título de la tarea: ");

//   if (titulo.trim() === "") {
//     console.log("El título no puede estar vacío.");
//     break;
//   }

//   const prioridad = prompt("Prioridad (alta/media/baja): ");
//   tareas.push({ titulo: titulo, prioridad: prioridad, completada: false });
//   console.log("Tarea agregada.");
//   break;
// }

//LISTAR

//.length es una propiedad de los arrays qe dice cuantos elementos tiene una lista, Si vale 0,
//no hay tareas y avisa. Se utiliza tambien en el for para  saber hasta donde recorrer.

// case "2": {
//   if (tareas.length === 0) {
//     console.log("No hay tareas registradas.");
//     break;
//   }

//   for (let i = 0; i < tareas.length; i++) {
//     const t = tareas[i];
//     let estado;
//     if (t.completada === true) {
//       estado = "[✓]";
//     } else {
//       estado = "[ ]";
//     }
//     console.log((i + 1) + ". " + estado + " " + t.titulo + " (" + t.prioridad + ")");
//   }
//   break;
// }

// ESTE ES EL VERDADERO CODIGO GUÍA: 

// const prompt = require("prompt-sync")();
// const tareas = [];

// while (true) {
//   console.log("\n--- GESTOR DE TAREAS ---");
//   console.log("1. Agregar tarea");
//   console.log("2. Listar tareas");
//   console.log("3. Completar tarea");
//   console.log("4. Eliminar tarea");
//   console.log("5. Salir");

//   const opcion = prompt("Elige una opción: ");

//   switch (opcion) {
//     case "1": {
//       const titulo = prompt("Título de la tarea: ");

//       if (titulo.trim() === "") {
//          console.log("El título no puede estar vacío.");
//          break;
//       }
//       const prioridad = prompt("Prioridad (alta/media/baja): ");
//       tareas.push({ titulo: titulo, prioridad: prioridad, completada: false });
//       console.log("Tarea agregada.");
//       break;
//     } 
//     case "2": {
//   if (tareas.length === 0) {
//     console.log("No hay tareas registradas.");
//     break;
//   }

//   for (let i = 0; i < tareas.length; i++) {
//     const t = tareas[i];
//     let estado;
//     if (t.completada === true) {
//       estado = "[✓]";
//     } else {
//       estado = "[ ]";
//     }
//     console.log((i + 1) + ". " + estado + " " + t.titulo + " (" + t.prioridad + ")");
//  }
//  break;
// }
// case "3": {
//   const num = Number(prompt("Número de la tarea a completar: "));
//   const indice = num - 1;

//   if (indice < 0 || indice >= tareas.length) {
//     console.log("Esa tarea no existe.");
//     break;
//   }

//   tareas[indice].completada = true;
//   console.log("Tarea completada.");
//   break;
// }
// case "4": {
//   const num = Number(prompt("Número de la tarea a eliminar: "));
//   const indice = num - 1;

//   if (indice < 0 || indice >= tareas.length) {
//     console.log("Esa tarea no existe.");
//     break;
//   }

//   tareas.splice(indice, 1);
//   console.log("Tarea eliminada.");
//   break;
// }
//     case "5":
//       console.log("Hasta luego.");
//       break;
//     default:
//       console.log("Opción no válida.");
//   }

//   if (opcion === "5") break;
// }



