import EducationTimeline from '@/components/Resume/ExperienceTimeline';
import ExperienceTimeline from '@/components/Resume/ExperienceTimeline';
import Skills from '@/components/Resume/Skills';
import { ITab } from '@/interface/CommonInterface';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

export const TabConstant: ITab[] = [
    {
        title: 'Experience',
        icon: FaComputer,
        component: ExperienceTimeline,
    },
    {
        title: 'Skills',
        icon: FaReact,
        component: Skills,
    },
    {
        title: 'Education',
        icon: MdOutlineCastForEducation,
        component: EducationTimeline,
    },
];
