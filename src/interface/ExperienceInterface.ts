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
    startMonth: string;
    endYear: number | string;
    endMonth: string;
    websiteLink: string;
    description: string[];
    techologyList: string[];
}
