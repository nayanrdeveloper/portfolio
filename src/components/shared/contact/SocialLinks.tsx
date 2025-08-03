'use client';

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex gap-3 justify-center">
      <Button variant="outline" size="icon" className="card-shadow bg-background">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="card-shadow bg-background">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="card-shadow bg-background">
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  );
};
