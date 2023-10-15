import { StoredContext } from "@/context/context"
import { Add, Delete } from "@mui/icons-material"
import { Box, Chip, CircularProgress, Fab, Grid, LinearProgress, Stack, Typography } from "@mui/material"
import { labels } from "@/utils/steps"
import { RateChart, chartProps } from "./decachart"

const recomendations = {
    'Ideal': 'En general no hay recomendaciones muy significantes, el sitio web funciona de forma que los usuarios se sienten gratificados con su navegación en este',
    'Media': 'El sitio web tiene una experiencia aceptable pero aún se puede mejorar, es idóneo crear una guía de estilos si aún no se cuenta con alguna y se pueden seguir ejemplos de guias de estilos de grandes empresas',
    'Mala': 'Se requiere de mejorar ampliamente la usabilidad del sitio web, mejorar la interfaz para hacerla más limpia y es ideal empezar a seguir pautas de diseño como Material UI o algún estándar en específico',
    'Pésima': 'El sitio web no aplica o ignora la mayoría o todos los lineamientos de UI / UX, se recomienda hacer una refactorización estética completa del sitio y trabajar ampliamente en la usabilidad, es recomendable empezar a consultar con los usuarios para conocer sus necesidades'
}

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
)

export const RateResult = ({ name, records, _id }) => {
    const sliderValues = records.map(e => e.sliderValue)
    const { setInteract } = StoredContext()
    const handleDelete = (e) => {
        setInteract({ selected: _id })
        setInteract({ openDialog: true })
    }
    const sum = sliderValues.reduce((p, n) => p + n, 0)
    const avg = (sum / records.length)
    const { chartColor, labelcolor, type } = chartProps(avg)
    const avgString = String(avg).substring(0, 4)

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
                    <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color={labelcolor} value={avg * 10} />
                </Typography>
            </Box>
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
            <Box sx={{ m: 2 }}>
                <RateChart labels={labels} values={sliderValues} chartColor={chartColor} />
                <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                    {
                        recomendations[type]
                    }
                </Typography>
                {
                    _id && (
                        <Chip key={_id} label="Eliminar" active deleteIcon={<Delete />} clickable onClick={handleDelete} onDelete={handleDelete} variant="outlined" color="error" />
                    )
                }
            </Box>
        </Box >
    )
}

export const RateResults = ({ results }) => {
    const { push, interacts: { loading } } = StoredContext()
    if (results.length === 0) {
        return (
            <Grid sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography align="center">{loading ? 'Cargando...' : 'Aún no hay nada registrado'}</Typography>
                {loading ?
                    (<CircularProgress sx={{ m: 2 }} />) :
                    (<Fab sx={{ m: 2 }} color="primary" onClick={() => { push('/') }} aria-label="Añadir nuevo">
                        <Add />
                    </Fab>)
                }
            </Grid >
        )
    }
    return results.map(RateResult)
}
