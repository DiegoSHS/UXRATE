import { StoredContext } from "@/context/context"
import { Home, LightMode, ViewModule } from "@mui/icons-material"
import { AppBar, Button, Container, IconButton, Slide, Toolbar, useScrollTrigger } from "@mui/material"
import { useCookies } from "react-cookie"

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export const TopBarScroll = (props) => {
    const { push } = StoredContext()
    const [cookies, setCookie] = useCookies()
    const setTheme = () => {
        const expires = new Date(Date.now())
        expires.setFullYear(2025)
        if (cookies.theme) {
            setCookie('theme', 0, {
                expires: expires, path: '/'
            })
            return
        }
        setCookie('theme', 1, {
            expires: expires, path: '/'
        })
    }
    return (
        <HideOnScroll {...props}>
            <AppBar color="inherit">
                <Container maxWidth='sm'>
                    <Toolbar>
                        <Button fullWidth sx={{ m: 1 }} onClick={() => push('/')} variant="contained" endIcon={<Home />}>Inicio</Button>
                        <Button fullWidth sx={{ m: 1 }} onClick={() => push('/records')} endIcon={<ViewModule />}>Registros</Button>
                        <IconButton aria-label="add an alarm" onClick={setTheme}>
                            <LightMode />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}