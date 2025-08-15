// src/lib/hygraph/mapToModal.ts
import type { ProjectDetail } from './projects';

export type PortfolioItem = {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    challenges?: string;
    learned?: string;
    strategy?: string;
    images: string[];
    views: number;
    externalUrl?: string;
};

export function mapProjectToModalItem(p: ProjectDetail): PortfolioItem {
    return {
        id: p.id,
        title: p.title,
        description: p.description ?? '',
        challenges: p.challenges ?? '',
        learned: p.learned ?? '',
        strategy: p.strategy ?? '',
        externalUrl: p.externalUrl ?? '',
        views: p.views ?? 0,
        images: (p.images ?? []).map((i) => i.url),
        techStack: (p.technology ?? []).map((t) => t.name),
    };
}
