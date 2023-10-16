import { StoredContext } from "@/context/context"
import { AccountCircle, DarkMode, Home, LightMode, ViewModule } from "@mui/icons-material"
import { AppBar, Avatar, Box, Button, Chip, Container, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useCookies } from "react-cookie"

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger} color="inherit">
            {children}
        </Slide>
    )
}

const AccountButton = ({ user }) => {
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)
    const [cookies, setCookie] = useCookies()
    const { push } = StoredContext()
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
    const handleClick = (e) => {
        setAnchor(e.currentTarget)
    }
    const handleClose = () => {
        setAnchor(null)
    }
    return (!user.name ? (
        <IconButton disableRipple onClick={signIn}>
            <Chip label="Acceder" icon={<AccountCircle />} variant="outlined" />
        </IconButton>
    ) : (
        <>
            <IconButton
                disableRipple
                onClick={handleClick}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar alt={user.name} src={user.image} />
            </IconButton>
            <Menu
                sx={{ p: 1 }}
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem sx={{ m: 0, p: 1 }} onClick={() => { push('/login') }}>
                    <ListItemIcon>
                        <Avatar alt={user.name} src={user.image} />
                    </ListItemIcon>
                    <Box sx={{ mx: 1 }}>
                        <Typography sx={{ mx: 1 }}>
                            {user.name}
                        </Typography>
                        <Typography sx={{ mx: 1 }}>
                            {user.email}
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem sx={{ m: 0, p: 1 }} onClick={setTheme}>
                    <IconButton color="primary" aria-label="add an alarm">
                        {cookies.theme ? <LightMode /> : <DarkMode />}
                    </IconButton>
                    <Box sx={{ mx: 1 }}>
                        <Typography sx={{ mx: 1 }}>
                            Tema
                        </Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>

    ))
}

export const TopBarScroll = (props) => {
    const { push, interacts: { user } } = StoredContext()

    return (
        <HideOnScroll {...props}>
            <AppBar sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
                <Container maxWidth='sm'>
                    <Toolbar >
                        <Button fullWidth sx={{ m: 1 }} onClick={() => push('/')} variant="contained" endIcon={<Home />}>Inicio</Button>
                        <Button fullWidth sx={{ m: 1 }} onClick={() => push('/records')} endIcon={<ViewModule />}>Análisis</Button>
                        <AccountButton user={user} />
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}