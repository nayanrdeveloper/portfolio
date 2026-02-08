'use client';

import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialCard } from './TestimonialCard';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { getTestimonials, HygraphTestimonial } from '@/lib/hygraph/testimonials';
import { ComingSoon } from '@/components/common/ComingSoon';

import { TestimonialModal } from './TestimonialModal';

export const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState<HygraphTestimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTestimonials()
            .then((data) => {
                setTestimonials(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch testimonials:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-10 md:py-16 lg:py-20">
                <SectionHeader title="Testimonial" subtitle="What Clients Say" />
                <div className="flex h-40 items-center justify-center">
                    <Loader2 className="text-primary h-8 w-8 animate-spin" />
                </div>
            </section>
        );
    }

    // Fallback if no testimonials found
    if (testimonials.length === 0) {
        return (
            <section className="py-10 md:py-16 lg:py-20">
                <SectionHeader title="Testimonial" subtitle="What Clients Say" />
                <ComingSoon
                    title="Testimonials Coming Soon"
                    message="Great things take time! Soon you will find words from colleagues, mentors, and collaborators sharing their experiences working with me — real voices, real impact."
                />
            </section>
        );
    }

    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:px-12">
                <SectionHeader
                    title="Testimonial"
                    subtitle="What Clients Say"
                    className="md:text-left"
                />
                <TestimonialModal />
            </div>

            <div className="relative mx-auto w-full max-w-5xl px-12 md:px-0">
                <Carousel
                    className="w-full"
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="pl-4 md:basis-1/2 lg:basis-1/2"
                            >
                                <div className="h-full p-1">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="bg-background card-shadow absolute top-1/2 -left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border-none transition hover:scale-105 md:-left-12" />
                    <CarouselNext className="bg-background card-shadow absolute top-1/2 -right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border-none transition hover:scale-105 md:-right-12" />
                </Carousel>
            </div>
        </section>
    );
};
