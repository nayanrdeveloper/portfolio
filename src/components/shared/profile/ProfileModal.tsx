// components/profile/ProfileModal.tsx
'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { profileSummary } from '@/constant/profileData';

interface ProfileModalProps {
    open: boolean;
    onOpenChange: (value: boolean) => void;
}

export const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>{profileSummary.header}</DialogTitle>
                    <DialogDescription>
                        <p className="text-muted-foreground text-sm">
                            {profileSummary.shortDescription}
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <div className="text-foreground mt-4 text-sm whitespace-pre-line">
                    {profileSummary.fullDetails}
                </div>
            </DialogContent>
        </Dialog>
    );
};
