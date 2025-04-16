import { MyProjectItem } from '@/types/myProject'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import ToolsTag from '../../components/tags/ToolsTag'

function HeaderCard({imgLink, imgAlt}: { imgLink: string, imgAlt: string }) {

	return (
		<div className='flex justify-center'>
			<div className='overflow-hidden rounded-md max-w-[500px] max-h-[200px]'>
				<picture>
					<img src={imgLink} alt={imgAlt} />
				</picture>
			</div>
		</div>
	)
}
function ContentCard({title, tools, description}: {title: string, tools: MyProjectItem['tools'], description: string}) {

	return (
		<div className='flex flex-col h-full justify-start gap-2'>
			<h2 className='font-semibold text-xl text-primary'>{title}</h2>
			<div>
				<ToolsTag tags={tools}/>
			</div>
			<div>
				<p>{description}</p>
			</div>
		</div>
	)
}

function FooterCard({ linkDemo, linkGit }: { linkGit?: string, linkDemo?: string }) {
	return (
		<div className='flex gap-2 justify-end w-full'>
			{
				linkDemo &&
				<Link href={linkDemo} className='bg-slate-200 px-2 py-1 border rounded-md hover:bg-slate-400 font-semibold'>
					Live Demo
				</Link>
			}
			{
				linkGit &&
				<Link href={linkGit} className='bg-slate-200 px-2 py-1 border rounded-md hover:bg-slate-400 font-semibold' aria-label={`git repository`}>
					<FaGithub size={24}/>
				</Link>
			}
			{
				!linkDemo && !linkGit &&
				<Link href={'/'} className='bg-slate-200 px-2 py-1 border rounded-md hover:bg-slate-400 font-semibold' aria-label={`on progress`}>
					Works in Progress
				</Link>
			}
		</div>
	)
}
export default function ProjectCard({ project }: { project: MyProjectItem }) {
  return (
    <li className='main-animation grid grid-rows-[200px_1fr_2em] justify-center items-center py-4 px-2 gap-y-2 shadow-md bg-slate-50 rounded-sm hover:[&_img]:scale-125 [&_*]:transition-all duration-300'>
      {/* HEADER */}
			<HeaderCard imgAlt={ project.title } imgLink={ project.mainImage! }/>

			{/* CONTENT */}
			<ContentCard title={ project.title } description={ project.summary } tools={ project.tools }/>

			{/* FOOTER */}
			<FooterCard linkDemo={ project.linkDemo } linkGit={ project.linkGithub }/>

    </li>
  )
}
