import { Box, Button, CircularProgress, Paper, Stepper } from '@mui/material'
import { useState } from 'react'
import { RateResults } from './resume'
import { RateStep } from './steps'
import { StoredContext } from '@/context/context'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { CheckCircle } from '@mui/icons-material'

const steps = [
    {
        label: 'Ley de Prägnanz',
        description: `La simplicidad facilita la vida de los usuarios y mejora su experiencia.`,
    },
    {
        label: 'Ley de Hick',
        description:
            'Se debe reducir la carga cognitiva al presentar información de manera clara y limitar las opciones para facilitar la toma de decisiones del usuario.',
    },
    {
        label: 'Ley de Tesler',
        description: `En el diseño de UX, se debe considerar cómo la simplificación de una característica afecta otras áreas del producto para lograr un equilibrio entre la simplicidad y la funcionalidad.`,
    },
    {
        label: 'Ley de proximidad',
        description: `Cuando colocamos elementos visuales cercanos entre sí, los usuarios perciben que están relacionados de alguna manera, lo que facilita la organización y la comprensión de la información en la interfaz.`,
    },
    {
        label: 'Efecto Posición Serial',
        description: `Los elementos clave o críticos deberían ubicarse al principio o al final de una página o lista para que los usuarios los recuerden con mayor facilidad.`,
    },
    {
        label: 'Ley de Fitts',
        description: `Los elementos de interfaz más grandes y cercanos son más fáciles de alcanzar y seleccionar.`,
    },
    {
        label: 'Ley de Parkinson',
        description: `Establecer límites de tiempo o proporcionar indicaciones claras de tiempo puede motivar a los usuarios a ser más eficientes y productivos.`,
    },
    {
        label: 'Efecto Von Restorff',
        description: `Elementos visualmente distintivos, como colores o formas inusuales, pueden ayudar a resaltar información importante, llamando la atención del usuario y mejorando la experiencia al hacer que la información clave sea más memorable y fácil de recordar.`,
    },
    {
        label: 'Principio de Pareto',
        description: `Concentra tus esfuerzos en lo que realmente importa para los usuarios, ya que la mayoría de los beneficios provienen de un conjunto limitado de aspectos del diseño.`,
    },
    {
        label: 'Efecto Zeigarnik',
        description: `Esto significa que las interfaces deben proporcionar retroalimentación y pistas visuales para mantener a los usuarios comprometidos y motivados para completar tareas o acciones. Se aplica al mantener a los usuarios interesados y enfocados en un proceso, como un formulario de registro, hasta que se complete, evitando distracciones o abandonos.`,
    }, ,
    {
        label: 'Ley de Miller',
        description: `Las interfaces no deben abrumar a los usuarios con demasiada información u opciones, ya que podrían tener dificultades para procesarla.`,
    },
    {
        label: 'Ley de Jakob',
        description: `Las interfaces y los productos deben ser simples y fáciles de usar, evitando la complejidad innecesaria.`,
    }
]

export default function RateSequence() {
    const { name, setName, records, setRecords } = StoredContext()
    const [activeStep, setActiveStep] = useState(0)
    const [sliderValue, setSliderValue] = useState(0)
    const { push } = useRouter()
    const handleSlider = (e, newValue) => {
        setSliderValue(newValue)
    }
    const handleRegister = () => {
        setRecords([...records, { activeStep, sliderValue }])
    }
    const deleteRegister = () => {
        setRecords(() => records.filter(e => e.activeStep !== activeStep - 1))
    }
    const handleNext = () => {
        setActiveStep(activeStep + 1)
        handleRegister()
        setSliderValue(0)
    }
    const handleBack = () => {
        deleteRegister()
        setActiveStep(activeStep - 1)
        setSliderValue(0)
    }
    const handleReset = () => {
        setActiveStep(0)
        setRecords([])
        setName(null)
        push('/')
    }
    const sendtoapi = async () => {
        const res = await fetch('/api/', {
            method: 'POST',
            body: JSON.stringify({
                name,
                records
            })
        })
        const data = await res.json()
        console.log(data)
        return data
    }
    const handleSave = async () => {
        toast.promise(sendtoapi(), {
            loading: 'guardando',
            success: (data) => `Guardado! ${data.msj}`,
            error: (data) => `${data.msj}`
        }, {
            success: {
                duration: 2000,
                icon: <CheckCircle />
            },
            loading: {
                icon: <CircularProgress />
            }
        })
    }
    const stepslen = steps.length
    return (
        <Box sx={{
            my: 10,
            display: 'flex',
            alignItems: 'center',
        }}>
            {!(activeStep === steps.length - 1) && (
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => RateStep({ step, index, stepslen, sliderValue, handleBack, handleNext, handleSlider }))}
                </Stepper>
            )}

            {activeStep === steps.length - 1 && (
                <Box>
                    <RateResults name={name} results={records} />
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Evaluar otro sitio
                        </Button>
                        <Button variant='contained' onClick={handleSave} sx={{ mt: 1, mr: 1 }}>
                            Guardar resultados
                        </Button>
                    </Paper>
                </Box>
            )}
        </Box>
    )
}