const estados = ["Pendiente", "Aprobado"];
const clases = ["pendiente", "aprobado"];

const ramos = [
  { id: "integrado-de-habilidades-cientificas-para-la-tecnologia-medica", asignatura: "Integrado de Habilidades Científicas para la Tecnología Médica", semestre: 1, prerrequisitos: "" },
  { id: "antropologia", asignatura: "Antropología", semestre: 1, prerrequisitos: "" },
  { id: "introduccion-a-la-tecnologia-medica", asignatura: "Introducción a la Tecnología Médica", semestre: 1, prerrequisitos: "" },
  { id: "biologia-celular", asignatura: "Biología Celular", semestre: 1, prerrequisitos: "" },
  { id: "matematica-basica", asignatura: "Matemática Básica", semestre: 1, prerrequisitos: "" },
  { id: "quimica-general-y-organica", asignatura: "Química General y Orgánica", semestre: 1, prerrequisitos: "" },
  { id: "etica", asignatura: "Ética", semestre: 2, prerrequisitos: "Antropología" },
  { id: "bioseguridad-y-procedimientos-de-apoyo-diagnostico", asignatura: "Bioseguridad y Procedimientos de Apoyo Diagnóstico", semestre: 2, prerrequisitos: "" },
  { id: "tecnologia-medica-en-el-equipo-de-salud", asignatura: "Tecnología Médica en el Equipo de Salud", semestre: 2, prerrequisitos: "Introducción a la Tecnología Médica" },
  { id: "morfologia-basica", asignatura: "Morfología Básica", semestre: 2, prerrequisitos: "" },
  { id: "bioquimica-general", asignatura: "Bioquímica General", semestre: 2, prerrequisitos: "Química General y Orgánica" },
  { id: "psicologia-de-atencion-al-paciente", asignatura: "Psicología de Atención al Paciente", semestre: 2, prerrequisitos: "" },
  { id: "bioanalisis-instrumental", asignatura: "Bioanálisis Instrumental", semestre: 3, prerrequisitos: "Bioquímica General" },
  { id: "bases-fisicas-de-la-microscopia", asignatura: "Bases Físicas de la Microscopía", semestre: 3, prerrequisitos: "Matemática Básica" },
  { id: "infectologia-basica", asignatura: "Infectología Básica", semestre: 3, prerrequisitos: "Morfología Básica" },
  { id: "integrado-fisiologia-fisiopatologia-farmacologia-i", asignatura: "Integrado Fisiología - Fisiopatología - Farmacología I", semestre: 3, prerrequisitos: "Bioquímica General" },
  { id: "salud-poblacional", asignatura: "Salud Poblacional", semestre: 3, prerrequisitos: "" },
  { id: "bioetica", asignatura: "Bioética", semestre: 4, prerrequisitos: "" },
  { id: "histoembriologia-clinica", asignatura: "Histoembriología Clínica", semestre: 4, prerrequisitos: "Morfología Básica" },
  { id: "integrado-fisiologia-fisiopatologia-farmacologia-ii", asignatura: "Integrado Fisiología - Fisiopatología - Farmacología II", semestre: 4, prerrequisitos: "Integrado Fisiología - Fisiopatología - Farmacología I" },
  { id: "bases-para-el-procesamiento-citohistologico", asignatura: "Bases para el Procesamiento Citohistológico", semestre: 4, prerrequisitos: "Bases Físicas de la Microscopía" },
  { id: "epidemiologia", asignatura: "Epidemiología", semestre: 4, prerrequisitos: "Salud Poblacional" },
  { id: "bases-del-diagnostico-citogenetico", asignatura: "Bases del Diagnóstico Citogenético", semestre: 5, prerrequisitos: "Bases para el Procesamiento Citohistológico" },
  { id: "persona-y-sociedad", asignatura: "Persona y Sociedad", semestre: 5, prerrequisitos: "Ética" },
  { id: "histopatologia-general", asignatura: "Histopatología General", semestre: 5, prerrequisitos: "Histoembriología Clínica" },
  { id: "procedimientos-para-el-analisis-citohistologico", asignatura: "Procedimientos para el Análisis Citohistológico", semestre: 5, prerrequisitos: "Bases para el Procesamiento Citohistológico" },
  { id: "bioestadistica", asignatura: "Bioestadística", semestre: 5, prerrequisitos: "Matemática Básica" },
  { id: "integrado-citohistologico-general", asignatura: "Integrado Citohistológico General", semestre: 6, prerrequisitos: "Procedimientos para el Análisis Citohistológico y Bases del Diagnóstico Citogenético" },
  { id: "gestion-en-equipos-para-el-alto-desempeno", asignatura: "Gestión en Equipos para el Alto Desempeño", semestre: 6, prerrequisitos: "" },
  { id: "diagnostico-citogenetico-clinico", asignatura: "Diagnóstico Citogenético Clínico", semestre: 6, prerrequisitos: "Bases del Diagnóstico Citogenético" },
  { id: "histopatologia-avanzada", asignatura: "Histopatología Avanzada", semestre: 6, prerrequisitos: "Histopatología General" },
  { id: "analisis-histoquimico", asignatura: "Análisis Histoquímico", semestre: 6, prerrequisitos: "Procedimientos para el Análisis Citohistológico" },
  { id: "electivo-i-formacion-e-identidad", asignatura: "Electivo I: Formación e Identidad", semestre: 6, prerrequisitos: "" },
  { id: "diagnostico-molecular", asignatura: "Diagnóstico Molecular", semestre: 7, prerrequisitos: "Diagnóstico Citogenético Clínico" },
  { id: "informatica-medica-para-histopatologia", asignatura: "Informática Médica para Histopatología", semestre: 7, prerrequisitos: "Integrado Citohistológico General" },
  { id: "inmunohistoquimica-aplicada", asignatura: "Inmunohistoquímica Aplicada", semestre: 7, prerrequisitos: "Análisis Histoquímico" },
  { id: "citodiagnostico-ginecologico-general", asignatura: "Citodiagnóstico Ginecológico General", semestre: 7, prerrequisitos: "Histopatología Avanzada" },
  { id: "metodologia-de-la-investigacion", asignatura: "Metodología de la Investigación", semestre: 7, prerrequisitos: "" },
  { id: "electivo-ii-formacion-e-identidad", asignatura: "Electivo II: Formación e Identidad", semestre: 7, prerrequisitos: "" },
  { id: "aplicaciones-del-diagnostico-molecular", asignatura: "Aplicaciones del Diagnóstico Molecular", semestre: 8, prerrequisitos: "Diagnóstico Molecular" },
  { id: "integrado-citohistologico-clinico", asignatura: "Integrado Citohistológico Clínico", semestre: 8, prerrequisitos: "Inmunohistoquímica Aplicada y Citodiagnóstico Ginecológico General" },
  { id: "citopatologia-ginecologica-y-miscelanea", asignatura: "Citopatología Ginecológica y Miscelánea", semestre: 8, prerrequisitos: "Citodiagnóstico Ginecológico General" },
  { id: "salud-digital", asignatura: "Salud Digital", semestre: 8, prerrequisitos: "" },
  { id: "electivo-iii-formacion-e-identidad", asignatura: "Electivo III: Formación e Identidad", semestre: 8, prerrequisitos: "" },
  { id: "electivo-ii", asignatura: "Electivo II", semestre: 9, prerrequisitos: "" },
  { id: "electivo-i", asignatura: "Electivo I", semestre: 9, prerrequisitos: "" },
  { id: "gestion-de-carrera-y-desarrollo-profesional", asignatura: "Gestión de Carrera y Desarrollo Profesional", semestre: 9, prerrequisitos: "" },
  { id: "taller-de-investigacion-aplicado-en-tecnologia-medica", asignatura: "Taller de Investigación Aplicado en Tecnología Médica", semestre: 9, prerrequisitos: "Haber aprobado semestre 7 y 8" },
  { id: "sistema-de-acreditacion-en-anatomia-patologica", asignatura: "Sistema de Acreditación en Anatomía Patológica", semestre: 9, prerrequisitos: "Integrado Citohistológico Clínico" },
  { id: "internado", asignatura: "Internado", semestre: 10, prerrequisitos: "Haber aprobado todos los semestres anteriores" }
];

const ramosPorSemestre = {};
ramos.forEach(r => {
  if (!ramosPorSemestre[r.semestre]) ramosPorSemestre[r.semestre] = [];
  ramosPorSemestre[r.semestre].push({ ...r, estado: "Pendiente", bloqueado: false });
});

function actualizarBloqueos() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    const prereq = ramo.prerrequisitos.split(" y ").map(p => p.trim()).filter(Boolean);
    if (prereq.length === 0) {
      div.classList.remove("bloqueado");
      div.dataset.bloqueado = "false";
    } else {
      const aprobados = prereq.every(nombre => {
        const id = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
        const prereqDiv = document.getElementById(id);
        return prereqDiv && prereqDiv.dataset.estado === "Aprobado";
      });
      if (aprobados) {
        div.classList.remove("bloqueado");
        div.dataset.bloqueado = "false";
      } else {
        div.classList.add("bloqueado");
        div.dataset.bloqueado = "true";
      }
    }
  });
}

function crearMalla() {
  const container = document.getElementById("malla");
  Object.keys(ramosPorSemestre).sort((a, b) => a - b).forEach(semestre => {
    const columna = document.createElement("div");
    columna.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    columna.appendChild(titulo);

    ramosPorSemestre[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.id = ramo.id;
      div.classList.add("ramo", "pendiente");
      div.dataset.estado = "Pendiente";
      div.dataset.bloqueado = ramo.prerrequisitos.trim() !== "" ? "true" : "false";
      if (div.dataset.bloqueado === "true") div.classList.add("bloqueado");

      div.textContent = ramo.asignatura;
      div.addEventListener("click", () => {
        if (div.dataset.bloqueado === "true") return;

        const estadoActual = div.dataset.estado;
        const nuevoEstado = estadoActual === "Pendiente" ? "Aprobado" : "Pendiente";
        div.classList.remove(clases[estados.indexOf(estadoActual)]);
        div.classList.add(clases[estados.indexOf(nuevoEstado)]);
        div.dataset.estado = nuevoEstado;

        actualizarBloqueos();
      });

      columna.appendChild(div);
    });

    container.appendChild(columna);
  });

  actualizarBloqueos();
}

document.addEventListener("DOMContentLoaded", crearMalla);
