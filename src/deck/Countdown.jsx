import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Escudo } from "./ui/ui";

// Dígitos en bloques (5×5) — inspirados en el contador de la referencia.
const GLYPHS = {
  3: ["11110", "00001", "01110", "00001", "11110"],
  2: ["11110", "00001", "01110", "10000", "11111"],
  1: ["11100", "00100", "00100", "00100", "11111"],
};

const BlockDigit = ({ n }) => {
  const rows = GLYPHS[n];
  return (
    <div className="block-digit">
      {rows.map((row, r) =>
        row.split("").map((c, col) => (
          <motion.span
            key={`${r}-${col}`}
            className={c === "1" ? "on" : "off"}
            style={{ "--row": r }}
            initial={c === "1" ? { scale: 0, opacity: 0, y: -40 } : false}
            animate={c === "1" ? { scale: 1, opacity: 1, y: 0 } : undefined}
            transition={{ delay: (r * 5 + col) * 0.012, type: "spring", stiffness: 300, damping: 18 }}
          />
        ))
      )}
    </div>
  );
};

/**
 * Conteo regresivo 3·2·1 → escudo CREAR.
 * finale: lo que aparece al terminar (por defecto el logo).
 */
export const Countdown = ({ onDone, finale, step = 1000, hold = 1300 }) => {
  const [n, setN] = useState(3);

  useEffect(() => {
    if (n === 0) {
      const t = setTimeout(onDone, hold);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((v) => v - 1), step);
    return () => clearTimeout(t);
  }, [n, onDone, step, hold]);

  return (
    <motion.div className="countdown" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08 }}>
      {/* barras superiores como en la referencia */}
      <div className="cd-bars">
        {[3, 2, 1].map((k) => (
          <div key={k} className="cd-bar">
            <motion.i
              initial={{ width: 0 }}
              animate={{ width: n <= k - 1 ? "100%" : n === k ? "100%" : 0 }}
              transition={{ duration: n === k ? step / 1000 : 0.2, ease: "linear" }}
            />
          </div>
        ))}
      </div>

      {/* órbitas */}
      <svg className="cd-orbits" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        {[260, 420, 600, 820].map((r, i) => (
          <ellipse key={r} cx="800" cy="980" rx={r * 1.8} ry={r} fill="none" stroke="var(--line)" />
        ))}
      </svg>
      {[
        { x: "10%", y: "48%", c: "var(--sky)", s: 30 },
        { x: "28%", y: "64%", c: "var(--mint)", s: 46 },
        { x: "70%", y: "2%", c: "var(--coral)", s: 44 },
        { x: "82%", y: "53%", c: "var(--sun)", s: 60 },
        { x: "72%", y: "76%", c: "var(--sky)", s: 26 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="cd-planet"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
          animate={{ y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="cd-center">
        <AnimatePresence mode="wait">
          {n > 0 ? (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 1.4, filter: "blur(16px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
              transition={{ duration: 0.35 }}
            >
              <BlockDigit n={n} />
            </motion.div>
          ) : (
            <motion.div
              key="finale"
              initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
            >
              {finale ?? <Escudo size={360} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
