import { DetailedResult } from "@/components/resume"
import { connex } from "@/models/database"
import { getRecord } from "@/models/transactions"

export const getServerSideProps = async ({ query: { id } }) => {
    const collection = await connex()
    const record = await getRecord(collection, id)
    return {
        props: {
            record: JSON.stringify(record)
        }
    }
}

export default function Analisys({ record }) {
    return DetailedResult(JSON.parse(record))
}