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

/* Ubicación de cada grado en la escalera. 11° aparece en B1+ y B2: el nivel al que avanza su grupo más alto */
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
  { grade: "11°", level: "B1+" },
  { grade: "11° ", level: "B2" },
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

/* Progrentis · nota promedio por grado 2026 (Informe de cierre Progrentis) */
export const PROG_NIVELES = [
  { label: "3°", sub: "ABC 3", value: 93.0, color: "var(--mint)" },
  { label: "9°", sub: "ÉLITE 3", value: 92.9, color: "var(--mint)" },
  { label: "8°", sub: "ÉLITE 2", value: 92.4, color: "var(--mint)" },
  { label: "11°", sub: "PRO", value: 92.3, color: "var(--mint)" },
  { label: "6°", sub: "MENTOR 3", value: 90.9, color: "var(--blue)" },
  { label: "7°", sub: "ÉLITE 1", value: 88.9, color: "var(--blue)" },
  { label: "10°", sub: "PRO", value: 88.2, color: "var(--blue)" },
  { label: "1°", sub: "ABC 1", value: 86.6, color: "var(--blue)" },
  { label: "5°", sub: "MENTOR 2", value: 83.4, color: "var(--lilac)" },
  { label: "2°", sub: "ABC 2", value: 82.8, color: "var(--lilac)" },
  { label: "4°", sub: "MENTOR 1", value: 80.1, color: "var(--lilac)" },
];

/* IM-Prove · % de estudiantes por nivel en cada grado (n2 en proceso, n3 consolidado, n4 destacado) */
export const IMP_GRADOS = [
  { label: "1°", n2: 4, n3: 8, n4: 88, pct: 96 },
  { label: "2°", n2: 6, n3: 65, n4: 29, pct: 94 },
  { label: "3°", n2: 0, n3: 43, n4: 57, pct: 100 },
  { label: "4°", n2: 9, n3: 58, n4: 33, pct: 91 },
  { label: "5°", n2: 45, n3: 42, n4: 13, pct: 55 },
  { label: "6°", n2: 52, n3: 41, n4: 7, pct: 48 },
  { label: "7°", n2: 15, n3: 78, n4: 7, pct: 85 },
  { label: "8°", n2: 5, n3: 76, n4: 19, pct: 95 },
  { label: "9°", n2: 52, n3: 44, n4: 4, pct: 48 },
  { label: "10°", n2: 19, n3: 75, n4: 6, pct: 81 },
  { label: "11°", n2: 11, n3: 79, n4: 11, pct: 89 },
];

/* IM-Prove · puntaje promedio por área: evaluación 1 → evaluación 4 */
export const IMP_AREAS = [
  { label: "Inglés", from: 61, to: 79 },
  { label: "Matemáticas", from: 58, to: 66 },
  { label: "Lectura", from: 57, to: 65 },
  { label: "Ciencias", from: 52, to: 59 },
  { label: "Sociales", from: 49, to: 58 },
];

/* IM-Prove · grados con mayor diferencia sobre el promedio nacional */
export const IMP_NACIONAL = [
  { g: "8°", v: 7.5 },
  { g: "4°", v: 7.4 },
  { g: "3°", v: 6.5 },
];

/* Mejor curso del año: promedio de notas de los cuatro periodos */
export const CURSOS_PRIM = [
  { curso: "3° (301)", nota: 91.81 },
  { curso: "1° (101)", nota: 90.05 },
  { curso: "5° (501)", nota: 89.79 },
  { curso: "2° (201)", nota: 89.71 },
  { curso: "4° (401)", nota: 88.24 },
];
export const CURSOS_BACH = [
  { curso: "11° (1101)", nota: 88.79 },
  { curso: "10° (1001)", nota: 87.67 },
  { curso: "8° (801)", nota: 86.96 },
  { curso: "7° (701)", nota: 86.81 },
  { curso: "9° (901)", nota: 86.71 },
  { curso: "6° (601)", nota: 86.12 },
];
