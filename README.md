# AVARI’S//LAB

**Archivo independiente de investigación y experimentación digital.** AVARI’S//LAB registra el paso de la observación a la construcción: ideas, sistemas y prototipos que evolucionan mediante la práctica. Cada ficha captura una etapa del proceso, con espacio para lo que todavía está por descubrir.

- Sitio: [avaris-lab.vercel.app](https://avaris-lab.vercel.app/)
- Repositorio: [AvariAny/avaris-lab](https://github.com/AvariAny/avaris-lab)

## El archivo

El sitio presenta un catálogo editorial de proyectos: permite recorrer el índice, filtrar fichas y abrir sus detalles con descripción, tecnologías y estado de avance. El contenido del catálogo se define como datos estáticos en `src/App.tsx`; que un proyecto aparezca en el sitio no significa que todos sus sistemas estén implementados o conectados.

La interfaz contiene once fichas, identificadas como `011` y `01`–`10`. Emotion Risk Engine es la ficha destacada `011` y tiene una demostración conectada a su API.

## Emotion Risk Engine

Emotion Risk Engine es un proyecto experimental independiente para clasificar texto en español. Su código vive en [AvariAny/emotion-risk-engine](https://github.com/AvariAny/emotion-risk-engine). La ficha de AVARI’S//LAB consulta `GET /health` y envía el texto a `POST /predict`; muestra la respuesta JSON del backend.

El indicador informa uno de estos estados:

- **Comprobando conexión:** consulta inicial o comprobación periódica.
- **API conectada:** `/health` respondió correctamente con `{"status":"ok"}`.
- **API desconectada:** falta configurar la URL, hubo un timeout, la API devolvió un error o el navegador no pudo conectar (por ejemplo, por red o CORS).

La comprobación de salud se repite cada 15 segundos y tiene un timeout de 5 segundos. La solicitud de análisis muestra el estado de procesamiento, el JSON recibido o un mensaje de error. El frontend requiere que el backend permita el origen del sitio mediante CORS.

### Naturaleza experimental y privacidad

El modelo produce estimaciones, no diagnósticos. No es un dispositivo médico ni un sistema clínico validado, y una confianza alta no garantiza que la respuesta sea correcta. En el backend actual, las predicciones se guardan en PostgreSQL y el texto original recibido se escribe en logs. No introduzcas en la demo pública datos personales, información clínica identificable ni textos sensibles. El código no implementa anonimización, consentimiento ni una política de retención.

## Stack tecnológico

- React 19 y React DOM 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4 mediante `@tailwindcss/vite`, junto con CSS propio
- Oxfmt para formato de código
- npm y `package-lock.json` para instalar dependencias

## Requisitos y uso local

Se necesita Node.js compatible con Vite 8 y npm. Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

Vite escucha por defecto en el puerto `8443` y usa HTTP en desarrollo. `PORT` permite elegir otro puerto. El servidor de desarrollo escucha en todas las interfaces salvo que se configure `FIGMA_DEV_SERVER_HOST`.

Para compilar y previsualizar la versión de producción localmente:

```bash
npm run build
npm run preview
```

`npm run format` ejecuta Oxfmt. El `package.json` no define scripts de pruebas ni de lint. Estos comandos se documentan desde la configuración del repositorio; no se afirma aquí que la compilación o el sitio desplegado se hayan verificado en esta revisión.

## Conectar la demo con la API

El cliente centralizado en `src/api.ts` lee `VITE_API_URL`, elimina espacios y barras finales, y agrega las rutas `health` y `predict`. Define la variable como una URL base que incluya esquema y host, sin una ruta de endpoint, por ejemplo:

```text
VITE_API_URL=https://<url-actual-de-la-api>
```

Para desarrollo local, crea un archivo `.env.local` en la raíz del frontend y configura allí la URL base del backend. Reinicia Vite después de cambiarla. Los valores `VITE_*` se incorporan al código del navegador durante la compilación: no guardes secretos en ellos.

### Configurar Vercel

1. Obtén la URL base actual del backend. Si se usa Cloudflare Quick Tunnel, su dirección es temporal y puede cambiar en la siguiente sesión de Colab.
2. En el proyecto de Vercel, abre **Settings → Environment Variables** y define `VITE_API_URL` con esa URL base para **Production** (y para Preview si se quiere habilitar allí).
3. Comprueba que FastAPI permita el origen `https://avaris-lab.vercel.app` en CORS. Los dominios de Preview de Vercel requieren configuración aparte si se desean usar.
4. Guarda el cambio y vuelve a desplegar para que Vite compile el valor nuevo.
5. Abre la ficha y confirma el estado de `/health`; después de cada nueva sesión de Quick Tunnel, repite la actualización y el despliegue si cambió la URL.

Un Quick Tunnel no actualiza automáticamente Vercel. La URL de producción indicada arriba es la dirección del sitio; su disponibilidad no se certifica por este README.

## Estructura principal

```text
src/
├── api.ts       # URL base y construcción centralizada de endpoints
├── App.tsx      # Catálogo, fichas y demo Emotion Risk Engine
├── index.css    # Estilos y adaptación a tamaños de pantalla
├── main.tsx     # Entrada de React
└── vite-env.d.ts
index.html
package.json
package-lock.json
vite.config.ts
```

## Flujo de trabajo

1. Parte de `main` y crea una rama para el cambio.
2. Mantén el cambio acotado y revisa `git status` y `git diff`.
3. Para validar que compila, ejecuta `npm run build`; el repositorio no define una suite de pruebas automatizada.
4. Revisa y prepara solo los archivos previstos antes de crear un commit.
5. La configuración de despliegue de Vercel se administra en el proyecto de Vercel; no está definida por este README.

## Trabajo futuro

Mantener al día los estados de las fichas, mejorar la documentación y validar la experiencia en distintos tamaños de pantalla y con navegación accesible. La integración descrita para Emotion Risk Engine ya está implementada en el frontend; su disponibilidad depende de la configuración y estado del backend.
