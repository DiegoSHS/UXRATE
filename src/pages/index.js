import { StoredContext } from '@/context/context'
import { urlValidator } from '@/utils/validate'
import { StarHalf, Style } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function VerticalLinearStepper() {
  const { interacts: { name, site }, setInteract } = StoredContext()
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setInteract({ [e.target.name]: e.target.value })
    const err = urlValidator(site)
    setError(err)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box sx={{
        display: 'flex',
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Style />
        </Avatar>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <StarHalf />
        </Avatar>
      </Box>
      <Typography component="h1" variant="h5">
        Califica tu app
      </Typography>
      <Typography variant="body2" textAlign='center'>
        Obten una calificación de tu app con base en 12 leyes de UX y Tests automatizados
      </Typography>
      <Box component="form" onChange={handleChange} noValidate sx={{ mt: 1 }}>
        <TextField
          defaultValue={name}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre de la app web"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          defaultValue={site}
          margin="normal"
          required
          fullWidth
          id="site"
          label="URL de la app web"
          name="site"
          error={error}
        />
        <Link href={'/advice'} passHref legacyBehavior>
          <Button
            disabled={(!name || name == '') || error}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Aceptar
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
