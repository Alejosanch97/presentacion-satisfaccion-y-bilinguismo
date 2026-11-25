import { Frame, Kicker, Title, Lead, Card, Divider } from "./Frame";
import { R, Counter, Dumbbells, StackBars, Icon } from "../ui/ui";
import { IMP_GRADOS, IMP_AREAS, IMP_NACIONAL } from "../data";

/* Sección 3 · Portada */
export const ImpDivider = () => (
  <Divider
    n="03"
    icon="target"
    title={<>IM-Prove:<br />pruebas <em>externas</em></>}
    lead="Cuatro evaluaciones externas en el año, comparadas con colegios de todo el país."
    words={["EV1 → EV4", "+18 en inglés", "Nacional", "Consolidado", "Destacado"]}
  />
);

/* Niveles por grado */
const KEYS = [
  { key: "n2", color: "var(--sun)" },
  { key: "n3", color: "var(--blue)", text: "var(--paper)" },
  { key: "n4", color: "var(--mint)" },
];

export const ImpGrados = () => (
  <Frame className="imp-grados">
    <div className="ig-left">
      <Kicker n="03">IM-Prove · Resultados por grado</Kicker>
      <Title size="m"><em>8 de 11</em> grados con más del 80 % consolidado o destacado.</Title>
      <Lead>
        <b>3°</b> llega al 100 %, <b>1°</b> al 96 % y <b>8°</b> al 95 %. 5°, 6° y 9° son los grados donde pondremos el foco en 2027.
      </Lead>
      <div className="stack-legend">
        <span><i style={{ background: "var(--sun)" }} />En proceso</span>
        <span><i style={{ background: "var(--blue)" }} />Consolidado</span>
        <span><i style={{ background: "var(--mint)" }} />Destacado</span>
      </div>
    </div>
    <Card className="chart-card ig-chart" tilt={0.5}>
      <h4>% de estudiantes por nivel <small>· a la derecha: consolidado + destacado</small></h4>
      <StackBars rows={IMP_GRADOS} keys={KEYS} delay={0.5} />
    </Card>
  </Frame>
);

/* Áreas y comparación nacional */
export const ImpAreas = () => (
  <Frame className="imp-areas">
    <Kicker n="03">IM-Prove · Cómo crecimos durante el año</Kicker>
    <Title size="m">Todas las áreas <em>subieron</em> durante el año.</Title>
    <div className="ia-grid">
      <Card className="chart-card" tilt={-0.5}>
        <h4>Puntaje promedio <small>· EV1 → EV4 (escala 0 a 100)</small></h4>
        <Dumbbells data={IMP_AREAS} min={40} max={85} delay={0.5} unit="" />
        <div className="db-legend"><span><i className="a" />Evaluación 1</span><span><i className="b" />Evaluación 4</span></div>
      </Card>
      <div className="ia-side">
        <Card tone="blue" tilt={2} className="ia-big">
          <Icon name="globe" size={40} />
          <b>+18</b>
          <p><b>Inglés</b> fue el área que más creció: de 61 a 79 puntos.</p>
        </Card>
        <Card tone="mint" tilt={-1.5} className="ia-nac">
          <div className="mini-v"><Counter to={9} delay={1} /><small> de 11</small></div>
          <p>grados por <b>encima del promedio nacional</b> de los colegios IM-Prove.</p>
          <ul>
            {IMP_NACIONAL.map((n) => <li key={n.g}><b>{n.g}</b> +{String(n.v).replace(".", ",")} puntos</li>)}
          </ul>
        </Card>
      </div>
    </div>
  </Frame>
);
