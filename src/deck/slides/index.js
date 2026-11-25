import { Portada, TresVoces } from "./Apertura";
import { BilDivider, BilLogros, BilPromos, BilEscalera } from "./Bilinguismo";
import { VivDivider, VivFavoritos, VivTodo } from "./Vivencias";
import { Logro } from "./Logro";
import { FamDivider, FamSatisfaccion, FamAvances, FamLoMejor } from "./Familias";
import { EstDivider, EstTendencia, EstMejoras, EstValoran } from "./Estudiantes";
import { PidenDivider, PidenFamilias, PidenEstudiantes } from "./Piden";
import { Balance, Metas, Gracias } from "./Cierre";

// Orden: bilingüismo → lo que vivimos → el gran logro → lo que valoran → lo que nos piden → metas 2027 → cierre.
// "section" aparece arriba a la izquierda. "theme" cambia el color de fondo:
// paper (papel), blue, coral, mint, sun, lilac o night. Para reordenar, mover líneas.
export const SLIDES = [
  { id: "portada", section: "Inicio", theme: "paper", Component: Portada },
  { id: "voces", section: "Inicio", theme: "paper", Component: TresVoces },

  { id: "bil", section: "Bilingüismo", theme: "blue", Component: BilDivider },
  { id: "bil-logros", section: "Bilingüismo", theme: "paper", Component: BilLogros },
  { id: "bil-promos", section: "Bilingüismo", theme: "paper", Component: BilPromos },
  { id: "bil-escalera", section: "Bilingüismo", theme: "paper", Component: BilEscalera },

  { id: "viv", section: "Lo que vivimos", theme: "lilac", Component: VivDivider },
  { id: "viv-fav", section: "Lo que vivimos", theme: "paper", Component: VivFavoritos },
  { id: "viv-todo", section: "Lo que vivimos", theme: "paper", Component: VivTodo },

  { id: "logro", section: "Nuestro mayor logro", theme: "night", Component: Logro },

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
