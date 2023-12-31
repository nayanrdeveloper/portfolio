export interface IExpereince {
    title: string;
    subTitle: string;
    experienceItemList: IExpereinceItem[];
}

export interface IExpereinceItem {
    role: string;
    company: string;
    image: string;
    startYear: number;
    endYear: number | string;
    websiteLink: string;
}
