'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
    title: string;
    date: string;
    description: string;
    name: string;
    rating?: number;
}

export const TestimonialCard = ({
    title,
    date,
    description,
    name,
    rating = 5,
}: TestimonialCardProps) => {
    return (
        <Card className="bg-background card-shadow mx-auto w-full max-w-xl">
            <CardContent className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-muted-foreground text-sm">{date}</p>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
                <p className="text-muted-foreground text-sm">{description}</p>
                <p className="text-primary text-sm font-medium">{name}</p>
            </CardContent>
        </Card>
    );
};
