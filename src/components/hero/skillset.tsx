import Image from "next/image";
export default function Skillset() {
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
      <li key={label} className={`flex flex-col justify-between items-center opacity-0 animate-wiggleAppear`} style={{animationTimeline: 'view()', animationRange: 'entry', animationFillMode: 'forwards'}}>
        <Image className={'grayscale hover:grayscale-0 transition hover:scale-110'} src={content} width={72} height={72} alt={`logo of ${label}`}/>
        <p>{label}</p>
      </li>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Skills & Languages</h1>
        <ul className="grid grid-cols-4 md:grid-cols-7 md:gap-x-10 gap-2 justify-end w-full h-full">
            {MY_SKILL_SET_STRING.map((item) => (
              <SkillSetItem content={item.content} label={item.label} key={item.label} />
            ))}
        </ul>
    </div>
  )
}
