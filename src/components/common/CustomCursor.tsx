'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Tailwind clsx helper

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    // Update mouse position
    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const showCursor = () => setIsVisible(true);
        const hideCursor = () => setIsVisible(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseenter', showCursor);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseenter', showCursor);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, []);

    // Hide cursor on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;
    if (!isVisible) return null;

    return (
        <motion.div
            className={cn(
                'pointer-events-none fixed z-[9999]',
                'border-primary h-8 w-8 rounded-full border-2 bg-transparent',
                'transition-all duration-150 ease-out',
            )}
            animate={{ x: position.x - 16, y: position.y - 16 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
    );
};
