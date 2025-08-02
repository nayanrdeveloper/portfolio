import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  role: string;
  title: string;
  company: string;
  duration: string;
  image: string;
}

export const ExperienceCard = ({
  role,
  title,
  company,
  duration,
  image,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl card-shadow bg-background text-card-foreground">
      <Image
        src={image}
        alt={company}
        width={120}
        height={120}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 space-y-2">
        <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          {duration}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
      <div className="hidden sm:flex items-center">
        <Button variant="ghost" className="text-primary">
          Contact Me
        </Button>
      </div>
    </div>
  );
};
