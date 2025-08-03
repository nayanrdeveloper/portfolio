'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EducationTimelineSection from './EducationTimelineSection';

export const ResumeTabs = () => {
  return (
    <Tabs defaultValue="education" className="w-full max-w-5xl mx-auto">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-6">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Professional Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="interview">Interview</TabsTrigger>
      </TabsList>

      <TabsContent value="education">
        <h2 className="text-2xl font-bold mb-4">Education Quality</h2>
        <EducationTimelineSection />
      </TabsContent>

      <TabsContent value="skills">
        <div className="text-muted-foreground text-center py-8">
          Professional Skills content coming soon...
        </div>
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
