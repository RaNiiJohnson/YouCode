"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const mutation = useMutation({
    mutationFn: async () => signOut(),
  });

  return (
    <div>
      <Button onClick={() => mutation.mutate()} size="sm" variant="destructive">
        {mutation.isPending ? (
          <Loader size={12} className="mr-2" />
        ) : (
          <LogOut size={12} className="mr-2" />
        )}
        Logout
      </Button>
    </div>
  );
}
