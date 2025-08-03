'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const ProfileImage = () => {
    return (
        <Card className="bg-background flex flex-1 flex-col overflow-hidden p-4 md:p-6">
            <CardContent className="flex items-center justify-center p-0">
                <div className="relative h-[360px] w-full overflow-hidden rounded-md sm:h-[400px]">
                    <Image
                        src="/profile_pic2.jpg"
                        alt="Nayan Radadiya"
                        fill
                        className="rounded-md object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                    />
                </div>
            </CardContent>
        </Card>
    );
};
