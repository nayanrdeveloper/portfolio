import { HygraphTestimonial } from '@/lib/hygraph/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
    testimonial: HygraphTestimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <Card className="bg-background card-shadow mx-auto h-full w-full max-w-xl">
            <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-muted relative h-12 w-12 overflow-hidden rounded-full">
                            {testimonial.image?.url ? (
                                <Image
                                    src={testimonial.image.url}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="text-muted-foreground flex h-full w-full items-center justify-center">
                                    <User size={24} />
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                            {testimonial.company && (
                                <p className="text-primary text-xs">{testimonial.company}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`}
                            />
                        ))}
                    </div>
                </div>
                <p className="text-muted-foreground flex-grow text-sm italic">
                    "{testimonial.content}"
                </p>
            </CardContent>
        </Card>
    );
};
