'use client';

import { useMemo, useState } from 'react';
import { Timeline } from '@/components/common/Timeline/Timeline';
import { ExperienceResumeCard } from './ExperienceResumeCard';
import { Experience, EXPERIENCES } from '@/constant/experience';
import { ExperienceDetailsModal } from '../experience/ExperienceDetailsModal';

export default function ExperienceTimelineSection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Experience | null>(null);

    // Map shared experiences → timeline items
    const timelineItems = useMemo(
        () =>
            EXPERIENCES.map((exp) => ({
                id: exp.id,
                yearRange: exp.duration,
                content: (
                    <ExperienceResumeCard
                        title={exp.company}
                        institution={`${exp.location ?? ''}`}
                        duration={exp.duration}
                        // show just the first highlight as the summary text
                        description={exp.highlights?.[0] ?? ''}
                        score={undefined} // optional
                        onClick={() => {
                            setActive(exp);
                            setOpen(true);
                        }}
                    />
                ),
            })),
        [],
    );

    return (
        <>
            <Timeline title="Experience" items={timelineItems} />
            <ExperienceDetailsModal open={open} onClose={() => setOpen(false)} exp={active} />
        </>
    );
}
