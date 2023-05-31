import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className=''>
        <div className='h-16 flex items-center bg-slate-300 w-full'>
            <div className='px-2 flex items-center justify-start'>
              <h1 className='font-principal text-xl md:text-2xl'>Developed By 
              
              <Link href={'https://www.linkedin.com/in/agustin-molina-994635138/'} target='_blank'>
                <span className='hover:text-gray-700 duration-300'> Agustin Molina</span>
                </Link>
              </h1>
            </div>
        </div>
    </div>
  )
}
