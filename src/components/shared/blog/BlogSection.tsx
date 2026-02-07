'use client';

import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { getBlogs, HygraphBlog } from '@/lib/hygraph/blogs';
import { Loader2 } from 'lucide-react';

export const BlogSection = () => {
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

    if (loading) {
        return (
            <section id="blog" className="bg-muted/30 py-20 md:py-28">
                <div className="flex h-40 items-center justify-center">
                    <Loader2 className="text-primary h-8 w-8 animate-spin" />
                </div>
            </section>
        );
    }

    if (blogs.length === 0) return null;

    return (
        <section id="blog" className="py-20 md:py-28">
            <SectionHeader title="Latest Articles" subtitle="My Thoughts & Writings" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};
