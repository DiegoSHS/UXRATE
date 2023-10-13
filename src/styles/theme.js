import { TopBarScroll } from '@/components/topBar'
import { Context } from '@/context/context'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Toaster } from 'react-hot-toast'

const defaultTheme = createTheme()
const darkTheme = createTheme({
    palette: { mode: 'dark' }
})
const themes = { darkTheme, defaultTheme }

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline enableColorScheme />
            <Toaster />
            <Context>
                <Container sx={{ my: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }} fixed component='main' maxWidth='sm'>
                    <TopBarScroll />
                    {children}
                </Container>
            </Context>
        </ThemeProvider>
    )
}