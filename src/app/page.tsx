import { ExperienceSection } from "@/components/shared/experience/ExperienceSection";
import { ProfileCard } from "@/components/shared/profile/ProfileCard";

export default function Home() {
  return (
    <section>
      <ProfileCard />
      <ExperienceSection />
    </section>
  );
}
