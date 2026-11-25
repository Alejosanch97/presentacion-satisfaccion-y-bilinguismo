import { motion } from "framer-motion";
import { R, Icon, pop, stick } from "../ui/ui";

/** Contenedor de cada diapositiva: activa la cascada de animaciones */
export const Frame = ({ children, className = "", center = false }) => (
  <motion.div
    className={`frame ${center ? "frame-center" : ""} ${className}`}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

export const Kicker = ({ n, children }) => (
  <R className="kicker">
    {n && <span className="kicker-n">{n}</span>}
    {children}
  </R>
);

/** Título: usa <em> para la palabra en serif cursiva y <b> para el acento de color */
export const Title = ({ children, size = "l" }) => (
  <R as="h1" className={`title title-${size}`}>{children}</R>
);

export const Lead = ({ children }) => <R as="p" className="lead">{children}</R>;

/** Tarjeta tipo sticker (borde de tinta y sombra desplazada) */
export const Card = ({ children, className = "", tone, tilt = 0, style }) => (
  <R v={stick(tilt)} className={`card ${tone ? `card-${tone}` : ""} ${className}`} style={style}>{children}</R>
);

/** Cifra grande con etiqueta */
export const Big = ({ value, label, sub }) => (
  <div className="big">
    <div className="big-v">{value}</div>
    <div className="big-l">{label}</div>
    {sub && <div className="big-s">{sub}</div>}
  </div>
);

/** Portada de sección a pantalla completa de color */
export const Divider = ({ n, title, lead, icon, words = [] }) => (
  <Frame className="divider">
    <R v={pop} className="div-n">{n}</R>
    <div className="div-body">
      <R className="div-icon"><Icon name={icon} size={64} /></R>
      <Title size="xl">{title}</Title>
      <Lead>{lead}</Lead>
    </div>
    {words.map((w, i) => (
      <motion.span
        key={w}
        className="div-word"
        style={{ right: `${[4, 9, 3, 8, 4][i % 5]}%`, top: `${[14, 31, 48, 65, 81][i % 5]}%` }}
        initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: [-6, 5, -4][i % 3], y: [0, -10, 0] }}
        transition={{ delay: 0.6 + i * 0.18, type: "spring", stiffness: 160, y: { repeat: Infinity, duration: 3 + i, delay: 1.5 } }}
      >
        {w}
      </motion.span>
    ))}
  </Frame>
);
