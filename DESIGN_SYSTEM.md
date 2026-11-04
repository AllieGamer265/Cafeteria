# Café Nido — Design System Visual

> **Buen café, gran café.**

| Campo | Valor |
|---|---|
| Versión | 0.1 |
| Estado | Especificación |
| Proyecto | Café Nido |
| Estilo | Pixel art retro kawaii, paleta sakura |
| Plataforma | Web responsive + PWA |

---

## Índice

1. Principios visuales
2. Identidad de marca
3. Paleta de color
4. Tipografía
5. Rejilla, espaciado y medidas
6. Bordes, sombras y radios
7. Iconografía
8. Componentes de UI
9. Movimiento y animación
10. Layout y responsive
11. Reglas de pixel art
12. Plantillas de pantalla
13. Microcopy y tono
14. Accesibilidad
15. Implementación y tokens
16. Do / Don't
17. Checklist de calidad

---

## 1. Principios visuales

1. **Cozy antes que ruidoso.** Colores cálidos, ritmo lento, nada de parpadeos agresivos.
2. **Pixel con intención.** La rejilla se respeta; no se mezcla pixel art con vectores suaves.
3. **UI legible.** El estilo retro nunca sacrifica claridad.
4. **Todo responde.** Cada toque tiene feedback visual y sonoro.
5. **Una sola obra.** Fondo, personajes, iconos y paneles comparten paleta y reglas.

---

## 2. Identidad de marca

### Nombre

**Café Nido**

### Eslogan

**Buen café, gran café.**

### Personalidad

- Cálida
- Tierna
- Artesanal
- Un poco traviesa
- Nunca infantil en exceso

### Logo

- Tipografía pixel principal.
- Un nido o una taza integrada en la letra "N" o como acento superior.
- Versión horizontal para portada y versión compacta para icono PWA.
- Área de respeto mínima: el alto de la letra "C".
- Nunca deformar, rotar ni aplicar degradados suaves.

### Tono de voz

Frases cortas, amables y con humor suave. Nunca culpabilizar al jugador.

Ejemplos:

- "¡Hola! ¿Me preparas una dona?"
- "Aún falta el chocolate."
- "El horno pide un poquito más."
- "¡Quedó perfecto!"
- "Hoy fue un buen día en el nido."

---

## 3. Paleta de color

### 3.1 Colores base

| Token | Nombre | Hex | Uso |
|---|---|---|---|
| `--sakura` | Sakura | `#FFB7C5` | Acentos, fondos suaves, focus |
| `--rose` | Rosa profundo | `#E85D75` | Botones primarios, énfasis |
| `--rose-deep` | Rosa profundo oscuro | `#A3324A` | Texto sobre rosa, estados presionados |
| `--cream` | Crema | `#FFF5E1` | Paneles, fondos cálidos |
| `--ivory` | Blanco hueso | `#FFFDF7` | Fondo base |
| `--matcha` | Matcha | `#A8C686` | Éxito, naturaleza, ingredientes frescos |
| `--matcha-deep` | Matcha oscuro | `#6F8F55` | Texto sobre matcha, detalles |
| `--coffee` | Café | `#6B4F3A` | Bordes, madera, texto secundario |
| `--coffee-deep` | Café oscuro | `#4A3527` | Sombras duras, contornos |
| `--night` | Noche | `#2E2430` | Pantallas nocturnas, texto principal alternativo |
| `--night-deep` | Noche profunda | `#1C1620` | Fondo de noche, overlays |
| `--gold` | Dorado | `#F2C14E` | Monedas, estrellas, recompensas |
| `--ink` | Tinta | `#2A1F26` | Texto principal sobre fondos claros |
| `--white` | Blanco | `#FFFFFF` | Highlights puntuales |

### 3.2 Colores semánticos

| Token | Hex | Uso |
|---|---|---|
| `--bg-base` | `#FFFDF7` | Fondo general |
| `--bg-surface` | `#FFF5E1` | Paneles y tarjetas |
| `--bg-elevated` | `#FFFFFF` | Modales y elementos elevados |
| `--bg-night` | `#2E2430` | Resumen nocturno |
| `--text-primary` | `#2A1F26` | Texto principal |
| `--text-secondary` | `#6B4F3A` | Texto secundario |
| `--text-inverse` | `#FFFDF7` | Texto sobre fondos oscuros |
| `--border` | `#6B4F3A` | Bordes estándar |
| `--border-soft` | `#D9C7B8` | Bordes suaves |
| `--primary` | `#E85D75` | Acción principal |
| `--primary-hover` | `#F07A8E` | Hover |
| `--primary-pressed` | `#C94560` | Presionado |
| `--success` | `#6F8F55` | Éxito |
| `--warning` | `#F2C14E` | Advertencia |
| `--danger` | `#C94560` | Peligro o pérdida |
| `--focus` | `#FFB7C5` | Anillo de foco |

### 3.3 Combinaciones accesibles

Ratios aproximados según WCAG. Revalidar si cambia algún hex.

| Texto | Fondo | Ratio aprox. | Uso |
|---|---|---|---|
| `--ink` | `--cream` | 14.6:1 | Texto principal |
| `--cream` | `--coffee` | 6.9:1 | Texto sobre café |
| `--cream` | `--rose-deep` | 6.2:1 | Botón primario con texto claro |
| `--ink` | `--sakura` | 9.7:1 | Botones suaves, etiquetas |
| `--ink` | `--matcha` | 8.4:1 | Confirmaciones |
| `--ink` | `--gold` | 9.5:1 | Monedas y estrellas |
| `--cream` | `--night` | 13.9:1 | Pantalla nocturna |

**Evitar:** texto claro pequeño sobre `--rose` (`#E85D75`), ratio cercano a 3.1:1. Para botones primarios usar texto `--ink` o fondo `--rose-deep`.

### 3.4 Proporción de uso

- 60% cremas y blancos.
- 25% rosas sakura.
- 10% cafés y matcha.
- 5% dorado y acentos.

El rosa profundo se reserva para acciones; si todo es rosa, nada destaca.

---

## 4. Tipografía

### 4.1 Familias

| Rol | Familia | Alternativa | Uso |
|---|---|---|---|
| Display | Pixelify Sans | Silkscreen | Logo, títulos grandes |
| Heading | Pixelify Sans | Silkscreen | Títulos de pantalla |
| Label | Silkscreen | Pixelify Sans | Botones, pestañas, badges |
| Body | Nunito | System UI | Textos largos, diálogos |
| Números | Silkscreen | Nunito tabular | Monedas, días, tiempos |

### 4.2 Escala

| Token | Tamaño | Interlineado | Uso |
|---|---|---|---|
| `--text-xs` | 12 px | 16 px | Notas, versión |
| `--text-sm` | 14 px | 20 px | Etiquetas |
| `--text-md` | 16 px | 24 px | Cuerpo base |
| `--text-lg` | 20 px | 28 px | Subtítulos |
| `--text-xl` | 24 px | 32 px | Títulos de panel |
| `--text-2xl` | 32 px | 40 px | Títulos de pantalla |
| `--text-3xl` | 40 px | 48 px | Títulos hero |
| `--text-4xl` | 64 px | 72 px | Logo |

### 4.3 Reglas

- Texto mínimo en móvil: 14 px.
- Texto mínimo en PC: 16 px.
- No usar párrafos largos en fuente pixel.
- No usar más de dos familias en una misma pantalla.
- Evitar mayúsculas sostenidas en textos largos.
- Los números importantes usan cifras tabulares para no bailar.

---

## 5. Rejilla, espaciado y medidas

### 5.1 Rejilla base

- Unidad: **8 px**.
- Subunidad: **4 px** para ajustes finos.
- Contenedor máximo de UI: 1200 px.
- Columnas: 4 en móvil, 8 en tablet, 12 en desktop.

### 5.2 Escala de espaciado

| Token | Valor |
|---|---|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 16 px |
| `--space-4` | 24 px |
| `--space-5` | 32 px |
| `--space-6` | 40 px |
| `--space-7` | 48 px |
| `--space-8` | 64 px |

### 5.3 Tamaños de control

| Control | Altura mínima |
|---|---|
| Botón pequeño | 32 px |
| Botón estándar | 44 px |
| Botón grande | 56 px |
| Icono táctil | 44 x 44 px |
| Slot de ingrediente | 48 x 48 px |
| Retrato de personaje | 64 x 64 px |

---

## 6. Bordes, sombras y radios

### 6.1 Bordes

| Token | Valor | Uso |
|---|---|---|
| `--border-thin` | 2 px | Separadores |
| `--border-base` | 4 px | Botones, paneles |
| `--border-heavy` | 6 px | Modales, portada |

### 6.2 Sombras

Sombras duras, sin desenfoque, estilo pixel.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `2px 2px 0 var(--coffee-deep)` | Botones pequeños |
| `--shadow-md` | `4px 4px 0 var(--coffee-deep)` | Botones y tarjetas |
| `--shadow-lg` | `6px 6px 0 var(--night)` | Modales |
| `--shadow-inset` | `inset 0 -4px 0 rgba(74,53,39,0.35)` | Relieve de botón |

### 6.3 Radios

| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0 | Base pixel |
| `--radius-sm` | 2 px | Detalle |
| `--radius-md` | 4 px | Excepción suave |
| `--radius-pill` | 999 px | Solo badges y pills |

Regla: si dudas, usa 0 o 2 px.

---

## 7. Iconografía

- Tamaños: 16, 24 y 32 px.
- Trazo de 1 o 2 px, sin antialiasing.
- Paleta limitada: tinta, café, rosa o crema.
- Iconos dibujados a mano, nunca emojis del sistema.
- Cada icono debe funcionar en monocromo.

### Set inicial

- Taza
- Dona
- Horno
- Batidor
- Corazón
- Estrella
- Moneda
- Libro de recetas
- Tienda
- Engranaje
- Pausa
- Sonido on/off
- Flecha
- Check
- Candado
- Más / menos
- Cerrar
- Huella
- Hoja
- Nube de diálogo

---

## 8. Componentes de UI

### 8.1 Botón

Variantes:

| Variante | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| Primario | `--rose-deep` | `--cream` | `--coffee-deep` | Acción principal |
| Secundario | `--cream` | `--ink` | `--coffee` | Acción alternativa |
| Suave | `--sakura` | `--ink` | `--rose` | Acciones amables |
| Fantasma | transparente | `--coffee` | transparente | Navegación secundaria |
| Icono | `--cream` | `--coffee` | `--coffee` | Acciones compactas |
| Peligro | `--danger` | `--cream` | `--coffee-deep` | Descartar |

Estados:

- Normal: sombra `--shadow-md`.
- Hover: fondo un 8% más claro, borde `--rose`.
- Presionado: se desplaza 2 px hacia la sombra y reduce la sombra a `--shadow-sm`.
- Foco: anillo de 2 px `--focus` con offset de 2 px.
- Deshabilitado: opacidad 50%, sin sombra, cursor no permitido.
- Comprando: spinner pixel o texto "Comprando...".

### 8.2 Panel

- Fondo `--bg-surface`.
- Borde `--border-base` en `--coffee`.
- Sombra `--shadow-md`.
- Padding `--space-3`.
- Título en `--text-xl` con subrayado de 2 px sakura.

### 8.3 Tarjeta

- Para recetas, personajes y productos.
- Imagen o icono arriba, título, subtítulo y acción.
- Hover: se eleva 2 px y aparece borde sakura.
- Estado bloqueado: silueta oscura y candado.

### 8.4 Pestañas de libro

- Forma de pestaña de papel.
- Activa: `--sakura` con borde `--rose`.
- Inactiva: `--cream` con borde `--border-soft`.
- Texto en `--label`.

### 8.5 Ticket de pedido

- Fondo `--ivory` con borde punteado en `--coffee`.
- Encabezado: retrato del personaje y nombre.
- Cuerpo: receta, ingredientes y pasos.
- Pie: botón "Empezar".
- Borde inferior dentado simulado con CSS o sprite.

### 8.6 Medidor de ánimo

- No es un cronómetro.
- Se muestra como 3 corazones o una carita.
- Estados: contento, esperando, impaciente, triste.
- Cambia solo tras mucho tiempo de inactividad.
- Nunca muestra cuenta atrás numérica.

### 8.7 Medidor de calidad

- 3 estrellas o una barra de precisión.
- Se llena según la ejecución del mini-juego.
- Colores: matcha para bueno, dorado para perfecto, rosa para aceptable.

### 8.8 Barra de progreso

- Fondo `--cream`.
- Relleno `--sakura` o `--matcha`.
- Borde `--coffee`.
- Sin animaciones infinitas.

### 8.9 Slot de ingrediente

- Cuadrado de 48 x 48 px.
- Fondo `--cream`, borde `--coffee`.
- Icono centrado.
- Estado vacío: borde punteado.
- Estado seleccionado: borde `--rose` de 4 px y brillo dorado.

### 8.10 Modal

- Fondo `--bg-elevated`.
- Borde `--border-heavy`.
- Sombra `--shadow-lg`.
- Overlay `rgba(28,22,32,0.6)`.
- Cerrar con botón visible y tecla Escape.

### 8.11 Toast

- Aparece arriba o abajo según plataforma.
- Duración: 2.5 s.
- Fondo `--night`, texto `--cream`.
- Icono semántico a la izquierda.
- Nunca bloquea la interacción.

### 8.12 Tooltip

- Fondo `--night`, texto `--cream`.
- Borde 2 px `--sakura`.
- Aparece tras 400 ms.
- En móvil se sustituye por texto visible o long press.

### 8.13 Slider de audio

- Riel `--cream`, borde `--coffee`.
- Pulgar cuadrado de 16 x 16 px `--rose`.
- Valor numérico visible.

### 8.14 Toggle

- Estilo interruptor pixel de 40 x 24 px.
- On: `--matcha`; Off: `--border-soft`.
- Etiqueta siempre visible.

### 8.15 Badge

- Para "Nuevo", "Bloqueado", "Favorito".
- Fondo `--gold` o `--rose`.
- Texto `--ink` o `--cream` según contraste.
- Forma pill permitida.

### 8.16 Monedas y estrellas

- Pill con icono + número.
- Fondo `--cream`, borde `--coffee`.
- Números tabulares.
- Animación de conteo al ganar.

### 8.17 Resumen nocturno

- Estilo recibo de papel.
- Fondo `--ivory`, texto `--ink`.
- Líneas: pedidos servidos, propinas, estrellas, gastos, total.
- Sello o sticker decorativo.
- Botones: "Ir a la tienda" y "Dormir".

### 8.18 Dock de acciones

- Barra inferior con 3–4 acciones.
- Icono grande + etiqueta.
- Acción principal destacada en rosa.
- En móvil ocupa el ancho completo con zonas seguras.

---

## 9. Movimiento y animación

### 9.1 Duraciones

| Token | Valor | Uso |
|---|---|---|
| `--motion-instant` | 80 ms | Feedback de toque |
| `--motion-fast` | 120 ms | Hover, foco |
| `--motion-base` | 180 ms | Botones, paneles |
| `--motion-slow` | 250 ms | Transiciones de pantalla |
| `--motion-ambient` | 400 ms+ | Pétalos, vapor, idle |

### 9.2 Curvas

- Microinteracciones: `steps(3, end)` para sensación retro.
- Aparición de paneles: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Ambientales: `ease-in-out` lento.
- Rebotes: `cubic-bezier(0.34, 1.56, 0.64, 1)`.

### 9.3 Principios

- **Squash & stretch** al presionar y al recibir recompensas.
- **Anticipación** antes de servir o abrir el horno.
- **Follow-through** en partículas y corazones.
- **Nada de flashing** por encima de 3 Hz.
- **Reduced motion:** desactiva pétalos, parallax y rebotes; mantiene fades cortos.

### 9.4 Juice por acción

| Acción | Feedback |
|---|---|
| Tocar botón | Se hunde 2 px + chispita |
| Elegir ingrediente | Slot brilla + sonido corto |
| Mezclar | Vapor + partículas de harina |
| Hornear | Barra de precisión + brillo dorado |
| Servir | Corazones + propina flotante |
| Comprar | Moneda vuela al contador |
| Subir de día | Pétalos y sello de "Día completado" |

---

## 10. Layout y responsive

### 10.1 Breakpoints

| Token | Rango | Dispositivo |
|---|---|---|
| `--bp-xs` | < 480 px | Móvil vertical |
| `--bp-sm` | 480–767 px | Móvil horizontal |
| `--bp-md` | 768–1023 px | Tablet |
| `--bp-lg` | 1024–1439 px | Desktop |
| `--bp-xl` | 1440+ px | Desktop amplio |

### 10.2 Zonas de pantalla

- **Top bar:** día, monedas, estrellas, pausa.
- **Stage:** escena de la cafetería.
- **Overlay:** ticket, recetario, modales.
- **Dock:** acciones principales.
- **Safe areas:** respetar notch y barras del navegador.

### 10.3 Reglas

- La UI se reordena, no se encoge.
- Mínimo táctil: 44 x 44 px.
- En móvil, el ticket es una hoja inferior deslizante.
- En desktop, el ticket es un panel lateral.
- En tablet, se elige según orientación.
- Evitar scroll horizontal.
- El texto nunca queda sobre áreas de mucho detalle sin fondo.

---

## 11. Reglas de pixel art

### 11.1 Resolución y rejilla

- Tiles de fondo: 16 x 16 px.
- Sprites de personaje: 32 x 32 o 48 x 48 px.
- Retratos: 64 x 64 px.
- Iconos: 16 o 24 px.
- Escenario base: 480 x 270 px para horizontal; 270 x 480 px para vertical.
- Escalado entero: x2, x3, x4. Nunca escalas fraccionarias.

### 11.2 Render

- `image-rendering: pixelated`.
- Sin suavizado.
- Sin rotaciones de sprites salvo que estén dibujadas.
- Sin degradados suaves en sprites; usar dithering si hace falta.

### 11.3 Límites

- Paleta de sprites: máximo 24 colores.
- Contorno: 1 px en café oscuro o rosa profundo, selectivo.
- Sombras: 1–2 tonos, no más.
- Animaciones: 2–6 frames por acción.
- Idle: 2–4 frames, bucle lento.

### 11.4 Nomenclatura de assets

```
char_mochi_idle_01.png
char_mochi_happy_01.png
ui_button_primary.png
ui_panel_9slice.png
icon_coin_16.png
bg_cafe_day_480x270.png
```

---

## 12. Plantillas de pantalla

### 12.1 Portada

```
+----------------------------------------------+
|  [sonido]                          [ajustes] |
|                                              |
|         *    .   *     .    *                |
|                                              |
|            +------------------+              |
|            |   CAFE  NIDO     |              |
|            |  Buen cafe,      |              |
|            |  gran cafe       |              |
|            +------------------+              |
|                                              |
|              (taza humeante)                 |
|                                              |
|           +----------------+                 |
|           |   CONTINUAR    |                 |
|           +----------------+                 |
|           +----------------+                 |
|           |  NUEVA PARTIDA |                 |
|           +----------------+                 |
|           +----------------+                 |
|           |    AJUSTES     |                 |
|           +----------------+                 |
|                                              |
|  v0.1                          [creditos]    |
+----------------------------------------------+
```

Elementos: fondo de cafetería al atardecer, pétalos, vapor, logo con rebote suave, botones apilados.

### 12.2 HUD de cafetería

```
+----------------------------------------------+
| DIA 1    [monedas 0] [estrellas 0]   [pausa] |
|                                              |
|          (escena de la cafeteria)            |
|      mostrador - personaje - burbuja         |
|                                              |
|  +------------------------------+            |
|  | PEDIDO: Dona de chocolate    |            |
|  | Mochi - animo 3/3            |            |
|  | [Empezar]                    |            |
|  +------------------------------+            |
|                                              |
|  [Recetario] [Cocina] [Servir] [Hablar]      |
+----------------------------------------------+
```

### 12.3 Ticket de pedido

- Retrato y nombre.
- Receta solicitada.
- Ingredientes como slots.
- Pasos como lista corta.
- Botón "Empezar".
- Sin temporizador.

### 12.4 Recetario

- Libro abierto de dos páginas en desktop.
- Una página en móvil con pestañas.
- Categorías: bebidas, panadería, postres.
- Receta bloqueada: silueta y candado.
- Receta disponible: ingredientes y pasos.

### 12.5 Estación de cocina

- Indicador de paso: 1 Mezcla, 2 Horno, 3 Emplatado.
- Zona interactiva grande y táctil.
- Medidor de calidad.
- Botón "Listo" solo cuando el paso termina.
- Sin cronómetro.

### 12.6 Resumen nocturno

- Fondo noche.
- Recibo centrado.
- Desglose de ganancias.
- Estrellas obtenidas.
- Botones "Tienda" y "Dormir".
- Guardado automático al dormir.

### 12.7 Tienda

- Estantes con productos.
- Filtros: ingredientes, equipo, decoración.
- Tarjeta con icono, nombre, precio y botón.
- Monedas siempre visibles.
- Confirmación al comprar.

---

## 13. Microcopy y tono

### Reglas

- Frases de máximo 12 palabras en botones y avisos.
- Verbos en imperativo amable: "Elige", "Sirve", "Cierra".
- Sin tecnicismos.
- Sin culpabilizar: "Aún falta algo" en vez de "Error".
- Los personajes hablan en primera persona.
- Los avisos del sistema hablan en segunda persona.

### Ejemplos

| Situación | Texto |
|---|---|
| Pedido nuevo | "¡Hola! ¿Me preparas una dona?" |
| Falta ingrediente | "Aún falta el chocolate." |
| Horno listo | "¡Listo para sacar!" |
| Pedido perfecto | "¡Quedó delicioso!" |
| Personaje se va | "Otro día será. Vuelvo pronto." |
| Cierre | "¿Cerramos la tienda por hoy?" |
| Tienda | "Con tus monedas puedes comprar esto." |
| Guardado | "Día guardado en el nido." |

---

## 14. Accesibilidad

- Contraste mínimo AA para texto normal.
- No depender solo del color: usar iconos y texto.
- Foco visible en todos los controles.
- Navegación completa por teclado en PC.
- Etiquetas ARIA en iconos y botones.
- Respetar `prefers-reduced-motion`.
- Permitir escalar texto hasta 150% sin romper layout.
- Sonido y música con controles independientes.
- Sin parpadeos por encima de 3 Hz.
- Áreas táctiles de mínimo 44 x 44 px.
- Diálogos con opción de texto más grande.

---

## 15. Implementación y tokens

### 15.1 Nombres de tokens

Usar CSS variables con prefijo `--cn-` (Café Nido) para evitar colisiones:

```
--cn-color-primary
--cn-color-surface
--cn-space-3
--cn-radius-sm
--cn-shadow-md
--cn-text-lg
--cn-motion-base
```

### 15.2 Componentes React

Cada componente debe exponer:

- `variant`
- `size`
- `disabled`
- `loading`
- `aria-label` cuando sea solo icono

### 15.3 Integración con Phaser

- Phaser renderiza la escena y los sprites.
- React renderiza la UI superpuesta.
- Los eventos cruzan por un bus tipado.
- La UI nunca se dibuja dentro del canvas si puede ser DOM.
- Los paneles usan 9-slice para escalar sin deformar bordes.

### 15.4 Assets

- Atlas de sprites para personajes.
- Atlas de UI para iconos.
- Fuentes en `woff2`.
- Audio en `ogg` y `mp3` como respaldo.
- Precarga por pantalla, no todo al inicio.

### 15.5 Rendimiento

- Máximo de partículas simultáneas: 40 en móvil, 120 en desktop.
- Evitar filtros y desenfoques.
- Usar `will-change` solo en animaciones activas.
- Limitar el canvas a la resolución interna del pixel art.

---

## 16. Do / Don't

### Do

- Usar bordes gruesos y sombras duras.
- Mantener la rejilla de 8 px.
- Reutilizar componentes.
- Probar en móvil cada semana.
- Usar iconos dibujados a mano.
- Dejar respirar la UI.

### Don't

- Mezclar pixel art con vectores suaves.
- Usar degradados complejos.
- Usar emojis del sistema como iconos.
- Poner texto claro pequeño sobre rosa.
- Usar cronómetros o cuentas atrás.
- Llenar la pantalla de partículas.
- Cambiar la paleta sin actualizar el sistema.

---

## 17. Checklist de calidad

Antes de dar una pantalla por terminada:

- [ ] Respeta la rejilla de 8 px.
- [ ] Usa solo tokens de color y tipografía.
- [ ] Tiene estados normal, hover, foco, presionado y deshabilitado.
- [ ] Funciona en móvil vertical, tablet y desktop.
- [ ] Los botones miden al menos 44 x 44 px.
- [ ] El contraste de texto cumple AA.
- [ ] Tiene versión con movimiento reducido.
- [ ] Los iconos tienen etiqueta accesible.
- [ ] No hay scroll horizontal.
- [ ] No hay errores de consola.
- [ ] Se siente coherente con la portada.
- [ ] El microcopy es cálido y breve.

---

*Documento vivo. Se actualizará junto con el GDD y los wireframes.*
