"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; // You are leveraging React Server Components to use the `useRouter` hook, the application using /pages directory
import { createNewDocument } from "@/actions/actions";
// import { useRouter } from "next/router";   // This is the traditional way to use the `useRouter` hook, the application using /src or /app directory

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocument() {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  }
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}

export default NewDocumentButton;