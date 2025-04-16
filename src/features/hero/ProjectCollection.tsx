import ProjectCardNew from "@/features/hero/ProjectCard";
import { MY_WORKS_ITEMS } from "@/constant/myProjects";

export default function ProjectCollection() {
  return (
    <div className="flex flex-col gap-4 group/card-container justify-center items-center">
        <h2 className="text-4xl">Featured Projects</h2>
        {
            MY_WORKS_ITEMS.map((item) => (
                <ProjectCardNew key={item.title} project={item} />
            ))
        }
    </div>
  )
}

