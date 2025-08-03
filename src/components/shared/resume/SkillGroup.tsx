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
      {features && (
        <p className="text-sm font-semibold text-pink-500 mb-1">{features}</p>
      )}
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
        {title}
      </h3>
      {skills.map((skill) => (
        <SkillBar key={skill.label} label={skill.label} percentage={skill.value} />
      ))}
    </div>
  );
};
