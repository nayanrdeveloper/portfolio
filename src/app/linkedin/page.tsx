import { LinkedInSection } from '@/components/shared/linkedin/LinkedInSection';

export default function LinkedInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <LinkedInSection isPage={true} />
        </main>
    );
}
