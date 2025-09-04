'use client';

import { SkillGroup } from './SkillGroup';

const devSkills = [
    { label: 'HTML', value: 100 },
    { label: 'CSS', value: 95 },
    { label: 'JavaScript', value: 90 },
    { label: 'TypeScript', value: 85 },
    { label: 'Node.js', value: 80 },
    { label: 'Express.js', value: 80 }, // added to balance
    { label: 'MongoDB', value: 75 }, // added to balance
];

const frontendSkills = [
    { label: 'React.js', value: 95 },
    { label: 'Next.js', value: 90 },
    { label: 'Redux / RTK', value: 85 },
    { label: 'Tailwind CSS', value: 90 },
    { label: 'shadcn/ui', value: 85 },
    { label: 'Accessibility (a11y)', value: 80 },
    { label: 'Frontend Performance', value: 85 },
];

export default function ProfessionalSkillsSection() {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <SkillGroup title="Development Skills" features="Features" skills={devSkills} />
            <SkillGroup title="Frontend Skills" features="Features" skills={frontendSkills} />
        </div>
    );
}
