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
        <Card className="bg-background text-card-foreground relative p-6 shadow-md">
            <div className="text-primary text-sm font-medium">{duration}</div>
            <h3 className="mt-1 text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
            {description && <p className="text-muted-foreground mt-2 text-sm">{description}</p>}
            {badge && (
                <span className="absolute top-4 right-4 rounded-md bg-pink-600 px-3 py-1 text-xs text-white">
                    {badge}
                </span>
            )}
        </Card>
    );
};
