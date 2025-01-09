'use client'
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress, SiPrisma } from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
export default function Skillset() {
  const SIZE_ICON = 72
  const COLOR_ITEM = `#4F0F0F`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const MY_SKILL_SET: {content: React.ReactNode, label: string}[] = [
    {content: <BiLogoTypescript  size={SIZE_ICON}/>, label: 'Typescript'},
    {content: <BiLogoJavascript size={SIZE_ICON}/>, label: 'Javascript'},
    {content: <TbBrandNextjs size={SIZE_ICON}/>, label: 'NextJS'},
    {content: <BiLogoReact size={SIZE_ICON}/>, label: 'ReactJS'},
    {content: <BiLogoHtml5 size={SIZE_ICON}/>, label: 'HTML5'},
    {content: <BiLogoCss3 size={SIZE_ICON}/>, label: 'CSS3'},
    {content: <BiLogoTailwindCss size={SIZE_ICON}/>, label: 'Tailwind CSS'},
    {content: <BiLogoNodejs size={SIZE_ICON}/>, label: 'NodeJS'},
    {content: <SiExpress size={SIZE_ICON}/>, label: 'ExpressJS'},
    {content: <SiPrisma size={SIZE_ICON}/>, label: 'Prisma ORM'},
    {content: <TbBrandMysql size={SIZE_ICON}/>, label: 'MySQL'},
    {content: <BiLogoPostgresql size={SIZE_ICON}/>, label: 'Postgresql'},
    {content: <RiSupabaseFill size={SIZE_ICON}/>, label: 'Supabase'},
  ]
  const MY_SKILL_SET_STRING: {content: string, label: string}[] = [
    {content: '/Typescript_Logo.svg', label: 'Typescript'},
    {content: '/Javascript_Logo.svg', label: 'Javascript'},
    {content: '/CSS_Logo.svg', label: 'CSS'},
    {content: '/HTML_Logo.svg', label: 'HTML'},
    {content: '/React_Logo.svg', label: 'ReactJs'},
    {content: '/Nextjs_Logo.svg', label: 'NextJs'},
    {content: '/Tailwind_Logo.svg', label: 'Tailwind'},
    {content: '/Nodejs_Logo.svg', label: 'NodeJs'},
    {content: '/Expressjs_Logo.svg', label: 'ExpressJs'},
    {content: '/Prisma_Logo.svg', label: 'Prisma'},
    {content: '/Mysql_Logo.svg', label: 'MySQL'},
    {content: '/Postgresql_Logo.svg', label: 'PostgreSQL'},
    {content: '/Supabase_Logo.svg', label: 'Supabase'},
  ]

  function SkillSetItem ({content, label}:{content: string, label: string}) {
    return (
      <li key={label} className="flex flex-col justify-between items-center">
        <Image className={'grayscale hover:grayscale-0 transition hover:scale-110'} src={content} width={72} height={72} alt={label}/>
        <p className={`text-[${COLOR_ITEM}]`}>{label}</p>
      </li>
    )
  }

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl">Skills & Languages</h1>
        <ul className="grid grid-cols-4 md:grid-cols-7 md:gap-x-10 gap-2 justify-end w-full h-full">
            {MY_SKILL_SET_STRING.map((item) => (
              <SkillSetItem content={item.content} label={item.label} key={item.label} />
            ))}
        </ul>
    </div>
  )
}
