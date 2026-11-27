
// Calculadora de costos de mantenimiento
const actividades = [];
const VALOR_HORA = 56250; // 9.000.000 / 160 horas al mes

// Muestra la lista según la categoría elegida en el filtro (HU5)
function mostrarLista() {
    const filtro = document.getElementById("filtro").value;
    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    actividades
        .filter((a) => filtro === "Todas" || a.categoria === filtro)
        .forEach((a) => {
            const li = document.createElement("li");

            li.textContent =
                a.nombre + " (" + a.categoria + "): " +
                a.horas + " h - $ " + a.costo;

            lista.appendChild(li);
        });
}

// Evento para filtrar las actividades por categoría
document.getElementById("filtro").addEventListener("change", mostrarLista);

// Evento para agregar actividades
document.getElementById("agregar").addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const horas = Number(document.getElementById("horas").value);

    actividades.push({
        nombre: nombre,
        categoria: categoria,
        horas: horas,
        costo: horas * VALOR_HORA
    });

    mostrarLista();

    let total = 0;

    actividades.forEach((a) => {
        total = total + a.costo;
    });

    document.getElementById("total").textContent = "Total: $ " + total;
});
