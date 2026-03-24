# 🚀 NovelScript Engine (On review)

![Estado](<https://img.shields.io/badge/status-En_Desarrollo_(MVP)-orange.svg>)
![WebGPU](https://img.shields.io/badge/Graphics-WebGPU-purple.svg)
![WebAssembly](https://img.shields.io/badge/Core-C++%2FWasm-red.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript_ES2020-blue.svg)
![Vite](https://img.shields.io/badge/Bundler-Vite-9965f5.svg)

Un motor de novelas visuales de código abierto, diseñado desde cero para la web moderna. Construido con **C++ puro, WebAssembly y WebGPU**, con el objetivo de ofrecer 60 FPS estables en navegadores móviles y de escritorio, eliminando los megabytes de sobrecarga de los intérpretes tradicionales.

## 📖 El Problema que Resolvemos

Actualmente, exportar una novela visual a la web (como con el port actual de Ren'Py) implica obligar al jugador a descargar una pesada máquina virtual de Python compilada antes de ver un solo gráfico. Esto satura la memoria, causa tiempos de carga inaceptables en móviles y genera código espagueti al mezclar lógica dura con narrativa.

**NovelScript Engine** cambia el paradigma:

1. **Compilación AoT (Ahead-of-Time):** Un plugin personalizado de Vite lee tu historia y la traduce a código JavaScript ultraligero antes de empaquetar el juego. Cero intérpretes en tiempo de ejecución.
2. **Separación Estricta:** La historia se escribe en un DSL hermoso y simple. La lógica (inventarios, minijuegos) vive en archivos TypeScript paralelos.
3. **Rendimiento Nativo:** Todo el trabajo pesado matemático y gráfico corre en C++ crudo y WebAssembly, hablando directamente con la tarjeta gráfica a través de WebGPU.

## 🏗️ Arquitectura del Motor

El motor está diseñado sin dependencias innecesarias y se divide en 4 capas fundamentales:

- **1. Core (C++ / WebAssembly):** Desarrollado _from scratch_. Gestiona el bucle del juego, la matemática vectorial y la memoria lineal.
- **2. Renderizado (WebGPU):** Consumo directo de buffers de memoria desde Wasm hacia JavaScript para alimentar la API de WebGPU, garantizando el máximo rendimiento gráfico disponible en el navegador.
- **3. UI Overlay (HTML/DOM):** Para garantizar accesibilidad (A11y), soporte multilingüe y renderizado tipográfico perfecto, las interfaces y cajas de texto flotan por encima del Canvas 3D usando HTML. Configurable 100% mediante objetos JSON (fricción cero para artistas y escritores).
- **4. Compilador (Vite Custom Plugin):** Intercepta los archivos narrativos (`.dsl`) y genera el paquete de producción optimizado.

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Verificar tipos
npm run type-check

# Linting y formato
npm run lint
npm run format
```

## 🔐 Calidad de Código

- ✅ **TypeScript Strict** - Máxima seguridad de tipos
- ✅ **Sin `any` implícito ni explícito** - Enforced por ESLint
- ✅ **Indentación de 8 espacios** - Configurada en Prettier
- ✅ **ESLint + Prettier** - Código consistente
- ✅ **No plugins de Vite** - Solo lo esencial
- ✅ **Source maps** - Para debugging en producción

## 📦 Estructura del Proyecto

```
novelscriptjs/
├── src/
│   ├── index.ts                    # API pública
│   ├── core/engine.ts              # Motor principal
│   ├── wasm/                       # Soporte WebAssembly
│   └── types/                      # Tipos TypeScript
├── dist/                           # Build output (ESM + UMD + Types)
├── submodules/*                    # Paquetes acoplados
├── packages/*                      # Paquetes independientes
└── [Configuración]                 # tsconfig, vite, eslint, etc
```

Ver [CONFIG_README.md](CONFIG_README.md) para detalles completos de la configuración.

## 📚 Documentación

- [CONFIG_README.md](CONFIG_README.md) - Especificaciones técnicas y configuración
- [DEVELOPMENT.md](DEVELOPMENT.md) - Guía de desarrollo
- [STRUCTURE.md](STRUCTURE.md) - Estructura del proyecto

## 🗺️ Roadmap del MVP (6 Meses)

### Fase 1: Core Engine (Mes 1-2)

- [ ] Compilador DSL → JavaScript
- [ ] Hot Module Replacement (HMR) para historias
- [ ] Bucle principal del juego

### Fase 2: Renderizado (Mes 2-3)

- [ ] WebGPU básico (triángulos, texturas)
- [ ] Sistema de capas (background, personajes, UI)
- [ ] Transiciones y efectos visuales

### Fase 3: WebAssembly (Mes 3-4)

- [ ] Compilación C++ → WebAssembly
- [ ] Math vectorial optimizada
- [ ] Sistema de memoria lineal

### Fase 4: Prototipo Jugable (Mes 4-6)

- [ ] Demo de novela visual funcional
- [ ] UI overlay (HTML)
- [ ] Sistema de guardado (IndexedDB)

## 📄 Licencia

MIT - Libre para uso comercial y personal

## 👨‍💻 Autor

**MikeDev64** - Creador y mantenedor

---

⭐ Si te gusta el proyecto, considera dejar una estrella en GitHub!
