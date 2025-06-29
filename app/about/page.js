import React from 'react'
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-orange-100">
    <section className="grid grid-cols-2 h-[100vh]">
        <div className=" relative flex items-center justify-center">
        <Image className="mix-blend-darken" alt="vector-image" src={"/about.png"} fill={true} />

      </div>
      <div className=" flex flex-col mt-30 px-16  gap-4 ">
        <p className="text-3xl font-bold">
          ABOUT US
        </p>
        <p className="  text-gray-600">
          BitLinks was built with a vision to simplify how people share and manage links online. Our journey began with a clear purpose: to create a platform that transforms long, cluttered URLs into clean, trackable, and shareable links effortlessly.</p>
 <p className="  text-gray-600">
Since our launch, we have focused on delivering a fast, secure, and user-friendly experience. Whether you're a digital marketer, content creator, or everyday user, BitLinks helps you shorten links, customize slugs, and monitor performance with real-time analytics. Our platform combines simplicity with powerful features to keep your links organized and impactful.</p>
 
<b >Our Mission</b>

<p className="  text-gray-600">
At BitLinks, our mission is to make link sharing smarter, faster, and more efficient. We strive to empower users with tools that save time, enhance clarity, and provide actionable insights—while maintaining top-tier security and performance every step of the way.

        </p>
        <div className='flex items-center gap-2'>
              <button className='bg-orange-400 shadow-lg text-white font-bold py-2 px-6 rounded'><Link href="/contact">Contact Us</Link></button>
           
        </div>
      </div>
      

    </section>
   </div>
  )
}

export default About