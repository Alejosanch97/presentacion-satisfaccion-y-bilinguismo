import { motion } from "framer-motion";
import { Frame, Kicker, Title, Lead, Card } from "./Frame";
import { R, Counter, Escudo, Icon, pop } from "../ui/ui";

/* 01 · Portada */
export const Portada = () => (
  <Frame className="portada">
    <div className="portada-left">
      <Kicker>Instituto Pedagógico CREAR · Balance 2026</Kicker>
      <Title size="xl">
        2026, un año<br />que <em>se escucha</em>.
      </Title>
      <Lead>
        Cómo creció nuestro <b>inglés</b>, lo que valoran nuestras <b>familias</b> y nuestros <b>estudiantes</b>,
        lo que nos piden y hacia dónde vamos en <b>2027</b>.
      </Lead>
      <R className="tags">
        <span className="tag t-blue">Bilingüismo</span>
        <span className="tag t-coral">Familias</span>
        <span className="tag t-mint">Estudiantes</span>
        <span className="tag t-sun">Metas 2027</span>
      </R>
    </div>
    <R v={pop} className="portada-right">
      <Escudo size={500} />
    </R>
  </Frame>
);

/* 02 · Tres voces */
const VOCES = [
  { n: 247, t: "estudiantes", d: "presentaron las pruebas de inglés Richmond (Entry y Exit Test) de 1° a 11°.", icon: "globe", tone: "blue", tilt: -2 },
  { n: 145, t: "familias", d: "respondieron la encuesta de satisfacción, de preescolar a 11°.", icon: "family", tone: "coral", tilt: 1.5 },
  { n: 243, t: "estudiantes", d: "nos contaron cómo viven el colegio, en encuestas adaptadas a su edad.", icon: "student", tone: "mint", tilt: -1 },
];

export const TresVoces = () => (
  <Frame className="voces">
    <Kicker n="00">El año en tres voces</Kicker>
    <Title size="m">Escuchamos a <em>todos</em> para saber cómo nos fue.</Title>
    <div className="grid-3">
      {VOCES.map((v, i) => (
        <Card key={v.tone} tone={v.tone} tilt={v.tilt} className="voz">
          <div className="voz-ic"><Icon name={v.icon} size={44} /></div>
          <div className="voz-n"><Counter to={v.n} delay={0.5 + i * 0.2} /></div>
          <h3>{v.t}</h3>
          <p>{v.d}</p>
        </Card>
      ))}
    </div>
    <R className="ruta">
      {["Lo que logramos", "Lo que más valoran", "Lo que nos piden", "Nuestras metas 2027"].map((t, i) => (
        <motion.span key={t} className="ruta-step" whileHover={{ y: -4 }}>
          <b>{i + 1}</b>{t}
        </motion.span>
      ))}
    </R>
  </Frame>
);
