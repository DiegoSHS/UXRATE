import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const defaultTheme = createTheme()

const darkTheme = createTheme({
    palette: {
        mode:'dark'
    }
})

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme />
            <Container component='main' maxWidth='xs'>
                {children}
            </Container>
        </ThemeProvider>
    )
}