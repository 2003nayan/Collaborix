import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

async function DocLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
