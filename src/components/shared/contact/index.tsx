'use client';

import { ContactCard } from './ContactCard';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary tracking-widest uppercase">Contact</p>
        <h2 className="text-4xl font-bold mt-2">Contact With Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ContactCard />
        <ContactForm />
      </div>
    </section>
  );
};
