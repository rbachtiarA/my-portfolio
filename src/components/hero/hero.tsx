import Image from "next/image"
import MyContactButton from "./myContact"

export default function Hero() {
  return (
    <div className="[&_h1]:text-2xl w-full md:h-[calc(100vh-64px)] flex flex-col items-center justify-center md:flex-row">
        <div className="w-[300px] md:w-[450px] flex flex-col items-center">
        <p className="block md:hidden font-bold text-3xl text-center">Hi, Welcome to my portfolio</p>          
          <Image priority src={'/avatar.png'} alt="picture of ryan" width={0} height={0} sizes="100vw" className="w-[250px] md:w-[400px]" draggable={false}/>
          <div className="rounded-full text-center justify-center logo-dark bg-slate-100 w-full">
            <p className="font-bold">Ryan Bachtiar Abdalla</p>
            <p>Fullstack Web Developer</p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex flex-col md:h-[400px] justify-evenly">
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
