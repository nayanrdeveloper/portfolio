import { HygraphBlog } from '@/lib/hygraph/blogs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BlogCardProps {
    blog: HygraphBlog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <Card className="dark:hover:shadow-primary/20 bg-background flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 w-full overflow-hidden">
                {blog.coverImage?.url ? (
                    <Image
                        src={blog.coverImage.url}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="bg-muted flex h-full w-full items-center justify-center">
                        <span className="text-muted-foreground">No Image</span>
                    </div>
                )}
                <div className="absolute top-4 right-4">
                    <Badge
                        className={cn(
                            'text-white shadow-md',
                            blog.platform === 'Medium'
                                ? 'bg-black dark:bg-white dark:text-black'
                                : blog.platform === 'Hashnode'
                                  ? 'bg-[#2962FF]'
                                  : blog.platform === 'Dev.to'
                                    ? 'bg-[#0A0A0A]'
                                    : 'bg-primary',
                        )}
                    >
                        {blog.platform}
                    </Badge>
                </div>
            </div>

            <CardHeader className="p-5 pb-2">
                <div className="text-muted-foreground mb-2 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime}</span>
                    </div>
                </div>
                <h3 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-bold transition-colors">
                    {blog.title}
                </h3>
            </CardHeader>

            <CardContent className="flex-grow p-5 pt-2">
                <p className="text-muted-foreground line-clamp-3 text-sm">{blog.description}</p>
            </CardContent>

            <CardFooter className="mt-auto p-5 pt-0">
                {blog.url && (
                    <Button
                        asChild
                        variant="outline"
                        className="group border-primary/20 hover:border-primary hover:bg-primary/5 hover:text-primary w-full gap-2"
                    >
                        <Link href={blog.url} target="_blank" rel="noopener noreferrer">
                            Read Article{' '}
                            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
