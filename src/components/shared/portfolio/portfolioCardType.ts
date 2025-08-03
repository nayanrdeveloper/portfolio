export type PortfolioType = 'gallery' | 'external';

export interface PortfolioItem {
    id: string;
    title: string;
    type: PortfolioType;
    image: string;
    category: string;
    views: number;
    externalUrl?: string;
}
