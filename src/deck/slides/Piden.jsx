import { Frame, Kicker, Title, Card, Divider } from "./Frame";
import { Icon } from "../ui/ui";

/* Sección 4 · Portada */
export const PidenDivider = () => (
  <Divider
    n="04"
    icon="megaphone"
    title={<>Lo que nos <em>piden</em><br />para 2027</>}
    lead="Escuchar también es reconocer lo que podemos hacer mejor. Estas son nuestras oportunidades."
    words={["Te escuchamos", "Ideas", "Juntos", "2027", "¡Vamos!"]}
  />
);

/* Tarjeta de petición: lo que piden → nuestra propuesta */
const Pide = ({ icon, t, d, plan, tone, tilt }) => (
  <Card tone={tone} tilt={tilt} className="pide">
    <div className="pide-h">
      <span className="pide-ic"><Icon name={icon} size={34} /></span>
      <h3>{t}</h3>
    </div>
    <p>{d}</p>
    <div className="pide-plan"><span>Nuestra propuesta</span>{plan}</div>
  </Card>
);

const FAMILIAS = [
  { icon: "bowl", t: "Calentar los almuerzos", d: "La petición número 1 de las familias: 68 menciones.", plan: "Un punto para calentar almuerzos en el restaurante.", tone: "white", tilt: -1.5 },
  { icon: "clock", t: "Respuestas más ágiles", d: "El 71 % recibe respuesta en máximo 2 días; queremos que sean todas.", plan: "Toda solicitud respondida en máximo 48 horas.", tone: "white", tilt: 1 },
  { icon: "book", t: "Clases igual de buenas en todos los cursos", d: "Enseñanza-aprendizaje: 80,7 %. Piden más consistencia entre docentes.", plan: "Acompañamiento en el aula y retroalimentación clara al estudiante.", tone: "white", tilt: -1 },
  { icon: "house", t: "Ver el inglés en casa", d: "El 41 % ya nota avances claros fuera del colegio; queremos que sean más.", plan: "Speaking con Skills y evidencias de inglés para las familias.", tone: "white", tilt: 1.5 },
];

export const PidenFamilias = () => (
  <Frame className="piden">
    <Kicker n="04">Lo que piden las familias</Kicker>
    <Title size="m">Cuatro pedidos <em>claros</em>, cuatro respuestas.</Title>
    <div className="grid-4 piden-grid">
      {FAMILIAS.map((p) => <Pide key={p.t} {...p} />)}
    </div>
  </Frame>
);

const ESTUDIANTES = [
  { icon: "users", t: "Mejor trato entre compañeros", d: "Es lo más mencionado en bachillerato (23 menciones).", plan: "Círculos de diálogo y casos atendidos con cierre.", tone: "white", tilt: 1 },
  { icon: "sparkle", t: "Clases más dinámicas", d: "En 4° y 5°, “clases más divertidas” fue la respuesta más elegida.", plan: "Juego, proyectos y tecnología en el aula.", tone: "white", tilt: -1.5 },
  { icon: "bath", t: "Baños y espacios", d: "Los baños son el espacio peor calificado; piden canchas y zonas de juego.", plan: "Plan de aseo y mantenimiento revisado cada mes.", tone: "white", tilt: 1.5 },
  { icon: "scale", t: "Menos evaluaciones juntas", d: "El estrés se asocia a las notas y a evaluaciones acumuladas.", plan: "Calendario de evaluaciones: máximo dos por día.", tone: "white", tilt: -1 },
  { icon: "megaphone", t: "Que su voz se vea", d: "Sienten que el colegio escucha; quieren ver más cambios.", plan: "Boletín “Lo que hicimos con tu voz”.", tone: "white", tilt: 1 },
  { icon: "ball", t: "Descansos y actividades", d: "Quieren conservar los torneos y los descansos separados.", plan: "Más opciones en el descanso, diseñadas con ellos.", tone: "white", tilt: -1.5 },
];

export const PidenEstudiantes = () => (
  <Frame className="piden">
    <Kicker n="04">Lo que piden los estudiantes</Kicker>
    <Title size="m">Ideas de los estudiantes, <em>convertidas en plan</em>.</Title>
    <div className="grid-3 piden-grid compact">
      {ESTUDIANTES.map((p) => <Pide key={p.t} {...p} />)}
    </div>
  </Frame>
);
