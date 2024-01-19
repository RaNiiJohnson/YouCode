import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getAuthSession();
  if (!session?.user.id) {
    notFound();
  }
  return (
    <div>
      <h1>{session.user.name}</h1>
      <h2>{session.user.email}</h2>
    </div>
  );
}
