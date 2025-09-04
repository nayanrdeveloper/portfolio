import { Timeline } from '@/components/common/Timeline/Timeline';
import { ExperienceResumeCard } from './ExperienceResumeCard';

const educationItems = [
    {
        id: 1,
        yearRange: 'August 2023 - Present',
        content: (
            <ExperienceResumeCard
                title="In Time Tec"
                institution="Bengaluru, India"
                duration="August 2023 - Present"
                description="Refactored legacy API logic by implementing RTK Query, reducing redundant calls and improving data fetching
performance by 30%."
                score="100/100"
            />
        ),
    },
    {
        id: 2,
        yearRange: 'August 2022 - July 2023',
        content: (
            <ExperienceResumeCard
                title="React Web Solution"
                institution="Rajkot, Gujarat"
                duration="August 2022 - July 2023"
                description="Designed and developed a responsive landing page using Tailwind CSS, improving mobile UX and visual
consistency across devices."
                score="100/400"
            />
        ),
    },
    {
        id: 2,
        yearRange: 'December 2019 - July 2022',
        content: (
            <ExperienceResumeCard
                title="INKERP Solution"
                institution="Rajkot, Gujarat"
                duration="December 2019 - July 2022"
                description="Customized modules in the Odoo ERP framework (Sales, Purchase, Invoicing, POS) to align with client-specific
business workflows."
                score="100/400"
            />
        ),
    },
];

export default function ExperienceTimelineSection() {
    return <Timeline title="Experience" items={educationItems} />;
}
