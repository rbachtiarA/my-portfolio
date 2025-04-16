'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LinkButton from './LinkButton'
export default function Navbar() {
  const [show, setShow] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])
  return (
    <nav className={`w-full bg-secondary/50 backdrop-blur-sm sticky top-0 grid lg:grid-cols-[1fr_3fr_1fr] items-center p-4 min-h-16 z-10 ${show ? 'translate-y-0' : '-translate-y-[var(--nav-height)]'} transition-transform duration-300 ease-in-out`}>
      <div className='lg:col-start-2 flex justify-center items-center'>
        <span className='flex w-full'>
          <Link href={'/'} className='hover:brightness-150 brand-logo flex justify-start items-center gap-2 transition'>
            <picture>
              <img src={'/logo-dark.png'} alt={'Logo RyanBA'} width={64} height={64} loading='lazy'/>
            </picture>
            <p className='hidden sm:block text-primary text-xl'>RyanBA</p>
          </Link>
        </span>

        <div className='flex justify-end w-full'>
          <ul className='flex gap-8 md:gap-16 items-center md:text-2xl'>
            
            <LinkButton link='/' label='Main' />
            <LinkButton link='/projects' label='Projects' />
            <LinkButton link='/contact' label='Contact Me' />
          </ul>
        </div>
      </div>
    </nav>
  )
}
