import { WelcomeToast } from '@/components/common/WelcomeToast';
import { BlogSection } from '@/components/shared/blog/BlogSection';
import { ContactSection } from '@/components/shared/contact';
import { EducationSection } from '@/components/shared/education/EducationSection';
import { ExperienceSection } from '@/components/shared/experience/ExperienceSection';
import { PortfolioSection } from '@/components/shared/portfolio/PortfolioSection';
import { ProfileCard } from '@/components/shared/profile/ProfileCard';
import { ResumeSection } from '@/components/shared/resume/ResumeSection';
import { TestimonialSection } from '@/components/shared/testimonial/TestimonialSection';

export default function Home() {
    return (
        <section>
            <WelcomeToast />
            <ProfileCard />
            <ExperienceSection />
            <ResumeSection />
            <PortfolioSection />
            <EducationSection />
            <BlogSection />
            <TestimonialSection />
            <ContactSection />
        </section>
    );
}
