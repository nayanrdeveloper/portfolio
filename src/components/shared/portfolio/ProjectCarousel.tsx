'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

interface Props {
    images: string[];
}
export const ProjectCarousel = ({ images }: Props) => {
    return (
        <Carousel opts={{ loop: true }} className="w-full max-w-full">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
