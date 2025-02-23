"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";
import { Button } from "./ui/button";
import { Shapes } from "lucide-react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
function Header() {
  const { user } = useUser();
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:bg-zinc-950">
      <div className="flex items-center justify-between p-4 mx-5">
        <div onClick={redirectToHome} className="cursor-pointer">
          {user ? (
            <h1 className="text-xl md:text-2xl font-medium">
              {user.firstName}
              <span>{"'s"}</span> Space
            </h1>
          ) : (
            <h1 className="text-xl md:text-2xl font-[600] flex items-center gap-2.5 hover:text-primary/90 transition-colors cursor-pointer">
              <Shapes className="h-5 w-5 md:h-6 md:w-6" />
              Collaborix
            </h1>
          )}
        </div>

        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <SignedOut>
            <Button variant="default" asChild className="font-medium">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default Header;
