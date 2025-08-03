import { Timeline } from "@/components/common/Timeline/Timeline";


const educationItems = [
  {
    id: 1,
    yearRange: '1998 – 2014',
    content: (
      <>
        <h3 className="text-lg font-semibold">BSc in Computer Science</h3>
        <p className="text-sm text-muted-foreground">
          University of DVI (2006 – 2010)
        </p>
        <p className="text-sm mt-2 text-muted-foreground">
          The training provided by universities in order to prepare people to work
          in various sectors of the economy or areas of culture.
        </p>
      </>
    ),
  },
  {
    id: 2,
    yearRange: '2001 – 2005',
    content: (
      <>
        <h3 className="text-lg font-semibold">AS – Science & Information</h3>
        <p className="text-sm text-muted-foreground">
          SuperKing College (2001 – 2005)
        </p>
        <p className="text-sm mt-2 text-muted-foreground">
          Higher education is tertiary education leading to award of an academic degree.
        </p>
      </>
    ),
  },
];

export default function EducationTimelineSection() {
  return <Timeline title="Education Quality" items={educationItems} />;
}
