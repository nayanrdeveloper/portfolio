import { Timeline } from "@/components/common/Timeline/Timeline";
import { EducationResumeCard } from "./EducationResumeCard";


const educationItems = [
  {
    id: 1,
    yearRange: '1998 – 2014',
    content: (
      <EducationResumeCard
  title="BSc in Computer Science"
  institution="University of DVI"
  duration="2006 – 2010"
  description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
  score="3.90/4"
/>
    ),
  },
  {
    id: 2,
    yearRange: '2001 – 2005',
    content: (
      <EducationResumeCard
  title="BSc in Computer Science"
  institution="University of DVI"
  duration="2006 – 2010"
  description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
  score="3.90/4"
/>
    ),
  },
];

export default function EducationTimelineSection() {
  return <Timeline title="Education Quality" items={educationItems} />;
}
