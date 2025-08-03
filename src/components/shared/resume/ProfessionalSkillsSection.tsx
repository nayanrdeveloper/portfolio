'use client';

import { SkillGroup } from './SkillGroup';

const designSkills = [
    { label: 'Photoshot', value: 100 },
    { label: 'Figma', value: 95 },
    { label: 'Adobe XD.', value: 60 },
    { label: 'Adobe Illustrator', value: 70 },
    { label: 'Design', value: 90 },
];

const devSkills = [
    { label: 'HTML', value: 100 },
    { label: 'CSS', value: 95 },
    { label: 'JavaScript', value: 60 },
    { label: 'Software', value: 70 },
    { label: 'Plugin', value: 90 },
];

export default function ProfessionalSkillsSection() {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <SkillGroup title="Design Skill" features="Features" skills={designSkills} />
            <SkillGroup title="Development Skill" features="Features" skills={devSkills} />
        </div>
    );
}
