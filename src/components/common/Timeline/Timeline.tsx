'use client';

import { TimelineItem } from './TimelineItem';
import { TimelineItemProps } from './timelineTypes';

interface TimelineProps {
  items: TimelineItemProps[];
  title?: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <section className="max-w-4xl mx-auto">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="relative pl-10">
        {/* Shared vertical line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-muted z-0" />
        
        {/* Timeline Items */}
        {items.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
