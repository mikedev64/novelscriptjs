# ⚙️ Configuración de NPM Library - NovelScript Engine

## 📦 Especificaciones Aplicadas

### 1. **TypeScript + ESLint + Prettier**

- ✅ **tsconfig.json** - ES2020, strict mode activado
- ✅ **No any implícito**: `noImplicitAny: true`
- ✅ **No any explícito**: ESLint rule `@typescript-eslint/no-explicit-any: "error"`
- ✅ **.eslintrc.json** - Strict type checking con `@typescript-eslint/parser`
- ✅ **.prettierrc.json** - Tab size de 8 espacios

### 2. **Vite para Empaquetar Librerías**

- ✅ **vite.config.ts** - `lib` mode activado
- ✅ Salida dual: **ES modules** y **UMD** bundles
- ✅ Source maps incluidos para debugging
- ✅ Minificación automática con Terser
- ✅ **CERO plugins** - Solo Vite vanilla

### 3. **Exportación de Tipos**

- ✅ `declaration: true` - Genera `.d.ts` automáticamente
- ✅ `declarationMap: true` - Source maps para tipos
- ✅ `outDir: dist` - Tipos en la carpeta de distribución
- ✅ **package.json** `types` field apunta a `dist/index.d.ts`

### 4. **Configuración para Navegador**

- ✅ `target: "ES2020"` - Navegadores modernos
- ✅ `lib: ["ES2020", "DOM", "DOM.Iterable", "WebWorker"]`
- ✅ `moduleResolution: "bundler"` - Estándar para librerías NPM
- ✅ **Soporte WebWorker** para operaciones concurrentes

### 5. **Soporte para WebAssembly**

- ✅ Carpeta dedicada: `src/wasm/`
- ✅ Clase **`WasmModule`** para cargar y gestionar `.wasm`
- ✅ Utilidades: `getWasmMemory()`, `readWasmString()`, `writeWasmString()`
- ✅ Path alias: `@wasm/*` → `src/wasm/*`
- ✅ Sin plugins personalizados (Vite maneja `.wasm` nativamente en ES2020+)

### 6. **CERO Plugins Adicionales**

- ✅ Solo dependencias esenciales:
     - `vite` - Bundler
     - `typescript` - Compilador
     - `@typescript-eslint/*` - Linting tipado
     - `eslint` - Linter
     - `prettier` - Formateador

---

## 📁 Estructura de Carpetas

```
novelscriptjs/
├── src/
│   ├── index.ts                    # 🎯 Punto de entrada (API pública)
│   ├── core/
│   │   └── engine.ts               # Motor principal
│   ├── wasm/                       # ⚡ WebAssembly
│   │   └── index.ts                # Cargador y utilidades
│   └── types/
│       └── index.ts                # Tipos TypeScript
│
├── dist/                           # 📦 Output (generado por build)
│   ├── index.js                    # ES Module
│   ├── index.umd.js                # UMD Bundle
│   ├── index.d.ts                  # Tipos TypeScript
│   ├── index.d.ts.map              # Source map de tipos
│   └── wasm/
│       ├── index.js
│       ├── index.d.ts
│       └── index.d.ts.map
│
├── package.json                    # Configuración NPM
├── tsconfig.json                   # TypeScript (ES2020)
├── vite.config.ts                  # Bundler (sin plugins)
├── .eslintrc.json                  # ESLint (no any)
├── .prettierrc.json                # Prettier (8 espacios)
└── .gitignore
```

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev                # Inicia servidor de desarrollo (port 5173)

# Build
npm run build              # Compila TypeScript + Vite → dist/

# Preview
npm run preview            # Previsualizacion del build

# Calidad de código
npm run type-check         # Verifica tipos sin emitir
npm run lint               # Ejecuta ESLint
npm run lint:fix           # Fix automático de ESLint
npm run format             # Formatea con Prettier
```

---

## 📦 Exportaciones NPM

### Importación principal

```typescript
import { Engine, WasmModule } from 'novelscriptjs'
import type { EngineConfig } from 'novelscriptjs'
```

### Importación de WebAssembly

```typescript
import { WasmModule, getWasmMemory } from 'novelscriptjs/wasm'
```

---

## 🔧 Características Clave

### Sin `any` Explícito o Implícito

```typescript
// ❌ No permitido (ESLint error)
const data: any = fetchSomething()

// ✅ Correcto (types explícitos)
const data: EngineConfig = fetchSomething()
```

### Indentación de 8 Espacios

Configurada en `.prettierrc.json`:

```json
{
        "tabWidth": 8,
        "useTabs": false
}
```

### TypeScript Strict

Todas las opciones strict en `tsconfig.json`:

- `strict: true`
- `noImplicitAny: true`
- `noUncheckedIndexedAccess: true`
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`

### Vite Library Mode

```typescript
// En vite.config.ts
lib: {
  entry: resolve(__dirname, 'src/index.ts'),
  name: 'NovelScriptJS',
  formats: ['es', 'umd'],
}
```

---

## 🎯 Pasos para Publicar en NPM

1. **Compilar:**

      ```bash
      npm run build
      ```

2. **Probar localmente:**

      ```bash
      npm link
      ```

3. **Publicar:**
      ```bash
      npm publish
      ```

---

## 📝 Notas Importantes

- **No hay plugins de Vite**: Vite maneja WebAssembly y otros assets nativamente
- **Types automáticos**: TypeScript genera `.d.ts` durante la compilación
- **Source maps**: Habilitados para debugging en producción
- **ESM + UMD**: Dos formatos para máxima compatibilidad
- **Monorepo ready**: `workspaces` configurados para submódulos y paquetes

---

¡Tu librería NPM está lista para desarrollar y publicar! 🎉
