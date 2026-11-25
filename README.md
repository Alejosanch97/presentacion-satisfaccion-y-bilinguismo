# CREAR 2026 · Un año que se escucha

Presentación animada (React + Vite + Framer Motion) con el balance 2026 del Instituto Pedagógico CREAR:
bilingüismo, extracurriculares, la certificación bilingüe, encuesta de familias, encuesta de estudiantes, lo que nos piden y las metas 2027.

## Cómo correrla

```bash
npm install
npm run dev
```

Se abre en http://localhost:3000.

## Cómo presentar

- Clic o `Enter` para empezar (cuenta regresiva 3·2·1 y escudo).
- `→`, `Espacio` o clic para avanzar; `←` para devolver.
- `F` para pantalla completa. `Inicio` / `Fin` para ir al primer o último slide.
- Las barras de arriba permiten saltar a cualquier slide.

## Escudo

La presentación carga el escudo desde internet. Para usarlo sin conexión, guarda la imagen como
`public/escudo.jpg` y se usará automáticamente.

## Dónde editar

- `src/deck/slides/index.js`: orden de los slides y color de fondo de cada uno (`theme`).
- `src/deck/slides/*.jsx`: contenido de cada sección.
- `src/deck/data.js`: cifras de las gráficas.
- `src/index.css`: paleta de colores.
