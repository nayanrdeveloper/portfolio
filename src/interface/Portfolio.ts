export interface IPortfolio {
    title: string;
    subTitle: string;
    portfolioItemList: IPortfolioItem[];
}

export interface IPortfolioItem {
    name: string;
    image: string;
    category: string;
    desc: string;
    techList: string[];
    githubLink: string;
    projectLink: string;
}
