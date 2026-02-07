import { HygraphLinkedInPost } from '@/lib/hygraph/linkedin';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ThumbsUp, MessageSquare, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface LinkedInPostCardProps {
    post: HygraphLinkedInPost;
}

export const LinkedInPostCard = ({ post }: LinkedInPostCardProps) => {
    // Format date string
    const dateStr = post.publishDate || post.publishedAt;
    const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Card className="bg-background dark:hover:shadow-primary/20 border-muted flex h-full flex-col transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3 p-4 pb-2">
                <div className="rounded-full bg-[#0077b5] p-2 text-white">
                    <Linkedin size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">Nayan Radadiya</span>
                    <span className="text-muted-foreground text-xs">{formattedDate}</span>
                </div>
            </CardHeader>

            <CardContent className="flex flex-grow flex-col gap-3 p-4 pt-2">
                <p className="text-foreground/90 line-clamp-4 text-sm whitespace-pre-wrap">
                    {post.content}
                </p>

                {post.image?.url && (
                    <div className="relative mt-2 h-48 w-full overflow-hidden rounded-md">
                        <Image
                            src={post.image.url}
                            alt="Post attachment"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </CardContent>

            <CardFooter className="mt-auto flex flex-col gap-3 p-4 pt-0">
                <div className="text-muted-foreground flex w-full items-center justify-between border-t pt-3 text-xs">
                    <div className="flex items-center gap-1">
                        <ThumbsUp size={14} />
                        <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{post.comments} comments</span>
                        <MessageSquare size={14} />
                    </div>
                </div>

                <Button
                    asChild
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10 w-full gap-2"
                >
                    <Link href={post.url} target="_blank" rel="noopener noreferrer">
                        View Post <ExternalLink size={14} />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};
