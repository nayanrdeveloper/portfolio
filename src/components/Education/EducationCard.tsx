import { IEducationItem } from '@/interface/EducationInterface';
import { Kbd } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

interface educationCardInterface {
    education: IEducationItem;
}

export default function EducationCard({ education }: educationCardInterface) {
    return (
        <div className="card-layout flex items-center justify-between">
            <div className="flex items-center space-x-5">
                <div>
                    <Image
                        src={education.image}
                        alt={education.courseDegree}
                        width={250}
                        height={250}
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Kbd className="custom-kbd w-28">{`${education.startYear} - ${education.endYear}`}</Kbd>
                    <p className="text-2xl font-bold text-secondary">
                        {education.courseDegree}
                    </p>
                    <p className="text-xl font-light leading-6 text-primary">
                        {education.universityCollege}
                    </p>
                    <p className="text-primary dark:text-[#878e99]">
                        {education.address}
                    </p>
                </div>
            </div>
            <div>
                <button className="primary-button">Admission</button>
            </div>
        </div>
    );
}
