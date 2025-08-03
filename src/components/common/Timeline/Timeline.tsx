'use client';

import { TimelineItem } from './TimelineItem';
import { TimelineItemProps } from './timelineTypes';

interface TimelineProps {
    items: TimelineItemProps[];
    title?: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
    return (
        <section className="mx-auto max-w-4xl px-4">
            {title && <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">{title}</h2>}
            <div className="relative md:pl-12">
                {/* Shared vertical line */}
                <div className="timeline-color absolute top-4 bottom-0 left-18 z-0 hidden w-1 md:block" />
                {items.map((item) => (
                    <TimelineItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};
