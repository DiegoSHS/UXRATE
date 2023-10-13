import { StoredContext } from "@/context/context"
import { Box, Button, Divider, Slider, Step, StepContent, StepLabel, Typography } from "@mui/material"

export const RateStep = ({ step, index, stepslen, sliderValue, handleBack, handleNext, handleSlider }) => {
    const { push } = StoredContext()
    return (
        <Step key={step?.label}>
            <StepLabel
                optional={
                    index === stepslen - 1 ? (
                        <Typography variant="caption">Última Ley</Typography>
                    ) : null
                }
            >
                {step?.label}
            </StepLabel>
            <StepContent>
                <Box sx={{ m: 1 }}>
                    <Typography textAlign='justify'>{step?.description}</Typography>
                    <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                    <Typography>Nivel de cumplimiento</Typography>
                    <Slider
                        value={sliderValue}
                        onChange={handleSlider}
                        valueLabelDisplay='auto'
                        step={1}
                        size='small'
                        min={1}
                        max={10}
                    />
                </Box>
                <Box sx={{ m: 1 }}>
                    <div>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === stepslen - 1 ? 'Finalizar' : 'Continuar'}
                        </Button>
                        <Button
                            onClick={() => { index === 0 ? push('/') : handleBack() }}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === 0 ? 'Cancelar' : 'Atrás'}
                        </Button>
                    </div>
                </Box>
            </StepContent>
        </Step >
    )
}