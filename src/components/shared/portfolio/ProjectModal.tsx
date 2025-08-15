// src/sections/ProjectModal.tsx
'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel';
import { ExternalLink, ThumbsUp, X } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getProjectBySlug } from '@/lib/hygraph/projects';
import { mapProjectToModalItem, type PortfolioItem } from '@/lib/hygraph/mapToModal';

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
    slug: string | null; // <-- pass slug instead of full item
}

export const PortfolioModal = ({ isOpen, onClose, slug }: PortfolioModalProps) => {
    const [likes, setLikes] = useState(1580);
    const [item, setItem] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(false);

    // Fetch detail when opened with a slug
    useEffect(() => {
        let cancelled = false;
        async function load() {
            if (!isOpen || !slug) return;
            setLoading(true);
            try {
                const data = await getProjectBySlug(slug);
                if (!cancelled && data) setItem(mapProjectToModalItem(data));
            } catch (e) {
                console.error(e);
                if (!cancelled) setItem(null);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        load();
        return () => {
            cancelled = true;
        };
    }, [isOpen, slug]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => (!open ? onClose() : undefined)}>
            <DialogContent
                showCloseButton={false}
                className="max-h-[90vh] overflow-y-auto rounded-2xl border p-0 sm:max-w-[1200px] xl:max-w-[1280px]"
            >
                {/* Header */}
                <div className="flex items-start justify-between px-10 pt-8">
                    <h2 className="text-foreground text-3xl leading-tight font-bold tracking-tight">
                        {item?.title ?? (loading ? 'Loading…' : 'Project')}
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="inline-flex items-center justify-center rounded-full border border-pink-500 p-1.5 text-pink-500 transition hover:bg-pink-500 hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="px-10 pt-6 pb-10">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="bg-muted/30 h-[420px] w-full animate-pulse rounded-2xl border" />
                            <div className="space-y-4">
                                <div className="bg-muted/30 h-6 w-3/4 animate-pulse rounded" />
                                <div className="bg-muted/30 h-4 w-full animate-pulse rounded" />
                                <div className="bg-muted/30 h-4 w-2/3 animate-pulse rounded" />
                                <div className="bg-muted/30 h-8 w-40 animate-pulse rounded" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Content (exact same design you had) */}
                {!!item && !loading && (
                    <>
                        {/* Top: 2-column layout */}
                        <div className="grid w-full grid-cols-2 gap-12 px-10 pt-6 pb-10">
                            {/* LEFT: Carousel */}
                            <div className="min-w-0">
                                <div className="bg-muted/20 overflow-hidden rounded-2xl border shadow">
                                    <Carousel opts={{ align: 'start', loop: true }}>
                                        <CarouselContent>
                                            {item.images.map((img, idx) => (
                                                <CarouselItem key={idx} className="px-0">
                                                    <div className="relative h-[420px] w-full">
                                                        <Image
                                                            src={img}
                                                            alt={`${item.title} image ${idx + 1}`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(min-width: 1024px) 700px, 100vw"
                                                            priority={idx === 0}
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>

                                        <CarouselPrevious className="bg-background/90 absolute top-1/2 left-4 -translate-y-1/2 rounded-full shadow hover:bg-pink-600 hover:text-white" />
                                        <CarouselNext className="bg-background/90 absolute top-1/2 right-4 -translate-y-1/2 rounded-full shadow hover:bg-pink-600 hover:text-white" />
                                    </Carousel>
                                </div>
                            </div>

                            {/* RIGHT: Details */}
                            <div className="min-w-0 space-y-6">
                                {/* Description */}
                                <p className="text-muted-foreground text-base">
                                    {item.description}
                                </p>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="mb-2 text-sm font-semibold tracking-wide uppercase">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full bg-pink-600 px-3 py-1 text-xs font-medium text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions under tech stack */}
                                <div className="flex flex-wrap items-center gap-4 pt-1">
                                    <Button
                                        onClick={() => setLikes((p) => p + 1)}
                                        className="gap-2 bg-pink-600 text-white hover:bg-pink-700"
                                    >
                                        LIKE THIS <ThumbsUp className="h-4 w-4" /> {likes}
                                    </Button>

                                    {item.externalUrl && (
                                        <a
                                            href={item.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-muted inline-flex items-center gap-2 rounded-md border px-5 py-2 text-sm hover:text-pink-600"
                                        >
                                            VIEW PROJECT <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}

                                    <span className="text-muted-foreground ml-auto text-sm">
                                        Views:{' '}
                                        <span className="text-foreground font-medium">
                                            {item.views}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        {(item.challenges || item.learned || item.strategy) && (
                            <div className="px-10 pb-2">
                                <div className="border-t" />
                            </div>
                        )}

                        {/* Bottom: 3-card grid (shadcn Card) */}
                        {(item.challenges || item.learned || item.strategy) && (
                            <div className="grid gap-6 px-10 pt-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
                                {item.challenges && (
                                    <Card className="bg-background h-full rounded-2xl">
                                        <CardHeader>
                                            <CardTitle className="text-base font-semibold">
                                                Challenges
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-muted-foreground text-sm">
                                                {item.challenges}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}

                                {item.learned && (
                                    <Card className="bg-background h-full rounded-2xl">
                                        <CardHeader>
                                            <CardTitle className="text-base font-semibold">
                                                What I Learned
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-muted-foreground text-sm">
                                                {item.learned}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}

                                {item.strategy && (
                                    <Card className="bg-background h-full rounded-2xl">
                                        <CardHeader>
                                            <CardTitle className="text-base font-semibold">
                                                Strategy / UX
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-muted-foreground text-sm">
                                                {item.strategy}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};
