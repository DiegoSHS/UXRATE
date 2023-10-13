import { connex } from "@/models/database"
import { createRecord, getRecords } from "@/models/transactions"

export default async function handler(req, res) {
  try {
    const { body, method } = req
    const collection = connex()
    const reqbody = JSON.parse(body)
    switch (method) {
      case 'GET':
        const records = await getRecords(collection)
        return res.status(200).json(records)
      case 'POST':
        const ress = await createRecord(collection, reqbody)
        return res.status(201).json({ msj: `inserted document:${ress.insertedId}` })
      default:
        return res.status(405).json({ msj: 'method not supported' })
    }
  } catch (error) {
    return res.status(500).json({ msj: `something gone wrong: ${error.message}`, err: 1 })
  }

}
