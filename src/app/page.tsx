import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Portfolio from '@/components/Portfolio/Portfolio';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import Resume from '@/components/Resume/Resume';

export default function Home() {
    return (
        <main>
            <div className=''>
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
            <div>
                <Resume />
            </div>
        </main>
    );
}
