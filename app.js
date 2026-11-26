// Calculadora de costos de mantenimiento (versión base)
const actividades = [];
const VALOR_HORA = 56250; // 9.000.000 / 160 horas al mes

document.getElementById("agregar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const categoria = document.getElementById("categoria").value;
  const horas = Number(document.getElementById("horas").value);

  actividades.push({ nombre: nombre, categoria: categoria, horas: horas, costo: horas * VALOR_HORA });

  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  let total = 0;
  actividades.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a.nombre + " (" + a.categoria + "): " + a.horas + " h - $ " + a.costo;
    lista.appendChild(li);
    total = total + a.costo;
  });
  document.getElementById("total").textContent = "Total: $ " + total;
});
