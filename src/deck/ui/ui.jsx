import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

/* ───────── Animaciones base ───────── */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
export const rise = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};
export const pop = {
  hidden: { opacity: 0, scale: 0.6, rotate: -6 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 170, damping: 13 } },
};
/* sticker que cae y queda ligeramente girado */
export const stick = (deg = -2) => ({
  hidden: { opacity: 0, y: -40, rotate: deg * 4, scale: 0.9 },
  show: { opacity: 1, y: 0, rotate: deg, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12 } },
});

/** Elemento que entra con la cascada del slide */
export const R = ({ as = "div", v = rise, className, style, children, ...rest }) => {
  const M = motion[as];
  return (
    <M variants={v} className={className} style={style} {...rest}>
      {children}
    </M>
  );
};

/* ───────── Número animado ───────── */
const fmt = (n, decimals) =>
  n.toLocaleString("es-CO", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

export const Counter = ({ to, from = 0, decimals = 0, prefix = "", suffix = "", duration = 1.6, delay = 0.3 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const c = animate(from, to, {
      duration, delay, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = prefix + fmt(v, decimals) + suffix; },
    });
    return () => c.stop();
  }, [to, from, decimals, prefix, suffix, duration, delay]);
  return <span ref={ref}>{prefix + fmt(from, decimals) + suffix}</span>;
};

/* ───────── Escudo del colegio ─────────
   Intenta /escudo.jpg (si lo subes a /public), luego la imagen en línea
   y, si nada carga, muestra "CREAR" para que la presentación nunca se rompa. */
const CREST_SOURCES = [
  "/escudo.jpg",
  "https://i.pinimg.com/736x/db/1e/03/db1e03964f0c50df7b69c3aa10bba738.jpg",
];

export const Escudo = ({ size = 220, ring = true, spin = true, label = "INSTITUTO PEDAGÓGICO CREAR ✦ 2026 ✦ UN AÑO QUE SE ESCUCHA ✦ " }) => {
  const [src, setSrc] = useState(0);
  const failed = src >= CREST_SOURCES.length;
  return (
    <div className="escudo" style={{ width: size, height: size }}>
      {ring && (
        <motion.svg
          viewBox="0 0 200 200" width={size} height={size} className="escudo-ring"
          animate={spin ? { rotate: 360 } : undefined}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <defs>
            <path id="ring" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
          </defs>
          <text fontFamily="JetBrains Mono" fontSize="10.4" letterSpacing="2.6" fill="currentColor">
            <textPath href="#ring">{label}</textPath>
          </text>
        </motion.svg>
      )}
      <div className="escudo-core" style={{ width: ring ? "72%" : "100%", height: ring ? "72%" : "100%" }}>
        {failed ? (
          <span className="escudo-fb" style={{ fontSize: size * 0.13 }}>CREAR</span>
        ) : (
          <img src={CREST_SOURCES[src]} alt="Escudo Instituto Pedagógico CREAR" onError={() => setSrc((s) => s + 1)} />
        )}
      </div>
    </div>
  );
};

/* ───────── Barras horizontales ───────── */
export const HBars = ({ data, max, unit = "%", decimals = 0, delay = 0.4, color = "var(--blue)", height = 34, prefix = "" }) => {
  const m = max ?? Math.max(...data.map((d) => d.value));
  return (
    <div className="hbars">
      {data.map((d, i) => (
        <div key={d.label} className="hbar" style={{ "--h": `${height}px` }}>
          <span className="hbar-label">{d.label}{d.sub && <small>{d.sub}</small>}</span>
          <div className="hbar-track">
            <motion.div
              className="hbar-fill"
              style={{ background: d.color || color }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.max((d.value / m) * 100, 0.6)}%` }}
              transition={{ delay: delay + i * 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="hbar-val">
            <Counter to={d.value} decimals={decimals} prefix={prefix} suffix={unit} delay={delay + i * 0.1} />
          </span>
        </div>
      ))}
    </div>
  );
};

/* ───────── Antes → después (2025 → 2026) ───────── */
export const Dumbbells = ({ data, min = 0, max = 100, delay = 0.4, decimals = 0 }) => {
  const P = (v) => ((v - min) / (max - min)) * 100;
  return (
    <div className="dbs">
      {data.map((d, i) => (
        <div key={d.label} className="db">
          <span className="db-label">{d.label}{d.sub && <small>{d.sub}</small>}</span>
          <div className="db-track">
            <motion.i
              className="db-line"
              style={{ left: `${P(d.from)}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${P(d.to) - P(d.from)}%` }}
              transition={{ delay: delay + 0.35 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.b className="db-a" style={{ left: `${P(d.from)}%` }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: delay + i * 0.12 }} />
            <motion.b
              className="db-b"
              initial={{ left: `${P(d.from)}%`, scale: 0 }}
              animate={{ left: `${P(d.to)}%`, scale: 1 }}
              transition={{ delay: delay + 0.35 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="db-val">
            <s>{fmt(d.from, decimals)}%</s> → <b><Counter from={d.from} to={d.to} decimals={decimals} suffix="%" delay={delay + 0.35 + i * 0.12} /></b>
          </span>
        </div>
      ))}
    </div>
  );
};

/* ───────── Línea de tendencia ───────── */
export const Trend = ({ series, labels, w = 720, h = 360, max = 70, delay = 0.4 }) => {
  const m = { l: 30, r: 30, t: 50, b: 44 };
  const X = (i) => m.l + (i * (w - m.l - m.r)) / (labels.length - 1);
  const Y = (v) => m.t + (1 - v / max) * (h - m.t - m.b);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="trend">
      <line x1={m.l} x2={w - m.r} y1={Y(0)} y2={Y(0)} stroke="currentColor" strokeOpacity=".35" strokeWidth="2" />
      {series.map((s, si) => {
        const d = s.values.map((v, i) => `${i ? "L" : "M"}${X(i)},${Y(v)}`).join(" ");
        return (
          <g key={s.name}>
            <motion.path
              d={d} fill="none" stroke={s.color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: delay + si * 0.4, duration: 1.4, ease: "easeInOut" }}
            />
            {s.values.map((v, i) => (
              <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + si * 0.4 + 0.45 * i + 0.2, type: "spring", stiffness: 200 }}
                style={{ transformOrigin: `${X(i)}px ${Y(v)}px` }}>
                <circle cx={X(i)} cy={Y(v)} r="13" fill={s.color} stroke="var(--paper)" strokeWidth="4" />
                <text x={X(i)} y={Y(v) - 24} textAnchor="middle" fontSize="26" fontWeight="800" fill={s.color}>
                  {String(v).replace(".", ",")}%
                </text>
              </motion.g>
            ))}
          </g>
        );
      })}
      {labels.map((l, i) => (
        <text key={l} x={X(i)} y={h - 8} textAnchor="middle" fontSize="22" fontWeight="600" fill="currentColor" fontFamily="JetBrains Mono">{l}</text>
      ))}
    </svg>
  );
};

/* ───────── Íconos simples ───────── */
export const Icon = ({ name, size = 40 }) => {
  const s = { width: size, height: size };
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" };
  const P = {
    chat: <><path d="M7 9 H33 V26 H18 L11 32 V26 H7 Z" /><path d="M13 16 H27 M13 20 H22" /></>,
    family: <><circle cx="13" cy="12" r="4" /><circle cx="27" cy="12" r="4" /><circle cx="20" cy="22" r="3" /><path d="M5 33 C5 24 21 24 21 33" /><path d="M19 33 C19 24 35 24 35 33" /></>,
    student: <><path d="M4 15 L20 8 L36 15 L20 22 Z" /><path d="M11 18.5 V26 C11 29 29 29 29 26 V18.5" /><path d="M36 15 V24" /></>,
    star: <path d="M20 5 L24.5 15 L35 16 L27 23 L29.5 34 L20 28.5 L10.5 34 L13 23 L5 16 L15.5 15 Z" />,
    heart: <path d="M20 33 C9 25 5 19 5 14 C5 9 9 6 13 6 C16 6 18.5 8 20 10.5 C21.5 8 24 6 27 6 C31 6 35 9 35 14 C35 19 31 25 20 33 Z" />,
    bowl: <><path d="M5 19 H35 C35 27 29 32 20 32 C11 32 5 27 5 19 Z" /><path d="M14 13 C14 10 16 10 16 7 M20 13 C20 10 22 10 22 7 M26 13 C26 10 28 10 28 7" /></>,
    clock: <><circle cx="20" cy="20" r="14" /><path d="M20 12 V20 L26 24" /></>,
    bath: <><path d="M6 20 H34 V24 C34 29 30 32 25 32 H15 C10 32 6 29 6 24 Z" /><path d="M10 20 V10 C10 7 12 6 14 6 C16 6 17 7 17 9" /><path d="M12 32 L11 35 M28 32 L29 35" /></>,
    megaphone: <><path d="M6 17 V24 H11 L27 31 V10 L11 17 Z" /><path d="M11 24 L13 32 H17 L16 25" /><path d="M31 15 C33 17 33 23 31 25" /></>,
    scale: <><path d="M20 6 V33 M12 33 H28" /><path d="M8 11 H32" /><path d="M8 11 L4 21 H12 Z M32 11 L28 21 H36 Z" /></>,
    rocket: <><path d="M20 4 C27 9 29 17 26 26 H14 C11 17 13 9 20 4 Z" /><circle cx="20" cy="15" r="3" /><path d="M14 26 L9 31 L14 31 M26 26 L31 31 L26 31 M17 30 L20 36 L23 30" /></>,
    globe: <><circle cx="20" cy="20" r="14" /><path d="M6 20 H34 M20 6 C14 12 14 28 20 34 M20 6 C26 12 26 28 20 34" /></>,
    book: <><path d="M20 10 C16 7 10 7 6 8 V31 C10 30 16 30 20 33 C24 30 30 30 34 31 V8 C30 7 24 7 20 10 Z" /><path d="M20 10 V33" /></>,
    house: <><path d="M5 19 L20 6 L35 19" /><path d="M9 16 V33 H31 V16" /><rect x="16" y="22" width="8" height="11" /></>,
    smile: <><circle cx="20" cy="20" r="14" /><path d="M14 23 C16 27 24 27 26 23" /><circle cx="15" cy="16" r="1" /><circle cx="25" cy="16" r="1" /></>,
    target: <><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="8" /><circle cx="20" cy="20" r="2" /></>,
    users: <><circle cx="15" cy="14" r="5" /><path d="M5 32 C5 24 25 24 25 32" /><circle cx="28" cy="15" r="4" /><path d="M27 23 C32 23 36 26 36 31" /></>,
    sparkle: <path d="M20 5 C21 14 26 19 35 20 C26 21 21 26 20 35 C19 26 14 21 5 20 C14 19 19 14 20 5 Z" />,
    ball: <><circle cx="20" cy="20" r="14" /><path d="M20 6 L26 14 L23 23 H17 L14 14 Z" /><path d="M26 14 L34 15 M14 14 L6 15 M23 23 L27 32 M17 23 L13 32" /></>,
  };
  return (
    <svg viewBox="0 0 40 40" style={s}>
      <g {...c}>{P[name]}</g>
    </svg>
  );
};
