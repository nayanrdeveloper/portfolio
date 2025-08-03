import { ContactSection } from "@/components/shared/contact";
import { EducationSection } from "@/components/shared/education/EducationSection";
import { ExperienceSection } from "@/components/shared/experience/ExperienceSection";
import { PortfolioSection } from "@/components/shared/portfolio/PortfolioSection";
import { ProfileCard } from "@/components/shared/profile/ProfileCard";
import { ResumeSection } from "@/components/shared/resume/ResumeSection";

export default function Home() {
  return (
    <section>
      <ProfileCard />
      <ExperienceSection />
      <EducationSection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
    </section>
  );
}
