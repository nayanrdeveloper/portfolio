'use client';

import { TimelineItemProps } from './timelineTypes';

export const TimelineItem = ({ yearRange, content }: TimelineItemProps) => {
  return (
    <div className="relative pb-10 flex flex-col md:flex-row md:items-start">
      {/* Dot */}
      <div className="hidden md:block absolute left-5 top-4 w-3 h-3 rounded-full bg-primary z-10" />

      {/* Horizontal line from dot to card */}
      <div className="hidden md:block absolute left-5 top-[22px] w-[40px] h-1 timeline-color z-0" />

      {/* Card */}
      <div className="md:ml-[60px] rounded-xl bg-background shadow-sm border p-5 sm:p-6 w-full relative">
        <span className="text-sm font-medium text-primary">{yearRange}</span>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};
