# 🚀 Proyecto Ecommerce – Next.js + DDD Architecture

Este proyecto es un Ecommerce moderno construido con Next.js, TypeScript, TailwindCSS y una arquitectura inspirada en Domain-Driven Design (DDD).

Incluye autenticación de usuario, páginas privadas, carrito persistente, manejo de productos, carrusel inteligente y separación clara entre vistas, lógica de negocio y comunicación con APIs.

## 🛠️ Tecnologías principales

**Next.js (App Router)**

**TypeScript**

**TailwindCSS**

**DDD (Domain-Driven Design)**

**Axios**

**Node.js 22+**

## 📂 Estructura de Carpetas (Arquitectura DDD)

Inspirada en Domain-Driven Design, la app separa las responsabilidades por dominios y no por tipo de archivo.

```bash
├── app/
│ ├── layout.tsx # Layout raíz
│ ├── page.tsx # Página principal
│ ├── inicio/ # Página de inicio de sesión
│ ├── registro/ # Página de registro
│ ├── private/ # Páginas con acceso privado
│ │ ├── productos/ # Página de catálogo
│ │ └── carrito/ # Página de carrito
│
├── components/ # Componentes reutilizables
│ ├── ui/ # Botones, Navbar, Footer, Inputs, Modales...
│ └── ecommerce/ # ProductCard, CartItem, etc.
│
├── features/ # Lógica por dominio
│ ├── cart/
│ ├── usuario/
│ └── productos/
│ └── carrusel/
│
├── hooks/ # Custom hooks (useCarrito, useAuth, etc.)
├── services/ # Llamadas a APIs internas/externas
├── styles/ # Styles globals / Tailwind config
├── public/ # Imágenes y archivos estáticos
│
├── proxy.ts # Middleware para rutas protegidas
├── next.config.js # Configuración de Next.js
└── tsconfig.json # Configuración de TypeScript
```

## ▶️ Guía para Levantar el Proyecto desde Cero

**-1️⃣ Clonar el repositorio**

```
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```

**-2️⃣ Instalar dependencias**

```
npm install
```

o

```
pnpm install
```

**-3️⃣ Crear archivo _.env_**

Debe contener las variables de entorno necesarias.

Ejemplo:

```
NEXT_PUBLIC_API_URL=https://tubackend.com
```

**-4️⃣ Ejecutar en modo desarrollo**

```
npm run dev
```

El proyecto se abrirá en:

_http://localhost:3000_

**-5️⃣ Build para producción**

```
npm run build
npm run start
```

## 🔒 Autenticación y Rutas Protegidas

Después del login exitoso, el front crea una cookie no sensible (isLoggedIn=true).

El middleware _proxy.ts_ controla el acceso a /private/\*.

Para consumir APIs protegidas del backend, se usa:

```
axios(API_URL, { credentials: "include" });
```

## ⚙️ Scripts disponibles

```
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}
```
