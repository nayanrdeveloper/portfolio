'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export type HygraphProjectCard = {
    id: string;
    title: string;
    slug: string;
    mainImage?: { url: string; width?: number; height?: number } | null;
};

interface Props {
    item: HygraphProjectCard;
    setSelectedProject: (slug: string) => void;
}

export const PortfolioCard = ({ item, setSelectedProject }: Props) => {
    const img = item.mainImage;

    return (
        <div className="block h-full">
            <Card
                className="bg-background card-shadow h-full transition-all hover:shadow-md"
                onClick={() => setSelectedProject(item.slug)}
            >
                <CardContent className="p-4">
                    {/* Thumbnail */}
                    <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-md">
                        {img?.url ? (
                            <Image
                                src={img.url}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 33vw, 100vw"
                                priority={false}
                            />
                        ) : (
                            <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center rounded-md text-xs">
                                No image
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 text-lg font-semibold">{item.title}</h3>
                </CardContent>
            </Card>
        </div>
    );
};
