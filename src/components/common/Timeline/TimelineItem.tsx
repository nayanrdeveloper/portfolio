'use client';

import { TimelineItemProps } from './timelineTypes';

export const TimelineItem = ({ yearRange, content }: TimelineItemProps) => {
  return (
    <div className="relative pb-10">
      {/* Dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary z-10" />

      {/* Horizontal Line from dot to card */}
      <div className="absolute left-3 top-2 w-12 h-1 bg-muted z-0" />

      {/* Card */}
      <div className="ml-10 rounded-xl bg-background shadow-sm border p-6 relative">
        <span className="text-sm font-medium text-primary">{yearRange}</span>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};
