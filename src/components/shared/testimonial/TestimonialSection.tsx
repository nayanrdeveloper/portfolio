'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";


const testimonials = [
  {
    title: "Android App Development",
    date: "via Upwork – Mar 4, 2015 – Aug 30, 2021",
    description:
      "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.",
    name: "Nevine Acotanza",
    rating: 5,
  },
  {
    title: "Web Design Project",
    date: "via Freelancer – Jan 10, 2023 – Feb 12, 2023",
    description:
      "Very satisfied with the outcome. Professional, timely, and reliable service.",
    name: "Rahul Mishra",
    rating: 4,
  },
  {
    title: "Android App Development",
    date: "via Upwork – Mar 4, 2015 – Aug 30, 2021",
    description:
      "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.",
    name: "Nevine Acotanza",
    rating: 5,
  },
  {
    title: "Web Design Project",
    date: "via Freelancer – Jan 10, 2023 – Feb 12, 2023",
    description:
      "Very satisfied with the outcome. Professional, timely, and reliable service.",
    name: "Rahul Mishra",
    rating: 4,
  },
  {
    title: "Android App Development",
    date: "via Upwork – Mar 4, 2015 – Aug 30, 2021",
    description:
      "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.",
    name: "Nevine Acotanza",
    rating: 5,
  },
  {
    title: "Web Design Project",
    date: "via Freelancer – Jan 10, 2023 – Feb 12, 2023",
    description:
      "Very satisfied with the outcome. Professional, timely, and reliable service.",
    name: "Rahul Mishra",
    rating: 4,
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-pink-500 uppercase tracking-wider">What Clients Say</p>
        <h2 className="text-3xl md:text-4xl font-bold">Testimonial</h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="px-4 md:basis-1/2 lg:basis-1/2">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 👇 Arrows visible always (or only on hover with group-hover) */}
          <CarouselPrevious
  className="absolute top-1/2 -translate-y-1/2 z-10
             w-10 h-10 bg-background rounded-md card-shadow 
             flex items-center justify-center
             transition hover:scale-105"
>
  <ArrowLeft className="text-pink-500 w-5 h-5" />
</CarouselPrevious>
          <CarouselNext
  className="absolute top-1/2 -translate-y-1/2 z-10
             w-10 h-10 bg-background rounded-md card-shadow 
             flex items-center justify-center
             transition hover:scale-105"
>
  <ArrowRight className="text-pink-500 w-5 h-5" />
</CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
