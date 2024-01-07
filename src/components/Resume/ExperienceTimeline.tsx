import { ExperienceConstant } from '@/constants/ExpereinceConstant';
import { Timeline } from 'flowbite-react';
import React from 'react';
import { FaSchool } from 'react-icons/fa';

export default function EducationTimeline() {
    return (
        <Timeline>
            {ExperienceConstant.experienceItemList.map(
                (experience, index: number) => (
                    <Timeline.Item key={index}>
                        <Timeline.Point icon={FaSchool} />
                        <Timeline.Content>
                            <Timeline.Time>February 2022</Timeline.Time>
                            <Timeline.Title>
                                Application UI code in Tailwind CSS
                            </Timeline.Title>
                            <Timeline.Body>
                                Get access to over 20+ pages including a
                                dashboard layout, charts, kanban board,
                                calendar, and pre-order E-commerce & Marketing
                                pages.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                ),
            )}
        </Timeline>
    );
}
