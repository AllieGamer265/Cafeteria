# BITÁCORA — Café Nido

> **Proyecto eterno.** Este archivo guarda la memoria viva del desarrollo: qué se hizo, cuándo (fecha y hora), y cuál es el respaldo (commit) para poder volver atrás si algo se rompe.

---

## Cómo usar esta bitácora

Cada vez que se trabaje en el proyecto se agrega **una entrada** con este formato:

```md
### YYYY-MM-DD · HH:MM
**Sesión:** [número o nombre]
**Área:** [Cocina / Datos / UI / Tienda / Audio / Docs / Repo]
**Hecho:**
- Punto 1
- Punto 2
**Archivos:** `ruta/archivo.tsx`, `ruta/otro.ts`
**Respaldo:** commit `abc1234` — mensaje del commit
**Siguiente:** qué queda pendiente
```

### Reglas

1. **Nunca borrar entradas antiguas.** La bitácora solo crece.
2. Toda sesión termina con **commit + push** a GitHub como respaldo.
3. Si un cambio rompe algo, se anota y se indica el commit al que se volvió.
4. Las horas se registran en hora local (UTC-06:00).
5. El respaldo oficial vive en: https://github.com/AllieGamer265/Cafeteria

### Cómo restaurar un respaldo

```powershell
git reset --hard <hash-del-commit>
```

Para ver el historial completo:

```powershell
git log --oneline --all
```

---

## Historial de sesiones

### 2026-11-03 · 18:35
**Sesión:** 0 — Fundación del proyecto
**Área:** Docs / Repo
**Hecho:**
- Se exploró el proyecto `Cafeteria` (React + TypeScript + Vite).
- Se localizó la pantalla de preparación en `src/components/CookingStation.tsx`.
- Se definió el rediseño de la cocina: mesa de construcción, estante de ingredientes, pila de 6 masas, horno, mesa de acabado y transiciones.
- Se documentó la memoria completa de la conversación y el plan por fases.
- Se inicializó el repositorio Git con `.gitignore`.
**Archivos:** `docs/MEMORIA_Y_PLAN_COCINA.md`, `.gitignore`
**Respaldo:** commit `64f0e78` — «chore: estado inicial antes del rediseno de cocina»
**Siguiente:** aprobar la Fase 1 y comenzar la mesa de construcción.

### 2026-11-03 · 18:39
**Sesión:** 0 — Fundación del proyecto
**Área:** Docs / Repo
**Hecho:**
- Se creó el `README.md` del proyecto.
- Se conectó el repositorio local con GitHub (`origin`, rama `main`).
- Se subió todo el proyecto con `push --force` como respaldo inicial.
- Se registró la subida en la bitácora del plan.
**Archivos:** `README.md`, `docs/MEMORIA_Y_PLAN_COCINA.md`
**Respaldo:** commit `f0aa4e6` — «docs: agregar README del proyecto» y `33c15d6` — «docs: registrar subida a GitHub en la bitacora»
**Siguiente:** esperar autorización del usuario para iniciar la Fase 1.

### 2026-11-03 · 18:41
**Sesión:** 0 — Fundación del proyecto
**Área:** Docs / Repo
**Hecho:**
- Se creó esta bitácora permanente (`BITACORA.md`).
- Se registraron fechas, horas y respaldos de la fundación.
- Se dejó constancia de que el proyecto es **eterno** y que la bitácora solo crece.
**Archivos:** `BITACORA.md`
**Respaldo:** commit `9ae9434` — «docs: crear bitacora eterna con fechas y respaldos»
**Siguiente:** mañana se inicia la Fase 1 (mesa de construcción).

---

## Próxima sesión

**Fecha prevista:** 2026-11-04
**Objetivo:** iniciar la **Fase 1 — Mesa de construcción**.

Checklist para arrancar:

- [ ] Leer `docs/MEMORIA_Y_PLAN_COCINA.md`.
- [ ] Confirmar ingredientes base (masa, chocolate, azúcar).
- [ ] Crear `OrderBanner` (pedido fijo arriba).
- [ ] Crear `IngredientShelf` (3 cuadritos).
- [ ] Crear `DoughStack` (6 masas con recarga animada).
- [ ] Crear `Workbench` (masa + capas de ingredientes).
- [ ] Implementar interacción drag & drop + tap.
- [ ] Probar en PC y móvil.
- [ ] Registrar avance aquí y hacer commit + push.

---

## Resumen de respaldos

| Commit | Fecha y hora | Descripción |
|---|---|---|
| `64f0e78` | 2026-11-03 18:35 | Estado inicial antes del rediseño de cocina |
| `60575b0` | 2026-11-03 18:35 | Registro de creación del repositorio en la bitácora del plan |
| `f0aa4e6` | 2026-11-03 18:39 | README del proyecto |
| `33c15d6` | 2026-11-03 18:39 | Registro de subida a GitHub |
| `9ae9434` | 2026-11-03 18:43 | Bitácora eterna con fechas y respaldos |
| _(siguiente)_ | — | Pendiente de la próxima sesión |

---

*Esta bitácora es eterna. Cada día de trabajo deja una huella aquí.*
