'use client';

import React from 'react';
import { Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';
import { navbarItemList } from '@/constants/NavbarConstant';
import { profileConstant } from '@/constants/ProfileConstant';

export default function MainNavbar() {
    return (
        <nav>
            <div className="flex items-center justify-between p-8">
                <div className="flex items-center space-x-2">
                    <div>
                        <Avatar
                            img={'/myImage.jpeg'}
                            alt={profileConstant.shortName}
                            rounded
                        />
                    </div>
                    <p className="text-xl font-semibold">
                        {profileConstant.fullName}
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <ul className="flex space-x-4 leading-4 text-primary">
                        {navbarItemList.map((navItem, index) => (
                            <li key={index} className="cursor-pointer">
                                {navItem.name}
                            </li>
                        ))}
                    </ul>
                    <DarkThemeToggle />
                </div>
            </div>
        </nav>
    );
}
