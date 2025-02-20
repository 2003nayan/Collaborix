import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: "Collaborix",
  description: "AI powered collaboration tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-background text-foreground dark:bg-slate-950">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
                {children}
              </div>
            </div>

            <Toaster position="top-center" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
