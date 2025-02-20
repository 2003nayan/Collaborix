"use client";

import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import LiveCursorProvider from "./LiveCursorProvider";

function RoomProvider({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      {/* Render children directly for collaborative editing */}
      {children}

      {/* Wrap cursor functionality in ClientSideSuspense */}
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        {() => (
          <LiveCursorProvider>
            <div style={{ display: "none" }} />
          </LiveCursorProvider>
        )}
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
}

export default RoomProvider;
