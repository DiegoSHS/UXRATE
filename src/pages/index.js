import { StoredContext } from '@/context/context'
import { urlValidator } from '@/utils/validate'
import { StarHalf, Style } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export default function VerticalLinearStepper() {
  const { interacts: { name, site }, setInteract, push } = StoredContext()
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    setInteract({ [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const err = urlValidator(site)
    setError(err)
    if ((!name || name == '') || err) return
    setInteract({ visible: false })
    push('/advice')
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
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          defaultValue={name}
          onChange={handleChange}
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
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          id="site"
          label="URL de la app web"
          name="site"
          error={error}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Aceptar
        </Button>
      </Box>
    </Box>
  )
}
