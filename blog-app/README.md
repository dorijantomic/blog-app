## Project Folder Structure

/blog-app
├── /public # Static files (images, favicons, etc.)
├── /src # Source code
│ ├── /app # App Router (Next.js 13+ specific)
│ │ ├── /api # API routes
│ │ │ ├── /auth # Authentication-related APIs
│ │ │ └── /posts # Blog post-related APIs
│ │ ├── /dashboard # Admin/dashboard pages
│ │ │ ├── /posts # Manage blog posts
│ │ │ └── /users # Manage users (optional)
│ │ ├── /posts # Public-facing blog pages
│ │ │ ├── /[id] # Dynamic route for individual post
│ │ ├── /auth # Authentication pages (login/register)
│ │ └── /layout.tsx # Shared layout for the application
│ │ └── /page.tsx # Homepage
│ ├── /components # Reusable React components
│ │ ├── /ui # ShadCN/UI components
│ │ ├── Navbar.tsx # Navigation bar
│ │ └── Footer.tsx # Footer component
│ ├── /lib # Utility functions and libraries
│ │ ├── /auth # Authentication helpers
│ │ ├── /prisma.ts # Prisma client instance
│ │ └── /supabase.ts # Supabase client instance
│ ├── /styles # Styling files
│ │ ├── globals.css # Global styles
│ │ ├── tailwind.css # Tailwind configuration
│ ├── /types # TypeScript type definitions
│ │ └── index.d.ts # Global TypeScript types
│ └── /hooks # Custom React hooks
│ └── useAuth.ts # Authentication hook
├── .env.local # Environment variables
├── prisma # Prisma schema and migrations
│ ├── schema.prisma # Database schema
│ └── migrations # Generated migrations
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
└── package.json # Project dependencies

## Notes

- **Public Directory (`/public`)**: Contains static assets such as images, favicons, and other static files.
- **Source Directory (`/src`)**:
  - `/app`: The main app router for Next.js 13+, including pages, API routes, and layouts.
  - `/components`: Houses reusable React components, including ShadCN/UI elements.
  - `/lib`: Utility libraries such as Prisma and Supabase client instances.
  - `/styles`: Contains global and Tailwind CSS styles.
  - `/types`: TypeScript type definitions for better type safety.
  - `/hooks`: Custom hooks like authentication helpers.
- **Prisma Directory (`/prisma`)**: Manages database schema and migration files.
- **Configuration Files**:
  - `.env.local`: Stores sensitive environment variables.
  - `tailwind.config.js`: Tailwind CSS configuration.
  - `tsconfig.json`: TypeScript configuration.
  - `next.config.js`: Next.js project configuration.
- **Dependencies**: Defined in `package.json`.
