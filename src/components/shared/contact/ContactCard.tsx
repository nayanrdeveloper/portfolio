'use client';

import { SocialLinks } from './SocialLinks';
import Image from 'next/image';

export const ContactCard = () => {
    return (
        <div className="bg-background card-shadow flex flex-col items-center rounded-xl p-6 text-center">
            <Image
                src="/intimetec.jpg"
                alt="Contact"
                width={240}
                height={200}
                className="mb-4 rounded-md object-cover"
            />
            <h3 className="text-xl font-semibold">Nevine Acotanza</h3>
            <p className="text-muted-foreground text-sm">Chief Operating Officer</p>
            <p className="text-muted-foreground mt-3 text-sm">
                I am available for freelance work. Connect with me via call or email.
            </p>
            <div className="mt-4 text-sm">
                <p>
                    <strong>Phone:</strong> +012 345 678 90
                </p>
                <p>
                    <strong>Email:</strong> admin@example.com
                </p>
            </div>
            <div className="mt-6">
                <SocialLinks />
            </div>
        </div>
    );
};
