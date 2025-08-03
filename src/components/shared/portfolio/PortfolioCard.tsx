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
    <Card className="bg-background card-shadow hover:shadow-md transition-all h-full">
      <CardContent className="p-4 relative">
        {/* Top Right Icons */}
        {isExternal && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 text-muted-foreground hover:text-pink-500"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {isGallery && (
          <div className="absolute top-5 right-5 text-muted-foreground">
            <GalleryHorizontal className="w-4 h-4" />
          </div>
        )}

        {/* Thumbnail */}
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="rounded-md object-cover w-full h-[250px]"
        />

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
          <span className="uppercase text-pink-500 font-semibold">{item.category}</span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {item.views}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
      </CardContent>
    </Card>
  );
};
