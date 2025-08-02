// components/profile/ProfileImage.tsx
'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const ProfileImage = () => {
  return (
    <Card className="flex flex-col flex-1 overflow-hidden bg-background">
      <CardContent className="flex-1 p-0">
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/user.jpg"
            alt="Profile"
            fill
            className="object-cover rounded-md"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </CardContent>
    </Card>
  );
};
