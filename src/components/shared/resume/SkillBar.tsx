'use client';

import { cn } from '@/lib/utils';

interface SkillBarProps {
    label: string;
    percentage: number;
}

export const SkillBar = ({ label, percentage }: SkillBarProps) => {
    return (
        <div className="mb-5">
            <div className="text-muted-foreground mb-1 flex justify-between text-xs font-medium">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                <div
                    className={cn(
                        'h-full rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-pink-500 transition-all duration-1000 ease-in-out',
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};
