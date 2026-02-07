'use client';

import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { getBlogs, HygraphBlog } from '@/lib/hygraph/blogs';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BlogSectionProps {
    limit?: number;
    isPage?: boolean;
}

export const BlogSection = ({ limit, isPage = false }: BlogSectionProps) => {
    const [blogs, setBlogs] = useState<HygraphBlog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogs()
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch blogs:', error);
                setLoading(false);
            });
    }, []);

    const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

    if (loading) {
        return (
            <section id="blog" className={`bg-muted/30 py-20 md:py-28 ${isPage ? 'pt-32' : ''}`}>
                <div className="flex h-40 items-center justify-center">
                    <Loader2 className="text-primary h-8 w-8 animate-spin" />
                </div>
            </section>
        );
    }

    if (blogs.length === 0) return null;

    return (
        <section id="blog" className={`py-20 md:py-28 ${isPage ? 'pt-32' : ''}`}>
            {!isPage && <SectionHeader title="Latest Articles" subtitle="My Thoughts & Writings" />}

            {isPage && (
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold">All Articles</h1>
                    <p className="text-muted-foreground">
                        My thoughts, tutorials, and tech deep-dives.
                    </p>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {!isPage && blogs.length > (limit || 0) && (
                    <div className="mt-12 flex justify-center">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/blogs">
                                View All Articles <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};
