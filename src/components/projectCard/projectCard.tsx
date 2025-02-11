import { IMyWorkItem } from '@/types/myworks'
import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ToolsTag from '../tools/toolsTags'
import Link from 'next/link'

function HeaderCard({imgLink, imgAlt}: { imgLink: string, imgAlt: string }) {

	return (
		<div className='flex justify-center'>
			<div className='overflow-hidden rounded-md max-w-[450px] max-h-[200px]'>
					<Image src={imgLink} width={450} height={200} alt={imgAlt} />
			</div>
		</div>
	)
}
function ContentCard({title, tools, description}: {title: string, tools: IMyWorkItem['tools'], description: string}) {

	return (
		<div className='flex flex-col gap-2'>
			<h1 className='font-semibold text-xl'>{title}</h1>
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
export default function ProjectCard({ project }: { project: IMyWorkItem }) {
  return (
    <li className='main-animation w-full h-full grid grid-rows-[200px_1fr_2em] justify-center items-center py-4 px-2 gap-y-2 shadow-sm bg-slate-50 rounded-sm hover:[&_img]:scale-125 [&_*]:transition-all duration-300'>
      {/* HEADER */}
			<HeaderCard imgAlt={ project.title } imgLink={ project.mainImage! }/>

			{/* CONTENT */}
			<ContentCard title={ project.title } description={ project.summary } tools={ project.tools }/>

			{/* FOOTER */}
			<FooterCard linkDemo={ project.linkDemo } linkGit={ project.linkGithub }/>

    </li>
  )
}
