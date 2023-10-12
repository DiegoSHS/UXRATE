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
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme />
            <Toaster/>
            <Context>
                <Container component='main' maxWidth='xs'>
                    <TopBarScroll />
                    {children}
                </Container>
            </Context>
        </ThemeProvider>
    )
}