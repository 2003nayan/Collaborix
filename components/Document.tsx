"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import Avatars from "./Avatars";

function Document({ id }: { id: string }) {
  console.log("Document component rendered");
  const [data, loading] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };

  return (
    <div className="flex-1 h-full bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        {loading ? (
          <div className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 flex flex-col gap-1">
              <form
                className="flex flex-1 space-x-3 mb-4"
                onSubmit={updateTitle}
              >
                <div className="flex-1 relative group">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-gray-50 focus:bg-white border-gray-200 focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                    placeholder="Document Title"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300" />
                </div>

                <Button
                  disabled={isUpdating}
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {isUpdating ? "Updating..." : "Update"}
                </Button>
                {isOwner && (
                  <div className="flex space-x-3">
                    <InviteUser />
                    <DeleteDocument />
                  </div>
                )}
              </form>

              <div className="flex justify-between items-center">
                <ManageUsers />
                <Avatars />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <Editor />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Document;
