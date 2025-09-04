'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/constant/experience';

type Props = {
    open: boolean;
    onClose: () => void;
    exp: Experience | null;
};

export function ExperienceDetailsModal({ open, onClose, exp }: Props) {
    if (!exp) return null;

    return (
        <Dialog open={open} onOpenChange={(o) => (!o ? onClose() : undefined)}>
            <DialogContent className="max-w-3xl rounded-2xl border p-0" showCloseButton={false}>
                {/* Header */}
                <div className="flex items-start justify-between px-6 pt-6">
                    <div className="space-y-2">
                        <Badge variant="default" className="bg-pink-600 hover:bg-pink-700">
                            {exp.duration}
                        </Badge>
                        <DialogTitle className="text-2xl font-bold">{exp.title}</DialogTitle>
                        <p className="text-muted-foreground">{exp.role}</p>
                        <p className="text-muted-foreground">
                            {exp.company}
                            {exp.location ? ` • ${exp.location}` : ''}
                        </p>
                    </div>

                    <button
                        aria-label="Close"
                        onClick={onClose}
                        className="rounded-full border border-pink-500 p-1.5 text-pink-500 transition hover:bg-pink-500 hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 pt-4 pb-6">
                    <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                        {exp.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>

                    {/* Footer actions */}
                    <div className="mt-6 flex gap-3">
                        {exp.companyUrl && (
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex"
                            >
                                <Button variant="secondary">Visit Company Page</Button>
                            </a>
                        )}
                        <Button onClick={onClose} className="bg-pink-600 hover:bg-pink-700">
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
