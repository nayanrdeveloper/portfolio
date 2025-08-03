'use client';

import { Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ComingSoonProps {
    title?: string;
    message?: string;
    className?: string;
}

export const ComingSoon = ({
    title = 'Coming Soon',
    message = 'This section will be updated soon. Stay tuned for more!',
    className,
}: ComingSoonProps) => {
    return (
        <Card className={cn('bg-background px-6 py-10 text-center', className)}>
            <CardContent className="flex flex-col items-center gap-4">
                <div className="bg-primary/15 text-primary rounded-full p-4 shadow-sm">
                    <Rocket className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-muted-foreground max-w-md">{message}</p>
            </CardContent>
        </Card>
    );
};
