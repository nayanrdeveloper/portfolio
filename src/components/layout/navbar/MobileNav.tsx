'use client';

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAVBAR_LINKS, SOCIAL_LINKS } from '@/constant/Navbar';

interface MobileNavProps {
    onHireMeClick: () => void;
}

export const MobileNav = ({ onHireMeClick }: MobileNavProps) => {
    const [open, setOpen] = useState(false);

    const handleHireMeClick = () => {
        setOpen(false);
        onHireMeClick();
    };

    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px] p-5">
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <div className="mb-4 flex flex-col items-center text-center">
                                <Image
                                    src="/user.jpg"
                                    alt="Avatar"
                                    width={60}
                                    height={60}
                                    className="mb-2 rounded-full"
                                />
                                <p className="text-muted-foreground text-sm">
                                    Inbio is a portfolio theme. You can customize everything.
                                </p>
                            </div>

                            <nav className="mt-6 flex flex-col gap-3">
                                {NAVBAR_LINKS.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="hover:text-primary text-sm uppercase"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-6 border-t pt-4">
                                <p className="text-muted-foreground mb-2 text-xs">Find with me</p>
                                <div className="flex gap-3">
                                    {SOCIAL_LINKS.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            aria-label={item.label}
                                        >
                                            <i className={`fab fa-${item.icon} text-xl`} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button className="mt-6 w-full" onClick={handleHireMeClick}>
                            Hire Me
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
