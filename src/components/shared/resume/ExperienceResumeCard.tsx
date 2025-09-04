'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // optional if you want to support className overrides

interface EducationCardProps {
    title: string;
    institution: string;
    duration: string;
    description: string;
    score?: string;
    className?: string;
}

export const ExperienceResumeCard = ({
    title,
    institution,
    duration,
    description,
    score,
    className,
}: EducationCardProps) => {
    return (
        <Card className={cn('bg-background relative p-6', className)}>
            {/* Score badge (optional) */}
            {score && (
                <div className="absolute top-6 right-6 rounded-md px-3 py-1 text-xs font-semibold shadow">
                    {score}
                </div>
            )}

            <CardContent className="p-0">
                <h3 className="text-foreground text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">
                    {institution} <span className="text-xs opacity-70">({duration})</span>
                </p>

                <div className="border-muted my-3 border-t" />

                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    );
};
