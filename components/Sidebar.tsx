"use client";

import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

function Sidebar() {
  const { user } = useUser();
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });
  const [data] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }

        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);

  // Reset groupedData when user signs out
  useEffect(() => {
    if (!user) {
      setGroupedData({
        owner: [],
        editor: [],
      });
    }
  }, [user]);

  const menuOptions = (
    <>
      <div className="flex items-center justify-center">
        <NewDocumentButton />
      </div>
      <div className="flex py-4 flex-col space-y-6">
        {/* My Docs */}
        {groupedData.owner.length === 0 ? (
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg">
            <p className="text-muted-foreground text-sm font-medium">
              NO DOCUMENTS FOUND
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-2">
              <h2 className="text-muted-foreground font-medium text-sm tracking-wide uppercase">
                MY DOCUMENTS
              </h2>
              <span className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                {groupedData.owner.length}
              </span>
            </div>
            {groupedData.owner.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
            ))}
          </>
        )}

        {/* My List */}
        {/* Share with me */}
        {groupedData.editor.length > 0 && (
          <>
            <h2 className="text-muted-foreground font-semibold text-sm">
              Shared With Me
            </h2>
            {groupedData.editor.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
            ))}
          </>
        )}
      </div>
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-background border-r dark:border-slate-800 dark:bg-zinc-950">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              className="p-2 hover:bg-accent hover:rounded-lg transition-all"
              size={40}
            />
          </SheetTrigger>
          <SheetContent side={"left"} className="dark:bg-slate-950">
            <SheetHeader>
              <SheetTitle className="dark:text-white">Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}

export default Sidebar;
