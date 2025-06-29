'use client'

import React, { useState } from 'react'
import Link from 'next/link'



const Shorten = () => {

    const [url, seturl] = useState('')
const [shortUrl, setshortUrl] = useState('')
const [generated, setgenerated] = useState("")

const generate=async()=>{
const myHeaders = new Headers();
myHeaders.append("token", "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AZmFzaGlvbi5jb21xd2VydDEyMw.uCcis68qM8910quliCwluwHQalS1--utqm_V6NKtowM");
myHeaders.append("Content-Type", "application/json");

if (url.length === 0) {
  alert('Please enter a URL')
  return
}

if (shortUrl.length === 0) {
  alert('Please enter a short URL')
  return
}

let raw = JSON.stringify({
  url: url,
  shortUrl: shortUrl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

// fetch("/api/generate", requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
//     seturl('')
//     setshortUrl('')
//     console.log(result)
  
//     alert(result.message)

//   }
//   )
//   .catch((error) => console.error(error));

fetch("/api/generate", requestOptions)
  .then(async (response) => {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Something went wrong");
    }
    return response.json();
  })
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
    seturl('');
    setshortUrl('');
    console.log(result);
    alert(result.message);
  })
  .catch((error) => {
    console.error("Error in fetch:", error);
    alert("Something went wrong. Check console for details.");
  });

}


  return (
    <div className='mx-auto max-w-lg bg-orange-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input className='bg-white rounded-md py-2 px-4 focus:outline-orange-600' type="text" placeholder='Enter your URL' value={url} onChange={e => seturl(e.target.value)} />
        <input className='bg-white rounded-md py-2 px-4 focus:outline-orange-600' type="text" placeholder='Enter your preferred short URL' value={shortUrl} onChange={e => setshortUrl(e.target.value)} />
        <button onClick={generate} className='bg-orange-400 shadow-lg text-white font-bold py-1 px-4 rounded my-3'>Generate</button>
      </div>
     { generated && <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>Your generated URL</h2>
     <Link href={generated} target="_blank">
     <code>{generated}</code>
      </Link>
      </div>}
    </div>
  )
}

export default Shorten
