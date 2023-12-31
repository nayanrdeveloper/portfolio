import React from 'react';
import SubHeader from '../Common/SubHeader';
import { portfolioconstant } from '@/constants/Portfolioconstant';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
    return (
        <div className="section-layout">
            <SubHeader
                title={portfolioconstant.title}
                subTitle={portfolioconstant.subTitle}
            />
            <div className="grid grid-cols-3 gap-6">
                {portfolioconstant.portfolioItemList.map(
                    (portfolioItem, index: number) => (
                        <PortfolioCard key={index} portfolio={portfolioItem} />
                    ),
                )}
            </div>
        </div>
    );
}
