# Gemini Code Assistant Guide for Collaborix

This guide provides instructions for the Gemini code assistant on how to interact with the Collaborix codebase.

## Project Overview

Collaborix is a real-time collaborative document editing application built with Next.js. It uses a modern tech stack to provide a seamless and interactive user experience.

### Key Technologies

- **Framework:** [Next.js](https://nextjs.org/) (with Turbopack)
- **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Backend Services:** [Firebase](https://firebase.google.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Development

### Getting Started

To run the development server, use the following command:

```bash
npm run dev
```

This will start the Next.js development server with Turbopack.

### Building the Project

To create a production build, run:

```bash
npm run build
```

### Linting

To check for linting errors, use:

```bash
npm run lint
```

## Codebase Structure

The codebase is organized into the following main directories:

- `app/`: Contains the main application logic, including pages and API routes.
- `components/`: Contains reusable React components.
- `lib/`: Contains utility functions and library configurations.
- `public/`: Contains static assets.
- `types/`: Contains TypeScript type definitions.

### Important Files

- `liveblocks.config.ts`: Configuration for the Liveblocks client.
- `firebase.ts`: Firebase client-side configuration.
- `firebase-admin.ts`: Firebase admin SDK configuration.
- `next.config.ts`: Next.js configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.

## How to Help

When assisting with the Collaborix codebase, please adhere to the following guidelines:

- **Follow existing code style and conventions.**
- **Use the existing libraries and frameworks.**
- **Ensure that any new components are responsive and accessible.**
- **Write clean, readable, and well-documented code.**
- **For any new feature, please add relevant tests.**
