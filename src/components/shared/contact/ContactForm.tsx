'use client';

import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/common/InputWithLabel";

export const ContactForm = () => {
  return (
    <form className="bg-background rounded-xl card-shadow p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <InputWithLabel id="name" label="Your Name" />
        <InputWithLabel id="phone" label="Phone Number" />
      </div>
        <InputWithLabel id="email" label="Email" />
        <InputWithLabel id="subject" label="Subject"/>
      <div>
       <InputWithLabel
  id="message"
  label="Your Message"
  type="textarea"
  placeholder="Type your message..."
/>
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};
