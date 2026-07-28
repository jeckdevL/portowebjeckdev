# Hydration Error Fixes

## What is Hydration?
Hydration is when React attaches event listeners to the HTML that was pre-rendered on the server. For this to work correctly, the server-rendered HTML must match exactly what React would render on the client.

## Common Causes of Hydration Errors

1. **Dynamic Content** - Using `Date.now()`, `Math.random()`, or other functions that produce different values on server vs client
2. **Browser-only APIs** - Accessing `window`, `document`, `localStorage` during render
3. **Invalid HTML Nesting** - e.g., `<p>` inside `<p>`, `<div>` inside `<p>`, etc.
4. **Conditional Rendering Based on Client State** - Rendering different content on first render vs subsequent renders

## Fixes Applied in This Project

### 1. All Client Components Properly Marked
Every component using hooks or browser APIs has `'use client'` directive:
- ✅ All canvas components (Three.js requires client)
- ✅ All DOM section components (use animations and interactions)
- ✅ All UI components (use Framer Motion and interactions)

### 2. Server Components Use Default Rendering
- `layout.tsx` - Server component (no 'use client')
- Provides stable, consistent HTML structure

### 3. Browser API Access in useEffect
Any browser-specific code runs only after mount:
```typescript
useEffect(() => {
  // Access window, document, localStorage here
}, []);
```

### 4. No Dynamic Content in Initial Render
- No `Math.random()` in component body
- No `Date.now()` in JSX
- Random values generated in `useEffect` or animation loops

### 5. Proper HTML Nesting
- No invalid nesting (e.g., div inside p)
- Semantic HTML structure
- Valid button/anchor element usage

## Best Practices to Avoid Hydration Issues

### ✅ DO:
```typescript
// Use 'use client' for interactive components
'use client';
import { useState } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null; // Or loading state
  
  return <div>{/* Browser-dependent content */}</div>;
}
```

### ❌ DON'T:
```typescript
// Don't access window during render
export default function Component() {
  const width = window.innerWidth; // ❌ Error!
  return <div>{width}</div>;
}

// Don't use random values in render
export default function Component() {
  return <div>{Math.random()}</div>; // ❌ Hydration mismatch!
}
```

## Debugging Hydration Errors

1. **Check Browser Console** - Look for detailed error messages
2. **Compare Server/Client HTML** - React will log differences
3. **Verify 'use client' Directives** - Ensure all interactive components have it
4. **Check for Dynamic Content** - Look for time-based or random content
5. **Validate HTML Structure** - Use HTML validator

## Current Project Status

✅ **All components properly configured**
- Client components marked with 'use client'
- Server components render stable HTML
- Browser APIs accessed only in useEffect
- No dynamic content in initial renders

✅ **Clean HTML structure**
- Valid semantic HTML
- Proper element nesting
- No invalid combinations

✅ **Type-safe implementation**
- TypeScript prevents many hydration issues
- Proper prop types
- Consistent interfaces

## If You Still See Errors

1. **Clear .next cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Check browser extensions:**
   - Extensions can inject HTML causing hydration mismatches
   - Try in incognito mode

3. **Update dependencies:**
   ```bash
   npm update
   ```

4. **Verify Node version:**
   - Ensure using Node.js 18+ (recommended for Next.js 16)

## References

- [Next.js Hydration Docs](https://nextjs.org/docs/messages/react-hydration-error)
- [React Hydration Docs](https://react.dev/reference/react-dom/client/hydrateRoot)