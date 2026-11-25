import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Frame, Kicker, Title, Lead, Card } from "./Frame";
import { R, Escudo, Icon, pop } from "../ui/ui";

/* Metas 2027 */
const METAS = [
  { icon: "target", from: "25", to: "0", t: "estudiantes rezagados en inglés", d: "Todos en el nivel mínimo de su grado o por encima.", tone: "blue", tilt: -1.5 },
  { icon: "globe", from: "1ª vez", to: "100 %", t: "de 11° en la prueba internacional", d: "Con B1 asegurado y un grupo en B2.", tone: "mint", tilt: 1.5 },
  { icon: "chat", from: "—", to: "90 %", t: "de primaria hablando en situaciones reales", d: "Speaking medido en Skills: presentarse, pedir ayuda, comprar.", tone: "sun", tilt: -1 },
  { icon: "student", from: "60,5 %", to: "65 %", t: "de estudiantes satisfechos", d: "Más entusiasmo en 4°–5° y en los grados medios.", tone: "coral", tilt: 2 },
  { icon: "heart", from: "46,9 %", to: "55 %", t: "de familias muy satisfechas", d: "De familias satisfechas a familias que nos recomiendan.", tone: "lilac", tilt: -2 },
  { icon: "clock", from: "29 %", to: "< 12 %", t: "de familias esperando 3+ días", d: "Respuestas ágiles a todas las solicitudes.", tone: "white", tilt: 1 },
];

export const Metas = () => (
  <Frame className="metas">
    <Kicker n="09">Hacia dónde vamos</Kicker>
    <Title size="m">Nuestras metas <em>2027</em>.</Title>
    <div className="grid-3 metas-grid">
      {METAS.map((m) => (
        <Card key={m.t} tone={m.tone} tilt={m.tilt} className="meta">
          <div className="meta-top">
            <Icon name={m.icon} size={34} />
            <span className="meta-from">{m.from}</span>
            <span className="meta-arrow">→</span>
            <b className="meta-to">{m.to}</b>
          </div>
          <h3>{m.t}</h3>
          <p>{m.d}</p>
        </Card>
      ))}
    </div>
  </Frame>
);

/* Cierre */
const fire = () => {
  const colors = ["#2350c8", "#ff6b4a", "#ffc23d", "#17b08a", "#8b6cf0", "#fff8ec"];
  confetti({ particleCount: 140, spread: 90, origin: { x: 0.2, y: 0.7 }, colors });
  confetti({ particleCount: 140, spread: 90, origin: { x: 0.8, y: 0.7 }, colors });
};

export const Gracias = () => {
  useEffect(() => {
    const t = setTimeout(fire, 700);
    return () => clearTimeout(t);
  }, []);
  return (
    <Frame center className="gracias">
      <R v={pop}><Escudo size={300} /></R>
      <Kicker>Colegio Bilingüe Integral CREAR · 2027</Kicker>
      <Title size="xl">Escuchar, actuar, <em>crecer</em>.</Title>
      <Lead>Gracias a cada familia, estudiante y docente que hizo posible este año.</Lead>
      <R>
        <motion.button
          className="again"
          data-noadvance
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={fire}
        >
          <Icon name="sparkle" size={26} /> ¡Celebrar otra vez!
        </motion.button>
      </R>
    </Frame>
  );
};

/* Resumen balance (antes de las metas) */
export const Balance = () => (
  <Frame className="balance">
    <Kicker n="09">El balance</Kicker>
    <Title size="m">2026 nos deja <em>más fortalezas</em> que retos.</Title>
    <div className="bal-grid">
      <Card tone="mint" tilt={-1} className="bal">
        <h3>Lo que celebramos</h3>
        <ul>
          <li>Inglés que sube de nivel en <b>todas las promociones</b>.</li>
          <li><b>Polaris Notable</b> en Progrentis y <b>159 distinciones</b> a nivel Iberoamérica.</li>
          <li><b>9 de 10 familias</b> satisfechas y 40 de 42 indicadores estables o en alza.</li>
          <li>Estudiantes con <b>tres años seguidos</b> de mejora.</li>
          <li>Docentes, calidez y cercanía como sello de CREAR.</li>
        </ul>
      </Card>
      <Card tone="sun" tilt={1} className="bal">
        <h3>Lo que fortaleceremos</h3>
        <ul>
          <li>Grammar y speaking para dar el paso al B2.</li>
          <li>Convivencia entre compañeros y clases más dinámicas.</li>
          <li>Respuestas ágiles a las familias.</li>
          <li>Espacios de juego y una voz estudiantil que se vea.</li>
        </ul>
      </Card>
    </div>
  </Frame>
);
