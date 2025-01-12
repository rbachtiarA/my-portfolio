import Image from "next/image"
import MyContactButton from "./myContact"

export default function Hero() {
  return (
    <div className="[&_h1]:text-2xl w-full md:h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-y-4 md:gap-x-4 md:flex-row">
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
            I&apos;m a Fullstack web developer, Mostly stack my project used is ReactJS with NextJS framework for frontend, NodeJS with
            expressJS for logic and RESTful API backend, and with help Prisma ORM to design schema and data management for MySQL or PostgreSQL database.
            My demo projects deployed in vercel platform using supabase as temporary database. Right now, I&apos;m trying to boarden my knowledge 
            with other frameworks such as laravel and tauri(?) and improve my knowledge in testing e2e for better CI/CD in my upcoming projects.
          </p>
          <div className="flex justify-end">
            <MyContactButton />
          </div>
        </div>
    </div>
  )
}
