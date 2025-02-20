import { useDocument } from "@/hooks/use-document";

export default function DocumentPage() {
  const document = useDocument();

  if (document === undefined) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="rounded-lg bg-zinc-900/90 p-6 shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-12 w-12">
                <svg
                  className="absolute h-full w-full animate-spin-slow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V2M12 22v-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M4 12H2M22 12h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-40"
                  />
                </svg>
                <svg
                  className="absolute h-full w-full animate-spin-reverse-slower"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V2M12 22v-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M4 12H2M22 12h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                </svg>
              </div>
              <p className="text-sm text-zinc-400">Preparing document...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ... rest of the component
}
