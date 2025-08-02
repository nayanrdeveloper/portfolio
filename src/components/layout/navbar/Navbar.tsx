"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-muted bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          INBIO
        </Link>
        <nav className="space-x-4 hidden md:block">
          {["I AM", "MY EXPERIENCE", "EDUCATION", "RESUME", "PORTFOLIO", "BLOG", "CONTACTS"].map(
            (item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm hover:text-primary transition">
                {item}
              </Link>
            )
          )}
        </nav>
        <ThemeToggle />
        <Button variant="default" size="sm" className="hidden md:inline-block">
          Hire Me
        </Button>
      </div>
    </header>
  );
};
