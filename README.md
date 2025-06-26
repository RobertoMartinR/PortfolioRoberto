# 🚀 Portfolio Profesional - Desarrollador

Un portfolio profesional moderno construido con Next.js 14, integración de AI mediante RAG (Retrieval Augmented Generation), y optimizado para deployment en Vercel.

## 📋 Características Principales

- **Portfolio Interactivo**: Presentación profesional con proyectos, experiencia y habilidades
- **Chatbot AI Inteligente**: Sistema RAG que permite consultas sobre tu experiencia profesional
- **Diseño Moderno**: UI/UX optimizada con Tailwind CSS y shadcn/ui
- **Performance Optimizada**: Next.js 14 con App Router y Edge Functions
- **Base de Datos Vectorial**: Almacenamiento eficiente para búsquedas semánticas
- **Deploy Automático**: Configurado para Vercel con CI/CD

## 🏗️ Estructura del Proyecto

```
my-portfolio/
├── apps/
│   └── web/                    # Aplicación principal Next.js
│       ├── app/                # App Router (Next.js 14)
│       │   ├── layout.tsx      # Layout principal
│       │   ├── page.tsx        # Página de inicio
│       │   ├── api/            # API Routes
│       │   │   └── chat/       # Endpoint del chatbot
│       │   │       └── route.ts
│       │   └── rag/            # Sistema RAG
│       │       ├── ingest.ts   # Ingestión de documentos
│       │       ├── query.ts    # Consultas vectoriales
│       │       └── utils.ts    # Utilidades RAG
│       ├── components/         # Componentes React
│       │   ├── ui/            # Componentes base (shadcn/ui)
│       │   ├── portfolio/     # Componentes específicos del portfolio
│       │   └── chat/          # Componentes del chatbot
│       ├── lib/               # Librerías y configuraciones
│       │   ├── db/           # Configuración base de datos
│       │   ├── ai/           # Configuración AI/OpenAI
│       │   └── utils.ts      # Utilidades generales
│       ├── styles/           # Estilos globales
│       ├── public/           # Archivos estáticos
│       │   ├── images/       # Imágenes del portfolio
│       │   └── resume.pdf    # CV en PDF
│       └── tests/            # Pruebas unitarias
├── packages/                 # Monorepo packages
│   ├── ui/                  # Design system compartido
│   │   ├── components/      # Componentes UI base
│   │   └── styles/         # Estilos compartidos
│   └── config/             # Configuraciones compartidas
│       ├── eslint/         # Configuración ESLint
│       ├── typescript/     # Configuración TypeScript
│       └── tailwind/       # Configuración Tailwind
├── data/                   # Datos para indexar en RAG
│   ├── resume.md          # CV en formato Markdown
│   ├── projects.md        # Descripción de proyectos
│   ├── experience.md      # Experiencia profesional
│   └── skills.md          # Habilidades técnicas
├── scripts/               # Scripts de automatización
│   ├── setup.js          # Script de configuración inicial
│   ├── build-sitemap.js  # Generación de sitemap
│   └── test.js           # Script de pruebas
├── .env.local.example     # Variables de entorno de ejemplo
├── vercel.json           # Configuración Vercel
├── package.json          # Dependencias principales
└── turbo.json            # Configuración Turborepo
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14**: Framework React con App Router
- **React 19**: Biblioteca de UI más reciente
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componentes UI modernos y accesibles
- **Radix UI**: Primitivos de UI accesibles

### Backend & AI
- **Vercel AI SDK**: Integración sencilla con modelos de AI
- **LangChain**: Framework para aplicaciones LLM
- **OpenAI GPT**: Modelo de lenguaje para el chatbot
- **Vercel Edge Functions**: Funciones serverless optimizadas

### Base de Datos
- **Drizzle ORM**: ORM TypeScript-first
- **Vercel Postgres**: Base de datos PostgreSQL gestionada
- **pgvector**: Extensión para búsquedas vectoriales
- **Pinecone/Supabase Vector**: Alternativas para vector store

### Herramientas de Desarrollo
- **Turborepo**: Monorepo para optimizar builds
- **ESLint**: Linting de código
- **Prettier**: Formateo de código
- **Husky**: Git hooks
- **Commitlint**: Validación de commits
- **Vitest**: Framework de testing rápido

## 🚀 Fases de Desarrollo

### Fase 1: Configuración Inicial y Base del Proyecto (Semana 1)

#### 1.1 Setup del Monorepo
- [ ] Inicializar proyecto con Turborepo
- [ ] Configurar estructura de carpetas
- [ ] Setup de TypeScript y configuraciones base
- [ ] Configurar ESLint, Prettier y Husky

#### 1.2 Aplicación Next.js Base
- [ ] Crear aplicación Next.js 14 con App Router
- [ ] Configurar Tailwind CSS
- [ ] Instalar y configurar shadcn/ui
- [ ] Crear layout principal y página de inicio

#### 1.3 Design System
- [ ] Crear tokens de diseño (colores, tipografías, espaciados)
- [ ] Desarrollar componentes base del UI package
- [ ] Implementar tema claro/oscuro
- [ ] Documentar componentes con Storybook (opcional)

### Fase 2: Desarrollo del Portfolio (Semana 2)

#### 2.1 Páginas Principales
- [ ] Página de inicio con hero section
- [ ] Sección "Sobre mí"
- [ ] Página de proyectos con filtros
- [ ] Página de experiencia profesional
- [ ] Página de contacto

#### 2.2 Componentes del Portfolio
- [ ] Componente ProjectCard
- [ ] Timeline de experiencia
- [ ] Skill badges y progress bars
- [ ] Formulario de contacto
- [ ] Navegación responsive

#### 2.3 Contenido y Datos
- [ ] Crear archivos Markdown en `/data`
- [ ] Implementar sistema de gestión de contenido
- [ ] Optimizar imágenes y assets
- [ ] Configurar SEO básico

### Fase 3: Sistema RAG y Chatbot (Semana 3)

#### 3.1 Configuración de la Base de Datos
- [ ] Setup Vercel Postgres o Supabase
- [ ] Configurar Drizzle ORM
- [ ] Crear esquemas para documentos y embeddings
- [ ] Implementar migraciones

#### 3.2 Sistema de Ingestión RAG
- [ ] Desarrollar parser para archivos Markdown/PDF
- [ ] Implementar chunking de documentos
- [ ] Crear embeddings con OpenAI
- [ ] Almacenar vectores en base de datos

#### 3.3 Motor de Consultas
- [ ] Implementar búsqueda por similaridad
- [ ] Desarrollar sistema de retrieval
- [ ] Optimizar relevancia de resultados
- [ ] Implementar cache de consultas

### Fase 4: Chatbot e Integración AI (Semana 4)

#### 4.1 API del Chatbot
- [ ] Crear endpoint `/api/chat`
- [ ] Implementar streaming de respuestas
- [ ] Integrar sistema RAG
- [ ] Manejar errores y rate limiting

#### 4.2 Interfaz del Chat
- [ ] Diseñar componente ChatBot
- [ ] Implementar UI de conversación
- [ ] Añadir indicadores de typing
- [ ] Crear mensajes predefinidos

#### 4.3 Experiencia de Usuario
- [ ] Integrar chat en el portfolio
- [ ] Añadir sugerencias contextuales
- [ ] Implementar historial de conversación
- [ ] Optimizar para móviles

### Fase 5: Testing y Optimización (Semana 5)

#### 5.1 Testing
- [ ] Configurar Vitest o Jest
- [ ] Escribir tests unitarios para componentes
- [ ] Tests de integración para API
- [ ] Tests E2E con Playwright

#### 5.2 Performance y SEO
- [ ] Optimizar Core Web Vitals
- [ ] Implementar SSG donde sea posible
- [ ] Configurar meta tags dinámicos
- [ ] Generar sitemap automático
- [ ] Implementar schema.org markup

#### 5.3 Accesibilidad
- [ ] Auditoría de accesibilidad
- [ ] Implementar navegación por teclado
- [ ] Añadir ARIA labels
- [ ] Testing con lectores de pantalla

### Fase 6: Deploy y CI/CD (Semana 6)

#### 6.1 Configuración de Vercel
- [ ] Configurar proyecto en Vercel
- [ ] Setup de variables de entorno
- [ ] Configurar dominios custom
- [ ] Optimizar build para Edge Functions

#### 6.2 CI/CD Pipeline
- [ ] Configurar GitHub Actions
- [ ] Automatizar tests en PR
- [ ] Deploy automático a staging/production
- [ ] Configurar notificaciones

#### 6.3 Monitoreo y Analytics
- [ ] Integrar Vercel Analytics
- [ ] Configurar error tracking (Sentry)
- [ ] Setup de métricas de performance
- [ ] Monitoreo de uptime

## ⚙️ Configuración e Instalación

### Prerrequisitos
- Node.js 18+ y npm/yarn/pnpm
- Cuenta en Vercel
- API Key de OpenAI
- Base de datos PostgreSQL (Vercel Postgres/Supabase)

### Instalación Local

```bash
# Clonar el repositorio
git clone <repository-url>
cd my-portfolio

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local

# Ejecutar migraciones de base de datos
npm run db:migrate

# Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno

Crea un archivo `.env.local` basado en `.env.local.example`:

```env
# OpenAI
OPENAI_API_KEY=sk-...

# Base de datos
DATABASE_URL=postgresql://...
POSTGRES_URL=postgresql://...
POSTGRES_PRISMA_URL=postgresql://...

# Vercel (en producción)
VERCEL_URL=your-domain.vercel.app

# Opcional: Analytics
VERCEL_ANALYTICS_ID=...
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Build para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript

# Base de datos
npm run db:generate  # Generar migraciones
npm run db:migrate   # Ejecutar migraciones
npm run db:studio    # Abrir Drizzle Studio

# Testing
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:e2e     # Tests end-to-end

# RAG
npm run rag:ingest   # Ingestar documentos al vector store
npm run rag:query    # Probar consultas RAG

# Utilidades
npm run sitemap      # Generar sitemap
npm run format       # Formatear código con Prettier
```

## 🚢 Deploy en Vercel

### Deploy Automático
1. Conecta tu repositorio GitHub a Vercel
2. Configura las variables de entorno en el dashboard
3. El deploy se ejecutará automáticamente en cada push

### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Configuración vercel.json
```json
{
  "framework": "nextjs",
  "functions": {
    "app/api/chat/route.ts": {
      "runtime": "edge"
    }
  },
  "env": {
    "OPENAI_API_KEY": "@openai-api-key",
    "DATABASE_URL": "@database-url"
  }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Tu Nombre** - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

**Portfolio**: [https://tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)

**LinkedIn**: [https://linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil! 