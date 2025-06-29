// import clientPromise from '@/lib/mongodb'

// export async function POST(request) {
//     const body = await request.json()
//   const client = await clientPromise
//   const db = client.db('bitlinks')
//   const collection = db.collection('urls')

//   const doc = await collection.findOne({ shortUrl: body.shortUrl })
//   if (doc) {
//     return Response.json({ success: false, error: true, message: 'URL already exists' })
//   }

//   const result = await collection.insertOne({
//     url: body.url,
//     shortUrl: body.shortUrl,
//   })
//   return Response.json({ success:true,error:false,message: 'URL added to database' })
// }






import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db('bitlinks')
    const collection = db.collection('urls')

    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists' })
    }

    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    })

    return Response.json({ success: true, error: false, message: 'URL added to database' })

  } catch (err) {
    console.error("API Error:", err.message)
    return Response.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 })
  }
}
