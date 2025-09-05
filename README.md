GreenConnect - Lawn Care Service Marketplace Waitlist

Overview
GreenConnect is a full-stack web application designed as a waitlist landing page for a lawn care service marketplace that connects homeowners with trusted lawn care professionals. The application serves as a pre-launch marketing tool, allowing homeowners to join a waitlist for priority access to verified professionals. The application features a modern, responsive design with real-time waitlist tracking toward a 500-signup milestone, location-based targeting via ZIP codes, and an engaging user experience focused on convenience, reliability, and quality lawn care services.
User Preferences

Preferred communication style: Simple, everyday language.

System Architecture
Frontend Architecture
The client-side application is built using React with TypeScript, leveraging modern frontend patterns and tools. The architecture follows a component-based design with clear separation of concerns:
⦁	UI Framework: React with TypeScript for type safety and developer experience
⦁	Styling: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
⦁	State Management: TanStack Query (React Query) for server state management and caching
⦁	Routing: Wouter for lightweight client-side routing
⦁	Form Handling: React Hook Form with Zod validation for type-safe form management
⦁	Build System: Vite for fast development and optimized production builds
The frontend follows a modular component structure with reusable UI components, page-level components, and shared utilities. The design system uses CSS custom properties for theming and maintains a consistent green-focused color palette aligned with the environmental theme.

Backend Architecture
The server-side application uses Node.js with Express.js, implementing a RESTful API pattern:
⦁	Runtime: Node.js with Express.js framework
⦁	API Design: RESTful endpoints with JSON request/response format
⦁	Data Validation: Zod schemas for runtime type checking and validation
⦁	Error Handling: Centralized error handling middleware with structured error responses
⦁	Development: Hot-reload development server with integrated client/server setup
The backend currently implements in-memory storage through a storage abstraction layer, making it easy to swap out for database persistence later. The API focuses on waitlist management with endpoints for signup creation and statistics retrieval.
Data Storage Solutions
The application implements a flexible storage architecture with an interface-based approach:
⦁	Storage Interface: Abstract IStorage interface defining data operations
⦁	Current Implementation: In-memory storage using JavaScript Map for development and testing
⦁	Database Ready: Drizzle ORM configuration with PostgreSQL schema definitions prepared for production deployment
⦁	Schema Design: Waitlist signup table with fields for ID, email, first name, and creation timestamp
The storage layer is designed to be easily replaceable, with the database schema already defined using Drizzle ORM for seamless migration to PostgreSQL when needed.
Authentication and Authorization
Currently, the application operates as a public waitlist without authentication requirements. The architecture is prepared for future authentication implementation with session management capabilities already configured through connect-pg-simple for PostgreSQL session storage.

External Dependencies
UI and Styling
⦁	Tailwind CSS: Utility-first CSS framework for responsive design
⦁	Radix UI: Headless UI components for accessibility and functionality
⦁	Lucide React: Icon library for consistent iconography
⦁	shadcn/ui: Pre-built component library built on Radix UI primitives

Development and Build Tools
⦁	Vite: Fast build tool and development server
⦁	TypeScript: Static type checking and enhanced developer experience
⦁	ESBuild: Fast JavaScript bundler for production builds
⦁	PostCSS: CSS processing and optimization

Backend Dependencies
⦁	Express.js: Web application framework for Node.js
⦁	Drizzle ORM: Type-safe SQL ORM with PostgreSQL support
⦁	Zod: Schema validation library for runtime type checking
⦁	tsx: TypeScript execution environment for development

Database and Storage
⦁	PostgreSQL: Configured as the target production database (Neon Database)
⦁	Drizzle Kit: Database migration and schema management tools
⦁	connect-pg-simple: PostgreSQL session store for Express sessions

Third-party Integrations
⦁	Unsplash: External image service for high-quality stock photography
⦁	Google Fonts: Web font service for typography (Inter, DM Sans, Fira Code, Geist Mono)
The application is designed to be deployment-ready with environment-based configuration and production optimization features built in.
