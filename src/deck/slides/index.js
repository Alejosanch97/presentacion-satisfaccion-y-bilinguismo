import { Portada, TresVoces } from "./Apertura";
import { BilDivider, BilLogros, BilPromos, BilEscalera } from "./Bilinguismo";
import { ProgDivider, ProgPolaris, ProgGrados, ProgDistinciones } from "./Progrentis";
import { ImpDivider, ImpGrados, ImpAreas } from "./Improve";
import { MejorCurso } from "./MejorCurso";
import { FinFluent, Saber11 } from "./Hitos";
import { TechDivider, TechPathways, TechLogros } from "./Robotica";
import { Aprobacion } from "./Aprobacion";
import { VivDivider, VivFavoritos, VivTodo } from "./Vivencias";
import { Logro } from "./Logro";
import { FamDivider, FamSatisfaccion, FamAvances, FamLoMejor } from "./Familias";
import { EstDivider, EstTendencia, EstMejoras, EstValoran } from "./Estudiantes";
import { PidenDivider, PidenFamilias, PidenEstudiantes } from "./Piden";
import { Balance, Metas, Gracias } from "./Cierre";

// Orden: bilingüismo → Progrentis → IM-Prove → mejores cursos → lo que vivimos → el gran logro → lo que valoran → lo que nos piden → metas 2027 → cierre.
// "section" aparece arriba a la izquierda. "theme" cambia el color de fondo:
// paper (papel), blue, teal, sky, coral, mint, sun, lilac o night. Para reordenar, mover líneas.
export const SLIDES = [
  { id: "portada", section: "Inicio", theme: "paper", Component: Portada },
  { id: "voces", section: "Inicio", theme: "paper", Component: TresVoces },

  { id: "bil", section: "Bilingüismo", theme: "blue", Component: BilDivider },
  { id: "bil-logros", section: "Bilingüismo", theme: "paper", Component: BilLogros },
  { id: "bil-promos", section: "Bilingüismo", theme: "paper", Component: BilPromos },
  { id: "bil-escalera", section: "Bilingüismo", theme: "paper", Component: BilEscalera },

  { id: "finfluent", section: "Bilingüismo", theme: "paper", Component: FinFluent },

  { id: "prog", section: "Progrentis", theme: "teal", Component: ProgDivider },
  { id: "prog-polaris", section: "Progrentis", theme: "paper", Component: ProgPolaris },
  { id: "prog-grados", section: "Progrentis", theme: "paper", Component: ProgGrados },
  { id: "prog-dist", section: "Progrentis", theme: "paper", Component: ProgDistinciones },

  { id: "imp", section: "IM-Prove", theme: "night", Component: ImpDivider },
  { id: "imp-grados", section: "IM-Prove", theme: "paper", Component: ImpGrados },
  { id: "imp-areas", section: "IM-Prove", theme: "paper", Component: ImpAreas },

  { id: "mejor", section: "Mejores cursos", theme: "paper", Component: MejorCurso },
  { id: "aprobacion", section: "Cierre académico", theme: "paper", Component: Aprobacion },

  { id: "viv", section: "Lo que vivimos", theme: "lilac", Component: VivDivider },
  { id: "viv-fav", section: "Lo que vivimos", theme: "paper", Component: VivFavoritos },
  { id: "viv-todo", section: "Lo que vivimos", theme: "paper", Component: VivTodo },

  { id: "saber11", section: "Saber 11", theme: "blue", Component: Saber11 },

  { id: "logro", section: "Nuestro mayor logro", theme: "night", Component: Logro },

  { id: "tech-div", section: "Robótica e IA", theme: "sky", Component: TechDivider },
  { id: "tech", section: "Robótica e IA", theme: "paper", Component: TechPathways },
  { id: "tech-logros", section: "Robótica e IA", theme: "paper", Component: TechLogros },

  { id: "fam", section: "Familias", theme: "coral", Component: FamDivider },
  { id: "fam-sat", section: "Familias", theme: "paper", Component: FamSatisfaccion },
  { id: "fam-av", section: "Familias", theme: "paper", Component: FamAvances },
  { id: "fam-best", section: "Familias", theme: "paper", Component: FamLoMejor },

  { id: "est", section: "Estudiantes", theme: "mint", Component: EstDivider },
  { id: "est-trend", section: "Estudiantes", theme: "paper", Component: EstTendencia },
  { id: "est-mej", section: "Estudiantes", theme: "paper", Component: EstMejoras },
  { id: "est-val", section: "Estudiantes", theme: "paper", Component: EstValoran },

  { id: "piden", section: "Lo que nos piden", theme: "sun", Component: PidenDivider },
  { id: "piden-fam", section: "Lo que nos piden", theme: "paper", Component: PidenFamilias },
  { id: "piden-est", section: "Lo que nos piden", theme: "paper", Component: PidenEstudiantes },

  { id: "balance", section: "Balance", theme: "paper", Component: Balance },
  { id: "metas", section: "Metas 2027", theme: "paper", Component: Metas },
  { id: "gracias", section: "Gracias", theme: "blue", Component: Gracias },
];
