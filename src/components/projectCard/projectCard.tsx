import { IMyWorkItem } from '@/types/myworks'
import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ToolsTag from '../tools/toolsTags'
import Link from 'next/link'

function HeaderCard({imgLink, imgAlt}: { imgLink: string, imgAlt: string }) {

	return (
		<div className='overflow-hidden self-center rounded-md'>
			<Image src={imgLink} width={400} height={0} alt={imgAlt}/>
		</div>
	)
}
function ContentCard({title, tools, description}: {title: string, tools: IMyWorkItem['tools'], description: string}) {

	return (
		<div className='flex flex-col gap-2'>
			<h1>{title}</h1>
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
				<Link href={linkDemo} >
					<button className='bg-slate-200 px-2 py-1 border rounded-md hover:bg-slate-400 font-semibold'>Live Demo</button>
				</Link>
			}
			{
				linkGit &&
				<Link href={linkGit} >
					<button className='bg-slate-200 px-2 py-1 border rounded-md hover:bg-slate-400 font-semibold'><FaGithub size={24}/></button>
				</Link>
			}
		</div>
	)
}
export default function ProjectCard({ project }: { project: IMyWorkItem }) {
  return (
    <li className='w-full h-full flex flex-col justify-between py-4 px-2 shadow-sm bg-slate-50 rounded-sm hover:[&_img]:scale-125 [&_*]:transition-all duration-300'>
      {/* HEADER */}
			<HeaderCard imgAlt={ project.title } imgLink={ project.mainImage! }/>

			{/* CONTENT */}
			<ContentCard title={ project.title } description={ project.summary } tools={ project.tools }/>

			{/* FOOTER */}
			<FooterCard linkDemo={ project.linkDemo } linkGit={ project.linkGithub }/>

    </li>
  )
}
