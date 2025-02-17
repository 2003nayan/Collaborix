"use client";

import { useRoom } from "@liveblocks/react";
import { useEffect, useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteEditor } from "@blocknote/core";
// import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import stringToColor from "@/lib/stringToColor";
import { useSelf } from "@liveblocks/react/suspense";
import TranslateDocument from "./TranslateDocument";
import ChatToDocument from "./ChatToDocument";

type EditorProps = {
  doc: Y.Doc;
  // provider: any;
  provider: LiveblocksYjsProvider;
  darkMode: boolean;
};

function BlockNote({ doc, provider, darkMode }: EditorProps) {
  const userInfo = useSelf((me) => me.info);
  const editor: BlockNoteEditor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userInfo?.name,
        color: stringToColor(userInfo?.email),
      },
    },
  });

  return (
    <div className="relative max-w-6xl mx-auto p-6 rounded-lg shadow-sm">
      <BlockNoteView
        editor={editor}
        theme={darkMode ? "dark" : "light"}
        className="min-h-screen border rounded-lg"
      />
    </div>
  );
}

function Editor() {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  const [provider, setProvider] = useState<LiveblocksYjsProvider>();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const yDoc = new Y.Doc();
    const yProvider = new LiveblocksYjsProvider(room, yDoc);
    setDoc(yDoc);
    setProvider(yProvider);

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }

  const style = `hover:text-white transition-all duration-200 rounded-lg px-4 py-2 ${
    darkMode
      ? "text-gray-300 bg-gray-800 hover:bg-gray-700"
      : "text-gray-700 bg-gray-100 hover:bg-gray-200"
  }`;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-4 justify-end mb-8 sticky top-4 z-10 bg-opacity-80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
        <TranslateDocument doc={doc} />
        <ChatToDocument doc={doc} />

        <Button
          className={`${style} flex items-center gap-2`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <SunIcon size={18} />
            </>
          ) : (
            <>
              <MoonIcon size={18} />
            </>
          )}
        </Button>
      </div>

      <BlockNote doc={doc} provider={provider} darkMode={darkMode} />
    </div>
  );
}

export default Editor;
