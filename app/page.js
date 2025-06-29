import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className="bg-orange-100">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className=" flex flex-col justify-center items-center gap-4 ">
        <p className="text-3xl font-bold">
          The best URL Shortener in the Market
        </p>
        <p className="text-center px-16 text-gray-600">
          We are the most straightfoward URL Shorten in the world. We have a simple and easy to use interface. You can create short URLs for your links and share them with your friends and family.
        </p>
        <div className='flex items-center gap-2'>
              <button className='bg-orange-400 shadow-lg text-white font-bold py-1 px-4 rounded'><Link href="/shorten">Try Now</Link></button>
            <button className='bg-orange-400 shadow-lg text-white font-bold py-1 px-4 rounded'><Link href="/github">Github</Link></button>
        </div>
      </div>
      <div className=" relative">
        <Image className="mix-blend-darken" alt="vector-image" src={"/vector.jpg"} fill={true} />

      </div>

    </section>
   </main>
  );
}
