'use client';

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // optional if you want to support className overrides

interface EducationCardProps {
  title: string;
  institution: string;
  duration: string;
  description: string;
  score?: string;
  className?: string;
}

export const EducationResumeCard = ({
  title,
  institution,
  duration,
  description,
  score,
  className,
}: EducationCardProps) => {
  return (
    <Card className={cn("relative p-6 bg-background", className)}>
      {/* Score badge (optional) */}
      {score && (
        <div className="absolute right-6 top-6 rounded-md px-3 py-1 shadow text-xs font-semibold">
          {score}
        </div>
      )}

      <CardContent className="p-0">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {institution} <span className="text-xs opacity-70">({duration})</span>
        </p>

        <div className="my-3 border-t border-muted" />

        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
