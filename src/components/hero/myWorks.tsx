import Link from "next/link"
import { VscGithubProject } from "react-icons/vsc"
import { MY_WORKS_ITEMS } from "@/static/myworks"
import { IMyWorkItem } from "@/types/myworks"
import Image from "next/image"
import ProjectCard from "../projectCard/projectCard"

export default function MyWorks() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myWorkItem = ({linkGithub, linkDemo, linkDetails,summary, title, mainImage}: IMyWorkItem) => (
        <li key={title} className="mx-7 py-8 md:py-16 flex flex-col md:flex-row md:odd:flex-row-reverse md:[&_img]:odd:skew-y-2 md:[&_img]:even:-skew-y-2 md:[&_img]:hover:skew-y-0">
            <div className="flex justify-center md:w-1/2">
                <Image loading="lazy" className='rounded-md border-[1px] border-slate-400 md:transform-gpu transition' src={mainImage || '/'} alt={title} width={400} height={300}/>
            </div>
            <div className="md:w-1/2 p-4">
                <h3 className="text-heading3">{title}</h3>
                {/* Link works / project */}
                <div className="flex justify-between">
                    <span className="flex">
                        <a href={linkGithub} className="underline hover:text-gray-700">
                            <div className="flex gap-2">
                                {title} - Github repo <VscGithubProject />
                            </div>
                        </a>
                    </span>
                    <span className="flex">
                        <Link href={linkDetails} className="underline hover:text-gray-700">
                            <div className="flex gap-2">
                                Details...
                            </div>
                        </Link>
                    </span>
                </div>
                {/* works summary */}
                <p className="text-wrap">
                    {summary}
                </p>
                {
                    linkDemo && 
                    <span className="flex">
                        <a href={linkDemo} className="underline hover:text-gray-700">
                                Live demo
                        </a>
                    </span>
                }
            </div>
        </li>
    )
    return (
    <div>
        <h1 className="text-4xl text-center">My Works</h1>
        <ul className="[&_h3]:font-semibold [&_h3]:text-blue-400 grid grid-flow-row md:grid-cols-2 gap-x-4 [&>li]:gap-4 h-full">
            {MY_WORKS_ITEMS.map((item, idx) => (
                <ProjectCard project={item} key={idx} />
            ))}
        </ul>
    </div>
  )
}
