//OPERADORES

// Los tres grupos
// Aritméticos (calculan) → producen un número: + - * /
// Relacionales (comparan) → producen un boolean: > < === !==
// Lógicos (combinan condiciones) → producen un boolean: && (Y) · || (O) · ! (NO)

// Comparar y combinar siempre responden una pregunta de sí o no.
// Por eso devuelven boolean: ese true/false es la materia prima con la que,
//  en la Clase 3, el programa tomará decisiones.

//ARITMETICOS
const tareasPendientes = 3;
const tareasNuevas = 2;
const total = tareasPendientes + tareasNuevas;

console.log(total);

// RELACIONALES
const prioridadA = 5;
const prioridadB = 3;

console.log(prioridadA > prioridadB);   // true
console.log(prioridadA === prioridadB); // false

// LOGICOS
// Una tarea es "atendible ya" si tiene prioridad alta Y todavía no está completada. 
// El ! (NO) voltea un boolean: !completada se lee "que NO esté completada".
const prioridadAlta = true;
const completada = false;

console.log(prioridadAlta && !completada); // true

// // && (Y) → dejar comprar solo si hay stock Y el pago fue aprobado.
// || (O) → dar acceso si es admin O el dueño del recurso.
// ! (NO) → mostrar "Iniciar sesión" solo si NO está logueado.

// Regla de oro: un = asigna (mete un valor en una variable).
// Tres === comparan (preguntan si dos valores son iguales). Uno asigna, tres preguntan.

