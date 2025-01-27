import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // Ensure `params` is a Promise
}

export default async function DocLayout({ children, params }: LayoutProps) {
  const { id } = await params;
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
