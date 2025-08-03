'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EducationCardProps {
    degree: string;
    university: string;
    location: string;
    duration: string;
    image: string;
    buttonText?: string;
}

export const EducationCard = ({
    degree,
    university,
    location,
    duration,
    image,
    buttonText = 'Admission',
}: EducationCardProps) => {
    return (
        <Card className="bg-background mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 md:flex-row md:p-6">
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-auto md:w-[220px]">
                <Image src={image} alt={image} fill className="object-cover" priority />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4">
                <CardHeader className="space-y-2 p-0">
                    <span className="bg-primary text-primary-foreground inline-block w-fit rounded-full px-3 py-1 text-xs font-medium">
                        {duration}
                    </span>
                    <h3 className="text-lg font-semibold sm:text-xl">{degree}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{university}</p>
                    <p className="text-muted-foreground text-sm">{location}</p>
                </CardHeader>

                <CardContent className="p-0 pt-2">
                    <Button variant="secondary" size="sm">
                        {buttonText}
                    </Button>
                </CardContent>
            </div>
        </Card>
    );
};
