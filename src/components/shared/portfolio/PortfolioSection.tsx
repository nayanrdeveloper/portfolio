'use client';

// import { PortfolioItem } from './portfolioCardType';
// import { PortfolioCard } from './PortfolioCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ComingSoon } from '@/components/common/ComingSoon';

// const mockData: PortfolioItem[] = [
//     {
//         id: '1',
//         title: 'NFT Dashboard Application Development.',
//         type: 'gallery',
//         image: '/intimetec.jpg',
//         category: 'Gallery',
//         views: 1581,
//     },
//     {
//         id: '2',
//         title: 'Travel App Design Creativity & Application.',
//         type: 'external',
//         image: '/intimetec.jpg',
//         category: 'External Link',
//         views: 749,
//         externalUrl: 'https://example.com',
//     },
//     {
//         id: '3',
//         title: 'NFT Dashboard Application Development.',
//         type: 'gallery',
//         image: '/intimetec.jpg',
//         category: 'Gallery',
//         views: 1581,
//     },
//     {
//         id: '4',
//         title: 'Travel App Design Creativity & Application.',
//         type: 'external',
//         image: '/intimetec.jpg',
//         category: 'External Link',
//         views: 749,
//         externalUrl: 'https://example.com',
//     },
//     {
//         id: '5',
//         title: 'NFT Dashboard Application Development.',
//         type: 'gallery',
//         image: '/intimetec.jpg',
//         category: 'Gallery',
//         views: 1581,
//     },
//     {
//         id: '6',
//         title: 'Travel App Design Creativity & Application.',
//         type: 'external',
//         image: '/intimetec.jpg',
//         category: 'External Link',
//         views: 749,
//         externalUrl: 'https://example.com',
//     },
// ];

export const PortfolioSection = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl px-4">
                <SectionHeader
                    title="My Portfolio"
                    subtitle="Visit my portfolio and keep your feedback"
                />
                <ComingSoon
                    title="Projects Coming Soon"
                    message="Working on awesome case studies and real-world builds. Stay tuned!"
                />
                {/* <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {mockData.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div> */}
            </div>
        </section>
    );
};
