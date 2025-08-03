'use client';

import { TimelineItemProps } from './timelineTypes';

export const TimelineItem = ({ yearRange, content }: TimelineItemProps) => {
    return (
        <div className="relative flex flex-col pb-10 md:flex-row md:items-start">
            {/* Dot */}
            <div className="bg-primary absolute top-4 left-5 z-10 hidden h-3 w-3 rounded-full md:block" />

            {/* Horizontal line from dot to card */}
            <div className="timeline-color absolute top-[22px] left-5 z-0 hidden h-1 w-[40px] md:block" />

            {/* Card */}
            <div className="bg-background relative w-full rounded-xl border p-5 shadow-sm sm:p-6 md:ml-[60px]">
                <span className="text-primary text-sm font-medium">{yearRange}</span>
                <div className="mt-2">{content}</div>
            </div>
        </div>
    );
};
