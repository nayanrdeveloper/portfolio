import React from 'react';
import { IconType } from 'react-icons';


export interface ISubHeader {
    title: string;
    subTitle?: string;
}

export interface ITab {
    title: string;
    icon: IconType;
    component: React.ComponentType<any>;
}
