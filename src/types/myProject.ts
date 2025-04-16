export interface MyProjectItem {
    type: "Personal Project" | "Open Source" | "Freelance" | "Internship" | "Hackathon" | "Collaboration",
    title: string;
    summary: string;
    longDescription?: STARMethod;
    linkDemo?: string;
    linkGithub: string;
    linkDetails: string;
    features?: ProjectFeature[];
    mainImage?:string,
    images: string[];
    tools: WorkTools[]
}

interface ProjectFeature {
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