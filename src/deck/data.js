/* ───────── Datos de la presentación ─────────
   Fuentes: Informe de Bilingüismo 2026 (Richmond Entry/Exit),
   Encuesta de satisfacción de padres 2026 y Encuesta de satisfacción de estudiantes 2026. */

/* Bilingüismo · misma promoción en 2025 y 2026
   Primaria: % en A2 o más · Bachillerato: % en B1 o más */
export const BIL_PROMOS = [
  { label: "1° → 2°", sub: "A2 o más", from: 13, to: 38 },
  { label: "2° → 3°", sub: "A2 o más", from: 52, to: 75 },
  { label: "3° → 4°", sub: "A2 o más", from: 42, to: 90 },
  { label: "4° → 5°", sub: "B1 o más", from: 20, to: 39 },
  { label: "7° → 8°", sub: "B1 o más", from: 16, to: 57 },
  { label: "8° → 9°", sub: "B1 o más", from: 61, to: 86 },
  { label: "9° → 10°", sub: "B1 o más", from: 44, to: 60 },
  { label: "10° → 11°", sub: "B1 o más", from: 58, to: 69 },
];

/* Nivel que alcanza o supera al menos la mitad de cada grado (mediana del Exit Test 2026) */
export const BIL_STAIRS = [
  { grade: "1°", level: "A1" },
  { grade: "2°", level: "A1" },
  { grade: "3°", level: "A2" },
  { grade: "4°", level: "A2+" },
  { grade: "5°", level: "A2+" },
  { grade: "6°", level: "A2+" },
  { grade: "7°", level: "A2+" },
  { grade: "8°", level: "B1" },
  { grade: "9°", level: "B1" },
  { grade: "10°", level: "B1" },
  { grade: "11°", level: "B1" },
];

/* Familias · lo que más subió frente a 2025 (puntos) */
export const FAM_AVANCES = [
  { label: "Escuela de Padres", sub: "89 % satisfechas", value: 13.4, color: "var(--coral)" },
  { label: "PRIME Math", sub: "89 % satisfechas", value: 10.6, color: "var(--blue)" },
  { label: "Plataforma UNOi", sub: "90 % satisfechas", value: 8.3, color: "var(--blue)" },
  { label: "Comunicación directiva", sub: "90 % satisfechas", value: 8.3, color: "var(--lilac)" },
  { label: "Resolución de conflictos", sub: "79 % satisfechas", value: 7.3, color: "var(--mint)" },
  { label: "Seguridad", sub: "92 % satisfechas", value: 6.4, color: "var(--mint)" },
];

/* Estudiantes · lo que mejoró frente a 2025 */
export const EST_MEJORAS = [
  { label: "Colegio inclusivo", from: 50, to: 67 },
  { label: "Jornadas de saberes perdidos", from: 52, to: 61 },
  { label: "Metodología docente", sub: "bachillerato", from: 61, to: 69 },
  { label: "Tareas no excesivas", sub: "bachillerato", from: 63, to: 70 },
  { label: "Plataforma Richmond", from: 63, to: 69 },
];
