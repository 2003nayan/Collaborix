import Header from "@/components/Header";
import RoomProvider from "@/components/RoomProvider";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function DocLayout({ children, params }: LayoutProps) {
  const { id } = await params;
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide dark:bg-zinc-900">
          <RoomProvider roomId={id}>{children}</RoomProvider>
        </div>
      </div>
    </>
  );
}
