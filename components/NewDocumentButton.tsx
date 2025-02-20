"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; // You are leveraging React Server Components to use the `useRouter` hook, the application using /pages directory
import { createNewDocument } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
// import { useRouter } from "next/router";   // This is the traditional way to use the `useRouter` hook, the application using /src or /app directory

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { isSignedIn } = useUser();

  function handleCreateNewDocument() {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  }

  return (
    <>
      {isPending && (
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
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-medium text-zinc-200">
                  Creating document...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleCreateNewDocument}
              disabled={!isSignedIn || isPending}
              className="min-w-[140px] transition-all duration-200 hover:opacity-90 hover:shadow-sm"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V2M12 22v-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M4 12H2M22 12h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Creating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4v16m-8-8h16"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  New Document
                </span>
              )}
            </Button>
          </TooltipTrigger>
          {!isSignedIn && (
            <TooltipContent>
              <p>Please sign in to create a new document</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default NewDocumentButton;
