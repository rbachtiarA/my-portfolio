import Link from "next/link"
import { VscGithubProject } from "react-icons/vsc"
import { MY_WORKS_ITEMS } from "../static/myworks"
import { IMyWorkItem } from "@/types/myworks"
import Image from "next/image"

export default function MyWorks() {
    const myWorkItem = ({link, linkDetails,summary, title, mainImage}: IMyWorkItem) => (
        <li key={title} className="flex flex-col md:flex-row md:odd:flex-row-reverse md:[&_img]:odd:skew-y-2 md:[&_img]:even:-skew-y-2 md:[&_img]:hover:skew-y-0">
            <div className="flex justify-center md:w-1/2">
                <Image loading="lazy" className='border-2 border-slate-400 md:transform-gpu transition' src={mainImage || '/'} alt={title} width={400} height={300}/>
            </div>
            <div className="md:w-1/2 lg:px-12">
                <h3 className="text-heading3">{title}</h3>
                {/* Link works / project */}
                <div className="flex justify-between">
                    <span className="flex">
                        <a href={link} className="underline hover:text-gray-700">
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
            </div>
        </li>
    )
    return (
    <div>
        <h1 className="text-4xl text-center">My Works</h1>
        <ul className="[&_h3]:font-semibold [&_h3]:text-blue-400 grid p-4 gap-y-12 [&>li]:gap-4 h-full">
            {MY_WORKS_ITEMS.map((item) => (
                myWorkItem(item)
            ))}
        </ul>
    </div>
  )
}
