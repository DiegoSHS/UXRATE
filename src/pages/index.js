import { StoredContext } from '@/context/context'
import { StarHalf, Style } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function VerticalLinearStepper() {
  const { name, setName, setVisible } = StoredContext()
  const { push } = useRouter()
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || name == '') return
    setVisible(false)
    push('/rate')
  }
  return (
    <Box
      sx={{
        my: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
      <Typography variant="body2">
        Obten una calificación de tu app con base en 12 leyes de UX
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          defaultValue={name}
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre de la web"
          name="name"
          autoComplete="name"
          autoFocus
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
