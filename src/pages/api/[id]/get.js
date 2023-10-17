import { connex } from "@/models/database"
import { getRecords } from "@/models/transactions"
/**
 * Creates a error response
 * @param {import("next").NextApiResponse} res reponse object
 * @param {Error} error error object, use with try catch
 * @param {Number} code error code, 500 by default
 * @returns error reponse
 */
export const errorRes = (res, code = 500, error, message) => res.status(code).json({ error: { code: code, message: message || `Server error: ${error.message}` } })

const handleFiler = async (req, res) => {
    try {
        const { query: { id } } = req
        const collection = await connex()
        const results = await getRecords(collection, { email: id })
        console.log(results)
        return res.status(200).json(results)
    } catch (error) {
        return errorRes(res, 500, error)
    }
}
export default handleFiler