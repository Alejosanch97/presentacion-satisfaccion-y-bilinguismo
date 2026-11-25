import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Counter, HBars, Icon, pop } from "../ui/ui";
import { PROG_NIVELES } from "../data";

/* Sección 2 · Portada */
export const ProgDivider = () => (
  <Divider
    n="02"
    icon="book"
    title={<>Progrentis:<br />leer y <em>pensar</em> mejor</>}
    lead="Entrenamiento en comprensión lectora y habilidades de pensamiento de 1° a 11°. Informe de cierre 2026."
    words={["Polaris", "91 puntos", "★★★★★", "Iberoamérica", "Comprensión"]}
  />
);

/* Distinción Polaris Notable */
export const ProgPolaris = () => (
  <Frame className="polaris">
    <div className="polaris-left">
      <Kicker n="02">Progrentis · Distinción Polaris</Kicker>
      <Title size="m">Un colegio con nivel <em>Polaris Notable</em>.</Title>
      <Lead>
        Eduqatia certifica la Distinción Polaris y solo la alcanza <b>alrededor del 10 %</b> de las instituciones.
        Significa que nuestros estudiantes logran habilidades sólidas de <b>comprensión</b>: analizar, buscar información y leer tablas y gráficas.
      </Lead>
      <div className="polaris-stats">
        <Card tone="sun" tilt={-2} className="mini">
          <div className="mini-v"><Counter to={88} delay={0.8} /></div>
          <p>nota promedio del colegio. Polaris Notable exige <b>más de 85</b>.</p>
        </Card>
        <Card tone="mint" tilt={1.5} className="mini">
          <div className="mini-v"><Counter to={80} suffix="+" delay={1} /></div>
          <p><b>Todos los grados</b> cerraron con promedio entre 80,1 y 93.</p>
        </Card>
        <Card tone="white" tilt={-1} className="mini">
          <div className="mini-v">9<small> de 10</small></div>
          <p>estudiantes completaron las <b>20 unidades</b> del año.</p>
        </Card>
      </div>
    </div>
    <R v={pop} className="polaris-badge">
      <motion.div className="pb-ring" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 26, ease: "linear" }}>
        <svg viewBox="0 0 200 200" width="420" height="420">
          <defs><path id="pring" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" /></defs>
          <text fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3" fill="currentColor">
            <textPath href="#pring">DISTINCIÓN POLARIS ✦ NOTABLE ✦ EDUQATIA ✦ 2026 ✦ </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="pb-core">
        <Icon name="star" size={64} />
        <b>Polaris</b>
        <span>Notable</span>
      </div>
      <motion.div className="pb-line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
        Empezamos el año en <b>85</b> y cerramos en <b>91</b>
      </motion.div>
    </R>
  </Frame>
);

/* Mejores grados */
export const ProgGrados = () => (
  <Frame className="prog-grados">
    <div className="pg-left">
      <Kicker n="02">Progrentis · Los grados que brillaron</Kicker>
      <Title size="m">Todos los grados <em>en verde</em>.</Title>
      <Lead>
        Nota promedio de cada grado en 2026 (de 0 a 100). <b>3°</b>, <b>9°</b>, <b>8°</b> y <b>11°</b> superan los 92 puntos.
      </Lead>
      <Card tone="sun" tilt={-2} className="promo-hl">
        <b>3°</b> fue el grupo que más creció: pasó de <b>89,2</b> en las primeras unidades a <b>95,4</b> en las últimas.
      </Card>
    </div>
    <Card className="chart-card pg-chart" tilt={0.6}>
      <h4>Nota promedio por grado <small>· Progrentis 2026</small></h4>
      <HBars data={PROG_NIVELES} unit="" decimals={1} max={100} height={26} delay={0.5} />
    </Card>
  </Frame>
);

/* Distinciones Progrentis Iberoamérica */
export const ProgDistinciones = () => (
  <Frame className="prog-dist">
    <Kicker n="02">Progrentis · Distinciones</Kicker>
    <Title size="m"><Counter to={159} delay={0.5} /> distinciones a <em>nivel Iberoamérica</em>.</Title>
    <Lead>
      Las distinciones Progrentis reconocen a los estudiantes con mejor nivel, que compiten con colegios de toda Iberoamérica.
    </Lead>
    <div className="dist-grid">
      <Card tone="blue" tilt={-1.5} className="dist">
        <span className="dist-k">Primaria</span>
        <div className="dist-v"><Counter to={61} delay={0.8} /><small>/128</small></div>
        <p>estudiantes con distinción</p>
        <div className="dist-stars">
          <span>★★★★★</span><b><Counter to={11} delay={1.2} /></b> con Distinción Máxima
        </div>
      </Card>
      <Card tone="coral" tilt={1.5} className="dist">
        <span className="dist-k">Bachillerato</span>
        <div className="dist-v"><Counter to={98} delay={1} /><small>/137</small></div>
        <p>estudiantes con distinción</p>
        <div className="dist-stars">
          <span>★★★★★</span><b><Counter to={21} delay={1.4} /></b> con Distinción Máxima
        </div>
      </Card>
      <R v={pop} className="dist-total">
        <b><Counter to={32} delay={1.6} /></b>
        <span>estudiantes con la <em>Distinción Máxima</em> de 5 estrellas</span>
      </R>
    </div>
  </Frame>
);
