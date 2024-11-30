'use client'
import { IconContext } from "react-icons";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
export default function Skillset() {
  const SIZE_ICON = 72
  const COLOR_ITEM = `#4F0F0F`
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
    {content: <TbBrandMysql size={SIZE_ICON}/>, label: 'MySQL'},
    {content: <BiLogoPostgresql size={SIZE_ICON}/>, label: 'Postgresql'},
    {content: <RiSupabaseFill size={SIZE_ICON}/>, label: 'Supabase'},
    
  ] 
  const skillsetItem = (content: React.ReactNode, label: string) => (
    <li key={label} className="flex flex-col items-center justify-center">
      {content}
      <p className={`text-[${COLOR_ITEM}]`}>{label}</p>
    </li>
  )

  return (
    <IconContext.Provider value={{}}>
      <div className="flex justify-center flex-col items-center">
          <h1 className="text-3xl">Skills & Languages</h1>
          <ul className="flex flex-auto gap-6 justify-center flex-wrap">
              {MY_SKILL_SET.map((item) => (
                skillsetItem(item.content, item.label)
              ))}
          </ul>
      </div>
    </IconContext.Provider>
  )
}
