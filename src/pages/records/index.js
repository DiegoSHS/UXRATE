import Records from "@/components/analysis"
import { RateResults } from "@/components/resume"
import { connex } from "@/models/database"
import { getRecords } from "@/models/transactions"

export const getServerSideProps = async () => {
    const collection = await connex()
    const records = await getRecords(collection)
    return {
        props: {
            records: JSON.stringify(records)
        }
    }
}
export default function RecordsIndex({ records }) {
    return (
        <Records >
            <RateResults records={JSON.parse(records)} />
        </Records>
    )
}