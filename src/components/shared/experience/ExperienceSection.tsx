'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceDetailsModal } from './ExperienceDetailsModal';
import { Experience, EXPERIENCES } from '@/constant/experience';

export function ExperienceSection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Experience | null>(null);

    return (
        <section className="py-16" id="experience">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader title="My Experience" subtitle="Over 5 Years of Experience" />

                <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            {...exp}
                            onMore={(e) => {
                                setActive(e);
                                setOpen(true);
                            }}
                        />
                    ))}
                </div>

                <ExperienceDetailsModal open={open} onClose={() => setOpen(false)} exp={active} />
            </div>
        </section>
    );
}
