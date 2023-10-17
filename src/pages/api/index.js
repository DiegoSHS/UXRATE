import { connex } from "@/models/database"
import { createRecord, getRecords } from "@/models/transactions"
import { speedinsights } from "./speed"
import { errorRes } from "./[id]/get"

export default async function handler(req, res) {
  try {
    const { body, method } = req
    const collection = connex()
    switch (method) {
      case 'GET':
        const records = await getRecords(collection)
        return res.status(200).json(records.reverse())
      case 'POST':
        const { site } = body
        const tests = await speedinsights(site)
        if (tests.some(e => e.error || false)) {
          return res.status(400).json(tests[0])
        }
        const ress = await createRecord(collection, { ...body, tests })
        return res.status(201).json({ msj: `inserted document`, insertedId: ress.insertedId })
      default:
        return errorRes(res, 405, { message: 'Method not suported' })
    }
  } catch (error) {
    return errorRes(res, 500, error)
  }
}
