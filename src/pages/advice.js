import { StoredContext } from "@/context/context"
import { Box, Button, Typography } from "@mui/material"

export default function Advice() {
    const { push } = StoredContext()
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant="h6" textAlign='center'>
                Coloca un nivel de cumplimiento para cada ley de UX
            </Typography>
            <Typography textAlign='justify' variant="body2">
                Se una persona honesta con los valores que eliges aquí, al final del registro se tomarán los valores para generar un promedio de UX, el promedio se tomará para poder dar recomendaciones sobre el diseño de la tu app.
            </Typography>
            <Button sx={{ m: 2 }} onClick={() => push('/rate')}>Siguiente</Button>
        </Box>
    )
}