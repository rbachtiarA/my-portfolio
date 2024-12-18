'use client'
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function MyContactButton() {
    function ContactButton({children, link}: {children: ReactNode, link:string}) {
        return (
            <button className='bg-slate-200 rounded-full p-2 hover:bg-slate-400' onClick={() => redirect(link)}>
                {children}
            </button>
        )
    } 

  return (
    <div className="flex gap-2">
        <ContactButton link="https://wa.me/+628561232435">
            <FaWhatsapp size={40}/>
        </ContactButton>
        <ContactButton link="mailto:rbachtiarabdalla@gmail.com">
            <CiMail size={40}/>
        </ContactButton>
        <ContactButton link="https://github.com/rbachtiarA">
            <FaGithub size={40}/>
        </ContactButton>
    </div>
  )
}
