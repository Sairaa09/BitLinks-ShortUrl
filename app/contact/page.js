'use client'

import React, { useState } from 'react'
import Image from "next/image";



const Contact = () => {
    const [name, setname] = useState('')
const [email, setemail] = useState('')
  return (
    <div >
    <section className="grid grid-cols-2 h-[100vh]">
      <div className='  my-16 p-8 px-28 rounded-lg flex flex-col gap-8'>
      <h1 className='font-bold text-3xl'>Contact Us</h1>
      <div className='flex flex-col gap-3'>
        <input className='bg-orange-100 rounded-3xl py-2 px-4 focus:outline-orange-600' type="text" placeholder='Name' value={name} onChange={e => seturl(e.target.value)} />
        <input className='bg-orange-100 rounded-3xl py-2 px-4 focus:outline-orange-600' type="text" placeholder='Email' value={email} onChange={e => setshortUrl(e.target.value)} />
        <textarea name="message" id="message" cols="30" rows="4" className='bg-orange-100 rounded-3xl py-2 px-4 focus:outline-orange-600' placeholder='Message'></textarea>
        <button className='bg-orange-400 shadow-lg text-white font-bold py-3 px-4 rounded-3xl my-3'>Send Message</button>
      </div>
    </div>
      <div className=" relative">
        <Image className="mix-blend-darken" alt="vector-image" src={"/contact.png"} fill={true} />

      </div>

    </section>
   </div>
  )
}

export default Contact