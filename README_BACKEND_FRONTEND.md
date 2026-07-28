# Backend & Frontend Separation Guide

## Overview
This Next.js project follows a clear separation between backend and frontend code, making it easy to maintain and scale.

---

## 🔧 Backend (API Layer)

### Location
```
src/app/api/
```

### Components
1. **Contact API** (`src/app/api/contact/route.ts`)
   - Handles contact form submissions
   - Processes and validates form data
   - Sends email notifications or stores data
   - Returns JSON responses

### Backend Characteristics
- Server-side only code
- No React components
- Direct database/external API access
- Environment variable access
- API route handlers (GET, POST, etc.)

### How to Add New Backend Routes
1. Create a new folder in `src/app/api/`
2. Add a `route.ts` file
3. Export route handlers (GET, POST, PUT, DELETE, etc.)

Example:
```typescript
// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Process data
  return NextResponse.json({ success: true });
}
```

---

## 🎨 Frontend (UI Layer)

### Location
```
src/app/              # Pages (Next.js App Router)
src/components/       # React components
src/data/            # Static data
src/lib/             # Utilities
src/types/           # TypeScript types
```

### Component Structure

#### 1. **Pages** (`src/app/`)
- `layout.tsx` - Root layout (Server Component)
- `page.tsx` - Home page (Client Component)
- `globals.css` - Global styles

#### 2. **Components** (`src/components/`)

**Canvas Components** (`components/canvas/`)
- 3D graphics and Three.js components
- Client-side only
- Interactive 3D elements

**DOM Components** (`components/dom/`)
- Main page sections
- All marked as `'use client'`
- Handle user interactions

**UI Components** (`components/ui/`)
- Reusable elements
- Buttons, cards, animations
- Generic and composable

#### 3. **Data** (`src/data/`)
- Static content (projects, services, navigation)
- Easily editable
- No business logic

#### 4. **Library** (`src/lib/`)
- Utility functions
- Animation configurations
- Constants
- Helper functions

#### 5. **Types** (`src/types/`)
- TypeScript interfaces
- Type definitions
- Shared types

---

## 📋 File Organization Rules

### ✅ Backend Files Should:
- Be in `src/app/api/` directory
- Export route handlers
- Handle server-side logic
- Access environment variables
- Communicate with databases/external APIs

### ✅ Frontend Files Should:
- Use `'use client'` directive for interactive components
- Handle UI rendering
- Manage client-side state
- Process user interactions
- Use React hooks

### ✅ Shared Files Can:
- Live in `src/lib/` (utilities)
- Live in `src/types/` (types)
- Live in `src/data/` (static data)
- Be imported by both backend and frontend

---

## 🔄 Communication Flow

```
User Interaction (Frontend)
        ↓
Client Component (DOM/UI)
        ↓
Fetch/API Call
        ↓
API Route (Backend)
        ↓
External Service/Database
        ↓
JSON Response
        ↓
Update UI State
```

Example:
```typescript
// Frontend (ContactSection.tsx)
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
});

// Backend (api/contact/route.ts)
export async function POST(request: Request) {
  const data = await request.json();
  // Process...
  return NextResponse.json({ success: true });
}
```

---

## 🚀 Development Guidelines

### Adding a New Feature

1. **If it requires server-side logic:**
   - Create API route in `src/app/api/`
   - Add server-side processing
   - Return JSON response

2. **If it's a UI component:**
   - Create in appropriate `src/components/` subfolder
   - Add `'use client'` if interactive
   - Import and use in pages/sections

3. **If it's data:**
   - Add to `src/data/`
   - Export as constants
   - Import where needed

### Environment Variables
- Create `.env.local` for sensitive data
- Access in API routes: `process.env.VARIABLE_NAME`
- Never expose in client components

---

## 📦 Current Backend API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Submit contact form |

---

## 🎯 Benefits of This Structure

1. **Clear Separation**: Easy to identify frontend vs backend code
2. **Scalability**: Simple to add new features
3. **Maintainability**: Organized and logical structure
4. **Security**: Server-side code stays on server
5. **Performance**: Client bundles don't include server code
6. **Type Safety**: TypeScript across entire stack

---

## 📝 Notes

- All client components use `'use client'` directive
- Server components render on server (layout.tsx)
- API routes automatically handle CORS
- Static data in `src/data/` for easy updates
- Animations configured in `src/lib/animations.ts`