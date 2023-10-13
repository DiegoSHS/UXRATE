import { RateResults } from "@/components/resume"
import { StoredContext } from "@/context/context"
import { connex } from "@/models/database"
import { getRecords } from "@/models/transactions"
import { deleteRecord } from "@/requests/uxrecord"
import { Box, Button, Dialog, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Records({ data }) {
    const [results, setResults] = useState(JSON.parse(data))
    const { openDialog, setOpenDialog, selectedItem } = StoredContext()
    const handleClose = () => {
        setOpenDialog(false)
    }
    const handleDelete = () => {
        toast.promise(deleteRecord(selectedItem), {
            loading: 'Eliminando',
            success: (data) => data.err ? 'Eliminado de forma correcta' : 'No eliminado',
            error: (data) => `${data.msj}`,
        }, {
            position: 'top-right'
        })
        setResults([...results.filter(e => e._id !== selectedItem)])
        setOpenDialog(false)
    }
    return (
        <Box>
            <Dialog open={openDialog}>
                <Typography sx={{ m: 1 }}>
                    ¿Seguro de que quiere eliminar este elemento?
                </Typography>
                <Toolbar>
                    <Button fullWidth onClick={handleDelete}>Aceptar</Button>
                    <Button fullWidth onClick={handleClose}>Cancelar</Button>
                </Toolbar>
            </Dialog>
            <RateResults results={results} />
        </Box>
    )
}

export const getStaticProps = async () => {
    const collection = connex()
    const res = await getRecords(collection)
    return {
        props: {
            data: JSON.stringify(res)
        },
        revalidate: 1
    }
}