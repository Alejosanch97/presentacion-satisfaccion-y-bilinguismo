import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Counter, HBars, Icon, pop } from "../ui/ui";
import { FAM_AVANCES } from "../data";

/* Sección 2 · Portada */
export const FamDivider = () => (
  <Divider
    n="07"
    icon="family"
    title={<>Lo que nos dicen<br />las <em>familias</em></>}
    lead="145 familias, de preescolar a 11°, nos contaron cómo vivieron 2026."
    words={["Gracias", "9 de 10", "Calidez", "Confianza", "Cercanía"]}
  />
);

/* 9 de cada 10 */
export const FamSatisfaccion = () => (
  <Frame className="fam-sat">
    <div className="fam-left">
      <Kicker n="07">Familias · Satisfacción</Kicker>
      <Title size="m">9 de cada 10 familias están <em>satisfechas</em> con CREAR.</Title>
      <R className="people" aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className={i < 9 ? "p-on" : "p-off"}
            initial={{ y: 40, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.09, type: "spring", stiffness: 220, damping: 12 }}
          >
            <Icon name="smile" size={62} />
          </motion.span>
        ))}
      </R>
      <Lead>
        La satisfacción general se mantiene en nivel de excelencia: <b>91,7 %</b> en 2026 (91,3 % en 2025).
      </Lead>
    </div>
    <div className="fam-right">
      <Card tone="coral" tilt={2} className="mini">
        <div className="mini-v"><Counter to={40} delay={0.8} /><small> de 42</small></div>
        <p>indicadores <b>mejoran o se mantienen</b> frente a 2025.</p>
      </Card>
      <Card tone="sun" tilt={-1.5} className="mini">
        <div className="mini-v"><Counter to={90} suffix="%" delay={1} /></div>
        <p>de las familias <b>recomienda CREAR</b> (4 o 5 de 5).</p>
      </Card>
      <Card tone="white" tilt={1} className="mini">
        <div className="mini-v"><Counter to={55} suffix="%" delay={1.2} /></div>
        <p>de las familias antiguas siente que su satisfacción <b>mejoró</b> este año.</p>
      </Card>
    </div>
  </Frame>
);

/* Lo que más avanzó */
export const FamAvances = () => (
  <Frame className="fam-av">
    <Kicker n="07">Familias · Lo que más avanzó</Kicker>
    <Title size="m">Escuchamos en 2025, <em>actuamos</em> en 2026.</Title>
    <div className="fam-av-grid">
      <Card className="chart-card" tilt={-0.5}>
        <h4>Puntos que subió cada aspecto frente a 2025</h4>
        <HBars data={FAM_AVANCES} unit=" pts" prefix="+" decimals={1} max={14} height={40} delay={0.6} />
      </Card>
      <div className="fam-av-side">
        <Card tone="blue" tilt={2} className="note-card">
          <Icon name="chat" size={40} />
          <p>La <b>comunicación</b> por áreas subió entre 5 y 8 puntos.</p>
        </Card>
        <Card tone="mint" tilt={-2} className="note-card">
          <Icon name="heart" size={40} />
          <p>La <b>Escuela de Padres</b> tuvo el mayor salto de una actividad institucional.</p>
        </Card>
      </div>
    </div>
  </Frame>
);

/* Lo mejor de CREAR */
const FAVS = [
  { v: "93,7 %", t: "Secretaría administrativa", tone: "coral", tilt: -3 },
  { v: "91,7 %", t: "Seguridad en el colegio", tone: "sun", tilt: 2 },
  { v: "90 %", t: "Normas y puntualidad", tone: "mint", tilt: -1.5 },
  { v: "92 %", t: "Phidias", tone: "blue", tilt: 2.5 },
  { v: "93 %", t: "Preescolar nos recomienda con 5/5", tone: "lilac", tilt: -2 },
];

export const FamLoMejor = () => (
  <Frame className="fam-best">
    <Kicker n="07">Familias · Lo mejor de CREAR</Kicker>
    <R v={pop} className="quote-xl">
      <span className="q-mark">“</span>
      Los niños <em>no son un número</em>.
    </R>
    <Lead>
      Es lo que más repiten las familias. La <b>calidez</b>, la <b>cercanía</b> y el <b>nivel académico</b> son el sello que no debe cambiar.
    </Lead>
    <div className="favs">
      {FAVS.map((f) => (
        <Card key={f.t} tone={f.tone} tilt={f.tilt} className="fav">
          <b>{f.v}</b>
          <span>{f.t}</span>
        </Card>
      ))}
    </div>
  </Frame>
);
