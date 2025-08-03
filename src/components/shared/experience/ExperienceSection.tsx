import { SectionHeader } from '@/components/common/SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { EXPERIENCES } from '@/constant/experience';

export const ExperienceSection = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader title="My Experience" subtitle="Over 10 Years of Experience" />

                <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                        <ExperienceCard key={exp.id} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};
