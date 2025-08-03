'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EducationTimelineSection from './EducationTimelineSection';
import { cn } from '@/lib/utils';
import ProfessionalSkillsSection from './ProfessionalSkillsSection';

export const resumeTabTriggers = [
  { value: 'education', label: 'Education' },
  { value: 'skills', label: 'Professional Skills' },
  { value: 'experience', label: 'Experience' },
  { value: 'interview', label: 'Interview' },
];


export const ResumeTabs = () => {
  return (
    <Tabs defaultValue="education" className="w-full max-w-6xl mx-auto">
      <TabsList className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2 p-1  rounded-full bg-background card-shadow mb-6">
        {resumeTabTriggers.map(({ label, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className={cn(
              'rounded-full py-2 text-sm font-semibold transition-all',
              'data-[state=active]:bg-background',
              'data-[state=active]:text-pink-600',
              'data-[state=active]:shadow-md',
              'hover:bg-muted/30'
            )}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="education">
        <h2 className="text-2xl font-bold mb-4">Education Quality</h2>
        <EducationTimelineSection />
      </TabsContent>

      <TabsContent value="skills">
        <TabsContent value="skills">
  <ProfessionalSkillsSection />
</TabsContent>
      </TabsContent>

      <TabsContent value="experience">
        <div className="text-muted-foreground text-center py-8">
          Experience section will go here.
        </div>
      </TabsContent>

      <TabsContent value="interview">
        <div className="text-muted-foreground text-center py-8">
          Interview section coming soon...
        </div>
      </TabsContent>
    </Tabs>
  );
};
