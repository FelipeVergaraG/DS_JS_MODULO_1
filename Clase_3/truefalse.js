//Cuando JavaScript evalúa un valor como condición, lo convierte a true o false. 
// A los que se vuelven false los llamamos falsy; al resto, truthy.

// Los únicos seis valores falsy
// Solo estos seis se consideran false. Memoriza esta lista corta:
//false - 0 - "" (texto vacio) - null - undefined - NaN


// if ("0")  console.log("entra");   // entra: "0" es texto, no vacío
// if ([])   console.log("entra");   // entra: un array vacío es truthy
// if (" ")  console.log("entra");   // entra: un espacio es texto no vacío

// const titulo = "";

// if (titulo) {
//   console.log("La tarea tiene título");
// } else {
//   console.log("Falta el título");   // ← entra aquí: "" es falsy
// }

//Sale "Falta el título" porque el texto vacío es falsy. 
//Cambia titulo a "Pagar factura" y ahora sí entra al primer camino.

