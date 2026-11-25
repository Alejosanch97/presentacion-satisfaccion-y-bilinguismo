import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card } from "./Frame";
import { R, Counter, Icon, pop } from "../ui/ui";

/* Tech Pathways: ruta de microcredenciales de Scratch a IA */
const RUTA = [
  { g: "3°", tool: "Scratch", t: "Programación creativa y ambientes virtuales", tone: "sun" },
  { g: "6°", tool: "Micro:bit", t: "Prototipos de energías limpias", tone: "mint" },
  { g: "8° y 9°", tool: "App Inventor + IoT", t: "Apps móviles e Internet de las Cosas", tone: "coral" },
  { g: "10° y 11°", tool: "Python · IA · Data", t: "Data Analytics, Design Thinking y metodologías ágiles", tone: "lilac" },
];

const PILARES = [
  { icon: "rocket", t: "Prototipado real", d: "Retos escolares y comunitarios resueltos con robótica aplicada." },
  { icon: "scale", t: "IA con ética", d: "Uso responsable, privacidad de datos y pensamiento crítico." },
  { icon: "globe", t: "Bilingüismo tecnológico", d: "Herramientas y plataformas globales, en inglés." },
];

export const TechPathways = () => (
  <Frame className="tech">
    <Kicker>Robótica e IA · Alianza SET21 + CREAR</Kicker>
    <Title size="m">CREAR <em>Tech Pathways</em>: de Scratch a la IA.</Title>
    <Lead>Formamos creadores tecnológicos con microcredenciales en cada etapa, de primaria a bachillerato.</Lead>
    <div className="tech-route">
      {RUTA.map((r, i) => (
        <motion.div
          key={r.g}
          className={`tech-step card card-${r.tone}`}
          initial={{ opacity: 0, y: 50, rotate: i % 2 ? 3 : -3 }}
          animate={{ opacity: 1, y: -i * 26, rotate: i % 2 ? 1 : -1 }}
          transition={{ delay: 0.5 + i * 0.18, type: "spring", stiffness: 140, damping: 14 }}
        >
          <span className="ts-g">{r.g}</span>
          <b className="ts-tool">{r.tool}</b>
          <p>{r.t}</p>
          <span className="ts-badge"><Icon name="star" size={22} /> Microcredencial</span>
        </motion.div>
      ))}
    </div>
    <div className="tech-pilares">
      {PILARES.map((p) => (
        <R key={p.t} className="pilar">
          <span className="pilar-ic"><Icon name={p.icon} size={30} /></span>
          <div><b>{p.t}</b><p>{p.d}</p></div>
        </R>
      ))}
    </div>
  </Frame>
);

/* Logros certificados */
export const TechLogros = () => (
  <Frame className="tech-logros">
    <Kicker>Robótica e IA · Logros certificados</Kicker>
    <Title size="m">Talento CREAR con <em>proyección internacional</em>.</Title>
    <Lead>Nuestros estudiantes no solo aprenden tecnología: se gradúan con credenciales validadas por la industria.</Lead>
    <div className="tl-grid">
      <Card tone="blue" tilt={-1.2} className="tl-card">
        <span className="tl-k">Digital House · 10° y 11°</span>
        <div className="tl-row">
          <div className="tl-v"><Counter to={35} delay={0.7} /></div>
          <p>estudiantes con certificación internacional <b>Digital Skills Diploma 2026</b> (Senior Track Mixto con Python).</p>
        </div>
        <div className="tl-chips">
          <span><b>100 %</b> de avance en los 5 módulos</span>
          <span><b>36</b> horas de formación técnica</span>
          <span>Valor de referencia: <b>más de $4.000.000</b></span>
        </div>
      </Card>
      <Card tone="sun" tilt={1.2} className="tl-card">
        <span className="tl-k">Robótica e IoT · primaria y bachillerato</span>
        <div className="tl-row">
          <div className="tl-v"><Counter to={12} delay={0.9} /></div>
          <p>estudiantes certificados en <b>App Inventor, Internet de las Cosas, Micro:bit y Scratch</b>.</p>
        </div>
        <div className="tl-chips">
          <span>Pensamiento computacional</span>
          <span>Prototipado</span>
          <span>Resolución de problemas</span>
        </div>
      </Card>
    </div>
    <R v={pop} className="tl-total">
      <Icon name="trophy" size={34} />
      <span><b><Counter to={47} delay={1.3} /></b> certificaciones en tecnología entregadas en 2026.</span>
    </R>
  </Frame>
);
