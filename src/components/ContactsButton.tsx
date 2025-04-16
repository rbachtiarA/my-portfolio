'use client'
import Link from "next/link";
import { ReactNode } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function MyContactsButton() {
    function ContactButton({children, link, label}: {children: ReactNode, link:string, label:string}) {
        return (
            <Link className='bg-secondary rounded-full p-2 hover:bg-secondary/90 text-foreground' href={link} aria-label={label} prefetch={false}>
                {children}
            </Link>
        )
    } 

  return (
    <div className="flex gap-2">
        <ContactButton link="https://wa.me/+628561232435" label="Whatsapp">
            <FaWhatsapp className="hover:text-[#25D366] transition duration-200"size={40}/>
        </ContactButton>
        <ContactButton  link="mailto:rbachtiarabdalla@gmail.com" label="Email">
            <CiMail className="hover:text-white transition duration-200" size={40}/>
        </ContactButton>
        <ContactButton link="https://github.com/rbachtiarA" label="Github">
            <FaGithub className="hover:text-black transition duration-200" size={40}/>
        </ContactButton>
    </div>
  )
}
