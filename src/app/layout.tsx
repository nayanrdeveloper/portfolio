import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar/Navbar';
import { MainWrapper } from '@/components/layout/MainWrapper';
import { Footer } from '@/components/layout/Footer/Footer';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner'; // from ShadCN setu
import { CustomCursor } from '@/components/common/CustomCursor';

export const metadata: Metadata = {
    title: 'Portfolio | Nayan',
    description: 'My personal portfolio site built with Next.js 15',
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
