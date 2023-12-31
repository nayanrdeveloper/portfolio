import React from 'react';
import SubHeader from '../Common/SubHeader';
import { ExperienceConstant } from '@/constants/ExpereinceConstant';
import ExperiencCard from './ExperiencCard';

export default function Experience() {
    return (
        <div className="section-layout">
            <SubHeader
                title={ExperienceConstant.title}
                subTitle={ExperienceConstant.subTitle}
            />
            <div className="space-y-6">
                {ExperienceConstant.experienceItemList.map(
                    (experience, index: number) => (
                        <ExperiencCard key={index} experience={experience} />
                    ),
                )}
            </div>
        </div>
    );
}
