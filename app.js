// Calculadora de costos de mantenimiento
const actividades = [];
const VALOR_HORA = 56250; // 9.000.000 / 160 horas al mes

// Calcula el costo de una actividad según sus horas y el valor de la hora.
function calcularCosto(horas, valorHora) {
  return horas * valorHora;
}

// Crea una actividad y la guarda en la lista.
function agregarActividad(nombre, categoria, horas) {
  actividades.push({
    nombre: nombre,
    categoria: categoria,
    horas: horas,
    costo: calcularCosto(horas, VALOR_HORA),
  });
}

// Revisa los datos del formulario. Devuelve un mensaje de error, o "" si todo está bien.
function validarDatos(nombre, horas) {
  if (nombre.trim() === "") {
    return "Escriba el nombre de la actividad.";
  }
  if (isNaN(horas) || horas <= 0) {
    return "Las horas deben ser un número mayor que cero.";
  }
  return "";
}

// Muestra la lista de actividades en pantalla.
function mostrarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  actividades.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a.nombre + " (" + a.categoria + "): " + a.horas + " h - $ " + a.costo;
    lista.appendChild(li);
  });
}

// Calcula el total de las actividades y lo muestra en pantalla.
function mostrarTotal() {
  let total = 0;
  actividades.forEach((a) => {
    total = total + a.costo;
  });
  document.getElementById("total").textContent = "Total: $ " + total;
}

// Evento del botón "Agregar": lee el formulario y actualiza la pantalla.
document.getElementById("agregar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const categoria = document.getElementById("categoria").value;
  const horas = Number(document.getElementById("horas").value);

  const error = validarDatos(nombre, horas);
  document.getElementById("mensaje").textContent = error;
  if (error !== "") {
    return;
  }

  agregarActividad(nombre, categoria, horas);
  mostrarLista();
  mostrarTotal();
});
