import { getAuthSession } from "@/lib/auth";
import { SiteConfig } from "@/lib/site-config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { Typography } from "../ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LoginButton } from "./auth/LoginButton";

export async function Header() {
  const session = await getAuthSession();
  if (!session?.user.id) {
    notFound();
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            {session.user ? (
              <Avatar size="default">
                <AvatarImage src={session.user.image ?? ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <LoginButton />
            )}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
