# MEMORIA Y PLAN — Rediseño de la zona de cocina

> **Proyecto:** Café Nido («Buen café, gran café»)
> **Archivo:** `docs/MEMORIA_Y_PLAN_COCINA.md`
> **Versión del documento:** 1.1
> **Fecha:** 2026-11-04
> **Estado:** **Fases 1 y 2 implementadas — Fase 3 pendiente de aprobación**
> **Propósito:** Fuente de verdad del rediseño de la preparación de pedidos. Contiene la memoria literal de la conversación, la especificación completa, la estructura técnica propuesta, las fases y una bitácora para ir registrando cada cambio.

---

## 0. Instrucción crítica para cualquier IA o desarrollador

**NO construir ni modificar código hasta que el usuario lo autorice explícitamente.**

El usuario pidió expresamente:

> «Y no vayas a construir hasta que yo te diga.»

Este documento existe para que cualquier IA (u otra hija, como dice el usuario) pueda retomar el proyecto con todo el contexto. Antes de tocar código:

1. Leer este archivo completo.
2. Revisar el estado actual del proyecto (sección 10).
3. Confirmar con el usuario que se puede empezar y por qué fase.
4. Registrar cada avance en la bitácora (sección 8).

---

## 1. Memoria de la conversación (transcripción)

> Se conservan los mensajes del usuario de forma literal, incluidas faltas de ortografía y expresiones habladas, para no perder matices ni intención. Los turnos del asistente se resumen al final de cada bloque.

### Turno 1 — Usuario

> «Quiero una reorganizacion en la parte en donde vas a prepara ubicas eb juego buena pizza gran pizza?»

**Interpretación:** el usuario pregunta por la parte donde se prepara la comida en el juego. «Buena pizza gran pizza» es una forma hablada/confundida de la frase del proyecto: **«Buen café, gran café»**. El juego es **Café Nido**, no un juego de pizza.

**Respuesta del asistente (resumen):** se cargó la skill `alicewiki`, se exploró el proyecto `Cafeteria` (React + TypeScript + Vite) y se localizó la pantalla de preparación en `src/components/CookingStation.tsx`. Se preguntó qué tipo de reorganización quería.

---

### Turno 2 — Usuario (respuesta a la pregunta del asistente)

> «No es un juego real lo ubicas? bueno su estruQuiero que la estructura de buena pizza gran pizza en el momento en el que tú cocinas te pide. Que tú pongas, o sea, tienes como 3 cuadritos en la parte superior de tu pantalla, ahí tienes los ingredientes, por ejemplo, y en la parte de un lado tienes una masa, tomas la masa, la pones en tu mesa de trabajo y después no, después, por ejemplo, me piden chocolate, presiono el chocolate y lo pongo, entonces ya se cubre el chocolate. Después de eso tomo en la dona o lo que me están pidiendo y lo paso al horno, quiero que todo tenga un animal y una estética maravillosa. Me encanta cómo está todo organizado, pero quiero mejorar esta parte de la construcción, quiero que sea esta parte de tienes 3 cuadritos en la parte superior con 3 ingredientes básicos, no se chocolate, chispas y otra azúcar, no sé en la parte de un lado tienes un 6 masas, tomas una masa, la pones en tu mesa de trabajo y te tiene que aparecer el pedido en la parte superior de hasta arriba, en la parte superior para que en caso de que se te olvide lo que te están pidiendo.»

**Ideas clave de este turno:**

- La pantalla de cocina debe sentirse como una **mesa de construcción**.
- Arriba: **3 cuadritos** con los ingredientes.
- A un lado: una **pila de 6 masas**.
- Tomas una masa y la pones en la **mesa de trabajo**.
- Presionas un ingrediente (ej. chocolate) y se coloca encima; el chocolate **cubre** la masa.
- Luego tomas la dona (o lo pedido) y la pasas al **horno**.
- El **pedido debe quedar visible arriba de todo**, para no olvidar qué se está preparando.
- Todo debe tener **un animal** y una **estética maravillosa**.

**Respuesta del asistente (resumen):** se propuso rehacer `CookingStation` como mesa de construcción, con pedido fijo arriba, estante de ingredientes, pila de masas, mesa de trabajo, horno, emplatado y componentes separados. Se hicieron 3 preguntas (interacción, masas, alcance).

---

### Turno 3 — Usuario

> «Dame las preguntas por aquí, por favor, es que no, no puedo contestarlas»

**Motivo:** el usuario no podía usar la interfaz interactiva de preguntas. Se le mostraron las preguntas en texto plano:

1. **Interacción:** A) Tocar/click, B) Arrastrar y soltar, C) Ambos.
2. **Las 6 masas:** A) Decorativas/infinitas, B) Stock limitado.
3. **Alcance:** A) Solo postres y panadería, B) Todas las recetas, C) Solo la dona.

---

### Turno 4 — Usuario (respuestas y ampliación)

> «Interacción ambos, por favor sobre las 6:00 H mas casas cambia las 6 masas, perdón, depende este, por ejemplo, van a estar decorativas y tú vas a tomar, no sé, me pidieron un pedido, tomo la masa, la pongo, pero cuando ya se acaban las 6 se rellenan automáticamente con una animación suave como de algo satisfactorio sobre el alcance es diferente Quiero tener iniciar con 10 recetas, no sé, pero que iniciar, por ejemplo, que en el primer día, que son 5 pedidos, me pidan 5 pedidos con 3 ingredientes, nada más. Después, en el segundo día me van a regalar un ingrediente, va a llegar un desconocido o un cliente y me va a pedir algo de un ingrediente que yo no tengo, entonces eso me va a obligar a comprarlo en la tienda en la noche, quiero animaciones suaves, entonces quiero primero tengo 3 cubículos con 3 ingredientes día siguiente, sigo teniendo 3 cubículos y me llega una persona pidiéndome una receta que con un ingrediente que yo tengo, ya sea, no sé una dona confirtada con chispas de colores, no sé ejemplo. Y yo no tengo chispas de chocola, digo Yo no tengo chispas de de confitada, entonces eso me obliga que ese día en la noche compre. ¿Eh? Chispas confitadas. Entonces esto irá haciendo que vayas aumentando ahora en el mismo, en los primeros 3 cuadritos, ahora se agrega otro cuadrito donde ahora están las chispas confitadas. Me explico, quiero una estructura perfecta, quiero iniciar por ahí y después podemos ir avanzando viendo si ahora implementamos cafés.»

**Decisiones tomadas:**

- **Interacción:** **ambos** — arrastrar y soltar en PC + tocar en móvil.
- **Las 6 masas:** son **decorativas**. No son un recurso limitado que bloquee. Se toman y, cuando se acaban las 6, se **rellenan automáticamente con una animación suave y satisfactoria**.
- **Progresión de ingredientes:**
  - Empezar con **10 recetas** (idea inicial, sujeta a ajuste).
  - **Día 1:** 5 pedidos, cada uno con **3 ingredientes** como máximo.
  - **Día 2:** te regalan un ingrediente; llega un **cliente desconocido** y pide algo con un ingrediente que **no tienes**. Eso obliga a comprarlo en la **tienda de noche**.
  - Ejemplo: dona confitada con **chispas de colores / chispas confitadas**; no las tienes → debes comprarlas.
  - Al comprarlo, se **agrega un cuarto cuadrito** al estante (junto a los 3 originales) con ese ingrediente.
  - La progresión va ampliando el estante con nuevos ingredientes.
- **Animaciones:** suaves.
- **Estructura:** «perfecta»; empezar por esta base y luego avanzar (más adelante, cafés).

**Respuesta del asistente (resumen):** se presentó un plan refinado en 3 fases (mesa de construcción, ingredientes dinámicos, cliente desconocido) y se preguntó si arrancar por la Fase 1.

---

### Turno 5 — Usuario (aclaración del flujo de pantallas)

> «No sobre el pedido, no, primero me en la primera diapositiva te va a preguntar, no estás listo para jugar iniciar juego iniciar juego primero ves a una persona pidiéndote, quiero una de chocolate. Después le das OKO, acepto el reto o como tú quieras o dame más información si quieres más información, te va a especificar específicamente cómo lo tienes a hacer si eres nuevo en el juego, pero bueno, después de eso seguimos después de lo que estaría haciendo eso se cambia suave, suavemente a la página OA la fase donde es totalmente se vuelve totalmente tu pantalla, la zona de cocina. ¿Esto qué significa? Ya inicia queso justamente donde están los primeros 3 recuadros donde van a estar las primeras 3 comidas. A la dul de la posición la masa, etcétera, pero cambia después voy a pasar la dona, o sea, en la misma parte. Haz de cuenta que se va a hacer un poquito de scroll automático porque voy a arrastrar o voy a poner mi masa en el horno. Quiero animación de un horno tranquilo como que se mueva suavecito. Después de eso me va a mandar a una mesa ya después, como al o sea, son como primero zona donde pones masa pones chocolate y todo eso después horno y después seguimos con la mesa, que es donde opcionalmente si quieres la puedes cortar y la metes a su cajita una vez. Una vez que la metes a su cajita cambia suavemente la diapositiva a donde está el cliente para que se lo entregues al cliente. Te va quedando claro. En resumen, solo quiero primero, no quiero que sea el cliente, o sea, primero tienes al cliente perfecto, cambias de posición inmediatamente, o sea, una vez que le das okay, acepto el reto, cambio OOO, qué y que siga platicando y ya después, OK, entonces ya ahí ya cambia, pero no quiero que se siga viendo el cliente, quiero que ya pasemos a la parte de cocina solamente»

**Ideas clave de este turno (flujo definitivo de pantallas):**

1. **Primera diapositiva / portada:** pregunta si está listo para jugar y ofrece «Iniciar juego».
2. **Escena del cliente:** primero se ve a una persona/animal pidiendo, por ejemplo: «Quiero una de chocolate».
3. **Botones:** «OK» / «Acepto el reto» / «Dame más información».
4. Si elige «Dame más información», se explica específicamente cómo hacerlo (tutorial para nuevos).
5. Al aceptar, la pantalla **cambia suavemente** a la **zona de cocina a pantalla completa**. El cliente **deja de verse**.
6. La cocina inicia justamente en los **primeros 3 recuadros** con los primeros ingredientes (masa, etc.).
7. Hay un **scroll automático suave** dentro de la cocina porque el jugador arrastra/coloca la masa y pasa al **horno**.
8. El horno tiene una **animación tranquila**, que se mueve suavecito.
9. Después del horno se pasa a la **mesa de acabado**, donde **opcionalmente** se puede cortar y meter en su **cajita**.
10. Al meterlo en la cajita, la vista **cambia suavemente de regreso al cliente** para entregarle el pedido.
11. Resumen del usuario: primero el cliente; al aceptar, **cambio inmediato** y **ya no se ve el cliente**; solo la cocina.

**Respuesta del asistente:** se acordó crear este documento, sin construir todavía.

---

### Turno 6 — Usuario (petición de este documento)

> «Quiero que me crees un archivo detallando todo lo que te estoy diciendo, súper importante, es importante que sea largo y quiero que sea otra una guía para que me vayas registrando todo lo que vayas poniendo, quiero que me pongas 1, que es memoria de ella, que es que copies toda nuestra conversación y la pongas en ese archivo para que si llego a hablar con otra hija tenga todo el contexto, necesito todo esto, OK Y no vayas a construir hasta que yo te diga»

**Resultado:** este archivo. No se ha construido ni modificado código del juego.

---

## 2. Visión general

Café Nido es un simulador cozy de cafetería con animales. El objetivo de este rediseño es convertir la **preparación de pedidos** en una experiencia táctil y satisfactoria de **construcción**, en lugar de una pantalla genérica de estaciones.

La fantasía: *«tomo mi masa, la coloco en mi mesa, vierto el chocolate, la horneo tranquilamente, la corto, la guardo en su cajita y se la entrego a mi cliente animal»*.

Principios:

- **Ritual, no prisa.** Sin cronómetro. Animaciones suaves y satisfactorias.
- **El pedido nunca se olvida.** Siempre visible arriba durante la cocina.
- **Estética kawaii retro sakura** coherente con el resto del juego.
- **Un cliente a la vez.**
- **Web-first y responsive**, con mouse, teclado y dedo.

---

## 3. Flujo completo del pedido (pantalla por pantalla)

```
┌─────────────────────────────────────────────┐
│ 1. PORTADA                                  │
│    «¿Estás listo para jugar?»               │
│    [ Iniciar juego ] [ Continuar ]          │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ 2. ESCENA DEL CLIENTE                       │
│    Animal: «Quiero una de chocolate»        │
│    [ Acepto el reto ] [ Dame más info ]     │
│    (Dame más info → tutorial paso a paso)   │
└───────────────────┬─────────────────────────┘
                    │  aceptar
                    ▼  transición suave (el cliente desaparece)
┌─────────────────────────────────────────────┐
│ 3. ZONA DE COCINA (pantalla completa)       │
│                                             │
│  3.1 ENSAMBLAJE                             │
│      - Pedido fijo arriba                   │
│      - Estante con 3 cuadritos              │
│      - Pila de 6 masas                      │
│      - Mesa de trabajo                      │
│                                             │
│  3.2 HORNO  (scroll automático suave)       │
│      - Animación tranquila                  │
│      - Barra de precisión                   │
│                                             │
│  3.3 MESA DE ACABADO (scroll automático)    │
│      - Cortar (opcional)                    │
│      - Meter en la cajita                   │
└───────────────────┬─────────────────────────┘
                    │  cajita lista
                    ▼  transición suave
┌─────────────────────────────────────────────┐
│ 4. ENTREGA AL CLIENTE                       │
│    - Reacción del animal                    │
│    - Recompensa (monedas, estrellas)        │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ 5. CIERRE / RESUMEN NOCTURNO → TIENDA       │
└─────────────────────────────────────────────┘
```

### 3.1 Detalle de la portada

- Debe preguntar si el jugador está listo: «¿Estás listo para jugar?».
- Acción principal: **Iniciar juego**.
- Mantiene las opciones actuales de Continuar y Ajustes.

### 3.2 Detalle de la escena del cliente

- Se ve al animal pidiendo.
- El pedido se muestra en una burbuja: por ejemplo, **«Quiero una de chocolate»**.
- Botones:
  - **Acepto el reto** → pasa a cocina.
  - **Dame más información** → abre un tutorial/explicación de cómo preparar el pedido (pensado para nuevos jugadores).
- El cliente **no vuelve a verse** durante la cocina.

### 3.3 Transición a la cocina

- Transición **suave** (fade / slide).
- La zona de cocina **ocupa toda la pantalla**.
- El cliente **desaparece por completo**.
- La cámara arranca en la **zona de ensamblaje**, justo donde están los primeros 3 recuadros de ingredientes.

---

## 4. Detalle de la zona de cocina

La cocina es una **escena con scroll automático suave** entre tres zonas. El jugador no navega manualmente: la cámara lo acompaña al avanzar de fase.

### 4.1 Pedido fijo (banner superior)

- Permanece **siempre visible** en la parte superior de la cocina.
- Contiene:
  - Animal que pidió.
  - Nombre de la receta.
  - Los ingredientes requeridos (chips o miniaturas).
- Objetivo: que el jugador **nunca olvide** qué está preparando.

### 4.2 Estante de ingredientes

- En la parte superior, como **cuadritos**.
- **Empieza con 3 cuadritos**: los 3 ingredientes base del día 1.
- Cada cuadrito muestra color, icono y nombre del ingrediente.
- Crece con la progresión: al comprar un ingrediente nuevo se agrega un cuadrito más (ej. el 4.º con **chispas confitadas**).
- Interacción:
  - **PC:** arrastrar el ingrediente a la mesa.
  - **Móvil:** tocar el ingrediente y luego la mesa (tap).

### 4.3 Pila de masas

- A un lado de la mesa de trabajo.
- Muestra **6 masas**.
- Son **decorativas**: no bloquean el juego ni se pierden de forma permanente.
- Al tomar una masa, la pila baja.
- Cuando se acaban las 6, **se rellenan automáticamente** con una **animación suave y satisfactoria** (rebote/pop escalonado).

### 4.4 Mesa de trabajo (ensamblaje)

- Centro de la zona de ensamblaje.
- Estados:
  1. **Mesa vacía** → se invita a tomar una masa.
  2. **Masa colocada** → se activan los ingredientes.
  3. **Construcción** → cada ingrediente correcto se agrega como una **capa visual** encima de la masa (el chocolate la cubre, las chispas se esparcen, etc.).
- Ingrediente incorrecto: pequeña animación de negación (shake) y penalización leve de calidad. Sin game over.
- Cuando la receta está completa, aparece la acción para pasar al **horno**.

### 4.5 Horno

- Se llega por **scroll automático suave** desde la mesa.
- **Animación tranquila**: el horno se mueve suavecito (luz cálida, vapor, respiración lenta).
- Mini-juego de precisión con barra: detener el marcador en la **zona verde** para mejor calidad.
- Sin cronómetro visible; el ritmo lo marca el jugador.

### 4.6 Mesa de acabado

- Se llega por **scroll automático suave** desde el horno.
- Acciones:
  - **Cortar (opcional):** mejora la presentación/calidad si el jugador lo hace.
  - **Meter en la cajita:** acción obligatoria para continuar.
- Al meterlo en la cajita, se dispara la **transición suave de regreso al cliente**.

### 4.7 Estética y animal

- Pixel art retro kawaii, paleta sakura, rejilla de 8 px, sombras duras.
- El animal debe estar presente de forma narrativa (aunque no se vea durante la cocina): se puede mostrar su avatar en el banner del pedido o en la transición.
- Animaciones de 120–250 ms con easing tipo `steps()`.
- Respetar **reduced motion**: si está activo, las animaciones se acortan o se desactivan.

---

## 5. Progresión de ingredientes

### 5.1 Día 1

- **3 ingredientes base** (propuesta: masa, chocolate, azúcar).
- **3 cuadritos** en el estante.
- **5 pedidos**, cada uno con **3 ingredientes** como máximo.
- **10 recetas** en total planificadas para el arranque (sujeto a revisión).

### 5.2 Día 2

- Te **regalan un ingrediente** o llega un **cliente desconocido**.
- El cliente pide una receta que usa un ingrediente que **no tienes**.
- Ejemplo: **dona confitada con chispas de colores** → no tienes **chispas confitadas**.
- Esto **obliga** a comprarlas en la **tienda de la noche**.
- Al comprarlas, aparece un **cuarto cuadrito** en el estante con las chispas confitadas.
- El ingrediente queda desbloqueado de forma permanente.

### 5.3 Regla general de progresión

- El estante **crece** con cada ingrediente nuevo comprado/desbloqueado.
- Las recetas se habilitan según los ingredientes que el jugador posee.
- La tienda nocturna es el motor de esta progresión.
- Si un pedido requiere un ingrediente no poseído, se muestra como **bloqueado** en el estante (cuadrito con candado y pista «Consíguelo en la tienda»), y completarlo sin él baja la calidad. El día no se bloquea.

### 5.4 Alcance inicial

- Primero **postres y panadería** (recetas con masa).
- **Cafés/bebidas después**, en una fase posterior.
- El usuario dijo: «después podemos ir avanzando viendo si ahora implementamos cafés».

---

## 6. Estructura técnica propuesta

> Nada de esto está implementado todavía. Es la propuesta a validar.

### 6.1 Datos

- **`src/data/ingredients.ts`** (nuevo):
  ```ts
  export interface Ingredient {
    id: string          // 'masa', 'chocolate', 'azucar', 'chispas'
    name: string        // 'Masa', 'Chocolate', ...
    color: string       // color de la capa/icono
    icon: string        // nombre del icono existente
    layer: 'base' | 'sauce' | 'sprinkle' | 'powder'
    unlockedByDefault: boolean
  }
  ```
- **`src/data/recipes.ts`**: `Recipe.ingredients` pasa de nombres libres a **ids** de ingrediente. El recetario y la tienda resuelven nombres/colores desde `ingredients.ts`.
- **`src/data/shop.ts`**: los ítems de categoría `ingredientes` se vinculan a un `ingredientId`. Se agrega **«Chispas confitadas»**.

### 6.2 Estado y guardado

- `GameState` agrega `ownedIngredients: string[]`.
- `SaveData` agrega `ownedIngredients`.
- `initialState` inicia con los 3 ingredientes base.
- `BUY_ITEM`: si el ítem es un ingrediente, además de `ownedItems` se agrega a `ownedIngredients`.
- Migración de guardado: si un guardado viejo no tiene `ownedIngredients`, se rellena con los ingredientes base.

### 6.3 Componentes

- `CookingStation.tsx` se convierte en **orquestador** de la escena de cocina.
- Nuevos componentes en `src/components/cooking/`:
  - `OrderBanner.tsx` — pedido fijo arriba.
  - `IngredientShelf.tsx` — estante de cuadritos dinámico.
  - `DoughStack.tsx` — pila de 6 masas con recarga animada.
  - `Workbench.tsx` — mesa de trabajo y capas de ingredientes.
  - `OvenStation.tsx` — horno y barra de precisión.
  - `FinishTable.tsx` — cortar (opcional) y cajita.
  - `KitchenCamera.tsx` — scroll automático suave entre zonas.
- Componente de transición entre pantallas: `SceneTransition.tsx` (fade/slide suave).

### 6.4 Interacción

- **Arrastrar y soltar** (PC): eventos de drag (`dragstart`, `dragover`, `drop`).
- **Tocar** (móvil): primer tap selecciona, segundo tap coloca.
- Detección de puntero táctil vs. mouse para no duplicar eventos.
- Áreas táctiles mínimas de 44 px.

### 6.5 Animaciones

- Recarga de masas: `pop` escalonado con `transform` y `opacity`.
- Capas de ingredientes: `scale` + `opacity` al colocarse.
- Horno: respiración lenta, vapor, luz cálida.
- Scroll automático entre zonas: `transform: translate` con easing suave.
- Transición cliente → cocina y cocina → cliente: fade/slide.
- Todas respetan `prefers-reduced-motion` y el ajuste `reducedMotion` del juego.

### 6.6 Calidad

La calidad del pedido se calcula combinando:

- **Ingredientes correctos** colocados.
- **Precisión en el horno** (zona verde).
- **Acabado** (cortar y/o topping).
- **Ingredientes faltantes** (si se sirve sin un ingrediente requerido).

Sin game over. La calidad solo afecta recompensa y reacción del cliente.

---

## 7. Fases de implementación

> Ninguna fase se inicia hasta aprobación explícita.

### Fase 0 — Documentación (completada)
- Crear este archivo de memoria y plan.
- **Estado:** hecho.

### Fase 1 — Mesa de construcción
**Estado:** implementada el 2026-11-04.
- `OrderBanner` con el pedido fijo arriba.
- `IngredientShelf` con los cuadritos de ingredientes de la receta.
- `DoughStack` con 6 masas y recarga animada.
- `Workbench` con colocación de masa y capas de ingredientes.
- Interacción doble (drag + tap).
- Sin horno ni mesa de acabado todavía (quedan para la Fase 2).

### Fase 2 — Horno, acabado y transiciones
**Estado:** implementada el 2026-11-04.
- `OvenStation` con animación tranquila y barra de precisión (horno o cafetera según la receta).
- `FinishTable` con cortar opcional y cajita.
- `KitchenCamera` con deslizamiento suave entre zonas.
- Transición cliente → cocina y cocina → cliente mediante el overlay existente.
- Calidad final combinada: ensamblaje 40 %, precisión del horno 40 %, acabado 20 %.

### Fase 3 — Ingredientes dinámicos
- `data/ingredients.ts` y migración de recetas a ids.
- `ownedIngredients` en estado y guardado.
- Tienda conectada: comprar ingrediente agrega cuadrito.
- Estante que crece.

### Fase 4 — Progresión narrativa
- Día 1 con 3 ingredientes y 5 pedidos.
- Día 2: cliente desconocido + ingrediente faltante.
- Tutorial «Dame más información».
- Recetas bloqueadas por ingrediente.

### Fase 5 — Bebidas/cafés (futuro)
- Adaptar el flujo a bebidas (taza, cafetera, etc.).
- Decidir si usan la misma mesa o una variante.

---

## 8. Bitácora de cambios

> Aquí se registra **todo** lo que se vaya implementando. Una fila por cambio.

| Fecha | Fase | Cambio | Archivos | Estado |
|---|---|---|---|---|
| 2026-11-03 | 0 | Creación de este documento de memoria y plan | `docs/MEMORIA_Y_PLAN_COCINA.md` | Hecho |
| 2026-11-03 | 0 | Repositorio Git inicializado y commit base de seguridad (`64f0e78`) | `.gitignore`, todo el proyecto | Hecho |
| 2026-11-03 | 0 | README agregado y remoto conectado a GitHub (`main`, force push) | `README.md`, `.git` | Hecho |
| 2026-11-04 | 1 | Mesa de construcción: `OrderBanner`, `IngredientShelf`, `DoughStack`, `Workbench`, `Kitchen`, visuals de ingredientes e interacción drag + tap | `src/components/cooking/*`, `src/components/Icon.tsx`, `src/App.tsx`, `src/styles/global.css` | Hecho |
| 2026-11-04 | 2 | Horno, mesa de acabado, cámara con transiciones y calidad combinada | `KitchenCamera.tsx`, `OvenStation.tsx`, `FinishTable.tsx`, `Kitchen.tsx`, `Icon.tsx`, `global.css` | Hecho |
| — | 3 | Ingredientes dinámicos y tienda conectada | — | Pendiente |

### Plantilla para nuevas entradas

```md
| YYYY-MM-DD | Fase N | Descripción breve del cambio | archivos tocados | Hecho / En progreso / Pendiente |
```

---

## 9. Decisiones abiertas

- [ ] Nombres exactos de los 3 ingredientes base (propuesta: Masa, Chocolate, Azúcar).
- [ ] Nombre del ingrediente nuevo (propuesta: Chispas confitadas).
- [ ] ¿Las 10 recetas iniciales son las actuales o se rediseñan?
- [ ] ¿Cortar la dona da bonus de calidad o es solo cosmético?
- [ ] ¿El ingrediente faltante se puede omitir sirviendo con menos calidad, o bloquea el pedido?
- [ ] ¿Cuántos cuadritos máximos tendrá el estante?
- [ ] ¿El «Dame más información» es un tutorial de una sola vez o consultable siempre?
- [ ] ¿Cómo se representa visualmente cada ingrediente (capas, sprites, CSS)?
- [ ] ¿Las bebidas reutilizan la mesa o tendrán su propia estación?
- [ ] ¿Se mantiene el guardado actual o se versiona a v2 por `ownedIngredients`?

---

## 10. Estado actual del proyecto (as-is)

> Contexto técnico para que otra IA entienda de dónde se parte.

### 10.1 Stack

- React 18 + TypeScript + Vite.
- Sin Phaser todavía (el plan original lo menciona, pero el código actual es React puro).
- Estado con `useReducer` en `src/state/game.ts`.
- Estilos CSS con tokens en `src/styles/`.
- Guardado en `localStorage` (`cafe-nido-save-v1`).

### 10.2 Estructura relevante

```
Cafeteria/
├── src/
│   ├── App.tsx                     # orquesta pantallas
│   ├── types.ts                    # tipos del juego
│   ├── components/
│   │   ├── CookingStation.tsx      # preparación actual (a reemplazar)
│   │   ├── OrderTicket.tsx
│   │   ├── RecipeBook.tsx
│   │   ├── Shop.tsx
│   │   ├── NightSummary.tsx
│   │   ├── ResultModal.tsx
│   │   ├── TitleScreen.tsx
│   │   └── ...
│   ├── data/
│   │   ├── characters.ts           # 10 animales
│   │   ├── recipes.ts              # 10 recetas
│   │   └── shop.ts                 # ingredientes, equipo, decoración
│   ├── state/game.ts               # reducer + guardado
│   ├── services/audio.ts
│   └── styles/
├── PLAN.md                         # plan general del juego
└── docs/MEMORIA_Y_PLAN_COCINA.md   # este archivo
```

### 10.3 Flujo actual de cocina (`CookingStation.tsx`)

- Toma `recipe.stations` (mix, oven, brew, plate).
- Por cada estación muestra un mini-juego:
  - **mix:** 5 toques para mezclar.
  - **oven / brew:** barra con marcador y zona central.
  - **plate:** elegir un topping.
- Calcula calidad y llama `onServe(quality)`.
- **Limitaciones frente a lo pedido:**
  - No hay pedido fijo arriba.
  - No hay estante de ingredientes ni pila de masas.
  - No hay capas visuales de ingredientes sobre la masa.
  - No hay mesa de acabado ni cajita.
  - No hay scroll/transición entre zonas.
  - El cliente se sigue viendo detrás del overlay.

### 10.4 Recetas actuales

10 recetas: dona de chocolate, café con leche, pan dulce, galleta de sakura, chocolate caliente, matcha latte, té de frutas, muffin, postre de nuez, infusión zen. Cada una con 3 ingredientes en texto y estaciones.

### 10.5 Personajes actuales

10 animales: Mochi (gata), Pan (perro), Luna (coneja), Kiko (zorra), Bruno (oso), Yumi (panda), Roco (rana), Pío (pájaro), Nuez (hámster), Capi (capibara). Cada uno con colores, saludo, reacción feliz y triste.

---

## 11. Cómo usar este archivo

1. **Leer la memoria (sección 1)** para entender la intención exacta del usuario.
2. **Revisar el flujo (secciones 3 y 4)** antes de diseñar o programar.
3. **Consultar la estructura técnica (sección 6)** para respetar componentes y datos.
4. **Seguir las fases (sección 7)** sin adelantarse.
5. **Registrar cada cambio (sección 8)** con fecha, fase y archivos.
6. **No construir sin autorización explícita del usuario.**

---

*Este documento es la memoria viva del rediseño de la cocina. Se actualizará conforme se aprueben e implementen las fases.*
