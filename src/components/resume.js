import { StoredContext } from "@/context/context"
import { Add, Delete, ExpandMore, ReadMore } from "@mui/icons-material"
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, CircularProgress, Collapse, Fab, Grid, IconButton, LinearProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { labels } from "@/utils/steps"
import { RateChart, chartProps } from "./decachart"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Link from "next/link"

const recomendations = {
    'Ideal': 'En general no hay recomendaciones muy significantes, el sitio web funciona de forma que los usuarios se sienten gratificados con su navegación en este',
    'Media': 'El sitio web tiene una experiencia aceptable pero aún se puede mejorar, es idóneo crear una guía de estilos si aún no se cuenta con alguna y se pueden seguir ejemplos de guias de estilos de grandes empresas',
    'Mala': 'Se requiere de mejorar ampliamente la usabilidad del sitio web, mejorar la interfaz para hacerla más limpia y es ideal empezar a seguir pautas de diseño como Material UI o algún estándar en específico',
    'Pésima': 'El sitio web no aplica o ignora la mayoría o todos los lineamientos de UI / UX, se recomienda hacer una refactorización estética completa del sitio y trabajar ampliamente en la usabilidad, es recomendable empezar a consultar con los usuarios para conocer sus necesidades'
}

const Expandible = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest, }),
}))

export const DenseTable = ({ items }) => {
    return (
        <TableContainer component={Paper} sx={{ my: 1 }}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Atributo</TableCell>
                        <TableCell align="right">Puntuación</TableCell>
                        <TableCell align="right">Grupo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.weight}</TableCell>
                            <TableCell align="right">{row.group}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export const DetailedResult = ({ name, records, _id, site, tests }) => {
    const sliderValues = records.map(e => e.sliderValue)
    const testsRate = tests ? (tests.map(e => e.score).reduce((p, n) => p + n, 0) / 3).toString().substring(0, 3) : false
    const [expanded, setExpanded] = useState({ ex: false, index: 0 })
    const { setInteract, interacts: { user } } = StoredContext()
    const handleDelete = (e) => {
        setInteract({ selected: _id })
        setInteract({ openDialog: true })
    }
    const sum = sliderValues.reduce((p, n) => p + n, 0)
    const avg = (sum / records.length)
    const { chartColor, labelcolor, type } = chartProps(avg)
    const avgString = String(avg).substring(0, 4)

    return (
        <Card sx={{ my: 1 }}>
            <CardHeader
                avatar={
                    <Avatar src={user.image} aria-label="analysis" />
                }
                title={`Análisis: ${name}`}
                subheader={site}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Calificación personal: {avgString} / 10
                </Typography>
                <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color={labelcolor} value={avg * 10} />
                <Box>
                    <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                        {
                            recomendations[type]
                        }
                    </Typography>
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
                <RateChart labels={labels} values={sliderValues} chartColor={chartColor} />
            </CardContent>
            <CardActions disableSpacing>
                <Chip key={_id} label="Eliminar" active deleteIcon={<Delete />} clickable onClick={handleDelete} onDelete={handleDelete} variant="outlined" color="error" />
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Calificación de tests automatizados: {testsRate} / 10
                </Typography>
                <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color="inherit" value={testsRate} />
                {tests.map((e, i) => {
                    return (
                        <Box key={i}>
                            <Typography variant="body1">
                                {e.name == 'Recomendaciones' ? `Buenas prácticas: ${e.score}` : `${e.name}: ${e.score}`}
                            </Typography>
                            <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                Fecha de análisis: {e.details.analysisTimestamp}
                            </Typography>
                            <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                Entorno de pruebas: {e.details.environment.hostUserAgent}
                            </Typography>
                            <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                Benchmark: {e.details.environment.benchmarkIndex}
                            </Typography>
                            <CardActions>
                                <Typography variant="body1">
                                    Referencias de la auditoría
                                </Typography>
                                <Expandible
                                    expand={expanded.index === i && expanded.ex}
                                    onClick={() => setExpanded({ ...expanded, ex: !expanded.ex, index: i })}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMore />
                                </Expandible>
                            </CardActions>
                            <Collapse in={expanded.index === i && expanded.ex} timeout="auto" unmountOnExit>
                                <DenseTable items={e.details.result.auditRefs} />
                            </Collapse>
                        </Box>
                    )
                })}
                <Typography gutterBottom variant="h6" component="div">
                    Captura de pantalla:
                </Typography>
                <CardMedia
                    sx={{ borderRadius: 2 }}
                    component="img"
                    image={tests[0].details.screenShot}
                    alt="Captura de pantalla"
                />
            </CardContent>
        </Card>
    )
}

export const RateResult = ({ name, records, _id, site, tests }) => {
    const { setInteract, interacts: { user, expanded } } = StoredContext()
    const sliderValues = records.map(e => e.sliderValue)
    const testsRate = tests ? (tests.map(e => e.score).reduce((p, n) => p + n, 0) / 3).toString().substring(0, 3) : false
    const sum = sliderValues.reduce((p, n) => p + n, 0)
    const avg = (sum / records.length)
    const { chartColor, labelcolor, type } = chartProps(avg)
    const avgString = String(avg).substring(0, 4)

    const handleExpanded = () => {
        setInteract({ expanded: !expanded })
    }
    const handleDelete = (e) => {
        setInteract({ selected: _id })
        setInteract({ openDialog: true })
    }

    return (
        <Card sx={{ my: 1 }}>
            <CardHeader
                avatar={
                    <Avatar src={user.image} aria-label="analysis" />
                }
                action={
                    <Link href={`/record/${_id}`} passHref legacyBehavior>
                        <IconButton disabled={!tests} aria-label="detalles">
                            <ReadMore />
                        </IconButton>
                    </Link>
                }
                title={`Análisis: ${name}`}
                subheader={site}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Calificación personal: {avgString} / 10
                </Typography>
                <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color={labelcolor} value={avg * 10} />
                <Box>
                    <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                        {
                            recomendations[type]
                        }
                    </Typography>
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
                <RateChart labels={labels} values={sliderValues} chartColor={chartColor} />
            </CardContent>
            <CardActions disableSpacing>
                {_id && (
                    <Chip key={_id} label="Eliminar" active deleteIcon={<Delete />} clickable onClick={handleDelete} onDelete={handleDelete} variant="outlined" color="error" />
                )}
                {tests && (
                    <Expandible
                        expand={expanded}
                        onClick={handleExpanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </Expandible>
                )}
            </CardActions>
            {tests && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Calificación de tests automatizados: {testsRate} / 10
                        </Typography>
                        <LinearProgress sx={{ my: 1, borderRadius: 2 }} variant="determinate" color="inherit" value={testsRate} />
                        {tests.map((e, i) => {
                            return (
                                <Box key={i}>
                                    <Chip label={e.name == 'Recomendaciones' ? `Buenas prácticas: ${e.score}` : `${e.name}: ${e.score}`} active variant="filled" />
                                    <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                        Fecha de análisis: {e.details.analysisTimestamp}
                                    </Typography>
                                    <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                        Entorno de pruebas: {e.details.environment.hostUserAgent}
                                    </Typography>
                                    <Typography gutterBottom textAlign='justify' color='GrayText' variant="body2">
                                        Benchmark: {e.details.environment.benchmarkIndex}
                                    </Typography>
                                </Box>
                            )
                        })}
                        <Typography gutterBottom variant="h6" component="div">
                            Captura de pantalla:
                        </Typography>
                        <CardMedia
                            sx={{ borderRadius: 2 }}
                            component="img"
                            image={tests[0].details.screenShot}
                            alt="Captura de pantalla"
                        />
                    </CardContent>
                </Collapse>
            )}
        </Card>
    )
}

export const RateResults = ({ records }) => {
    const { interacts: { loading, results }, setInteract } = StoredContext()
    const dataInit = () => {
        setInteract({ loading: true })
        setInteract({ results: records })
        setInteract({ loading: false })
    }
    useEffect(dataInit, [])
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
                    (
                        <Link href={'/'} passHref legacyBehavior>
                            <Fab sx={{ m: 2 }} color="primary" aria-label="Añadir nuevo">
                                <Add />
                            </Fab>
                        </Link>
                    )
                }
            </Grid >
        )
    }
    return results.map(RateResult)
}
