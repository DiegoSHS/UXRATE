import { RateResults } from "@/components/resume"
import { connex } from "@/models/database"
import { Box } from "@mui/material"

export default function Records({ data }) {
    const results = JSON.parse(data)
    console.log(results)
    return (
        <Box>
            {results.map((e) => RateResults(e))}
        </Box>
    )
}

export const getStaticProps = async () => {
    const collection = connex()
    const res = await collection.find({}).toArray()
    return {
        props: {
            data: JSON.stringify(res)
        }
    }
}