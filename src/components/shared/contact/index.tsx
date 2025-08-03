'use client';

import { ContactCard } from './ContactCard';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16">
            <div className="mb-12 text-center">
                <p className="text-primary text-sm tracking-widest uppercase">Contact</p>
                <h2 className="mt-2 text-4xl font-bold">Contact With Me</h2>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                <ContactCard />
                <ContactForm />
            </div>
        </section>
    );
};
