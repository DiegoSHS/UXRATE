import { Box, colors } from "@mui/material"
import { Chart, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from "chart.js"
import { Radar } from "react-chartjs-2"

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
)

export const chartProps = (avg) => {
    const chartColor =
        avg > 7.5 ? colors.lightGreen[500] :
            avg > 5 ? colors.purple[500] :
                avg <= 2.5 ? colors.red[500] :
                    avg <= 5 ? colors.deepOrange[500] :
                        colors.lightBlue[500]
    const type =
        avg > 7.5 ? 'Ideal' :
            avg > 5 ? 'Media' :
                avg <= 2.5 ? 'Pésima' :
                    avg <= 5 ? 'Mala' :
                        'No aplica'
    const labelcolor =
        avg > 7.5 ? 'success' :
            avg > 5 ? 'secondary' :
                avg <= 2.5 ? 'error' :
                    avg <= 5 ? 'warning' :
                        'primary'
    return { chartColor, labelcolor, type }
}

export const RateChart = ({ labels, values, chartColor }) => {
    const data = {
        labels: labels,
        datasets: [{
            radius: 0,
            data: values,
            backgroundColor: chartColor + '20',
            borderColor: chartColor,
            borderWidth: 1,
        }],
    }
    return (
        <Box sx={{
            my: 2, borderRadius: 2,
            backgroundColor: colors.blueGrey[50],
        }}>
            <Radar data={data} options={{
                elements: { point: { hitRadius: 20 } },
                scales: { r: { max: 10, pointLabels: { display: true }, ticks: { display: false } } }, plugins: { legend: { display: false } }
            }} />

        </Box>
    )
}