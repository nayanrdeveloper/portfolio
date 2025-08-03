'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface ExperienceCardProps {
    role: string;
    title: string;
    company: string;
    duration: string;
    image: string;
}

export const ExperienceCard = ({ role, title, company, duration, image }: ExperienceCardProps) => {
    return (
        <Card className="bg-background mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 md:flex-row md:p-6">
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-auto md:w-[220px]">
                <Image src={image} alt={company} fill className="object-cover" priority />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4">
                <CardHeader className="space-y-2 p-0">
                    <span className="bg-primary text-primary-foreground inline-block w-fit rounded-full px-3 py-1 text-xs font-medium">
                        {duration}
                    </span>
                    <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{role}</p>
                    <p className="text-muted-foreground text-sm">{company}</p>
                </CardHeader>

                <CardContent className="p-0 pt-2">
                    <Button variant="secondary" size="sm">
                        Contact Me
                    </Button>
                </CardContent>
            </div>
        </Card>
    );
};
