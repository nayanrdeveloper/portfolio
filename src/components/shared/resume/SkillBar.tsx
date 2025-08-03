'use client';

import { cn } from '@/lib/utils';

interface SkillBarProps {
  label: string;
  percentage: number;
}

export const SkillBar = ({ label, percentage }: SkillBarProps) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-xs font-medium text-muted-foreground mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-pink-500 transition-all duration-1000 ease-in-out'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
