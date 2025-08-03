import { SectionHeader } from '@/components/common/SectionHeader';
// import { ResumeTabs } from './ResumeTabs';
import { ComingSoon } from '@/components/common/ComingSoon';

export const ResumeSection = () => {
    return (
        <section className="px-4 py-12 md:py-16">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader title="My Resume" subtitle="7+ Years of Experience" />
                <ComingSoon
                    title="Resume Section Coming Soon"
                    message="A detailed breakdown of my professional experience, tech stack, and impactful achievements is on the way. Stay tuned — you’ll see exactly how I build fast, accessible, and scalable products.
"
                />
                {/* <ResumeTabs /> */}
            </div>
        </section>
    );
};
