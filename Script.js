const estados = ["Pendiente", "Aprobado"];
const clases = ["pendiente", "aprobado"];
let datosMalla = [];

// Cargar datos desde CSV embebido
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("Malla morfo.csv");
  const texto = await response.text();
  const filas = texto.trim().split("\n").slice(1);

  const ramosPorSemestre = {};

  filas.forEach(linea => {
    const [asignatura, semestre, _, prerrequisitos] = linea.split(",");
    const id = asignatura.toLowerCase().replace(/[^a-z0-9]+/g, "-").trim();
    const sem = parseInt(semestre.trim());

    if (!ramosPorSemestre[sem]) ramosPorSemestre[sem] = [];

    ramosPorSemestre[sem].push({
      id,
      asignatura,
      prerrequisitos: prerrequisitos ? prerrequisitos.trim() : "",
      estado: localStorage.getItem(id) || "Pendiente"
    });
  });

  const contenedor = document.querySelector(".malla-grid");

  Object.keys(ramosPorSemestre).sort((a, b) => a - b).forEach(semestre => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    ramosPorSemestre[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.id = ramo.id;
      div.className = `ramo ${clases[estados.indexOf(ramo.estado)]}`;
      div.setAttribute("data-prerreq", ramo.prerrequisitos);
      div.innerHTML = `
        <div>${ramo.asignatura}</div>
        <div class="estado" onclick="cambiarEstado(this)">${ramo.estado}</div>
      `;
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });

  actualizarDisponibilidad();
});

function cambiarEstado(elemento) {
  const contenedor = elemento.parentElement;
  let estadoActual = elemento.textContent.trim();
  let nuevoEstado = estadoActual === "Pendiente" ? "Aprobado" : "Pendiente";

  contenedor.classList.remove(...clases);
  contenedor.classList.add(nuevoEstado.toLowerCase());
  elemento.textContent = nuevoEstado;
  localStorage.setItem(contenedor.id, nuevoEstado);

  actualizarDisponibilidad();
}

function actualizarDisponibilidad() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const prereqsTexto = ramo.getAttribute("data-prerreq");
    if (!prereqsTexto) {
      ramo.classList.remove("bloqueado");
      ramo.style.opacity = "1";
      ramo.style.pointerEvents = "auto";
      return;
    }

    const ids = prereqsTexto.split(",").map(p =>
      p.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );

    const cumplidos = ids.every(id => localStorage.getItem(id) === "Aprobado");

    if (cumplidos) {
      ramo.classList.remove("bloqueado");
      ramo.style.opacity = "1";
      ramo.style.pointerEvents = "auto";
    } else {
      ramo.classList.add("bloqueado");
      ramo.style.opacity = "0.5";
      ramo.style.pointerEvents = "none";
    }
  });
}
