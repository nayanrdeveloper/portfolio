'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { profileDetails } from '@/constant/profileData';
import { Github, Linkedin, Mail, Phone, Twitter, X } from 'lucide-react';
import Image from 'next/image';

interface HireMeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => (!open ? onClose() : undefined)}>
            <DialogContent className="sm:max-w-md" showCloseButton={false}>
                <div className="absolute top-4 right-4">
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 transition hover:bg-muted"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <DialogHeader className="flex flex-col items-center gap-2">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary">
                        <Image
                            src="/profile_pic2.jpg"
                            alt={profileDetails.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <DialogTitle className="text-xl font-bold">Hire Me</DialogTitle>
                    <p className="text-center text-sm text-muted-foreground">
                        {profileDetails.description}
                    </p>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Email</span>
                            <a href={`mailto:${profileDetails.email}`} className="text-sm font-medium hover:text-primary">
                                {profileDetails.email}
                            </a>
                        </div>
                    </div>

                    {profileDetails.phone && (
                        <div className="flex items-center gap-3 rounded-lg border p-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground">Phone</span>
                                <a href={`tel:${profileDetails.phone}`} className="text-sm font-medium hover:text-primary">
                                    {profileDetails.phone}
                                </a>
                            </div>
                        </div>
                    )}

                    <div className="mt-2 flex justify-center gap-4">
                        {profileDetails.socials?.github && (
                            <a
                                href={profileDetails.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition hover:bg-primary hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {profileDetails.socials?.linkedin && (
                            <a
                                href={profileDetails.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition hover:bg-primary hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        )}
                        {profileDetails.socials?.twitter && (
                            <a
                                href={profileDetails.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition hover:bg-primary hover:text-white"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button onClick={onClose} variant="outline" className="w-full">
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
