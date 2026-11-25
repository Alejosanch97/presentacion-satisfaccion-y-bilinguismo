import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { SLIDES } from "./slides";
import { Countdown } from "./Countdown";
import { Escudo } from "./ui/ui";
import "./deck.css";

const W = 1600;
const H = 900;

/* Color de fondo de cada tema (ver "theme" en slides/index.js) */
const THEMES = {
  paper: "#fff8ec",
  blue: "#2350c8",
  coral: "#ff6b4a",
  mint: "#17b08a",
  sun: "#ffc23d",
  lilac: "#8b6cf0",
  teal: "#0e8a9e",
  sky: "#9db8ff",
  night: "#141a36",
};

/* Escala el escenario de 1600×900 para que quepa en cualquier pantalla */
const useStageScale = () => {
  const [s, setS] = useState(1);
  useLayoutEffect(() => {
    const fit = () => setS(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return s;
};

/* Figuras flotantes: círculos, estrellas y garabatos de colores */
const SHAPES = [
  { k: "dot", x: 2.5, y: 40, s: 30, c: "var(--sun)" },
  { k: "ring", x: 91, y: 14, s: 70, c: "var(--coral)" },
  { k: "star", x: 84, y: 78, s: 46, c: "var(--mint)" },
  { k: "squig", x: 3, y: 93, s: 110, c: "var(--blue)" },
  { k: "dot", x: 50, y: 92, s: 18, c: "var(--lilac)" },
  { k: "plus", x: 70, y: 8, s: 30, c: "var(--blue)" },
  { k: "dot", x: 96, y: 52, s: 22, c: "var(--blue)" },
  { k: "ring", x: 33, y: 94, s: 30, c: "var(--mint)" },
];

const Shape = ({ k, s, c }) => {
  const st = { width: s, height: s, color: c };
  if (k === "dot") return <i className="sh-dot" style={{ ...st, background: c }} />;
  if (k === "ring") return <i className="sh-ring" style={{ ...st, borderColor: c }} />;
  if (k === "plus") return <svg viewBox="0 0 20 20" style={st}><path d="M10 2 V18 M2 10 H18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>;
  if (k === "star") return <svg viewBox="0 0 40 40" style={st}><path d="M20 3 C21 14 26 19 37 20 C26 21 21 26 20 37 C19 26 14 21 3 20 C14 19 19 14 20 3 Z" fill="currentColor" /></svg>;
  return <svg viewBox="0 0 120 40" style={{ ...st, height: s / 3 }}><path d="M4 20 C16 4 28 4 40 20 S64 36 76 20 S100 4 116 20" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" /></svg>;
};

const Background = ({ index, theme }) => (
  <div className="bg">
    <motion.div className="bg-color" animate={{ backgroundColor: THEMES[theme] || THEMES.paper }} transition={{ duration: 0.6 }} />
    <div className="bg-dots" />
    {SHAPES.map((p, i) => (
      <motion.div
        key={i}
        className={`shape ${theme !== "paper" ? "on-color" : ""}`}
        style={{ left: `${p.x}%`, top: `${p.y}%` }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, i % 2 ? 14 : -14, 0],
          x: index % 2 ? (i % 3) * 12 : -(i % 3) * 12,
        }}
        transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
      >
        <Shape {...p} />
      </motion.div>
    ))}
    <div className="bg-grain" />
  </div>
);

export const Deck = () => {
  const [phase, setPhase] = useState("start"); // start → countdown → deck
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const scale = useStageScale();
  useEffect(() => confetti.reset(), [index]); // limpia el confeti al cambiar de slide
  const total = SLIDES.length;

  const go = useCallback(
    (to) => {
      const next = Math.max(0, Math.min(total - 1, to));
      setDir(next >= index ? 1 : -1);
      setIndex(next);
    },
    [index, total]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const fullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (phase === "start" && ["Enter", " ", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        return setPhase("countdown");
      }
      if (phase !== "deck") return;
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); next(); }
      if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); prev(); }
      if (e.key === "Home") go(0);
      if (e.key === "End") go(total - 1);
      if (e.key.toLowerCase() === "f") fullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, next, prev, go, total]);

  const onStageClick = (e) => {
    if (e.target.closest("button, a, [data-noadvance]")) return;
    if (phase === "start") return setPhase("countdown");
    if (phase === "deck") next();
  };

  const slide = SLIDES[index];
  const theme = phase === "deck" ? slide.theme || "paper" : "paper";
  const Current = slide.Component;

  return (
    <div className="viewport" onClick={onStageClick}>
      <div
        className={`stage theme-${theme}`}
        style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        <Background index={phase === "deck" ? index : 0} theme={theme} />

        <AnimatePresence mode="wait">
          {phase === "start" && (
            <motion.div key="start" className="start" exit={{ opacity: 0, scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Escudo size={300} />
              <p className="start-kicker">Bilingüismo · Familias · Estudiantes · 2026</p>
              <motion.p className="start-hint" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }}>
                Haz clic para empezar
              </motion.p>
            </motion.div>
          )}

          {phase === "countdown" && <Countdown key="cd" onDone={() => setPhase("deck")} />}

          {phase === "deck" && (
            <motion.div key="deck" className="deck" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* progreso superior estilo "stories" */}
              <div className="progress" data-noadvance>
                {SLIDES.map((s, i) => (
                  <button key={s.id} className="seg" onClick={() => go(i)} title={s.section}>
                    <motion.i
                      initial={false}
                      animate={{ width: i <= index ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </button>
                ))}
              </div>

              <div className="brandmark">
                <Escudo size={46} ring={false} />
                <span>CREAR</span>
                <em>{slide.section}</em>
              </div>

              <AnimatePresence custom={dir}>
                <motion.section
                  key={slide.id}
                  className="slide"
                  custom={dir}
                  initial={{ opacity: 0, x: 80 * dir }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 * dir, filter: "blur(6px)", transition: { duration: 0.3 } }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Current />
                </motion.section>
              </AnimatePresence>

              <div className="controls" data-noadvance>
                <button onClick={prev} aria-label="Anterior" disabled={index === 0}>‹</button>
                <span className="ctr">
                  {String(index + 1).padStart(2, "0")}<small>/{String(total).padStart(2, "0")}</small>
                </span>
                <button onClick={next} aria-label="Siguiente" disabled={index === total - 1}>›</button>
                <button onClick={fullscreen} aria-label="Pantalla completa" className="fs">⤢</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
