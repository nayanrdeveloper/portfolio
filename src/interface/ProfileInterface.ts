export interface IProfile {
    profileHeaderItem: IProfileHeaderItem[];
    description: string;
    name: string;
    fullName: string;
    shortName: string;
}

export interface IProfileHeaderItem {
    icon: React.ElementType;
    title: string;
}
