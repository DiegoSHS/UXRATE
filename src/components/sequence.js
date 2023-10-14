import { Box, Button, Paper, Stepper } from '@mui/material'
import { useState } from 'react'
import { RateResults } from './resume'
import { RateStep } from './steps'
import { StoredContext } from '@/context/context'
import { saveRecord } from '@/requests/uxrecord'
import toast from 'react-hot-toast'
import { steps } from '@/utils/steps'

export default function RateSequence() {
    const { interacts: { name, results }, setInteract, records, setRecords, push } = StoredContext()
    const [activeStep, setActiveStep] = useState(0)
    const [sliderValue, setSliderValue] = useState(0)
    const handleSlider = (e, newValue) => {
        setSliderValue(newValue)
        handleRegister()
    }
    const handleRegister = () => {
        setRecords((records) => {
            if (records.length === 0) {
                return [{ activeStep, sliderValue }]
            }
            return [...records.filter(e => e.activeStep !== activeStep), { activeStep, sliderValue }]
        })
    }
    const deleteRegister = () => {
        setRecords([...records.filter(e => e.activeStep !== activeStep - 1)])
    }
    const handleNext = () => {
        handleRegister()
        setActiveStep(activeStep + 1)
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
        setInteract({ name: null })
        setSliderValue(0)
        push('/')
    }

    const handleSave = async () => {
        toast.promise(saveRecord({ name, records }), {
            loading: 'guardando',
            success: (data) => {
                setInteract({ results: [...results, { _id: data.insertedId, name, records }] })
                return data.err ? 'Error al guardar' : 'Guardado!'
            },
            error: (data) => `${data.msj}`
        }, {
            position: 'top-right'
        })
        push('/records')
    }
    const stepslen = steps.length
    return (
        <Box sx={{
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
                    <RateResults results={[{ name: name, records }]} />
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Button color='secondary' onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Evaluar otro sitio
                        </Button>
                        <Button variant='contained' color='success' onClick={handleSave} sx={{ mt: 1, mr: 1 }}>
                            Guardar resultados
                        </Button>
                    </Paper>
                </Box>
            )}
        </Box>
    )
}