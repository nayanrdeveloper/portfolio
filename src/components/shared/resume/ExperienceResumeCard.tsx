'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
    title: string;
    institution: string;
    duration: string;
    description: string;
    score?: string;
    className?: string;
    onClick?: () => void;
}

export const ExperienceResumeCard = ({
    title,
    institution,
    duration,
    description,
    score,
    className,
    onClick,
}: ExperienceCardProps) => {
    const wrapper = (
        <Card
            className={cn(
                'bg-background relative flex min-h-[150px] flex-col p-6', // 👈 ensure consistent height
                onClick && 'cursor-pointer transition hover:shadow-md',
                className,
            )}
        >
            {/* Score badge (optional) */}
            {score && (
                <div className="absolute top-6 right-6 rounded-md px-3 py-1 text-xs font-semibold shadow">
                    {score}
                </div>
            )}

            <CardContent className="flex h-full flex-col justify-between p-0">
                <div>
                    <h3 className="text-foreground text-lg font-semibold">{title}</h3>
                    <p className="text-muted-foreground text-sm">
                        {institution} <span className="text-xs opacity-70">({duration})</span>
                    </p>

                    <div className="border-muted my-3 border-t" />

                    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
            </CardContent>
        </Card>
    );

    if (!onClick) return wrapper;

    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-left"
            aria-label={`Open ${title}`}
        >
            {wrapper}
        </button>
    );
};
