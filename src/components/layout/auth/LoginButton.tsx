"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <div>
      <Button onClick={() => signIn()}>Login</Button>
    </div>
  );
};
