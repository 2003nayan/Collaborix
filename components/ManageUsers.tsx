"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { removeUserFromDocument } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import useOwner from "@/lib/useOwner";
import { useRoom } from "@liveblocks/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collectionGroup, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function ManageUsers() {
  const { user } = useUser();
  const isOwner = useOwner();
  const room = useRoom();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [usersInRoom] = useCollection(
    user && query(collectionGroup(db, "rooms"), where("roomId", "==", room.id))
  );

  const handleDelete = (userId: string) => {
    startTransition(async () => {
      if (!user) return;

      const { success } = await removeUserFromDocument(room.id, userId);

      if (success) {
        toast.success("User removed from room successfully");
      } else {
        toast.error("Failed to remove user from room");
      }
    });
  };

  const router = useRouter();

  useEffect(() => {
    if (!usersInRoom || !user) return;

    if (usersInRoom.docs.length === 0) return;

    const currentUserId = user.emailAddresses[0].toString();

    const isStillInRoom = usersInRoom.docs.some(
      (doc) => doc.data().userId === currentUserId
    );

    if (!isStillInRoom) {
      toast.error("The owner of the file has removed access from you.");
      router.push("/");
    }
  }, [usersInRoom, user, router]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline" className="dark:hover:bg-gray-700">
        <DialogTrigger>Users ({usersInRoom?.docs.length})</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with Access</DialogTitle>
          <DialogDescription>
            Below is the list of users who have access to this document.
          </DialogDescription>
        </DialogHeader>

        <hr className="my-2" />

        <div className="flex flex-col space-y-2">
          {usersInRoom?.docs.map((doc) => (
            <div
              key={doc.data().userId}
              className="flex items-center justify-between"
            >
              <p className="font-light">
                {doc.data().userId === user?.emailAddresses[0].toString()
                  ? `You (${doc.data().userId})`
                  : doc.data().userId}
              </p>

              <div className="flex items-center gap-2">
                <Button variant="outline">{doc.data().role}</Button>

                {isOwner &&
                  doc.data().userId !== user?.emailAddresses[0].toString() && (
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(doc.data().userId)}
                      disabled={isPending}
                      size="sm"
                    >
                      {isPending ? "Removing..." : "X"}
                    </Button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ManageUsers;
