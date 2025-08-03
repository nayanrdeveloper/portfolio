import { SectionHeader } from '@/components/common/SectionHeader';
import { ResumeTabs } from './ResumeTabs';

export const ResumeSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
                              title="My Resume"
                              subtitle="7+ Years of Experience"
                            />
      <ResumeTabs />
      </div>
    </section>
  );
};
