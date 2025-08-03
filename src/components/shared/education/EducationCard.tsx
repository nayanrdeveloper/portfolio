'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EducationCardProps {
  degree: string;
  university: string;
  location: string;
  duration: string;
  image: string;
  buttonText?: string;
}

export const EducationCard = ({
  degree,
  university,
  location,
  duration,
  image,
  buttonText = 'Admission',
}: EducationCardProps) => {
  return (
    <Card className="flex flex-col md:flex-row gap-6 p-4 md:p-6 max-w-4xl w-full mx-auto bg-background">
      <div className="relative w-full md:w-[220px] h-[200px] md:h-auto rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={image}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4">
        <CardHeader className="p-0 space-y-2">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium w-fit">
            {duration}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold">{degree}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">{university}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </CardHeader>

        <CardContent className="p-0 pt-2">
          <Button variant="secondary" size="sm">
            {buttonText}
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
