# Café Nido

## Plan de Implementación

> **Buen café, gran café.**

| Campo | Valor |
|---|---|
| Versión del plan | 0.1 |
| Estado | Planificación |
| Plataforma objetivo | Web (PC, tablet y móvil) + PWA |
| Motor | Phaser 3 + React + TypeScript |
| Estilo | Pixel art retro kawaii, paleta sakura |
| Fecha | 2026-11-02 |

---

## 1. Resumen ejecutivo

**Café Nido** es un simulador cozy de cafetería protagonizado por 10 personajes animales. Cada día recibes 5 pedidos, preparas recetas paso a paso y, al cerrar, revisas ganancias y compras ingredientes nuevos.

No hay cronómetro ni derrota. El reto está en la calidad, la presentación y la relación con los clientes.

**Sesión objetivo:** 5–10 minutos por día de juego.
**Público:** jugadores casuales, amantes de lo cozy, pixel art y juegos de cocina.
**Diferenciador:** una interfaz tratada como parte del juego, no como un menú funcional.

---

## 2. Visión

Convertir el ritual de preparar una bebida o un postre en una experiencia táctil, adorable y satisfactoria, con una identidad visual sakura retro muy reconocible.

La fantasía central: *"mi cafetería es un refugio pequeño y cálido, y cada animalito que entra es alguien a quien quiero atender bien"*.

---

## 3. Pilares y anti-pilares

### Pilares

1. **Ritual, no prisa.** Cocinar se siente bien: vapor, chispas, sonidos, animaciones.
2. **UI protagonista.** La interfaz es parte del encanto y del gameplay.
3. **Kawaii retro coherente.** Todo comparte paleta, rejilla y reglas visuales.
4. **Un cliente a la vez.** Pocas decisiones por pantalla; cero abrumar.
5. **Web-first y responsive.** Debe sentirse bien con mouse, teclado y dedo.

### Anti-pilares (lo que el juego NO será)

- No contrarreloj.
- No game over.
- No gestión frenética tipo *Overcooked*.
- No gacha, energía ni misiones diarias obligatorias.
- No multijugador.
- No 3D.
- No texto pequeño ilegible.

---

## 4. Alcance

### 4.1 MVP

- Portada funcional.
- Un día completo con 5 pedidos.
- 3 personajes.
- 5 recetas.
- 3 estaciones de cocina.
- Resumen nocturno.
- Tienda básica de ingredientes.
- Guardado local.
- Responsive PC y móvil.

### 4.2 Vertical slice

- 5 personajes.
- 8 recetas.
- 10 ingredientes.
- Progresión de 3 días.
- UI pulida y animada.
- Audio placeholder.
- PWA instalable.
- Guardado versionado.

### 4.3 Versión 1.0

- 10 personajes con amistad y diálogos.
- 20+ recetas.
- 15+ ingredientes.
- 10+ días de progresión.
- Decoración de la cafetería.
- Arte y audio finales.
- Español e inglés.
- Accesibilidad completa.

### 4.4 Fuera de alcance para 1.0

- Multijugador.
- 3D.
- Editor de mods.
- Logros online.
- Más de dos idiomas.

---

## 5. Bucle de juego

### 5.1 Día

```
Intro del día
  → 5 pedidos (uno a uno, sin cronómetro)
  → Cierre de tienda
  → Resumen nocturno (ganancias, propinas, estrellas, gastos)
  → Tienda (ingredientes, equipo, decoración)
  → Guardado automático
  → Siguiente día
```

### 5.2 Pedido

```
Personaje entra
  → Burbuja de pedido
  → Ticket de pedido
  → Recetario
  → Estación de mezcla
  → Horno
  → Emplatado / decoración
  → Servir
  → Reacción del personaje
  → Recompensa (monedas, estrellas, amistad)
```

### 5.3 Reglas de estrés

- No existe temporizador visible.
- El ánimo del personaje baja lentamente solo si se le ignora mucho tiempo.
- Si se va, vuelve otro día; no hay penalización permanente.
- La calidad se mide por precisión y presentación, no por velocidad.
- El jugador puede cerrar la tienda antes de los 5 pedidos si quiere.

---

## 6. Contenido inicial

### 6.1 Personajes

| Personaje | Especie | Rasgo | Pedido favorito |
|---|---|---|---|
| Mochi | Gata | Glotona y cariñosa | Dona de chocolate |
| Pan | Perrito | Tímido | Pan dulce |
| Luna | Coneja | Nocturna | Café con leche |
| Kiko | Zorrita | Curiosa | Galletas |
| Bruno | Osito | Dormilón | Chocolate caliente |
| Yumi | Panda | Artista | Matcha latte |
| Roco | Ranita | Nervioso | Té de frutas |
| Pío | Pajarito | Cantor | Muffin |
| Nuez | Hámster | Coleccionista | Postre de nuez |
| Capi | Capibara | Zen | Infusión relajante |

### 6.2 Recetas iniciales

| Receta | Ingredientes | Estaciones | Desbloqueo |
|---|---|---|---|
| Dona de chocolate | Masa, chocolate, azúcar | Mezcla, horno, emplatado | Inicio |
| Café con leche | Café, leche, azúcar | Cafetera, emplatado | Inicio |
| Pan dulce | Masa, azúcar, mantequilla | Mezcla, horno | Día 1 |
| Galleta de sakura | Masa, mantequilla, sakura | Mezcla, horno | Día 2 |
| Chocolate caliente | Chocolate, leche, canela | Cafetera, emplatado | Día 2 |
| Matcha latte | Matcha, leche, azúcar | Cafetera, emplatado | Día 3 |
| Té de frutas | Té, fruta, miel | Cafetera, emplatado | Día 3 |
| Muffin | Masa, fruta, azúcar | Mezcla, horno | Día 4 |
| Postre de nuez | Masa, nuez, miel | Mezcla, horno, emplatado | Día 5 |
| Infusión zen | Hierba, miel, agua | Cafetera, emplatado | Día 5 |

### 6.3 Ingredientes por nivel

- **Nivel 1:** masa, chocolate, azúcar, café, leche.
- **Nivel 2:** mantequilla, sakura, canela, fruta.
- **Nivel 3:** matcha, té, miel, nuez, hierba.

---

## 7. Dirección de arte y UI

### 7.1 Paleta

| Color | Hex | Uso |
|---|---|---|
| Sakura | `#FFB7C5` | Fondos, acentos |
| Rosa profundo | `#E85D75` | Botones, énfasis |
| Crema | `#FFF5E1` | Paneles, texto claro |
| Matcha | `#A8C686` | Éxito, naturaleza |
| Café | `#6B4F3A` | Texto, madera |
| Noche | `#2E2430` | Pantallas nocturnas |
| Dorado | `#F2C14E` | Monedas, estrellas |
| Blanco hueso | `#FFFDF7` | Fondo base |

### 7.2 Tipografía

- Títulos: fuente pixel legible (Pixelify Sans o similar).
- Etiquetas: fuente pixel condensada (Silkscreen o similar).
- Texto largo: fuente redondeada legible (Nunito o similar).
- Tamaño mínimo de texto: 14 px en móvil, 16 px en PC.

### 7.3 Pantallas

1. Portada.
2. Selección de partida.
3. Intro del día.
4. Cafetería (HUD principal).
5. Ticket de pedido.
6. Recetario.
7. Estación de mezcla.
8. Horno.
9. Emplatado.
10. Resumen nocturno.
11. Tienda.
12. Ajustes.
13. Créditos.

### 7.4 Reglas de UI

- Rejilla base de 8 px.
- Bordes de 4 px y sombras duras de 4 px.
- Esquinas rectas o de 2 px.
- Iconos de 16 y 24 px dibujados a mano.
- Animaciones de 120–250 ms con easing tipo `steps()`.
- Estados de botón: normal, hover, presionado, deshabilitado, comprado.
- Nunca usar emojis del sistema como iconos.

### 7.5 Responsive

- Diseño base vertical para móvil.
- Adaptación horizontal para PC y tablet.
- Zonas seguras para notch y barras del navegador.
- Botones táctiles de mínimo 44 px.
- La UI se reordena; no se encoge hasta ser ilegible.

### 7.6 Accesibilidad

- Reducir movimiento.
- Escalar texto.
- Sonido y música independientes.
- Contraste mínimo AA.
- Navegación por teclado en PC.
- Sin dependencia exclusiva del color.

### 7.7 Audio

- Música cozy en bucle por momento del día.
- Efectos cortos para cada acción.
- Sonido distintivo por estación.
- Mezcla de audio separada: música, efectos, interfaz.

---

## 8. Stack técnico

| Capa | Tecnología | Motivo |
|---|---|---|
| Juego | Phaser 3 | 2D, sprites, animaciones, cámara, WebGL/Canvas |
| UI | React + TypeScript | Componentes, estado, pantallas complejas |
| Bundler | Vite | Rápido y simple |
| Estado | Zustand | Ligero y predecible |
| Audio | Howler.js | Control de audio multiplataforma |
| Estilos | CSS con variables | Design tokens y responsive |
| Datos | JSON | Recetas, personajes, diálogos |
| Guardado | localStorage → IndexedDB | Simple al inicio, escalable después |
| PWA | Manifest + Service Worker | Instalación y offline |
| Tests | Vitest + Playwright | Lógica y flujos |
| Deploy | Vercel / Netlify / itch.io | Distribución web |

### 8.1 Estructura de carpetas propuesta

```
Cafeteria/
├── public/
│   ├── assets/
│   │   ├── sprites/
│   │   ├── ui/
│   │   ├── audio/
│   │   └── fonts/
│   └── manifest.webmanifest
├── src/
│   ├── game/
│   │   ├── scenes/
│   │   ├── systems/
│   │   ├── entities/
│   │   └── input/
│   ├── ui/
│   │   ├── screens/
│   │   ├── components/
│   │   └── theme/
│   ├── data/
│   │   ├── recipes.json
│   │   ├── characters.json
│   │   └── dialogue.json
│   ├── state/
│   ├── services/
│   │   ├── save.ts
│   │   ├── audio.ts
│   │   └── analytics.ts
│   ├── styles/
│   └── main.ts
├── tests/
├── PLAN.md
└── package.json
```

### 8.2 Arquitectura

- Phaser renderiza la escena de la cafetería y las animaciones.
- React renderiza la UI superpuesta (menús, tickets, recetario, tienda).
- Un puente de eventos comunica Phaser y React.
- Zustand guarda el estado global: día, pedidos, monedas, estrellas, progreso.
- Los datos de contenido viven en JSON y se validan al cargar.
- El guardado es versionado para permitir migraciones.

### 8.3 Modelo de datos

**Receta:**

```json
{
  "id": "dona_chocolate",
  "name": "Dona de chocolate",
  "ingredients": ["masa", "chocolate", "azucar"],
  "stations": ["mix", "oven", "plate"],
  "difficulty": 1,
  "unlockDay": 1,
  "basePrice": 12,
  "qualityCurve": "normal"
}
```

**Personaje:**

```json
{
  "id": "mochi",
  "name": "Mochi",
  "species": "gata",
  "personality": "glotona",
  "favoriteRecipe": "dona_chocolate",
  "dialogueSet": "mochi",
  "unlockDay": 1
}
```

**Guardado:**

```json
{
  "version": 1,
  "day": 3,
  "coins": 45,
  "stars": 12,
  "ingredients": ["masa", "chocolate", "azucar", "cafe"],
  "unlockedRecipes": ["dona_chocolate", "cafe_leche"],
  "friendship": { "mochi": 2, "pan": 1 },
  "settings": { "music": 0.7, "sfx": 0.9, "reducedMotion": false }
}
```

---

## 9. Plan por fases

> Estimaciones para 1 desarrollador a tiempo completo con arte placeholder. Ajustar si el trabajo es a tiempo parcial o si se suma un artista.

### Fase 0 — Preproducción

**Duración:** 1–2 semanas
**Objetivo:** cerrar la visión y reducir incertidumbre antes de programar.

Tareas:

- [ ] Documento de diseño (GDD) v1.
- [ ] Moodboard visual sakura retro.
- [ ] Paleta y tipografías definitivas.
- [ ] Wireframes de las 13 pantallas.
- [ ] Prototipo clickeable en Figma.
- [ ] Definir las 5 recetas del MVP.
- [ ] Definir los 3 personajes del MVP.
- [ ] Revisar disponibilidad del nombre "Café Nido".

**Entregables:** GDD, moodboard, wireframes, prototipo navegable.
**Criterio de aceptación:** una persona externa entiende el juego en menos de 2 minutos.

### Fase 1 — Prototipo jugable

**Duración:** 2–3 semanas
**Objetivo:** probar el bucle completo con placeholders.

Tareas:

- [ ] Configurar repositorio, Vite, TypeScript, Phaser y React.
- [ ] Puente Phaser–React.
- [ ] Escena de cafetería con un personaje.
- [ ] Ticket de pedido.
- [ ] Recetario con una receta.
- [ ] Estación de mezcla.
- [ ] Horno con mini-juego de precisión.
- [ ] Emplatado y servir.
- [ ] Reacción del personaje.
- [ ] Contador de monedas y estrellas.
- [ ] Cierre de día y resumen básico.

**Entregables:** prototipo web jugable con una dona completa.
**Criterio de aceptación:** el bucle se puede jugar de principio a fin sin errores bloqueantes y resulta comprensible.

### Fase 2 — Vertical slice

**Duración:** 4–6 semanas
**Objetivo:** demostrar la calidad final en una porción pequeña.

Tareas:

- [ ] 5 personajes con personalidad y diálogos.
- [ ] 8 recetas y 10 ingredientes.
- [ ] 3 estaciones pulidas.
- [ ] Progresión de 3 días.
- [ ] Resumen nocturno completo.
- [ ] Tienda de ingredientes y equipo.
- [ ] Guardado y carga.
- [ ] Design system implementado.
- [ ] Animaciones y "juice".
- [ ] Responsive PC, tablet y móvil.
- [ ] Audio placeholder.
- [ ] PWA instalable.
- [ ] Pruebas con 5–10 personas.

**Entregables:** build web pública del vertical slice.
**Criterio de aceptación:** la gente quiere jugar un día más y entiende la tienda y el progreso sin explicación.

### Fase 3 — Producción

**Duración:** 8–12 semanas
**Objetivo:** completar el contenido y los sistemas del 1.0.

Tareas:

- [ ] 10 personajes con amistad y arcos.
- [ ] 20+ recetas.
- [ ] 15+ ingredientes.
- [ ] 10+ días de progresión.
- [ ] Decoración de la cafetería.
- [ ] Tienda ampliada.
- [ ] Diálogos y pequeñas historias.
- [ ] Colección de recetas y personajes.
- [ ] Balance económico.
- [ ] Arte final.
- [ ] Música y efectos finales.
- [ ] Español e inglés.

**Entregables:** versión beta completa.
**Criterio de aceptación:** contenido suficiente para 2–3 horas de juego sin repetir recetas.

### Fase 4 — Pulido y lanzamiento

**Duración:** 3–4 semanas
**Objetivo:** optimizar, probar y publicar.

Tareas:

- [ ] Optimización de rendimiento móvil.
- [ ] Accesibilidad completa.
- [ ] Pruebas en dispositivos reales.
- [ ] Corrección de bugs.
- [ ] Ajustes de balance finales.
- [ ] PWA y modo offline.
- [ ] Analítica respetuosa con la privacidad.
- [ ] Página de itch.io / tienda.
- [ ] Tráiler y capturas.
- [ ] Lanzamiento.

**Entregables:** versión 1.0 publicada.
**Criterio de aceptación:** funciona en Chrome, Safari y Firefox; instalable en móvil; sin errores críticos conocidos.

---

## 10. Backlog por épicas

### EPIC 1 — Núcleo del juego

- Historia: como jugador quiero recibir un pedido y prepararlo para ganar recompensas.
- Tareas: cliente, pedido, receta, estaciones, calidad, servir, recompensa.

### EPIC 2 — Interfaz

- Historia: como jugador quiero una interfaz clara y bonita que me guíe sin abrumarme.
- Tareas: design tokens, componentes, pantallas, transiciones, responsive, accesibilidad.

### EPIC 3 — Contenido

- Historia: como jugador quiero descubrir recetas y personajes nuevos.
- Tareas: recetas, ingredientes, personajes, diálogos, desbloqueos.

### EPIC 4 — Progresión

- Historia: como jugador quiero que mis días tengan consecuencias y mejoras.
- Tareas: economía, estrellas, amistad, tienda, días, guardado.

### EPIC 5 — Presentación

- Historia: como jugador quiero que el juego se sienta vivo y adorable.
- Tareas: animaciones, partículas, audio, arte final, juice.

### EPIC 6 — Plataforma

- Historia: como jugador quiero jugar en cualquier dispositivo sin fricción.
- Tareas: PWA, rendimiento, offline, guardado, analítica, deploy.

---

## 11. Testing y QA

### Automatizado

- **Vitest:** lógica de recetas, economía, calidad y guardado.
- **Playwright:** flujo completo de un día, compra en tienda y guardado.
- **Validación de datos:** esquemas JSON al cargar.

### Manual

- Matriz de dispositivos: PC Windows, Mac, Android gama media, iPhone, iPad.
- Navegadores: Chrome, Safari, Firefox, Edge.
- Pruebas de orientación: vertical y horizontal.
- Pruebas de accesibilidad: teclado, lector de pantalla básico, contraste.
- Playtests con 5–10 personas por fase.

### Definition of Done

Una tarea está terminada cuando:

- Funciona en PC y móvil.
- Tiene estados de error y vacío.
- Pasa tests automatizados.
- Fue revisada visualmente contra el design system.
- No introduce errores de consola.
- Está documentada si afecta datos o guardado.

---

## 12. Deployment

| Entorno | Uso | Plataforma |
|---|---|---|
| Local | Desarrollo | Vite dev server |
| Preview | Pruebas internas | Vercel / Netlify |
| Producción | Lanzamiento | Vercel / Netlify / itch.io |

- CI en cada push: lint, typecheck, tests y build.
- Versionado semántico.
- Guardado con migraciones por versión.
- Analítica opcional y anónima; nunca datos personales.

---

## 13. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Scope creep | Alto | Cerrar el vertical slice y no añadir sistemas hasta terminarlo |
| Arte placeholder inconsistente | Medio | Usar una paleta única desde el día uno |
| UI responsive costosa | Alto | Prototipar en Figma y probar en móvil cada semana |
| Balance aburrido | Alto | Playtests tempranos y ajustar ánimo/precios |
| Rendimiento móvil | Medio | Límite de partículas, sprites atlas, pruebas en gama media |
| Guardado corrupto | Medio | Validación, versionado y respaldo local |
| Nombre registrado | Bajo | Comprobar itch.io, Steam, dominio y redes antes de publicar |

---

## 14. Métricas de éxito

### Prototipo

- El jugador completa un pedido sin ayuda.
- El jugador entiende que no hay cronómetro.
- El jugador quiere repetir.

### Vertical slice

- 70% de testers completa los 3 días.
- 50% compra algo en la tienda por decisión propia.
- La mayoría describe el juego como "cozy" o "tierno".

### Lanzamiento

- Tiempo medio de sesión de 10+ minutos.
- Tasa de instalación PWA razonable para el nicho.
- Reseñas mencionan la UI y el estilo visual.

---

## 15. Decisiones abiertas

- [ ] Modelo de negocio: pago único, gratis con cosméticos o demo + versión completa.
- [ ] Idiomas: español, inglés o ambos desde el inicio.
- [ ] Equipo: solo desarrollador o con artista/músico.
- [ ] Arte final: hecho a mano, generado con IA o contratado.
- [ ] Mini-juego del horno: rítmico ("buen café, gran café") o de precisión simple.
- [ ] Cantidad de días de la campaña 1.0.
- [ ] ¿Habrá final o es infinito con progresión?

---

## 16. Próximos pasos inmediatos

1. Aprobar este plan.
2. Crear el GDD v1 con el detalle narrativo y de sistemas.
3. Diseñar los wireframes de la portada, HUD, ticket y resumen nocturno.
4. Definir el design system visual en Figma.
5. Configurar el repositorio y el esqueleto técnico (solo cuando se autorice).
6. Construir el prototipo de la dona.

---

*Este documento es un plan vivo. Se actualizará al cerrar cada fase.*
