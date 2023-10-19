import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function RateApp() {
    return (
        <Box sx={{ my: 10 }} alignItems={'center'} display={'flex'} flexDirection={'column'} alignContent={'center'}>
            <Typography variant="h2" fontWeight={600} align="center">
                Una app para calificar tus sitios web, su accebilidad, rendimiento y buenas prácticas
            </Typography>
            <Typography align="center" sx={{ mt: 5 }}>
                Aquí podrás calificar de forma personal tu sitio web y también obtener resultados de tests automatizados
            </Typography>
            <Box>
                <Link href={'/rateapp'} passHref legacyBehavior>
                    <Button sx={{ m: 2 }} variant="contained" color="primary" style={{background:'white'}}>
                        Comenzar
                    </Button>
                </Link>
                <Link href={'https://github.com/DiegoSHS/UXRATE'} passHref legacyBehavior>
                    <Button sx={{ m: 2 }} variant="outlined" color='inherit'>
                        github
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}
