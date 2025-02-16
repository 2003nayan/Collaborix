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
      className={`border block px-3 py-2 rounded-lg
        transition-all duration-200 ease-in-out
        hover:bg-gray-100 ${
          isActive ? "bg-gray-300 font-bold border-black" : "border-gray-400"
        }`}
    >
      <p className="truncate text-black">{data.title}</p>
    </Link>
  );
}

export default SidebarOption;
