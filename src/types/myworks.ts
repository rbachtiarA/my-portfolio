export interface IMyWorkItem {
    title: string;
    summary: string;
    longDescription?: string;
    link: string;
    linkDetails: string;
    features?: IWorkFeature[];
    mainImage?:string,
    images: string[];
}

interface IWorkFeature {
    label: string;
    description: string;
}