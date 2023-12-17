import React, { createContext } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { RouterProvider } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

// Redux
import store from './app/store'
import { Provider as ReduxProvider } from 'react-redux'

import theme from './theme'
import router from './routes'
import axios from 'axios'

// HACK: JUST TO SEE IF IT WORKS
window.toast = toast
window.axios = axios

export const MyProvider = createContext({})

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MyProvider.Provider
        value={JSON.parse(localStorage.getItem('Credentials'))}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>
      </MyProvider.Provider>
    </ReduxProvider>
  )
}

export default App
