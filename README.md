# BaldeCash · Frontend — Solicitudes de financiamiento

Interfaz en **Next.js + TypeScript** con dos vistas: formulario de solicitud y listado.
Prueba técnica FullStack Developer Junior (BaldeCash).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Server Actions + `useActionState` (formulario)

## Requisitos

- Node.js 24 + npm
- Backend corriendo en `http://localhost:5000` (ver README del backend)

## Variables de entorno

Ver `.env.example`:

| Variable              | Ejemplo                 | Descripción          |
| --------------------- | ----------------------- | -------------------- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:5000` | URL base del backend |

## Levantar desde cero

```bash
# 1. Dependencias
npm install

# 2. Variables de entorno
cp .env.example .env

# 3. Desarrollo (con el backend arriba)
npm run dev
```

Abrir `http://localhost:3000` → redirige a `/applications/new`.

## Rutas

| Ruta                 | Vista                                                       |
| -------------------- | ----------------------------------------------------------- |
| `/`                  | redirige a `/applications/new`                              |
| `/applications/new`  | formulario: datos del estudiante + monto + plazo            |
| `/applications/list` | tabla con filtro por estado y paginación (`?page=&status=`) |

### Formulario (`/applications/new`)

- Client component (`ApplicationForm`) + Server Action (`createApplicationAction`).
- Estados: carga (`Enviando...`), errores del servidor **debajo de cada campo**
  (mapea el `422` del backend), error global y confirmación con la **cuota mensual**.
- Límite del listado: `LIST_LIMIT = 4` en `utils/constants.ts`.

### Listado (`/applications/list`)

- Server component: lee `searchParams`, hace `fetch` a `GET /solicitudes` y pasa
  `{ rows, total, page, limit, status }` al componente cliente.
- Client component (`ApplicationsTable`): solo presenta tabla, filtro
  (Todas / pendiente / aprobada / rechazada) y paginación Anterior/Siguiente.

## Decisiones técnicas

- **Server Actions** para el POST: sin API routes intermedias, validación del backend
  como fuente de verdad y `useActionState` para loading/errores/éxito.
- **Separación server/cliente**: el listado obtiene datos en el server y la tabla
  cliente solo renderiza (sin `useEffect` ni fetch en cliente).
- **Funciones reutilizables en `utils/`**: `getApiUrl()`, `getFieldError()`,
  `buildHref()` y constantes (`ALL_STATUS`, `LIST_LIMIT`, `STATUS_FILTER_OPTIONS`).
- **Código en inglés**, textos visibles en español.
- **Colores de texto explícitos** (`text-zinc-900` sobre fondos blancos) para que el
  modo oscuro del sistema no deje texto blanco sobre blanco.

## Qué quedó fuera / con más tiempo

- Tests del formulario y la tabla.
- `PATCH` de estado desde el listado (depende del opcional 2 del backend).
- Manejo de sesión/autenticación y diseño responsive avanzado.
- `docker-compose` único fullstack (hoy solo existe para Postgres en el backend).

## IA utilizada

Asistencia de IA con **Muse Spark (en OpenCode)** y **ChatGPT**: estructura de rutas, server action,
mapeo de errores 422, depuración (`fetch failed`, build de Server Actions, estilos) y
redacción de este README.
