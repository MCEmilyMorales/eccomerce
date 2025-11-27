TIPO DE ARQUITECTURA inspirado en:
Domain-Driven Design (DDD)

├── app/  
│ ├── layout.tsx # Layout raíz
│ ├── page.tsx # Página principal
│ ├── carrito/ # Página de carrito
│ ├── inicio/ # Página de inicio de sesión
│ ├── registro/ # Página de registro
│ ├── productos/ # Página de catálogo
│ ├── producto/[slug]/ # Página de detalle de producto
│ └── checkout/ # Página de checkout
├── components/ # Componentes reutilizables (UI y específicos)
│ ├── ui/ # Botones, inputs, modales, etc.
│ └── ecommerce/ # ProductCard, CartItem, etc.
├── features/ # Lógica por dominio (carrito, usuario, etc.)
│ ├── carrito/
│ ├── usuario/
│ └── productos/
├── hooks/ # Custom hooks (ej. useCarrito, useAuth)
├── lib/ # Utilidades, helpers, clientes API
├── services/ # Llamadas a APIs externas o internas
├── styles/ # Archivos CSS/SCSS o Tailwind config
├── public/ # Imágenes y archivos estáticos
├── proxy.ts # Middleware para rutas protegidas
├── next.config.js # Configuración de Next.js
└── tsconfig.json # Configuración de TypeScript
