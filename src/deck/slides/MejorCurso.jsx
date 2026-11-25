import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Frame, Kicker, Title, Card } from "./Frame";
import { Icon } from "../ui/ui";
import { CURSOS_PRIM, CURSOS_BACH } from "../data";

const fmt = (n) => n.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* Podio: 2° · 1° · 3° */
const Podium = ({ data, color, delay }) => {
  const order = [data[1], data[0], data[2]];
  const H = [150, 205, 115];
  const place = [2, 1, 3];
  return (
    <div className="podium">
      {order.map((c, i) => (
        <div key={c.curso} className="pod-col">
          <motion.div className="pod-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: delay + 0.9 + (2 - place[i]) * 0.3 }}>
            {place[i] === 1 && <span className="pod-crown"><Icon name="trophy" size={40} /></span>}
            <b>{c.curso}</b>
            <span>{fmt(c.nota)}</span>
          </motion.div>
          <motion.div
            className={`pod-bar p${place[i]}`}
            style={{ height: H[i], background: place[i] === 1 ? color : undefined }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: delay + (3 - place[i]) * 0.2, type: "spring", stiffness: 120, damping: 15 }}
          >
            {place[i]}°
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const Rest = ({ data }) => (
  <ul className="pod-rest">
    {data.slice(3).map((c, i) => (
      <li key={c.curso}><span>{i + 4}.</span><b>{c.curso}</b><em>{fmt(c.nota)}</em></li>
    ))}
  </ul>
);

export const MejorCurso = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      const colors = ["#2350c8", "#ff6b4a", "#ffc23d", "#17b08a"];
      confetti({ particleCount: 90, spread: 70, origin: { x: 0.3, y: 0.55 }, colors });
      confetti({ particleCount: 90, spread: 70, origin: { x: 0.73, y: 0.55 }, colors });
    }, 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <Frame className="mejor">
      <Kicker n="04">Mejores cursos · promedio de los cuatro periodos</Kicker>
      <Title size="m">Los cursos con <em>mejor promedio</em> del año.</Title>
      <div className="mejor-grid">
        <Card className="mejor-card" tilt={-0.8}>
          <h4>Primaria <small>· promedio general 89,79</small></h4>
          <Podium data={CURSOS_PRIM} color="var(--sun)" delay={0.4} />
          <Rest data={CURSOS_PRIM} />
        </Card>
        <Card className="mejor-card" tilt={0.8}>
          <h4>Bachillerato <small>· promedio general 87,05</small></h4>
          <Podium data={CURSOS_BACH} color="var(--coral)" delay={0.7} />
          <Rest data={CURSOS_BACH} />
        </Card>
      </div>
    </Frame>
  );
};
