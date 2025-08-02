'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAVBAR_LINKS, SOCIAL_LINKS } from '@/constant/Navbar';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] p-5">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex flex-col items-center text-center mb-4">
                <Image
                  src="/user.jpg"
                  alt="Avatar"
                  width={60}
                  height={60}
                  className="rounded-full mb-2"
                />
                <p className="text-muted-foreground text-sm">
                  Inbio is a portfolio theme. You can customize everything.
                </p>
              </div>

              <nav className="flex flex-col gap-3 mt-6">
                {NAVBAR_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="uppercase text-sm hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t pt-4">
                <p className="text-xs text-muted-foreground mb-2">Find with me</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <Link key={item.label} href={item.href} aria-label={item.label}>
                      <i className={`fab fa-${item.icon} text-xl`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Button className="w-full mt-6" onClick={() => setOpen(false)}>
              Contact Me
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
