"use client";

import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOption({ href, id }: { href: string; id: string }) {
  const [data] = useDocumentData(doc(db, "documents", id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";

  if (!data) return null;
  return (
    <Link
      href={href}
      className={`border border-gray-300 dark:border-slate-800 px-3 py-2 rounded-lg
        transition-all duration-200 ease-in-out
        hover:bg-accent
        ${
          isActive
            ? "bg-accent/80 font-bold border-primary"
            : "border-muted hover:border-muted-foreground"
        }`}
    >
      <p className="truncate text-foreground">{data.title}</p>
    </Link>
  );
}

export default SidebarOption;
