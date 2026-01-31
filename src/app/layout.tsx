import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar/Navbar';
import { MainWrapper } from '@/components/layout/MainWrapper';
import { Footer } from '@/components/layout/Footer/Footer';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner'; // from ShadCN setu
import { CustomCursor } from '@/components/common/CustomCursor';

export const metadata: Metadata = {
    title: 'Nayan Radadiya | Frontend Developer',
    description:
        'Frontend Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and scalable web applications.',
    keywords: [
        'Frontend Developer',
        'React Developer',
        'Next.js Developer',
        'TypeScript',
        'Web Development',
        'Portfolio',
        'Nayan Radadiya',
    ],
    authors: [{ name: 'Nayan Radadiya', url: 'https://nayan-portfolio.vercel.app' }],
    creator: 'Nayan Radadiya',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nayan-portfolio.vercel.app',
        title: 'Nayan Radadiya | Frontend Developer',
        description:
            'Frontend Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and scalable web applications.',
        siteName: 'Nayan Radadiya Portfolio',
        images: [
            {
                url: '/profile_pic2.jpg',
                width: 1200,
                height: 630,
                alt: 'Nayan Radadiya - Frontend Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nayan Radadiya | Frontend Developer',
        description:
            'Frontend Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and scalable web applications.',
        images: ['/profile_pic2.jpg'],
        creator: '@nayan_radadiya6',
    },
    icons: {
        icon: '/profile_pic2.jpg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-background text-foreground">
                <ThemeProvider>
                    <CustomCursor />
                    <Navbar />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                    <Toaster
                        position="top-center"
                        closeButton
                        duration={5000}
                        toastOptions={{
                            classNames: {
                                toast: 'border border-pink-500 bg-background shadow-md text-foreground',
                                title: 'text-pink-600 font-semibold',
                                description: 'text-sm text-muted-foreground',
                                actionButton: 'bg-pink-500 text-white hover:bg-pink-600',
                                cancelButton: 'text-muted',
                            },
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
