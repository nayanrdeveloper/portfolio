'use client';

import { PortfolioItem } from './portfolioCardType';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, ExternalLink, GalleryHorizontal } from 'lucide-react';
import Image from 'next/image';

interface Props {
    item: PortfolioItem;
}

export const PortfolioCard = ({ item }: Props) => {
    const isExternal = item.type === 'external';
    const isGallery = item.type === 'gallery';

    return (
        <Card className="bg-background card-shadow h-full transition-all hover:shadow-md">
            <CardContent className="relative p-4">
                {/* Top Right Icons */}
                {isExternal && (
                    <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground absolute top-5 right-5 hover:text-pink-500"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </a>
                )}

                {isGallery && (
                    <div className="text-muted-foreground absolute top-5 right-5">
                        <GalleryHorizontal className="h-4 w-4" />
                    </div>
                )}

                {/* Thumbnail */}
                <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-[250px] w-full rounded-md object-cover"
                />

                {/* Meta Info */}
                <div className="text-muted-foreground mt-2 flex items-center justify-between text-xs">
                    <span className="font-semibold text-pink-500 uppercase">{item.category}</span>
                    <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {item.views}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            </CardContent>
        </Card>
    );
};
