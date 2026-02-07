'use client';

import { useEffect, useState } from 'react';
import { LinkedInPostCard } from './LinkedInPostCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { getLinkedInPosts, HygraphLinkedInPost } from '@/lib/hygraph/linkedin';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LinkedInSectionProps {
    limit?: number;
    isPage?: boolean;
}

export const LinkedInSection = ({ limit, isPage = false }: LinkedInSectionProps) => {
    const [posts, setPosts] = useState<HygraphLinkedInPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLinkedInPosts()
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch LinkedIn posts:', error);
                setLoading(false);
            });
    }, []);

    const displayedPosts = limit ? posts.slice(0, limit) : posts;

    if (loading) {
        return (
            <section id="linkedin" className={`py-20 md:py-28 ${isPage ? 'pt-32' : ''}`}>
                <div className="flex h-40 items-center justify-center">
                    <Loader2 className="text-primary h-8 w-8 animate-spin" />
                </div>
            </section>
        );
    }

    if (posts.length === 0) return null;

    return (
        <section id="linkedin" className={`py-20 md:py-28 ${isPage ? 'pt-32' : ''}`}>
            {!isPage && (
                <SectionHeader title="LinkedIn Activity" subtitle="Recent Posts & Updates" />
            )}

            {isPage && (
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold">All LinkedIn Posts</h1>
                    <p className="text-muted-foreground">
                        My thoughts, updates, and shares from LinkedIn.
                    </p>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {displayedPosts.map((post) => (
                        <LinkedInPostCard key={post.id} post={post} />
                    ))}
                </div>

                {!isPage && posts.length > (limit || 0) && (
                    <div className="mt-12 flex justify-center">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/linkedin">
                                View All Posts <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};
