import { Box, Button, Divider, Slider, Step, StepContent, StepLabel, Typography } from "@mui/material"
import Link from "next/link"

export const RateStep = ({ step, index, stepslen, sliderValue, handleBack, handleNext, handleSlider }) => {
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
                        min={0}
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
                        {index === 0 ? (
                            <Link href={'/'} passHref legacyBehavior prefetch>
                                <Button sx={{ mt: 1, mr: 1 }}>
                                    Cancelar
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Atrás
                            </Button>
                        )}
                    </div>
                </Box>
            </StepContent>
        </Step >
    )
}