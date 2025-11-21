# TechSolutions - Premium IT Solutions Website

## Overview

TechSolutions is a modern, full-stack web application for showcasing IT services and solutions. The application features a premium, futuristic design aesthetic with glassmorphism effects, built using React (Vite) for the frontend and Express.js for the backend. The site includes pages for services, portfolio, about, and contact forms, all designed with a focus on creating a high-end tech brand presence similar to companies like Vercel, Stripe, and Apple.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **Single Page Application (SPA)** architecture with client-side routing

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management, caching, and data synchronization
- Custom query client configuration with infinite stale time and disabled automatic refetching
- No global state management library needed - leveraging React Query and local component state

**UI Component System**
- **shadcn/ui** component library (New York style variant) with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design system
- Custom theme system with CSS variables for light/dark mode support
- Glassmorphism design pattern with backdrop blur and semi-transparent backgrounds
- Design guidelines emphasize premium tech aesthetic with neon accents and gradients

**Form Handling**
- **React Hook Form** for performant form state management
- **Zod** schema validation integrated via @hookform/resolvers
- Shared validation schemas between frontend and backend

**Design System Principles**
- Typography: Inter for UI/body, Space Grotesk/Outfit for headlines
- Spacing: Consistent Tailwind units (4, 8, 12, 16, 20, 24, 32)
- Color scheme: Dark-to-light gradients with electric blue accents
- Component patterns: Glassmorphic cards, hero sections, grid layouts
- Responsive breakpoints: Mobile-first with tablet (md) and desktop (lg) considerations

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API server
- **Node.js HTTP server** for handling requests
- Middleware stack includes JSON parsing with raw body preservation for webhooks
- Request logging middleware tracking response times and paths

**Environment-Specific Setup**
- **Development mode**: Vite dev server integration with HMR middleware
- **Production mode**: Serves pre-built static assets from dist/public
- Separate entry points (index-dev.ts vs index-prod.ts) for different environments

**API Design**
- RESTful endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Admin endpoints for retrieving submissions (`GET /api/contact/submissions`)
- Centralized error handling with Zod validation errors

**Data Validation**
- Shared Zod schemas between client and server (`@shared/schema`)
- Type-safe data contracts using TypeScript inference
- Input validation on all API endpoints

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** for type-safe database queries and schema management
- **PostgreSQL** as the primary database (configured for Neon serverless)
- Schema-first approach with TypeScript type inference
- Migration system using drizzle-kit

**Database Schema**
- **Users table**: Basic authentication with username/password (UUID primary keys)
- **Contact Submissions table**: Stores form submissions with name, email, phone, message, timestamp
- PostgreSQL-specific features: `gen_random_uuid()` for ID generation, timestamp defaults

**In-Memory Storage (Development/Fallback)**
- `MemStorage` class implementing `IStorage` interface
- Map-based storage for users and contact submissions
- Useful for development without database setup
- All storage operations return Promises for consistency with database implementation

**Static Data Management**
- Portfolio items, testimonials, services, team members, and FAQs stored as TypeScript constants
- Type-safe interfaces defined in shared schema
- No database needed for read-only content that rarely changes

### Authentication & Authorization

**Current Implementation**
- Basic user schema with username/password fields
- No active authentication middleware or session management implemented
- User creation and retrieval methods prepared in storage layer
- Ready for future authentication implementation (likely session-based given Express setup)

**Future Considerations**
- Session management infrastructure could use connect-pg-simple (already in dependencies)
- Password hashing would need implementation (bcrypt recommended)
- Protected routes and middleware not yet implemented

### Design & Styling System

**Theming Architecture**
- CSS custom properties (variables) for theme values
- ThemeProvider context for dark/light mode toggling
- LocalStorage persistence for theme preference
- Root-level class toggling (.dark) for theme switching

**Custom Design Tokens**
- Extended border radius values (lg: 9px, md: 6px, sm: 3px)
- Extensive color system with semantic naming (primary, secondary, muted, accent, destructive)
- Support for opacity modifiers using HSL color space
- Custom shadow utilities (shadow-2xs, shadow-xs, etc.)

**Component Patterns**
- GlassCard component with three variants (default, subtle, strong)
- Hover and active elevation states via custom CSS classes
- Scroll-based animations using Intersection Observer
- Responsive image handling with Unsplash placeholders

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react** - React support for Vite
- **express** - Web server framework
- **react** & **react-dom** - UI library
- **typescript** - Type safety across the stack

### Database & ORM
- **drizzle-orm** - Type-safe ORM for database operations
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **drizzle-kit** - CLI tool for migrations and schema management

### UI Component Libraries
- **@radix-ui/react-*** - Unstyled, accessible UI primitives (25+ components)
- **shadcn/ui** - Pre-styled components built on Radix UI
- **lucide-react** - Icon library
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styling
- **tailwind-merge** & **clsx** - Conditional class name utilities

### Form Management
- **react-hook-form** - Form state and validation
- **@hookform/resolvers** - Validation schema resolvers
- **zod** - Schema validation library

### Data Fetching
- **@tanstack/react-query** - Server state management and caching

### Routing
- **wouter** - Lightweight routing library for React

### Development Tools
- **@replit/vite-plugin-*** - Replit-specific development enhancements
- **tsx** - TypeScript execution for development server
- **esbuild** - JavaScript bundler for production builds

### Utility Libraries
- **nanoid** - Unique ID generation
- **date-fns** - Date manipulation
- **embla-carousel-react** - Carousel/slider component

### Build Configuration
- Path aliases configured: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`
- TypeScript strict mode enabled
- ESNext module system with bundler resolution
- PostCSS with Tailwind and Autoprefixer