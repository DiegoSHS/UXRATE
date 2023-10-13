import { Home, ViewModule } from "@mui/icons-material"
import { AppBar, Button, Container, Slide, Toolbar, useScrollTrigger } from "@mui/material"
import { useRouter } from "next/router"

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export const TopBarScroll = (props) => {
    const { push } = useRouter()
    const goIndex = () => {
        push('/')
    }

    return (
        <HideOnScroll {...props}>
            <AppBar>
                <Container maxWidth='sm'>
                    <Toolbar>
                        <Button fullWidth sx={{ m: 1 }} onClick={goIndex} variant="contained" endIcon={<Home />}>Inicio</Button>
                        <Button fullWidth sx={{ m: 1 }} onClick={()=>push('/records')} endIcon={<ViewModule />}>Registros</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}