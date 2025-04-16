import { MY_WORKS_ITEMS } from "@/constant/myProjects";
import MyWorksCard from "./myWorksCard";

export default function MyWorksList() {
    return (
        <div className="space-y-10">
            {MY_WORKS_ITEMS.map((item) => (
                <MyWorksCard key={item.title} item={item} />
            ))}
        </div>
  )
}
