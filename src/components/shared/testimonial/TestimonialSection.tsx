'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialCard } from './TestimonialCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ComingSoon } from '@/components/common/ComingSoon';

const testimonials = [
    {
        title: 'Android App Development',
        date: 'via Upwork – Mar 4, 2015 – Aug 30, 2021',
        description:
            'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.',
        name: 'Nevine Acotanza',
        rating: 5,
    },
    {
        title: 'Web Design Project',
        date: 'via Freelancer – Jan 10, 2023 – Feb 12, 2023',
        description: 'Very satisfied with the outcome. Professional, timely, and reliable service.',
        name: 'Rahul Mishra',
        rating: 4,
    },
    {
        title: 'Android App Development',
        date: 'via Upwork – Mar 4, 2015 – Aug 30, 2021',
        description:
            'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.',
        name: 'Nevine Acotanza',
        rating: 5,
    },
    {
        title: 'Web Design Project',
        date: 'via Freelancer – Jan 10, 2023 – Feb 12, 2023',
        description: 'Very satisfied with the outcome. Professional, timely, and reliable service.',
        name: 'Rahul Mishra',
        rating: 4,
    },
    {
        title: 'Android App Development',
        date: 'via Upwork – Mar 4, 2015 – Aug 30, 2021',
        description:
            'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.',
        name: 'Nevine Acotanza',
        rating: 5,
    },
    {
        title: 'Web Design Project',
        date: 'via Freelancer – Jan 10, 2023 – Feb 12, 2023',
        description: 'Very satisfied with the outcome. Professional, timely, and reliable service.',
        name: 'Rahul Mishra',
        rating: 4,
    },
];

export const TestimonialSection = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="mb-8 text-center">
                <p className="text-sm font-medium tracking-wider text-pink-500 uppercase">
                    What Clients Say
                </p>
                <h2 className="text-3xl font-bold md:text-4xl">Testimonial</h2>
            </div>

            <ComingSoon
                title="Testimonials Coming Soon"
                message="Great things take time! Soon you will find words from colleagues, mentors, and collaborators sharing their experiences working with me — real voices, real impact."
            />
            {/* <div className="relative mx-auto w-full max-w-5xl">
                <Carousel className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="px-4 md:basis-1/2 lg:basis-1/2">
                                <TestimonialCard {...testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="bg-background card-shadow absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md transition hover:scale-105">
                        <ArrowLeft className="h-5 w-5 text-pink-500" />
                    </CarouselPrevious>
                    <CarouselNext className="bg-background card-shadow absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md transition hover:scale-105">
                        <ArrowRight className="h-5 w-5 text-pink-500" />
                    </CarouselNext>
                </Carousel>
            </div> */}
        </section>
    );
};
