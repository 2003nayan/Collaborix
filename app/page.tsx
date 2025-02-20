"use client";

import { ArrowLeftCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main className="flex space-x-2 items-center animate-pulse dark:text-white">
      <ArrowLeftCircle className="w-12 h-12" />
      {isSignedIn ? (
        <h1 className="font-bold">Click here to get started!</h1>
      ) : (
        <h1 className="font-bold">
          Enjoy all the features of Collaborix by signing in first
        </h1>
      )}
    </main>
  );
}
