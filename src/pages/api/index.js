import { connex } from "@/models/database"

export default async function handler(req, res) {
  const { body, method } = req
  try {
    switch (method) {
      case 'POST':
        const collection = connex()
        const saveObject = JSON.parse(body)
        console.log(saveObject)
        const ress = await collection.insertOne(saveObject)
        return res.status(200).json({ msj: `inserted document:${ress.insertedId}`})
      default:
        return res.status(405).json({ msj: 'method not supported' })
    }
  } catch (error) {
    return res.status(500).json({ msj: `something gone wrong: ${error.message}` })
  }

}
