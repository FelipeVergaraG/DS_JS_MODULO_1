function indiceValido(lista, indice) {
  return Number.isInteger(indice) && indice >= 0 && indice < lista.length;
}

function agregarTarea(lista, titulo, prioridad) {
  const tituloLimpio = String(titulo).trim();
  const prioridadLimpia = String(prioridad).trim().toLowerCase();
  const prioridades = ["alta", "media", "baja"];

  if (tituloLimpio === "") return false;
  if (!prioridades.includes(prioridadLimpia)) return false;

  lista.push({
    titulo: tituloLimpio,
    prioridad: prioridadLimpia,
    completada: false,
  });
  return true;
}

function completarTarea(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista[indice].completada = true;
  return true;
}

function eliminarTarea(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista.splice(indice, 1);
  return true;
}

module.exports = { agregarTarea, completarTarea, eliminarTarea };
