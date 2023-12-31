import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Portfolio from '@/components/Portfolio/Portfolio';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <div>
                <ProfileHeader />
            </div>
            <div>
                <Education />
            </div>
            <div>
                <Experience />
            </div>
            <div>
                <Portfolio />
            </div>
        </main>
    );
}
