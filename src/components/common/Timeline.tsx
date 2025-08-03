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
    <div className={cn('relative border-l-2 border-muted space-y-6 pl-4', className)}>
      {items.map((item, index) => (
        <div key={item.key ?? index} className="relative">
          <div className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-sm" />
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};
