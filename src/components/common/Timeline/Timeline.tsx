'use client';

import { TimelineItem } from './TimelineItem';
import { TimelineItemProps } from './timelineTypes';

interface TimelineProps {
  items: TimelineItemProps[];
  title?: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <section className="max-w-4xl mx-auto px-4">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="relative md:pl-12">
        {/* Shared vertical line */}
        <div className="hidden md:block absolute left-18 top-4 bottom-0 w-1 timeline-color z-0" />
        {items.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
