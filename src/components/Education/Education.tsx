import React from 'react';
import SubHeader from '../Common/SubHeader';
import { EducationConstant } from '@/constants/EducationConstant';
import EducationCard from './EducationCard';

export default function Education() {
    return (
        <div className="section-layout">
            <SubHeader
                title={EducationConstant.title}
                subTitle={EducationConstant.subTitle}
            />
            <div className="space-y-6">
                {EducationConstant.edcuationItem.map(
                    (education, index: number) => (
                        <EducationCard key={index} education={education} />
                    ),
                )}
            </div>
        </div>
    );
}
