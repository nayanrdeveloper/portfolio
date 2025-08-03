'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export const WelcomeToast = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            toast('👋 Welcome to My Portfolio', {
                description: 'Thanks for visiting! Some sections are being updated — stay tuned.',
                duration: 6000,
                // important: true,
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null;
};
