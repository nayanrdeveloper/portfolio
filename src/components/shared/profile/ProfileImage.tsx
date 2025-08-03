// components/profile/ProfileImage.tsx
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const ProfileImage = () => {
    return (
        <Card className="bg-background flex flex-1 flex-col overflow-hidden">
            <CardContent className="flex-1 p-0">
                <div className="relative h-full min-h-[400px] w-full">
                    <Image
                        src="/user.jpg"
                        alt="Profile"
                        fill
                        className="rounded-md object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
            </CardContent>
        </Card>
    );
};
