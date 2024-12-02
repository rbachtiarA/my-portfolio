export interface IMyWorkItem {
    title: string;
    summary: string;
    longDescription?: STARMethod;
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

interface STARMethod {
    situation: string,
    task: string,
    action: string,
    result: string,
}