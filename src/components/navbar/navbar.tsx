import React from 'react'
import LinkButton from './linkButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full bg-slate-100 border border-b-2 sticky top-0 flex items-center p-4 min-h-16'>
        <span className='flex w-full'>
          <Link href={'/'} className='hover:brightness-150 brand-logo flex justify-start items-center gap-2 transition'>
            <Image src={'/logo-dark.png'} alt='RyanBA' width={64} height={64} />
            <h1 className='logo-dark text-xl'>RyanBA</h1>
          </Link>
        </span>

        <div className='navigation-items flex justify-center w-full'>
          <ul className='flex gap-16 text-2xl'>
            
            <LinkButton link='/' label='Main' />
            <LinkButton link='/works' label='My Works' />
            <LinkButton link='/contact' label='Contact Me' />
          </ul>
        </div>
    </nav>
  )
}
