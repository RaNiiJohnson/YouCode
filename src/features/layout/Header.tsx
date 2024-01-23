import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Typography } from "../../components/ui/Typography";
import { AuthButton } from "./auth/AuthButton";

export async function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Typography variant="h3" as={Link} href="/">
            <Image
              src="/images/logo-text.png"
              width={100}
              height={40}
              alt={SiteConfig.title}
            />
          </Typography>
        </div>

        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
