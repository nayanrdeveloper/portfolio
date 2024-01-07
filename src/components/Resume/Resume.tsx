'use client';
import React from 'react';
import { Tabs } from 'flowbite-react';
import SubHeader from '../Common/SubHeader';
import { TabConstant } from '@/constants/CommonConstant';

export default function Resume() {
    return (
        <div className="section-layout">
            <SubHeader
                title={'My Resume'}
                subTitle={'7+ YEARS OF EXPERIENCE'}
            />
            <div>
                <Tabs aria-label="Full width tabs" style="fullWidth">
                    {TabConstant.map((tabItem, index: number) => (
                        <Tabs.Item
                            active
                            title={tabItem.title}
                            icon={tabItem.icon}
                            key={index}
                        >
                            <tabItem.component />
                        </Tabs.Item>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
