import { MyProjectItem } from "@/types/myProject";
import ToolsTag from "../../components/tags/ToolsTag";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function FooterCard({ linkDemo, linkGit }: { linkGit?: string, linkDemo?: string }) {
	return (
		<div className='flex gap-2 justify-end w-full'>
			{
				linkDemo &&
				<Link href={linkDemo} className='px-2 py-1 bg-primary/30 rounded-md hover:bg-secondary/80 font-semibold text-foreground'>
					Live Demo
				</Link>
			}
			{
				linkGit &&
				<Link href={linkGit} className='px-2 py-1 bg-primary/30 rounded-md hover:bg-secondary/80 font-semibold text-foreground hover:text-black' aria-label={`git repository`}>
					<FaGithub size={24}/>
				</Link>
			}
			{
				!linkDemo && !linkGit &&
				<Link href={'/'} className='px-2 py-1 bg-primary/30 rounded-md hover:bg-secondary/80 font-semibold' aria-label={`on progress`}>
					Works in Progress
				</Link>
			}
		</div>
	)
}

export default function ProjectCardNew({ project }: { project: MyProjectItem }) {
  return (
    <div className="relative rounded-md border p-2 border-extra group/card transition-all main-animation">
        <div className="flex flex-col md:flex-row justify-center gap-4 transition duration-200">
            {/* image */}
            <div className='flex justify-center items-center'>
                <div className='overflow-hidden w-[300px] max-h-[200px] rounded-md'>
                    <picture>
                        <img src={project.mainImage} alt={project.title} />
                    </picture>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col h-full justify-between gap-2">
                {/* header */}
                <div>
                    <span className="flex items-center gap-2 text-xl">
                        <h2 className="font-bold">{project.title}</h2> 
                        <p className="text-secondary font-semibold text-sm"> • {project.type}</p>
                    </span>
                </div>

                {/* tags */}
                <div>
                    <ToolsTag tags={project.tools} />
                </div>

                {/* description */}
                <div>
                    <p>{project.summary}</p>
                </div>

                <div>
                    <FooterCard linkDemo={project.linkDemo} linkGit={project.linkGithub} />
                </div>
            </div>
        </div>
        <div className="absolute invisible md:visible w-full inset-0 
            group-hover/card-container:bg-black/15
            group-hover/card:bg-white/5 group-hover/card:-z-[1]
            transition duration-200"></div>
    </div>
  )
}
