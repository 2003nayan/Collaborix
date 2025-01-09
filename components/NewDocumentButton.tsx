"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();

  function handleCreateNewDocument() {
    startTransition(async () => {
      
    });
  }
  return <Button onClick={handleCreateNewDocument}>New Document</Button>;
}

export default NewDocumentButton;
