// components/profile/ProfileCard.tsx
'use client';

import { ProfileIntro } from './ProfileIntro';
import { ProfileImage } from './ProfileImage';

export const ProfileCard = () => {
    return (
        <section className="flex flex-col items-stretch gap-6 md:flex-row md:gap-10" id="about">
            <div className="flex flex-1">
                <ProfileIntro />
            </div>
            <div className="flex flex-1">
                <ProfileImage />
            </div>
        </section>
    );
};
