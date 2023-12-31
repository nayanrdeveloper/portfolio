import { IExpereinceItem } from '@/interface/ExperienceInterface';
import { Kbd } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

interface experienceCardInterface {
    experience: IExpereinceItem;
}

export default function ExperiencCard({ experience }: experienceCardInterface) {
    return (
        <div className="card-layout flex items-center justify-between">
            <div className="flex items-center space-x-5">
                <div>
                    <Image
                        src={experience.image}
                        alt={experience.company}
                        width={250}
                        height={250}
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Kbd className="custom-kbd w-28">{`${experience.startYear} - ${experience.endYear}`}</Kbd>
                    <p className="text-2xl font-bold text-secondary">
                        {experience.role}
                    </p>
                    <p className="text-xl font-light leading-6 text-primary">
                        {experience.company}
                    </p>
                    {/* <p className="text-primary dark:text-[#878e99]">
                        {education.address}
                    </p> */}
                </div>
            </div>
            <div>
                <button className="primary-button">Website</button>
            </div>
        </div>
    );
}
