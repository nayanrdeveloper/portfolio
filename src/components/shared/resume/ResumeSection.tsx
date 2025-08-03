import { SectionHeader } from '@/components/common/SectionHeader';
import { ResumeTabs } from './ResumeTabs';

export const ResumeSection = () => {
    return (
        <section className="px-4 py-12 md:py-16">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader title="My Resume" subtitle="7+ Years of Experience" />
                <ResumeTabs />
            </div>
        </section>
    );
};
