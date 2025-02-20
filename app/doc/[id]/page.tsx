"use client";

import React, { useState, useEffect } from "react";
import Document from "@/components/Document";

function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-900">
      {!isHydrated ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      ) : (
        <Document id={id} />
      )}
    </div>
  );
}

export default DocumentPage;
