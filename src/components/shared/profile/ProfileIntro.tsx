// components/profile/ProfileIntro.tsx
'use client';

import { profile } from "@/constant/profileData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, FileText, User } from "lucide-react";

export const ProfileIntro = () => {
  return (
    <Card className="bg-background flex flex-col flex-1">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="text-primary" size={20} />
          </div>

          <h1 className="text-3xl font-bold leading-snug">
            Hi, I’m <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="text-foreground">{profile.description}</p>

          <div className="space-y-2 text-sm mt-2 text-foreground">
            <div className="flex items-center gap-2">
              <FileText className="text-primary" size={16} />
              <span>{profile.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={16} />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={16} />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2">Download my curriculum vitae:</p>
            <div className="flex gap-4">
              <Button variant="default">Download CV</Button>
              <Button variant="secondary">Contact Me</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
