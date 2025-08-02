'use client';

import { NAVBAR_LINKS } from '@/constant/Navbar';
import Link from 'next/link';

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-6">
      {NAVBAR_LINKS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium hover:text-primary transition uppercase"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
