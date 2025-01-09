export interface IMyWorkItem {
    title: string;
    summary: string;
    longDescription?: STARMethod;
    linkDemo?: string;
    linkGithub: string;
    linkDetails: string;
    features?: IWorkFeature[];
    mainImage?:string,
    images: string[];
    tools: WorkTools[]
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

type WorkTools = 
    "javascript"|
    "typescript"|
    "html"|
    "css"|
    "nextui"|
    "nodejs"|
    "expressjs"|
    "nextjs"|
    "mysql"|
    "postgresql"|
    "prisma"|
    "supabase"