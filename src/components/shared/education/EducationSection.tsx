import { EducationCard } from './EducationCard';

const educationData = [
    {
        degree: 'Master of Science (MSc) in Computer Science',
        university: 'Saurashtra University',
        location: 'Rajkot, Gujarat',
        duration: 'June 2018 - March 2020',
        image: '/Saurashtra_University_logo.png',
    },
    {
        degree: 'Bachelor of Science (BSc)',
        university: 'Atmiya College (Saurashtra University)',
        location: 'Rajkot, Gujarat',
        duration: 'June 2015 - March 2018',
        image: '/atmiya_col.png',
    },
];

export const EducationSection = () => {
    return (
        <section className="space-y-10 py-12">
            <div className="text-center">
                <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                    Master and Bachelor
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
