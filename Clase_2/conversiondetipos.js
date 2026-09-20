
// Conversión de tipos (casting) es transformar un valor de un tipo a otro de forma controlada: 
// de string a number, de number a string, etc.
// Dos formas de que un tipo cambie: 
// la conversión explícita la haces tú a propósito con una función (predecible y segura).
// La coerción implícita la hace JavaScript solo, en silencio (la culpable del 510). 
// Regla: convierte tú, no dejes que JavaScript adivine.
// Las tres herramientas que usas a diario
// Number("5") → texto a número → 5
// String(5) → número a texto → "5"
// parseInt("5kg") → extrae el entero del inicio → 5

//Convertir antes de operar

const precioTexto = "5";
const precioNumero = Number(precioTexto);
const envio = 10;

console.log(precioNumero + envio); // 15

// El sentido inverso: número dentro de un texto

const cantidad = 3;
const mensaje = "Tienes " + String(cantidad) + " tareas";

console.log(mensaje);

