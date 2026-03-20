# 🚀 NovelScript Engine (On review)

![Estado](https://img.shields.io/badge/status-En_Desarrollo_(MVP)-orange.svg)
![WebGPU](https://img.shields.io/badge/Graphics-WebGPU-purple.svg)
![WebAssembly](https://img.shields.io/badge/Core-C++%2FWasm-red.svg)

Un motor de novelas visuales de código abierto, diseñado desde cero para la web moderna. Construido con **C++ puro, WebAssembly y WebGPU**, con el objetivo de ofrecer 60 FPS estables en navegadores móviles y de escritorio, eliminando los megabytes de sobrecarga de los intérpretes tradicionales.

## 📖 El Problema que Resolvemos

Actualmente, exportar una novela visual a la web (como con el port actual de Ren'Py) implica obligar al jugador a descargar una pesada máquina virtual de Python compilada antes de ver un solo gráfico. Esto satura la memoria, causa tiempos de carga inaceptables en móviles y genera código espagueti al mezclar lógica dura con narrativa.

**[Nombre de tu Motor]** cambia el paradigma:
1. **Compilación AoT (Ahead-of-Time):** Un plugin personalizado de Vite lee tu historia y la traduce a código JavaScript ultraligero antes de empaquetar el juego. Cero intérpretes en tiempo de ejecución.
2. **Separación Estricta:** La historia se escribe en un DSL hermoso y simple. La lógica (inventarios, minijuegos) vive en archivos TypeScript paralelos. 
3. **Rendimiento Nativo:** Todo el trabajo pesado matemático y gráfico corre en C++ crudo y WebAssembly, hablando directamente con la tarjeta gráfica a través de WebGPU.

## 🏗️ Arquitectura del Motor

El motor está diseñado sin dependencias innecesarias y se divide en 4 capas fundamentales:

* **1. Core (C++ / WebAssembly):** Desarrollado *from scratch*. Gestiona el bucle del juego, la matemática vectorial y la memoria lineal.
* **2. Renderizado (WebGPU):** Consumo directo de buffers de memoria desde Wasm hacia JavaScript para alimentar la API de WebGPU, garantizando el máximo rendimiento gráfico disponible en el navegador.
* **3. UI Overlay (Preact + DOM):** Para garantizar accesibilidad (A11y), soporte multilingüe y renderizado tipográfico perfecto, las interfaces y cajas de texto flotan por encima del Canvas 3D usando HTML/Preact. Configurable 100% mediante objetos JSON (fricción cero para artistas y escritores).
* **4. Compilador (Vite Custom Plugin):** Intercepta los archivos narrativos (`.dsl`) y genera el paquete de producción optimizado, con soporte completo para *Hot Module Replacement* (HMR) en desarrollo.

## 📝 Ejemplo de Flujo de Trabajo

Escribe tu historia sin distracciones. La lógica se inyecta desde afuera.

**`capitulo1.dsl` (Narrativa pura)**
```dsl
scene bg_school
show character alice at center

alice "¡Hola! Bienvenida al nuevo motor."
alice "¿Quieres guardar la partida antes de continuar?"

menu:
    "Sí, guardar":
        trigger save_game
        alice "¡Partida guardada!"
    "No, gracias":
        alice "¡Sigamos entonces!"
```

**`capitulo1.ts` (Lógica espejo)**
```typescript
import { Engine } from '@motor/api';

Engine.on('save_game', () => {
    // Tu lógica compleja o llamadas a librerías NPM aquí
    Engine.System.saveToIndexedDB();
    console.log("Estado global guardado en la web.");
});
```

**`dialog.screen.config.ts` (UI Configuración)**
```typescript
export default PantallaDialogo.defineConfig({
    colorFondo: "rgba(0, 0, 0, 0.8)",
    fuente: "Arial, sans-serif",
    mostrarBotonGuardar: true,
});
```

## 🗺️ Roadmap del MVP (6 Meses)

- [ ] **Fase 1: Core de Bajo Nivel:** Setup de C++ a Wasm (sin Emscripten/Glue code). Mapeo estricto de memoria compartida.
- [ ] **Fase 2: Motor Gráfico:** Implementación de WebGPU bindings. Dibujo de texturas, sprites y manejo de shaders básicos.
- [ ] **Fase 3: El Compilador:** Desarrollo del plugin de Vite para parsear la sintaxis base del `.dsl` (texto, personajes, fondos, menús).
- [ ] **Fase 4: Sistema de UI:** Capa DOM Overlay usando Preact y configuración JSON para la interfaz de usuario. Enlace de eventos (clics) hacia el core en Wasm.
- [ ] **Fase 5 (Futuro):** Editor Visual Web de nodos (Drag & Drop) gratuito para creadores, con Live Preview sincronizado con Vite HMR.

## 🤝 Contribuir y Comunidad

El motor está naciendo. Todo el proceso de desarrollo, investigación y arquitectura se documentará abiertamente. 

📺 **Sigue el desarrollo en YouTube:** [Enlace a tu canal]
💬 **Únete a la discusión:** [Enlace a Discord/Foro]

---
*Diseñado con pasión para los creadores de historias que exigen el mejor rendimiento de la web.*
```

***

**Notas adicionales para ti:**
* Este README funciona como un "manifiesto". Deja claro de inmediato por qué tu proyecto existe y por qué es superior a las herramientas actuales.
* Si a futuro decides usar una extensión diferente a `.dsl` (por ejemplo, `.vn`, `.story`, `.txt`), simplemente actualizas los bloques de código.
* Las etiquetas (badges) al inicio le dan un aspecto súper profesional. GitHub las renderizará como imágenes con colores cuando subas el archivo.

¿Qué te parece? ¿Refleja la visión y la ambición que hemos estructurado?