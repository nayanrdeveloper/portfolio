'use client';

import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Experience } from '@/constant/experience';

type Props = Experience & {
    onMore: (exp: Experience) => void;
};

export const ExperienceCard = ({
    role,
    title,
    company,
    duration,
    image,
    companyUrl,
    onMore,
    ...rest
}: Props) => {
    const exp: Experience = {
        role,
        title,
        company,
        duration,
        image,
        companyUrl,
        ...rest,
    } as Experience;

    return (
        <Card className="bg-background mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 md:flex-row md:p-6">
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-auto md:w-[220px]">
                <Image src={image} alt={company} fill className="object-cover" priority />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4">
                <CardHeader className="space-y-2 p-0">
                    <Badge className="bg-pink-600 hover:bg-pink-700">{duration}</Badge>
                    <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{role}</p>
                    <p className="text-muted-foreground text-sm">{company}</p>
                </CardHeader>

                <div className="flex gap-3 pt-2">
                    <Button variant="secondary" onClick={() => onMore(exp)}>
                        More details
                    </Button>
                    {companyUrl && (
                        <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                        >
                            <Button variant="outline">Company page</Button>
                        </a>
                    )}
                </div>
            </div>
        </Card>
    );
};
