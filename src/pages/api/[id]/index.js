import { connex } from "@/models/database"
import { deletebyId, getRecord, updateRecord } from "@/models/transactions"
import { errorRes } from "./get"

export default async function handler(req, res) {
    try {
        const { body, method, query: { id } } = req
        const collection = connex()
        switch (method) {
            case 'GET':
                const record = await getRecord(collection, id)
                return res.status(200).json(record)
            case 'POST':
                if (body === 'del') {
                    await deletebyId(collection, id)
                    return res.status(204).json({ msj: `deleted document` })
                }
                const ress = await updateRecord(collection, id, body)
                return res.status(201).json({ msj: `updated document:${ress}` })
            default:
                return errorRes(res, 405, {}, 'Method not suported')
        }
    } catch (error) {
        return errorRes(res, 500, error)
    }
}