export type Experience = {
    id: number;
    company: string;
    role: string;
    title: string;
    duration: string;
    image: string;
    companyUrl?: string;
    highlights: string[];
    location?: string;
};

export const EXPERIENCES: Experience[] = [
    {
        id: 1,
        company: 'In Time Tec',
        role: 'Frontend Developer (React.js, TypeScript)',
        title: 'Software Developer',
        duration: 'August 2023 - Present',
        image: '/in_time_tec_logo.jpg',
        location: 'Bengaluru, India',
        companyUrl: 'https://www.intimetec.com', // update if needed
        highlights: [
            'Refactored legacy data layer using RTK Query; reduced redundant calls and improved fetch performance by ~30%.',
            'Integrated i18n to enable multi-language support for a global user base.',
            'Contributed to production releases, triaged critical bugs, and shipped in an Agile team using JIRA.',
            'Built reusable, responsive React components with TypeScript to improve UI consistency and DX.',
        ],
    },
    {
        id: 2,
        company: 'React Web Solution',
        role: 'Frontend Engineer (Next.js, Node.js, Express.js)',
        title: 'Software Developer',
        duration: 'August 2022 - July 2023',
        image: '/react_web_solution.jpg',
        location: 'Rajkot, Gujarat',
        companyUrl: undefined, // add a real URL if you have it
        highlights: [
            'Designed and developed a responsive landing experience using Tailwind CSS.',
            'Built interactive dashboard charts with Chart.js and optimized API integration.',
            'Implemented RESTful API endpoints with Node.js + Express.js to improve data flow and performance.',
        ],
    },
    {
        id: 3,
        company: 'INKERP Solution',
        role: 'Python Developer (Odoo, PostgreSQL, JavaScript)',
        title: 'Software Developer',
        duration: 'December 2019 - July 2022',
        image: '/inkerp_logo.jpg',
        location: 'Rajkot, Gujarat',
        companyUrl: undefined,
        highlights: [
            'Built & customized Odoo ERP modules (Sales, Purchase, Invoicing, POS).',
            'Integrated WooCommerce/Shopify via APIs to automate data sync/import/export with real-time logs.',
            'Strengthened backend services that supported front-end features across modules.',
        ],
    },
];
