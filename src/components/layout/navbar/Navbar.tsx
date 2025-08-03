'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
    return (
        <header className="border-muted bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Image
                        src="/user.jpg"
                        alt="Logo"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                    <span className="text-foreground">INBIO</span>
                </Link>

                {/* Center nav */}
                <DesktopNav />

                {/* Right items */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Button variant="default" size="sm" className="hidden md:inline-flex">
                        Hire Me
                    </Button>

                    {/* Mobile Nav */}
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};
