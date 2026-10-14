# AVARI'S//LAB

**Archivo independiente de investigación y experimentación digital.** AVARI'S//LAB registra el paso de la observación a la construcción: ideas, sistemas y prototipos que evolucionan mediante la práctica. Cada ficha captura una etapa del proceso, con espacio para lo que todavía está por descubrir.

Repositorio del frontend: [AvariAny/avaris-lab](https://github.com/AvariAny/avaris-lab).

## Objetivo y estado actual

El sitio presenta el laboratorio como un archivo editorial de proyectos: explica su enfoque, permite recorrer el índice y consultar fichas con descripciones, tecnologías y estado de avance. La interfaz adaptable y su tipografía forman parte de la presentación del archivo.

El frontend ya funciona en local. El contenido del archivo y sus demostraciones se implementan en la interfaz; este repositorio no acredita por sí mismo que los servicios o prototipos de cada ficha estén conectados o desplegados.

## Tecnologías del frontend

- React 19 y React DOM 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4 mediante `@tailwindcss/vite`, junto con CSS propio
- Oxfmt para formato de código
- npm y `package-lock.json` para instalar dependencias

## Requisitos y uso local

Se necesita Node.js compatible con Vite 8 y npm. Desde la raíz del frontend:

```bash
npm ci
npm run dev
```

Vite usa `8443` como puerto predeterminado para desarrollo y preview. La variable de entorno `PORT` permite elegir otro puerto.

Para generar y previsualizar la compilación local:

```bash
npm run build
npm run preview
```

`npm run format` ejecuta Oxfmt. El `package.json` no define un script de pruebas.

## Archivo de proyectos

El índice visible se define como datos estáticos en `src/App.tsx`. Contiene once fichas con identificador, nombre, categoría, estado, descripción, concepto, tecnologías, avance y un recurso visual. Los identificadores actuales son `011` y `01`–`10`; Emotion Risk Engine es la ficha `011`. La interfaz permite filtrar por categoría y estado, abrir fichas de detalle y ver Emotion Risk Engine como proyecto destacado. Actualizar este archivo modifica el contenido del índice; no equivale a implementar o conectar los sistemas descritos.

## Emotion Risk Engine

Emotion Risk Engine es un proyecto independiente del frontend y tiene su propio [repositorio](https://github.com/AvariAny/emotion-risk-engine). La ficha del sitio describe el motor como un proyecto experimental de clasificación de texto en español.

La demostración dentro de AVARI'S//LAB es simulada: no está conectada al modelo ni al backend. El texto y los resultados que muestra son ficticios y solo representan una posible interfaz futura. No debe interpretarse como análisis real ni como diagnóstico.

## Flujo de trabajo con Git

1. Parte de `main` limpia y crea una rama para el cambio, por ejemplo `feature/nombre-del-cambio`.
2. Mantén el cambio acotado a su objetivo y revisa `git status` y `git diff` antes de prepararlo.
3. Ejecuta `npm run build` para comprobar que el frontend compila. Revisa los cambios y prepara solo los archivos previstos.
4. Crea un commit con un mensaje breve que describa el cambio. Comparte la rama para revisión antes de integrarla en `main`.
5. La publicación requiere definir y verificar el destino de despliegue. Este README no documenta una URL ni un proceso de publicación configurado.

No se especifica aquí una política de nombres de rama, revisión o integración más allá de este flujo inicial; puede ajustarse al proceso del equipo.

## Roadmap inicial

- Mantener el archivo de proyectos al día y documentar los cambios de cada iniciativa.
- Aclarar el estado y alcance de cada proyecto conforme se validen sus avances.
- Documentar por separado cualquier integración futura entre el frontend y servicios independientes.
- Completar esta guía con decisiones verificadas de contribución y publicación cuando estén definidas.

La documentación es inicial y se actualizará conforme evolucione AVARI'S//LAB y se confirmen nuevos procesos.
