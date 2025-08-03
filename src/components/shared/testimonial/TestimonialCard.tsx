'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  title: string;
  date: string;
  description: string;
  name: string;
  rating?: number;
}

export const TestimonialCard = ({
  title,
  date,
  description,
  name,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <Card className="w-full max-w-xl mx-auto bg-background card-shadow">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-sm font-medium text-primary">{name}</p>
      </CardContent>
    </Card>
  );
};
