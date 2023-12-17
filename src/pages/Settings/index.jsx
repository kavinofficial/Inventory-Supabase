import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import LanguagePreferences from './LanguagePreferences'
import DateTimeFormatSettings from './DateTimeFormatSettings'
import CurrencySettings from './CurrencySettings'
import UnitOfMeasurementSettings from './UnitOfMeasurementSettings'
import DefaultWarehouseSettings from './DefaultWarehouseSettings'

import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import DeleteAccountSettings from './DeleteAccountSettings'

import { toast } from 'sonner'

const Settings = () => {
  const [notifications, setNotifications] = React.useState(true)
  const [darkMode, setDarkMode] = React.useState(false)

  const handleNotificationsChange = () => {
    setNotifications((prev) => !prev)
  }

  const handleDarkModeChange = () => {
    setDarkMode((prev) => !prev)
  }

  const handleSaveSettings = () => {
    // Implement logic to save settings
    console.log('Settings saved!')
  }

  return (
    <Container maxWidth="md" sx={{ px: 3, py: 6 }}>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h4" mb={2}>
          Account Settings
        </Typography>
        <Divider />
        <Stack>
          <FormControl fullWidth component="fieldset" sx={{ mt: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={handleNotificationsChange}
                  />
                }
                label="Enable Notifications"
              />
              <FormControlLabel
                control={
                  <Switch checked={darkMode} onChange={handleDarkModeChange} />
                }
                label="Dark Mode"
              />
            </FormGroup>
          </FormControl>

          {/* Save Settings Button */}

          <Fab
            color="primary"
            variant="extended"
            sx={{ alignSelf: 'flex-end' }}
            onClick={() => toast.success('Settings saved!')}
          >
            <SaveIcon sx={{ mr: 1 }} />
            Save Settings
          </Fab>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" sx={{ mt: 1 }}>
          User Preferences
        </Typography>

        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Language Preferences
            </Typography>
            <LanguagePreferences />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Date and Time Format
            </Typography>
            <DateTimeFormatSettings />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Currency Settings
            </Typography>
            <CurrencySettings />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Unit of Measurement
            </Typography>
            <UnitOfMeasurementSettings />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Default Warehouse/Location
            </Typography>
            <DefaultWarehouseSettings />
          </Grid>

          <Grid item xs={12} md={6} display="flex">
            <Fab
              color="primary"
              variant="extended"
              sx={{ alignSelf: 'flex-end', ml: 'auto' }}
              onClick={() => toast.success('Settings saved!')}
            >
              <SaveIcon sx={{ mr: 1 }} />
              Save Preference
            </Fab>
          </Grid>
        </Grid>
      </Paper>

      <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" mb={2}>
          Delete Account
        </Typography>

        <Typography variant="body1" mb={2}>
          Deleting your account is an irreversible action.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <DeleteAccountSettings />
        </Box>
      </Paper>
    </Container>
  )
}

export default Settings
