import React from 'react'
import LinkButton from './linkButton'

export default function Navbar() {
  return (
    <nav className='w-full bg-slate-200 sticky top-0 flex items-center p-4 min-h-16'>
        <div className='brand-logo flex justify-start w-auto'>
          RyanBA
        </div>

        <div className='navigation-items flex justify-center w-full'>
          <ul className='flex gap-4'>
            
            <LinkButton link='/' label='Main' />
            <LinkButton link='/works' label='My Works' />
            <LinkButton link='/contact' label='Contact Me' />
          </ul>
        </div>
    </nav>
  )
}
