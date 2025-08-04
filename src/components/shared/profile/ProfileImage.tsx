'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const ProfileImage = () => {
    return (
        <Card className="bg-background flex flex-1 flex-col overflow-hidden p-4 md:p-6">
            <CardContent className="flex items-center justify-center p-0">
                <motion.div
                    className="relative h-[360px] w-full overflow-hidden rounded-xl sm:h-[400px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0 12px 30px rgba(255, 0, 102, 0.2)', // soft pink glow
                    }}
                >
                    <Image
                        src="/profile_pic2.jpg"
                        alt="Nayan Radadiya"
                        fill
                        className="rounded-xl object-cover transition-transform duration-300"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                    />
                </motion.div>
            </CardContent>
        </Card>
    );
};
