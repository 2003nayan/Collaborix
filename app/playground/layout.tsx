import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import { Suspense } from "react";
// import Loading from "@/components/Loading";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide dark:bg-zinc-900">
          {children}
        </div>
      </div>
    </>
  );
}
