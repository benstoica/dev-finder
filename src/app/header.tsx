"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

import { useSession, signIn, signOut } from "next-auth/react";

export const Header = () => {
  const session = useSession();
  return (
    <header>
      <div>
        {session.data ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};
