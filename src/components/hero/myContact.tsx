'use client'
import Link from "next/link";
import { ReactNode } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function MyContactButton() {
    function ContactButton({children, link, label}: {children: ReactNode, link:string, label:string}) {
        return (
            <Link className='bg-slate-200 rounded-full p-2 hover:bg-slate-400' href={link} aria-label={label}>
                {children}
            </Link>
        )
    } 

  return (
    <div className="flex gap-2">
        <ContactButton link="https://wa.me/+628561232435" label="Whatsapp">
            <FaWhatsapp size={40}/>
        </ContactButton>
        <ContactButton link="mailto:rbachtiarabdalla@gmail.com" label="Email">
            <CiMail size={40}/>
        </ContactButton>
        <ContactButton link="https://github.com/rbachtiarA" label="Github">
            <FaGithub size={40}/>
        </ContactButton>
    </div>
  )
}
