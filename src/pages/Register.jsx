import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import LinkMUI from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// Components
import BackgroundAnimation from '../components/BackgroundAnimation'
import Copyright from '../components/Copyright'

// Others
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'sonner'

export default function Register() {
  const supabase = createClient(
    'https://pkacdlncihpwukzxdacd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrYWNkbG5jaWhwd3VrenhkYWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NTQ0NzksImV4cCI6MjAxODIzMDQ3OX0.ddnYa_ZE2SAdBN3gDshavkVmbeC5hqwJ3mxt9OuHplA'
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('Authenticated') === 'true') {
      navigate('/user')
      toast.message('You are already logged in')
    }
  }, [])
  const [visible, setVisible] = useState(false)

  const [allowExtraEmails, setAllowExtraEmails] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const body = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    }

    console.log(body)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(body.email)
    const isPasswordValid = body.password.length >= 6

    if (!isEmailValid) {
      return setMessage('Invalid Email')
    }

    if (!isPasswordValid) {
      return setMessage('Your password is very weak')
    }

    if (!allowExtraEmails) {
      return setMessage('Agree our terms and conditions')
    }
    try {
      const { user, error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
        options: {
          emailRedirectTo: 'http://localhost:3000/home',
        },
      })
      if (error) {
        throw error
      }
      navigate('/login')
      toast.success('User registered successfully')
    } catch (error) {
      setMessage(`Error: ${String(error.message)}`)
      console.error(error)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <BackgroundAnimation color={message && '#f00'} />
      <Container
        component="main"
        sx={{
          padding: '3rem 1.5rem',
        }}
      >
        <Paper
          style={{
            maxWidth: '500px',
            margin: 'auto',
            padding: '1.5rem 2rem',
          }}
          elevation={0}
          variant="outlined"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                p: 2,
                bgcolor: 'secondary.main',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://cdn-icons-png.flaticon.com/128/9226/9226414.png"
              />
            </Avatar>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Typography variant="subtitle2" color={'red'} paddingY={3}>
                {message}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={visible ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setVisible((prev) => !prev)}
                            edge="end"
                          >
                            {visible ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        // checked={remember}
                        onChange={() => setAllowExtraEmails((prev) => !prev)}
                      />
                    }
                    label="Agree our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <LinkMUI component={Link} to="/login" variant="body2">
                    Already have an account?
                  </LinkMUI>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </Box>
  )
}
