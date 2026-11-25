import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Counter, Dumbbells, Trend, Icon } from "../ui/ui";
import { EST_MEJORAS } from "../data";

/* Sección 3 · Portada */
export const EstDivider = () => (
  <Divider
    n="03"
    icon="student"
    title={<>La voz de nuestros<br /><em>estudiantes</em></>}
    lead="243 estudiantes de 1° a 11° nos contaron cómo viven el colegio."
    words={["¡Feliz!", "Amigos", "Crazy Week", "Mis profes", "Inglés"]}
  />
);

/* Tres años seguidos */
export const EstTendencia = () => (
  <Frame className="est-trend">
    <div className="est-trend-left">
      <Kicker n="03">Estudiantes · Satisfacción</Kicker>
      <Title size="m"><em>Tres años</em> seguidos de mejora.</Title>
      <Lead>
        La satisfacción pasa de <b>50,7 %</b> a <b>60,5 %</b> y la insatisfacción baja a la mitad: de <b>14 %</b> a <b>7,8 %</b>,
        la cifra más baja de los tres años.
      </Lead>
      <Card tone="mint" tilt={-2} className="mini">
        <div className="mini-v"><Counter to={43} suffix="%" delay={1.4} /></div>
        <p>de bachillerato siente que su satisfacción <b>mejoró</b> frente al año pasado.</p>
      </Card>
    </div>
    <Card className="trend-card" tilt={1}>
      <Trend
        labels={["2024", "2025", "2026"]}
        series={[
          { name: "Satisfechos", color: "var(--blue)", values: [50.7, 58.1, 60.5] },
          { name: "Insatisfechos", color: "var(--coral)", values: [12.8, 14.0, 7.8] },
        ]}
        w={700}
        h={420}
      />
      <div className="db-legend"><span><i style={{ background: "var(--blue)" }} />Satisfechos</span><span><i style={{ background: "var(--coral)" }} />Insatisfechos</span></div>
    </Card>
  </Frame>
);

/* Lo que mejoró */
export const EstMejoras = () => (
  <Frame className="est-mej">
    <div className="est-mej-left">
      <Kicker n="03">Estudiantes · Lo que mejoró</Kicker>
      <Title size="m">Lo que trabajamos <em>se notó</em>.</Title>
      <Lead>
        Tras la encuesta de 2025 nos enfocamos en las clases, la carga de tareas, las jornadas de recuperación y la inclusión.
        Los estudiantes lo sintieron.
      </Lead>
    </div>
    <Card className="chart-card wide" tilt={-0.6}>
      <h4>2025 → 2026 <small>· % de estudiantes satisfechos</small></h4>
      <Dumbbells data={EST_MEJORAS} min={40} max={75} delay={0.6} />
      <div className="db-legend"><span><i className="a" />2025</span><span><i className="b" />2026</span></div>
    </Card>
  </Frame>
);

/* Lo que más valoran */
const VALORAN = [
  { icon: "heart", v: "87 %", t: "de 1° a 3° se siente cuidado y protegido en el colegio.", tone: "coral", tilt: -2 },
  { icon: "smile", v: "80 %", t: "de 1° a 3° se siente feliz en CREAR.", tone: "sun", tilt: 1.5 },
  { icon: "users", v: "64 %", t: "califica el trato de sus docentes con la nota más alta.", tone: "blue", tilt: -1 },
  { icon: "globe", v: "4,24", t: "de 5: el bilingüismo es lo mejor evaluado por bachillerato.", tone: "mint", tilt: 2 },
];

export const EstValoran = () => (
  <Frame className="est-val">
    <Kicker n="03">Estudiantes · Lo que más valoran</Kicker>
    <Title size="m">Profes cercanos, <em>inglés</em> y un lugar seguro.</Title>
    <div className="grid-4">
      {VALORAN.map((v) => (
        <Card key={v.t} tone={v.tone} tilt={v.tilt} className="val">
          <Icon name={v.icon} size={40} />
          <b>{v.v}</b>
          <p>{v.t}</p>
        </Card>
      ))}
    </div>
    <div className="quotes">
      <R className="bubble">“Los descansos separados están demasiado bien, promueven la convivencia entre compañeros.”<small>Estudiante de 10°</small></R>
      <R className="bubble alt">“El inglés ha mejorado mucho y me gustaría que continuaran las actividades.”<small>Estudiante de 7°</small></R>
    </div>
  </Frame>
);
