import { SkillBar } from './SkillBar';

interface SkillGroupProps {
    title: string;
    features?: string;
    skills: {
        label: string;
        value: number;
    }[];
}

export const SkillGroup = ({ title, skills, features }: SkillGroupProps) => {
    return (
        <div>
            {features && <p className="text-primary mb-1 text-sm font-semibold">{features}</p>}
            <h3 className="text-foreground mb-6 text-xl font-bold md:text-2xl">{title}</h3>
            {skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percentage={skill.value} />
            ))}
        </div>
    );
};
