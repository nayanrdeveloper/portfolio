import { BlogSection } from '@/components/shared/blog/BlogSection';

export default function BlogsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <BlogSection isPage={true} />
        </main>
    );
}
