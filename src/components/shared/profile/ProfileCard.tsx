// components/profile/ProfileCard.tsx
'use client';

import { ProfileIntro } from "./ProfileIntro";
import { ProfileImage } from "./ProfileImage";

export const ProfileCard = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
      <div className="flex flex-1">
        <ProfileIntro />
      </div>
      <div className="flex flex-1">
        <ProfileImage />
      </div>
    </section>
  );
};
