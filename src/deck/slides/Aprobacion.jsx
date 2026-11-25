import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Frame, Kicker, Title, Lead, Card } from "./Frame";
import { R, Counter, Icon } from "../ui/ui";

/* Cierre académico 2026: 312 de 319 estudiantes aprobaron el año (pérdida institucional 2,19 %) */
const TOTAL = 319;
const PERDIDA = 7;

export const Aprobacion = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      confetti({ particleCount: 120, spread: 90, origin: { x: 0.25, y: 0.6 }, colors: ["#17b08a", "#ffc23d", "#2350c8", "#ff6b4a"] });
    }, 2300);
    return () => clearTimeout(t);
  }, []);
  return (
    <Frame className="aprob">
      <div className="aprob-left">
        <Kicker n="04">Cierre académico 2026</Kicker>
        <Title size="m">Cerramos el año con <em>97,8&nbsp;%</em> de aprobación.</Title>
        <Lead>
          El Instituto Pedagógico CREAR cierra su año escolar 2026 con un porcentaje de pérdida institucional de
          solo el <b>2,19 %</b>: 7 estudiantes de un total de 319.
        </Lead>
        <div className="aprob-cards">
          <Card tone="mint" tilt={-1.5} className="mini">
            <div className="mini-v"><Counter to={312} delay={0.8} /><small> de 319</small></div>
            <p>estudiantes <b>aprobaron</b> el año escolar.</p>
          </Card>
          <Card tone="white" tilt={1.5} className="mini">
            <div className="mini-v"><Counter to={2.19} decimals={2} suffix="%" delay={1} /></div>
            <p>de pérdida institucional: <b>7 estudiantes</b>, con acompañamiento para 2027.</p>
          </Card>
        </div>
      </div>
      <Card className="aprob-grid-card" tilt={0.6}>
        <h4><Icon name="users" size={26} /> Cada punto es un estudiante de CREAR</h4>
        <div className="dots">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <motion.i
              key={i}
              className={i >= TOTAL - PERDIDA ? "d-off" : "d-on"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.005, type: "spring", stiffness: 300, damping: 18 }}
            />
          ))}
        </div>
        <div className="dots-legend">
          <span><i className="d-on" />Aprobaron (312)</span>
          <span><i className="d-off" />No aprobaron (7)</span>
        </div>
      </Card>
    </Frame>
  );
};
