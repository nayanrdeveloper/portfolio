'use client';

import { profileDetails } from '@/constant/profileData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, FileText, User } from 'lucide-react';
import { useState } from 'react';
import { ProfileModal } from './ProfileModal';

export const ProfileIntro = () => {
    const [open, setOpen] = useState(false);
    const { name, email, location, role, description } = profileDetails;

    return (
        <>
            <Card className="bg-background flex flex-col shadow-md">
                <CardContent className="space-y-5 p-6">
                    {/* Icon */}
                    <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full">
                        <User className="text-primary" size={18} />
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl leading-snug font-bold">
                        Hi, I’m <span className="text-primary">{name}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-muted-foreground">{description}</p>

                    {/* Quick Info */}
                    <div className="text-foreground space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <FileText className="text-primary" size={16} />
                            <span>{role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="text-primary" size={16} />
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" size={16} />
                            <span>{location}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                        <p className="mb-2 text-sm">Download my curriculum vitae:</p>
                        <div className="flex gap-4">
                            <Button variant="default">Download CV</Button>
                            <Button variant="secondary">Contact Me</Button>
                            <Button
                                variant="outline"
                                onClick={() => setOpen(true)}
                                className="border-primary text-primary hover:bg-primary/10"
                            >
                                More Details
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <ProfileModal open={open} onOpenChange={setOpen} />
        </>
    );
};
