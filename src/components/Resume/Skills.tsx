import { skillConstant } from '@/constants/SkillConstant';
import { Progress } from 'flowbite-react';
import React from 'react';

export default function Skills() {
    return (
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {skillConstant.map((skill, index: number) => (
                <div key={index}>
                    <div className="flex justify-between">
                        <p>{skill.title}</p>
                        <span>{skill.percentage}%</span>
                    </div>
                    <Progress className='bg-gray' color='red' progress={skill.percentage} size={'md'} />
                </div>
            ))}
        </div>
    );
}
