import { Card } from '@/components/ui/card';

interface TimelineCardProps {
  title: string;
  subtitle: string;
  duration: string;
  description?: string;
  badge?: string;
}

export const TimelineCard = ({
  title,
  subtitle,
  duration,
  description,
  badge,
}: TimelineCardProps) => {
  return (
    <Card className="p-6 bg-background text-card-foreground shadow-md relative">
      <div className="text-sm font-medium text-primary">{duration}</div>
      <h3 className="text-lg font-semibold mt-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
      {badge && (
        <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-md">
          {badge}
        </span>
      )}
    </Card>
  );
};
