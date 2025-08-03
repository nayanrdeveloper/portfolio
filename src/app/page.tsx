import { WelcomeToast } from '@/components/common/WelcomeToast';
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
            <EducationSection />
            <ResumeSection />
            <PortfolioSection />
            <TestimonialSection />
            <ContactSection />
        </section>
    );
}
