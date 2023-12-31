export interface IEducation {
    title: string;
    subTitle: string;
    edcuationItem: IEducationItem[];
}

export interface IEducationItem {
    courseDegree: string;
    universityCollege: string;
    image: string;
    address: string;
    startYear: number;
    endYear: number | string;
    websiteLink: string;
}
