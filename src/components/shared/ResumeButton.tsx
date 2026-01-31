'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const ResumeButton = () => {
    return (
        <a href="/resume.pdf" download="Nayan_Radadiya_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hidden gap-2 md:inline-flex">
                Resume <Download className="h-4 w-4" />
            </Button>
        </a>
    );
};
