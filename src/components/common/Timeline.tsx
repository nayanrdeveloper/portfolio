'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TimelineItemData {
    key?: string | number;
    content: ReactNode;
}

interface TimelineProps {
    items: TimelineItemData[];
    className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
    return (
        <div className={cn('border-muted relative space-y-6 border-l-2 pl-4', className)}>
            {items.map((item, index) => (
                <div key={item.key ?? index} className="relative">
                    <div className="bg-primary absolute top-1.5 -left-[9px] h-3 w-3 rounded-full shadow-sm" />
                    <div>{item.content}</div>
                </div>
            ))}
        </div>
    );
};
