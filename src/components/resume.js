import { StoredContext } from "@/context/context"

import { Delete } from "@mui/icons-material"
import { Box, Chip, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material"

const recomendations = {
    'Ideal': 'En general no hay recomendaciones muy significantes, el sitio web funciona de forma que los usuarios se sienten gratificados con su navegación en este',
    'Media': 'El sitio web tiene una experiencia aceptable pero aún se puede mejorar, es idóneo crear una guía de estilos si aún no se cuenta con alguna y se pueden seguir ejemplos de guias de estilos de grandes empresas',
    'Mala': 'Se requiere de mejorar ampliamente la usabilidad del sitio web, mejorar la interfaz para hacerla más limpia y es ideal empezar a seguir pautas se diseño como Material UI o algún estándar en específico',
    'Pésima': 'El sitio web no aplica o ignora la mayoría o todos los lineamientos de UI / UX, se recomienda hacer una refactorización estética completa del sitio y trabajar ampliamente en la usabilidad, es recomendable empezar a consultar con los usuarios para conocer sus necesidades'
}

export const RateResults = ({ name, results, id }) => {
    const { setOpenDialog, setSelectedItem } = StoredContext()
    const handleDelete = (e) => {
        setSelectedItem(id)
        setOpenDialog(true)
    }
    const sum = results.map(e => e.sliderValue).reduce((p, n) => p + n, 0)
    const avg = (sum / results.length)

    const avgString = String(avg).substring(0, 4)
    const color =
        avg > 7 ? 'success' :
            avg > 5 ? 'secondary' :
                avg <= 3 ? 'error' :
                    avg <= 5 ? 'warning' :
                        'primary'
    const type =
        avg > 7 ? 'Ideal' :
            avg > 5 ? 'Media' :
                avg <= 3 ? 'Pésima' :
                    avg <= 5 ? 'Mala' :
                        'No aplica'
    return (
        <Box>
            <Box sx={{ my: 3, mx: 2 }} >
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            Resultados: {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            Promedio de experiencia: {avgString} / 10
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                    El sitio web ha sido calificado.
                    <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color={color} value={avg * 10} />
                </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <Typography gutterBottom color='GrayText' variant="body2">
                    La experiencia del usuario en el sitio web ha sido calificada como:
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label="Ideal" color={type === 'Ideal' ? 'success' : 'default'} />
                    <Chip label="Media" color={type === 'Media' ? 'secondary' : 'default'} />
                    <Chip label="Mala" color={type === 'Mala' ? 'warning' : 'default'} />
                    <Chip label="Pésima" color={type === 'Pésima' ? 'error' : 'default'} />
                </Stack>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                    {
                        recomendations[type]
                    }
                </Typography>
                {
                    id && (
                        <Chip key={id} label="Eliminar" active deleteIcon={<Delete />} clickable onClick={handleDelete} onDelete={handleDelete} variant="outlined" color="error" />
                    )
                }
            </Box>
        </Box>
    )
}