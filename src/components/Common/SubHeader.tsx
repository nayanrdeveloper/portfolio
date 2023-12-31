import { ISubHeader } from '@/interface/CommonInterface';
import React from 'react';

export default function SubHeader({ title, subTitle }: ISubHeader) {
    return (
        <div className="my-6 flex flex-col items-center space-y-2">
            <p className="text-xl tracking-widest text-primary-pink">
                {subTitle}
            </p>
            <h4 className="text-5xl font-semibold text-primary dark:text-gray">
                {title}
            </h4>
        </div>
    );
}
