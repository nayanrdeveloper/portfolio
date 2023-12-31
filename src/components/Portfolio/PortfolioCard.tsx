'use client';
import { IPortfolioItem } from '@/interface/Portfolio';
import Image from 'next/image';
import React from 'react';

interface IPortfolioCardInterface {
    portfolio: IPortfolioItem;
}

export default function PortfolioCard({ portfolio }: IPortfolioCardInterface) {
    return (
        <div className="card-layout space-y-2">
            <div className="">
                <Image
                    src={portfolio.image}
                    alt={portfolio.name}
                    width={350}
                    height={380}
                    className="rounded-lg object-cover"
                />
            </div>
            <div>
                <p className="font-semibold uppercase tracking-widest text-primary-pink">
                    {portfolio.category}
                </p>
            </div>
            <h4 className="text-2xl font-bold leading-normal text-secondary dark:text-gray">
                {portfolio.name}
            </h4>
        </div>
    );
}
