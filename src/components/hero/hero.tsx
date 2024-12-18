'use client'

import Image from "next/image"
import MyContactButton from "./myContact"

export default function Hero() {
  return (
    <div className="[&_h1]:text-2xl w-full flex flex-col items-center justify-center md:flex-row">
        <div className="w-[300px] md:w-[450px] flex flex-col items-center">
          <Image src={'/avatar.png'} alt="picture of ryan" width={0} height={0} sizes="100vw" className="w-[250px] md:w-[400px]" draggable={false}/>
          <div className="rounded-full text-center justify-center logo-dark bg-slate-100 w-full">
            <p className="font-bold">Ryan Bachtiar Abdalla</p>
            <p>Fullstack Web Developer</p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex flex-col md:h-[400px] justify-evenly">
          <p className="hidden md:block">Hi, Welcome to my portfolio</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsa officiis eveniet nam nobis non corrupti veniam magni! Tempore earum cupiditate hic officia, veritatis quod aliquam natus ab maiores! Nisi, reiciendis ipsum? Enim voluptate deserunt, voluptates voluptas architecto nobis hic, veniam cum, impedit ipsa fugiat? Iste ut amet sed necessitatibus!</p>
          <div className="flex justify-end">
            <MyContactButton />
          </div>
        </div>
    </div>
  )
}
