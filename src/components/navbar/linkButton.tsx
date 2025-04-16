'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function LinkButton({label, link}: {link: string, label: string}) {
    const path = usePathname()
    const router = useRouter()
  return (
    <li>
        <Link href={link} onClick={(e) => e.preventDefault()}>
            <button 
                onClick={() => router.push(link)} 
                disabled={`/${path.split('/')[1]}` === link}
                className={`${`/${path.split('/')[1]}`=== link? 'font-bold' : ''} text-primary`}
            >
                {label}
            </button>
        </Link>
    </li>
  )
}
