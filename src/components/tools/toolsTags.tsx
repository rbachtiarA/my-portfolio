import { IMyWorkItem } from '@/types/myworks'
import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill } from 'react-icons/ri';
import { SiExpress, SiMysql, SiNextui, SiPostgresql, SiPrisma } from 'react-icons/si';

function TagLogo({ tag }: { tag: IMyWorkItem['tools'][number] }) {
    let logo;
    let name;
    switch (tag) {
        case 'javascript':
            logo = <RiJavascriptFill />
            name = 'Javascript'
            break;
        
        case 'typescript':
            logo = <BiLogoTypescript />
            name = 'Typescript'
            break;
        
        case 'html':
            logo = <FaHtml5 />
            name = 'HTML'
            break;
        
        
        case 'css':
            logo = <FaCss3Alt />
            name = 'CSS'
            break;

        case 'nextjs':
            logo = <RiNextjsFill />
            name = 'NextJS'
            break;
        
        case 'nextui':
            logo = <SiNextui />
            name = 'NextUI'
            break;
        
        case 'nodejs':
            logo = <FaNodeJs />
            name = 'NodeJS'
            break;
        
        case 'expressjs':
            logo = <SiExpress />
            name = 'ExpressJS'
            break;
        
        case 'mysql':
            logo = <SiMysql />
            name = 'MySQL'
            break;
        
        case 'postgresql':
            logo = <SiPostgresql />
            name = 'PostgreSQL'
            break;
        
        case 'prisma':
            logo = <SiPrisma />
            name = 'Prisma ORM'
            break;

        case 'supabase':
            logo = <RiSupabaseFill />
            name = 'Supabase'
            break;
    }

    return (
        <div className='flex gap-x-1 border bg-slate-50 shadow-sm px-1 justify-center items-center rounded-sm'>
            {logo}
            <span>{name || tag}</span>
        </div>
    )
}
export default function ToolsTag({ tags }: { tags: IMyWorkItem['tools'] }) {
  return (
    <div className='flex gap-1 flex-wrap'>
        {tags.map((tag) => (
            <TagLogo tag={tag} key={tag} />
        ))}
    </div>
  )
}
