import { IMyWorkItem } from "@/types/myworks";
import Image from "next/image";

export default function MyWorksCard({ item } :{item: IMyWorkItem}) {
  return (
    <div className="px-4 md:px-7 w-full space-y-4">
        <h2 className="text-2xl text-heading font-semibold text-center md:text-start border-b-2 border-dashed">{item.title}</h2>

        <div className="md:flex space-y-4">
            <div className="md:w-1/2 flex items-center justify-center">
                <Image className="rounded-md border-slate-200 border-[1px] h-[200px] object-cover" src={item.mainImage || '/'} alt={item.title} width={400} height={200}/>
            </div>
            <div className="md:w-1/2">

                {
                item.features && 
                    <>
                        <h3 className="logo-dark text-xl font-semibold uppercase text-center">Features</h3>
                        <ul className="list-disc">
                        {item.features?.map((item) => (
                            <li className="flex" key={item.label}>
                                <div>
                                    <h4 className="text-heading text-xl">{item.label}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </>
                }
            </div>
        </div>
    </div>
  )
}
