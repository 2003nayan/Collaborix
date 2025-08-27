# Collaborix

Collaborix is a real-time collaborative document editing application built with Next.js, Liveblocks, and Firebase. It provides a seamless and interactive user experience for creating and editing documents with others.

## Features

*   **Real-time Collaboration:** Multiple users can edit the same document simultaneously.
*   **Rich Text Editor:** A powerful and intuitive editor based on Blocknote.
*   **User Authentication:** Secure user authentication with Clerk.
*   **Document Management:** Create, delete, and manage your documents.
*   **Invite Users:** Invite other users to collaborate on your documents.
*   **Dark Mode:** A beautiful dark mode for a better user experience.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (with Turbopack)
*   **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/)
*   **Authentication:** [Clerk](https://clerk.com/)
*   **Backend Services:** [Firebase](https://firebase.google.com/)
*   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Editor:** [Blocknote](https://www.blocknotejs.org/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (version 20 or higher)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/2003nayan/collaborix.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Set up your environment variables. Create a `.env.local` file in the root of the project and add the following:

    ```
    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    # Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=

    # Liveblocks
    LIVEBLOCKS_SECRET_KEY=
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Creates a production build.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the code.

## Folder Structure

```
.
├── app/
│   ├── api/
│   ├── auth-endpoint/
│   ├── doc/
│   └── playground/
├── components/
│   └── ui/
├── lib/
├── public/
└── types/
```

*   `app/`: Contains the main application logic, including pages and API routes.
*   `components/`: Contains reusable React components.
*   `lib/`: Contains utility functions and library configurations.
*   `public/`: Contains static assets.
*   `types/`: Contains TypeScript type definitions.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## Deployment

The application is deployed on this url: [collaborix.space](https://www.collaborix.space/)