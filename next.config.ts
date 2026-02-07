import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'ap-south-1.graphassets.com' },
            { protocol: 'https', hostname: 'media.graphassets.com' },
            { protocol: 'https', hostname: 'ap-south-1.cdn.hygraph.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
    /* config options here */
};

export default nextConfig;
