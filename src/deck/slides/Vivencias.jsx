import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Icon } from "../ui/ui";

/* Sección 2 · Portada */
export const VivDivider = () => (
  <Divider
    n="05"
    icon="star"
    title={<>Un año para<br /><em>vivirlo</em></>}
    lead="Extracurriculares, celebraciones y experiencias que llenaron 2026 de recuerdos."
    words={["Crazy Week", "Halloween", "Master Chef", "Danzas", "¡Teatro!"]}
  />
);

/* Lo que más nos gustó */
const FAVS = [
  { icon: "star", v: "98 %", t: "Danzas", s: "de las familias, satisfechas", tone: "coral", tilt: -2 },
  { icon: "music", v: "96 %", t: "Música", s: "de las familias, satisfechas", tone: "sun", tilt: 1.5 },
  { icon: "sparkle", v: "93,7 %", t: "Crazy Week", s: "la actividad mejor valorada del año por las familias", tone: "mint", tilt: -1 },
  { icon: "globe", v: "82 %", t: "Inglés extracurricular", s: "de las familias, satisfechas (63 % en 2025)", tone: "blue", tilt: 2 },
  { icon: "trophy", v: "84 %", t: "Master Chef", s: "de los estudiantes de primaria lo disfrutó", tone: "lilac", tilt: 1.5 },
  { icon: "smile", v: "78 %+", t: "Teatro y Travel Around the World", s: "de los estudiantes de primaria los disfrutó", tone: "white", tilt: -1.5 },
  { icon: "ball", v: "72 %", t: "Movie Day", s: "de bachillerato lo disfrutó; University Day, 70 %", tone: "sun", tilt: 2 },
  { icon: "heart", v: "89 %", t: "Escuela de Padres", s: "de las familias, satisfechas (+13 puntos)", tone: "coral", tilt: -2 },
];

export const VivFavoritos = () => (
  <Frame className="viv-fav">
    <Kicker n="05">Extracurriculares · Lo que más nos gustó</Kicker>
    <Title size="m">Lo que más <em>disfrutamos</em> juntos.</Title>
    <div className="grid-4 viv-grid">
      {FAVS.map((f) => (
        <Card key={f.t} tone={f.tone} tilt={f.tilt} className="viv">
          <div className="viv-top"><Icon name={f.icon} size={34} /><b>{f.v}</b></div>
          <h3>{f.t}</h3>
          <p>{f.s}</p>
        </Card>
      ))}
    </div>
  </Frame>
);

/* Todo lo que vivimos: cintas de eventos en movimiento */
const ROWS = [
  ["Chinese New Year", "Saint Patrick's Day", "April Fools' Day", "Labor Day", "Halloween", "Music Day", "World Cup", "Spelling Bee"],
  ["Crazy Week", "Master Chef", "Movie Day", "University Day", "Crazy Dress", "No Board Day", "Pets Day"],
  ["Salida al teatro", "Travel Around the World", "Día deportivo", "Mundialito", "Torneos en el descanso", "Danzas", "Música", "Robótica", "Escuela de Padres"],
];
const COLORS = ["var(--blue)", "var(--coral)", "var(--sun)", "var(--mint)", "var(--lilac)", "var(--white)"];

const Ribbon = ({ items, dir = 1, speed = 38, offset = 0 }) => {
  const list = [...items, ...items];
  return (
    <div className="ribbon">
      <motion.div
        className="ribbon-track"
        animate={{ x: dir > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {list.map((t, i) => (
          <span key={i} className="ev" style={{ background: COLORS[(i + offset) % COLORS.length], transform: `rotate(${(i % 3) - 1}deg)` }}>
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const VivTodo = () => (
  <Frame className="viv-todo">
    <Kicker n="05">Todo lo que vivimos</Kicker>
    <Title size="m">Un colegio que también se aprende <em>viviéndolo</em>.</Title>
    <Lead>
      Celebraciones en inglés, semanas temáticas, torneos, salidas y escuela de padres: 2026 fue un año lleno de experiencias compartidas.
    </Lead>
    <R className="ribbons">
      <Ribbon items={ROWS[0]} dir={1} speed={40} offset={0} />
      <Ribbon items={ROWS[1]} dir={-1} speed={34} offset={2} />
      <Ribbon items={ROWS[2]} dir={1} speed={46} offset={4} />
    </R>
    <R className="bubble viv-quote">
      En 4° y 5°, entre lo mejor del año recuerdan la salida al teatro, el mundialito, la Crazy Week… y a sus amigos.
    </R>
  </Frame>
);
