'use client'
import { MY_WORKS_ITEMS } from "@/static/myworks"
import ProjectCard from "../projectCard/projectCard"

export default function MyWorks() {
    
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
