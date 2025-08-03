import { EducationCard } from './EducationCard';

const educationData = [
    {
        degree: 'BSc in Computer Science',
        university: 'University of DVI',
        location: 'New Haven, CT · Private, non-profit',
        duration: '2016 – 2020',
        image: '/intimetec.jpg',
    },
    {
        degree: 'BSc in Computer Science',
        university: 'University of DVI',
        location: 'New Haven, CT · Private, non-profit',
        duration: '2016 – 2020',
        image: '/intimetec.jpg',
    },
    {
        degree: 'BSc in Computer Science',
        university: 'University of DVI',
        location: 'New Haven, CT · Private, non-profit',
        duration: '2016 – 2020',
        image: '/intimetec.jpg',
    },
    // Add more items if needed
];

export const EducationSection = () => {
    return (
        <section className="space-y-10 py-12">
            <div className="text-center">
                <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                    PhD, Master and Bachelo
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
            </div>

            <div className="space-y-6">
                {educationData.map((edu, idx) => (
                    <EducationCard key={idx} {...edu} />
                ))}
            </div>
        </section>
    );
};
