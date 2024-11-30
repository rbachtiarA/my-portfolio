import { VscGithubProject } from "react-icons/vsc"

const MY_WORKS_ITEMS: {title: string, summary: string, link:string}[] = [
    {
        title: 'Bermuda Store',
        summary: 'A modern web-based grocery store application designed to simplify and enhance the shopping experience for customers. Built with cutting-edge technologies like NextJS for a fast, responsive frontend, Express.js for a robust backend, and Prisma with MySQL for efficient database management, it ensures high performance and scalability. The platform offers user-friendly navigation, secure transactions, and features tailored for convenience, such as personalized shopping lists, real-time inventory updates, and seamless checkout. With a focus on reliability and customer satisfaction, Bermuda Store aims to revolutionize the online grocery shopping experience.',
        link: 'https://github.com/rbachtiarA'
    },
    {
        title: 'Bandar Ticket',
        summary: 'A comprehensive event ticketing web application designed to cater to different user roles. Customers can easily browse, buy, or book tickets for various events, while organizers can efficiently create events, manage ticketing, and monitor sales performance. Administrators oversee all platform data, ensuring smooth operations and integrity. Built with NextJS for an intuitive and dynamic user interface, Express.js for a scalable backend, and Prisma with MySQL for reliable database management, Bandar Tiket offers a seamless and secure platform for event management and ticket purchasing.',
        link: 'https://github.com/rbachtiarA'
    },
] 
export default function MyWorks() {
    const myWorkItem = (title: string, summary: string, link:string) => (
        <li key={title} className="flex odd:flex-row-reverse">
            <div className="image w-1/2 h-[200px] bg-black"></div>
            <div className="w-1/2">
                <h3>{title}</h3>
                <p className="text-wrap">
                    {summary}
                </p>
                <span className="flex">
                    <a href={link} className="underline hover:text-gray-700">
                        <div className="flex gap-2">
                            {title} - Github repo <VscGithubProject />
                        </div>
                    </a>
                </span>
            </div>
        </li>
    )
    return (
    <div className="bg-slate-50">
        <h1 className="text-2xl text-center">My Works</h1>
        <ul className="[&_h3]:font-semibold [&_h3]:text-blue-400 grid p-4 gap-4 [&>li]:gap-4">
            {MY_WORKS_ITEMS.map((item) => (
                myWorkItem(item.title, item.summary, item.link)
            ))}
            
        </ul>
    </div>
  )
}
