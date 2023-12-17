import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'
import settingsReducer from '../features/settings/settingsSlice'

export default configureStore({
  reducer: {
    ui: uiReducer,
    settings: settingsReducer,
  },
})
