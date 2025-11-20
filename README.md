# Game App - React Native with FSD Architecture

A React Native mobile application built with Expo and following Feature-Sliced Design (FSD) architecture principles.

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology for a scalable and maintainable codebase structure.

### Folder Structure

```
src/
├── app/                    # Application initialization layer
├── screens/                # Full screen views
├── widgets/                # Complex UI blocks
├── features/               # User interactions & features
├── entities/               # Business entities
└── shared/                 # Reusable infrastructure
    ├── ui/                 # UI kit components
    ├── lib/                # Utilities & helpers
    └── assets/             # Static files
```

### Layer Hierarchy

```
app → screens → widgets → features → entities → shared
```

Each layer can only import from layers below it. This is enforced by ESLint.

## 📦 Scripts

```bash
# Start development server
npm start

# Start on Android
npm run android

# Start on iOS
npm run ios

# Start web version
npm run web

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# TypeScript type checking
npm run type-check
```

## 🔧 Configuration

### TypeScript

- **Strict mode enabled** - All strict TypeScript checks are on
- **Path aliases** configured:
  - `@app/*` → `src/app/*`
  - `@screens/*` → `src/screens/*`
  - `@widgets/*` → `src/widgets/*`
  - `@features/*` → `src/features/*`
  - `@entities/*` → `src/entities/*`
  - `@shared/*` → `src/shared/*`

### ESLint

- **FSD boundaries** enforced via `eslint-plugin-boundaries`
- **TypeScript** rules via `@typescript-eslint`
- **React** and **React Hooks** rules enabled

## 📝 Development Guidelines

### Import Rules

```typescript
// ✅ GOOD: Lower layer imports
import { useUserStore } from '@entities/user';
// ❌ BAD: Upper layer imports (will be caught by ESLint)
import { UserScreen } from '@screens/user';
import { Button } from '@shared/ui';
```

### File Naming Conventions

- **Components**: `PascalCase.tsx`
- **Hooks**: `camelCase.ts` (e.g., `useHook.ts`)
- **Utils**: `camelCase.ts`
- **Types**: `types.ts`
- **Constants**: `constants.ts`
- **Public API**: `index.ts`

### Code Style

- **No default exports** - use named exports only
- **No `any` types** - use generics or proper typing
- **Explicit return types** for functions
- **Double quotes** for strings
- **Semicolons** required
- **2 space indentation**

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm start
   ```

3. Run on your device:
   - Scan QR code with Expo Go app
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## 📚 Resources

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

## ✅ Validation Before Commit

Run these commands before committing:

```bash
npm run type-check  # Ensure no TypeScript errors
npm run lint        # Check for linting issues
```

---

For detailed FSD architecture guidelines, see `FSD_REACT_NATIVE_STARTER_GUIDE.md`
