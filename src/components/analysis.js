import { RateResults } from "@/components/resume"
import { StoredContext } from "@/context/context"
import { deleteRecord, filteredRecords } from "@/requests/uxrecord"
import { Box, Button, Dialog, Toolbar, Typography } from "@mui/material"
import { useEffect } from "react"
import toast from "react-hot-toast"

export default function Records({ records }) {
    const { interacts: { selected, openDialog, results }, setInteract } = StoredContext()
    const handleClose = () => {
        setInteract({ openDialog: false })
    }
    const dataInit = () => {
        setInteract({ loading: true })
        setInteract({ results: records })
        setInteract({ loading: false })
    }
    useEffect(dataInit, [])

    const handleDelete = () => {
        toast.promise(deleteRecord(selected), {
            loading: 'Eliminando',
            success: (data) => data.error ? 'Eliminado de forma correcta' : 'No eliminado',
            error: (data) => `${data.message}`,
        }, {
            success: { icon: false },
            position: 'top-right'
        })
        setInteract({ results: [...results.filter(e => e._id !== selected)] })
        setInteract({ openDialog: false })
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