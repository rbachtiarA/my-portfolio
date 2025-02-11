import Image from "next/image"
import MyContactButton from "./myContact"

export default function Hero() {
  return (
    <div className="[&_h1]:text-2xl w-full md:h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-y-4 md:gap-x-4 md:flex-row main-animation">
        <div className="w-[300px] md:w-[450px] flex flex-col items-center hero-animation-left">
          <p className="block md:hidden font-bold text-3xl text-center">Hi, Welcome to my portfolio</p>          
          <Image className="px-2" priority src={'/avatar2.png'} alt="picture of ryan" width={1000} height={800} draggable={false}/>
          <div className="rounded-xl text-center justify-center logo-dark bg-sky-200 w-full">
            <p className="font-bold">Ryan Bachtiar Abdalla</p>
            <p>Fullstack Web Developer</p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex flex-col md:h-[400px] justify-evenly hero-animation-right">
          <p className="hidden md:block font-bold text-3xl">Hi, Welcome to my portfolio</p>
          <p> 
          I&apos;m a Full-stack web developer. My primary stack includes React.js with the Next.js framework for the frontend, and Node.js with Express.js for backend logic and RESTful APIs. I use Prisma ORM for schema design and data management with MySQL or PostgreSQL databases.

My demo projects are deployed on Vercel, using Supabase as a temporary database. Right now, I&apos;m working on expanding my knowledge of Go programming, diving deeper into advanced Next.js concepts, and improving my expertise in end-to-end (E2E) testing for better CI/CD in my upcoming projects.
          </p>
          <div className="flex justify-end">
            <MyContactButton />
          </div>
        </div>
    </div>
  )
}
