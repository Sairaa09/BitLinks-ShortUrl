'use client'

import React,  { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
      
  return (
  <nav className='flex justify-between items-center py-3 px-6 bg-orange-500 text-white'>
    <div className='text-2xl font-bold'><Link href="/">BitLinks</Link></div>
    <ul className='flex items-center gap-4 text-lg'>
        <li className='hover:text-orange-100 '><Link href="/">Home</Link></li>
        <li className='hover:text-orange-100' ><Link href="/about">About</Link></li>
        <li className='hover:text-orange-100' ><Link href="/shorten">Shorten</Link></li>
        <li className='hover:text-orange-100' ><Link href="/contact">Contact Us</Link></li>
        <li className='flex items-center gap-2'>
            <button className='bg-orange-400 shadow-lg text-white font-bold py-1 px-4 rounded'><Link href="/shorten">Try Now</Link></button>
            <button className='bg-orange-400 shadow-lg text-white font-bold py-1 px-4 rounded'><Link href="/github">Github</Link></button>
        </li>
        
    </ul>
  </nav>
  )
}

export default Navbar
