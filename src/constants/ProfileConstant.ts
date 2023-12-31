import { IProfile } from '@/interface/ProfileInterface';
import {
    MdOutlineEmail,
    MdLocationOn,
    MdOutlineInsertDriveFile,
} from 'react-icons/md';

export const profileConstant: IProfile = {
    profileHeaderItem: [
        {
            icon: MdOutlineInsertDriveFile,
            title: 'Fronted developer',
        },
        {
            icon: MdOutlineEmail,
            title: 'nayanrdeveloper@gmail.com',
        },
        {
            icon: MdLocationOn,
            title: 'Ganga Bhuvan, sardat Nagar St.-1, Jasdan, Rajkot',
        },
    ],
    description:
        'Frontend Developer | React | Next.js | TypeScript | 🏆 2x Hackathon Winner | Redux',
    name: 'Nayan',
    fullName: 'Nayan Radadiya',
    shortName: 'NR',
};
