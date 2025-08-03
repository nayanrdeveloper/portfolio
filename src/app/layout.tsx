import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar/Navbar';
import { MainWrapper } from '@/components/layout/MainWrapper';
import { Footer } from '@/components/layout/Footer/Footer';
import { ThemeProvider } from './providers/ThemeProvider';

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
                    <Navbar />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
