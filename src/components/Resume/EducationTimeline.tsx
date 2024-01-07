import { EducationConstant } from '@/constants/EducationConstant';
import { Timeline } from 'flowbite-react';
import React from 'react';
import { FaSchool } from 'react-icons/fa';

export default function EducationTimeline() {
    return (
        <Timeline>
            {EducationConstant.edcuationItem.map((education, index: number) => (
                <Timeline.Item key={index}>
                    <Timeline.Point icon={FaSchool} />
                    <Timeline.Content>
                        <Timeline.Time>March 2022</Timeline.Time>
                        <Timeline.Title>
                            Marketing UI design in Figma
                        </Timeline.Title>
                        <Timeline.Body>
                            All of the pages and components are first designed
                            in Figma and we keep a parity between the two
                            versions even as we update the project.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
