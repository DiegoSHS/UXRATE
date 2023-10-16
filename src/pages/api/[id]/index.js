import { connex } from "@/models/database"
import { deletebyId, getRecord, updateRecord } from "@/models/transactions"

export default async function handler(req, res) {
    try {
        const { body, method, query: { id } } = req
        const collection = connex()
        const reqbody = body ? JSON.parse(body) : null
        switch (method) {
            case 'GET':
                const record = await getRecord(collection, id)
                return res.status(200).json(record)
            case 'POST':
                if (reqbody === 'del') {
                    await deletebyId(collection, id)
                    return res.status(204).json({ msj: `deleted document` })
                }
                const ress = await updateRecord(collection, id, reqbody)
                return res.status(201).json({ msj: `updated document:${ress}` })
            default:
                return res.status(405).json({ error: { code: 400, message: 'method not suported' } })
        }
    } catch (error) {
        return res.status(500).json({ error: { code: 500, message: error.message } })
    }
}