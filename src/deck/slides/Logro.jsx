import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Escudo, Icon } from "../ui/ui";

/* El gran logro: certificación bilingüe y nuevo nombre del colegio.
   Se revela en tres tiempos: anuncio → sello → nuevo nombre. */
const NAME = ["Colegio", "Bilingüe", "Integral", "CREAR"];

const burst = (x) => {
  const colors = ["#ffc23d", "#fff8ec", "#ff6b4a", "#9db8ff", "#17b08a"];
  confetti({ particleCount: 160, spread: 100, startVelocity: 48, origin: { x, y: 0.65 }, colors });
};

export const Logro = () => {
  useEffect(() => {
    const t1 = setTimeout(() => burst(0.3), 1700);
    const t2 = setTimeout(() => { burst(0.15); burst(0.85); }, 3300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="frame logro">
      {/* rayos de fondo */}
      <motion.div
        className="rays"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ opacity: { delay: 1.4, duration: 1 }, scale: { delay: 1.4, duration: 1 }, rotate: { duration: 80, repeat: Infinity, ease: "linear" } }}
      />

      <motion.p
        className="logro-kicker"
        initial={{ opacity: 0, y: 20, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Y nuestro mayor logro…
      </motion.p>

      <div className="logro-main">
        <motion.div
          className="seal"
          initial={{ scale: 3, rotate: -40, opacity: 0 }}
          animate={{ scale: 1, rotate: -6, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 14 }}
        >
          <Escudo size={380} label="CERTIFICACIÓN BILINGÜE ✦ SECRETARÍA DE EDUCACIÓN ✦ CREAR ✦ " />
          <motion.span
            className="stamp"
            initial={{ scale: 0, rotate: 30 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 2.1, type: "spring", stiffness: 320, damping: 12 }}
          >
            <Icon name="trophy" size={30} /> Certificados
          </motion.span>
        </motion.div>

        <div className="logro-text">
          <motion.p
            className="logro-lead"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
          >
            La <b>Secretaría de Educación</b> nos certificó como <b>colegio bilingüe</b>.
          </motion.p>
          <motion.p
            className="logro-from"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            Desde 2027 somos
          </motion.p>
          <h1 className="logro-name">
            {NAME.map((w, i) => (
              <motion.span
                key={w}
                className={w === "CREAR" ? "crear" : ""}
                initial={{ opacity: 0, y: 60, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 3.1 + i * 0.22, type: "spring", stiffness: 180, damping: 14 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};
