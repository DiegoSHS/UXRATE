import { RateResults } from "@/components/resume"
import { connex } from "@/models/database"
import { Box } from "@mui/material"

export default function Records({ data }) {
    const results = JSON.parse(data)
    console.log(results)
    return (
        <Box sx={{
            my:10
        }}>
            {results.map((e) => RateResults({name:e.name,results:e.records}))}
        </Box>
    )
}

export const getStaticProps = async () => {
    const collection = connex()
    const res = await collection.find({}).toArray()
    return {
        props: {
            data: JSON.stringify(res)
        },
        revalidate: 1
    }
}