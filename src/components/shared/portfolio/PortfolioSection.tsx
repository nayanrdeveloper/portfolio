'use client';

import { useEffect, useState } from 'react';
import { HygraphProjectCard, PortfolioCard } from './PortfolioCard';
import { PortfolioModal } from './ProjectModal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { getProjectCards } from '@/lib/hygraph/projects';

export const PortfolioSection = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedProject, setSelectedProject] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [items, setItems] = useState<any>([]);
    useEffect(() => {
        getProjectCards().then(setItems).catch(console.error);
    }, []);

    return (
        <section className="py-16" id="portfolio">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader
                    title="My Portfolio"
                    subtitle="Visit my portfolio and keep your feedback"
                />

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: HygraphProjectCard) => (
                        <div key={item.id} className="cursor-pointer">
                            <PortfolioCard item={item} setSelectedProject={setSelectedProject} />
                        </div>
                    ))}
                </div>

                <PortfolioModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    slug={selectedProject}
                />
            </div>
        </section>
    );
};
