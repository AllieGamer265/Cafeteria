# Café Nido

> **Buen café, gran café.**

Simulador cozy de cafetería protagonizado por animales. Recibes pedidos, preparas recetas paso a paso y, al cerrar el día, revisas ganancias y compras ingredientes nuevos. Sin cronómetro, sin game over: el reto está en la calidad, la presentación y la relación con los clientes.

## Estado

Proyecto en desarrollo. La pantalla de preparación está en proceso de rediseño hacia una **mesa de construcción** (masa + ingredientes + horno + cajita). Ver [`docs/MEMORIA_Y_PLAN_COCINA.md`](docs/MEMORIA_Y_PLAN_COCINA.md).

## Stack

- React 18 + TypeScript
- Vite
- CSS con design tokens
- Estado con `useReducer`
- Guardado en `localStorage`

## Requisitos

- Node.js 18+
- npm

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (Vite)
npm run build    # typecheck + build de producción
npm run preview  # previsualizar el build
npm run typecheck # solo comprobación de tipos
```

## Estructura

```
Cafeteria/
├── docs/
│   └── MEMORIA_Y_PLAN_COCINA.md  # memoria y plan del rediseño de cocina
├── src/
│   ├── App.tsx                   # orquesta las pantallas
│   ├── types.ts                  # tipos del juego
│   ├── components/               # UI (cocina, ticket, recetario, tienda...)
│   ├── data/                     # personajes, recetas, tienda
│   ├── state/                    # reducer y guardado
│   ├── services/                 # audio
│   └── styles/                   # tokens y estilos globales
├── DESIGN_SYSTEM.md              # reglas visuales
├── PLAN.md                       # plan general del juego
└── package.json
```

## Bucle de juego

1. Portada → Iniciar juego.
2. El cliente animal pide una receta.
3. Preparas el pedido (ensamblaje → horno → acabado).
4. Entregas y recibes monedas y estrellas.
5. Resumen nocturno y tienda.
6. Guardado automático → siguiente día.

## Contenido actual

- 10 personajes animales con personalidad, saludo y reacciones.
- 10 recetas (postres, panadería y bebidas).
- Tienda de ingredientes, equipo y decoración.
- 5 pedidos por día, sin cronómetro.

## Documentación

- [`PLAN.md`](PLAN.md) — plan completo por fases.
- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) — paleta, tipografía y reglas de UI.
- [`docs/MEMORIA_Y_PLAN_COCINA.md`](docs/MEMORIA_Y_PLAN_COCINA.md) — memoria de la conversación y especificación del rediseño de la cocina.

## Convenciones

- Español para textos de interfaz.
- Rejilla base de 8 px, bordes de 4 px y sombras duras.
- Nunca usar emojis del sistema como iconos.
- Respetar `reducedMotion` y las áreas táctiles mínimas de 44 px.
