import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Frame, Kicker, Title, Lead, Card } from "./Frame";
import { R, Icon, pop } from "../ui/ui";

/* FinFluent: nueva plataforma de finanzas en inglés */
const FINFLUENT_URL = "https://drive.google.com/file/d/160XWQdFC5xym_RTIokUsDOYC5nrJT662/view?usp=sharing";

const RUTA = [
  { g: "6°", l: "A2", t: "Del trueque a mi primer plan" },
  { g: "7°", l: "A2", t: "Decisiones de consumo y ahorro" },
  { g: "8°", l: "B1", t: "Banca y dinero digital" },
  { g: "9°", l: "B1", t: "Crédito e inversión" },
  { g: "10°", l: "B1+", t: "Matemática financiera" },
  { g: "11°", l: "B2", t: "Proyecto de vida y Shark Tank" },
];

export const FinFluent = () => (
  <Frame className="finfluent">
    <div className="ff-left">
      <Kicker n="01">Bilingüismo · Lo nuevo de 2027</Kicker>
      <Title size="m">
        <em>FinFluent</em>: aprender finanzas<br />en inglés.
      </Title>
      <Lead>
        Nuestra nueva plataforma, creada en CREAR: educación financiera <b>completamente en inglés</b>, gamificada y
        ordenada por niveles, de <b>6° (A2) a 11° (B2)</b>. Ahorro, presupuesto, inversión y emprendimiento… jugando.
      </Lead>
      <R className="ff-chips">
        <span className="tag t-sun">Reading · Listening · Speaking · Writing</span>
        <span className="tag t-mint">4 periodos por grado</span>
        <span className="tag t-coral">Diploma al terminar</span>
      </R>
      <R>
        <motion.a
          href={FINFLUENT_URL}
          target="_blank"
          rel="noreferrer"
          className="ff-btn"
          data-noadvance
          whileHover={{ scale: 1.05, rotate: -1.5 }}
          whileTap={{ scale: 0.96 }}
        >
          <Icon name="rocket" size={28} /> Ver FinFluent
        </motion.a>
      </R>
    </div>
    <div className="ff-path">
      {RUTA.map((r, i) => (
        <motion.div
          key={r.g}
          className="ff-step"
          style={{ marginLeft: i * 34 }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.14, type: "spring", stiffness: 140, damping: 15 }}
        >
          <b>{r.g}</b>
          <span className="ff-lv">{r.l}</span>
          <span className="ff-t">{r.t}</span>
        </motion.div>
      ))}
      <motion.div className="ff-rocket" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }}>
        <Icon name="rocket" size={44} />
      </motion.div>
    </div>
  </Frame>
);

/* Saber 11: categoría A+ */
export const Saber11 = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      confetti({ particleCount: 150, spread: 110, origin: { x: 0.32, y: 0.55 }, colors: ["#ffc23d", "#fff8ec", "#ff6b4a", "#2350c8"] });
    }, 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <Frame className="saber">
      <R v={pop} className="aplus">
        <motion.span
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          A+
        </motion.span>
      </R>
      <div className="saber-text">
        <Kicker>Pruebas de Estado · Saber 11 · 2026</Kicker>
        <Title size="l">Mantenemos nuestra categoría <em>A+</em>.</Title>
        <Lead>
          La <b>máxima categoría</b> en la clasificación de planteles de las pruebas Saber 11. Un resultado que refleja el compromiso
          de nuestros estudiantes y docentes con la excelencia académica.
        </Lead>
        <Card tone="sun" tilt={-1.5} className="saber-card">
          <Icon name="trophy" size={40} />
          <p><b>Categoría A+</b> · la más alta que otorga el ICFES a los colegios del país.</p>
        </Card>
      </div>
    </Frame>
  );
};
