import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Counter, Dumbbells, Icon } from "../ui/ui";
import { BIL_PROMOS, BIL_STAIRS } from "../data";

/* Sección 1 · Portada */
export const BilDivider = () => (
  <Divider
    n="01"
    icon="globe"
    title={<>Así creció<br />nuestro <em>inglés</em></>}
    lead="Resultados de las pruebas Richmond 2026 de 1° a 11°, comparados con 2025."
    words={["Hello!", "Level up", "B1 ✓", "Let's go!", "B2 ★"]}
  />
);

/* Logros en cifras */
const LOGROS = [
  { v: 89, s: "%", t: "de primaria", d: "termina en o por encima del nivel esperado para su grado. 3° llega al 100 %.", tone: "blue", tilt: -1.5 },
  { v: 10, s: " de 10", t: "promociones", d: "terminaron 2026 con más estudiantes en niveles altos que en 2025.", tone: "sun", tilt: 1.5 },
  { v: 100, s: "%", t: "de 7° a 11°", d: "está en A2 o superior: ningún estudiante en A1 o Pre-A1.", tone: "mint", tilt: -1 },
  { v: 6, s: "", t: "estudiantes en B2", d: "y tres de ellos están en 5° de primaria, con puntajes de 93 % a 95 %.", tone: "coral", tilt: 2 },
];

export const BilLogros = () => (
  <Frame>
    <Kicker n="01">Bilingüismo · Lo que logramos</Kicker>
    <Title size="m">Un proceso bilingüe que <em>ya da resultados</em> de excelencia.</Title>
    <div className="grid-4">
      {LOGROS.map((l, i) => (
        <Card key={l.t} tone={l.tone} tilt={l.tilt} className="kpi">
          <div className="kpi-v"><Counter to={l.v} suffix={l.s} delay={0.5 + i * 0.15} /></div>
          <h3>{l.t}</h3>
          <p>{l.d}</p>
        </Card>
      ))}
    </div>
    <Lead>
      Y algo que nos llena de orgullo: <b>81 %</b> de los estudiantes mantuvo o subió su nivel durante el año,
      aunque el examen de salida es <em>más exigente</em> que el de entrada.
    </Lead>
  </Frame>
);

/* Cada promoción subió */
export const BilPromos = () => (
  <Frame className="promos">
    <div className="promos-left">
      <Kicker n="01">Bilingüismo · Año a año</Kicker>
      <Title size="m">Cada grupo <em>subió de nivel</em> frente a 2025.</Title>
      <Lead>
        Comparamos al <b>mismo grupo</b> de estudiantes: su resultado en 2025 y su resultado en 2026, ya en un grado más alto.
      </Lead>
      <Card tone="sun" tilt={-2} className="promo-hl">
        <b>8°</b> pasó de <b>16 %</b> a <b>57 %</b> en B1 o más.<br />
        <b>9°</b> llegó a <b>86 %</b>: el puntaje más alto del colegio.
      </Card>
    </div>
    <Card className="promos-chart" tilt={0.6}>
      <h4>Promoción 2025 → 2026 <small>· % en el nivel indicado</small></h4>
      <Dumbbells data={BIL_PROMOS} delay={0.6} />
      <div className="db-legend"><span><i className="a" />2025</span><span><i className="b" />2026</span></div>
    </Card>
  </Frame>
);

/* La escalera */
const LEVELS = ["Pre-A1", "A1", "A2", "A2+", "B1", "B1+", "B2"];

export const BilEscalera = () => (
  <Frame className="escalera">
    <Kicker n="01">Bilingüismo · La escalera</Kicker>
    <Title size="m">De <em>Hello</em> en 1° a usuario independiente en 11°.</Title>
    <div className="stairs">
      {LEVELS.map((l, i) => (
        <motion.div
          key={l}
          className={`step s${i}`}
          style={{ height: 70 + i * 52 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 120, damping: 16 }}
        >
          <span className="step-l">{l}</span>
          <div className="step-grades">
            {BIL_STAIRS.filter((g) => g.level === l).map((g, j) => (
              <motion.b
                key={g.grade}
                initial={{ y: -120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 + (i * 0.15) + j * 0.08, type: "spring", stiffness: 200, damping: 12 }}
              >
                {g.grade}
              </motion.b>
            ))}
          </div>
        </motion.div>
      ))}
      <motion.div
        className="stairs-star"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2.6, type: "spring", stiffness: 160 }}
      >
        <Icon name="star" size={34} />
        <span>3 estudiantes de <b>5°</b> ya están aquí</span>
      </motion.div>
    </div>
    <R className="foot">
      Nivel que alcanza o supera al menos la mitad de cada grado (Exit Test 2026). <b>Listening</b> creció en 9 de 10 grados: los estudiantes entienden muy bien el inglés.
    </R>
  </Frame>
);
