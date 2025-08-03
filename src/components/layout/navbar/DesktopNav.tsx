'use client';

import { NAVBAR_LINKS } from '@/constant/Navbar';
import Link from 'next/link';

export const DesktopNav = () => {
    return (
        <nav className="hidden gap-6 md:flex">
            {NAVBAR_LINKS.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-primary text-sm font-medium uppercase transition"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};
