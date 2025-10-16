# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Create production build  
- `npm run start`: Start production server
- `npm run lint`: Run ESLint to check code quality

## Architecture Overview

Collaborix is a real-time collaborative document editing application built with Next.js 15, using App Router architecture.

### Core Technologies
- **Framework**: Next.js 15 with Turbopack for development
- **Authentication**: Clerk for user management
- **Real-time Collaboration**: Liveblocks for real-time document editing and cursor tracking
- **Database**: Firebase for document persistence  
- **Editor**: BlockNote for rich text editing
- **Styling**: Tailwind CSS with Shadcn/UI components
- **State Management**: React hooks with Liveblocks providers

### Key Architecture Patterns

**App Router Structure:**
- `/app` contains pages and API routes using Next.js App Router
- `/app/doc/[id]` handles individual document editing with dynamic routing
- `/app/api` contains server-side API endpoints (auth, invitations)

**Real-time Collaboration Stack:**
- Liveblocks handles real-time synchronization between users
- `LiveBlocksProvider` wraps the app for global real-time state
- `RoomProvider` creates isolated collaboration rooms per document
- Cursor tracking and presence awareness through `LiveCursorProvider`

**Component Architecture:**
- UI components in `/components` follow Shadcn/UI patterns
- Business logic components (Editor, Document, ChatToDocument, etc.) handle specific features
- Provider components manage global state (theme, authentication, real-time)

**Authentication Flow:**
- Clerk handles user authentication and session management
- `/app/auth-endpoint/route.ts` bridges Clerk auth with Liveblocks
- User metadata flows through Liveblocks for real-time presence

### Important File Locations

- **Liveblocks config**: `liveblocks.config.ts` - TypeScript definitions for real-time data structures
- **Types**: `/types/types.ts` - Core TypeScript interfaces
- **Utilities**: `/lib/` - Helper functions including Liveblocks client setup
- **Editor**: `/components/Editor.tsx` - Main BlockNote editor integration
- **Document management**: `/components/Document.tsx` - Document CRUD operations

### Environment Variables Required

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
LIVEBLOCKS_SECRET_KEY=
```

### Development Notes

- Uses Firebase Firestore for document persistence with real-time listeners
- Liveblocks rooms are created per document for isolated collaboration spaces
- Theme switching supported via next-themes with system preference detection
- Email invitations handled through Resend API integration
- All real-time features require proper Liveblocks room setup and user authentication
- BlockNote editor integrates with Yjs for collaborative editing via LiveblocksYjsProvider
- User presence and cursors managed through Liveblocks presence system
- Document collaboration uses Y.Doc fragments for conflict-free editing

### Key Dependencies and Integration Points

- **Yjs Integration**: Editor uses Y.Doc with LiveblocksYjsProvider for real-time collaborative editing
- **BlockNote Editor**: Rich text editor with Shadcn theming support
- **Firebase Admin**: Server-side Firebase operations for document management
- **Clerk Session Claims**: User metadata (email, name, avatar) flows from Clerk to Liveblocks
- **Content Security Policy**: Configured for Resend email service integration