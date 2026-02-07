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
            'Refactored legacy data-fetching logic by migrating to RTK Query, eliminating redundant API calls and improving data-fetch performance by 30%; added Jest-based unit tests for critical UI components, reducing regression issues.',
            'Designed and standardized reusable, responsive React components using TypeScript and Bootstrap, ensuring WCAG-aligned accessibility (ARIA roles, keyboard navigation) and consistent developer experience across features.',
            'Implemented RESTful backend services with Node.js and Express, including JWT-based authentication and Cloudinary integration for secure media uploads and structured content delivery.',
            'Applied scalable state management using Redux Toolkit and Context API, improving data consistency, maintainability, and feature extensibility across the application.',
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
            'Built and optimized responsive landing and dashboard experiences using Tailwind CSS, achieving 15-20% improvement in Core Web Vitals (Lighthouse) and improving mobile usability and SEO readiness.',
            'Developed interactive dashboards using Chart.js, improving data visualization clarity and reducing UI latency through optimized rendering and API handling.',
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
