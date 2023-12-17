// settingsSlice.js
import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    language: 'en',
    dateTimeFormat: 'standard',
    currency: 'inr',
    unitOfMeasurement: 'kg',
    defaultWarehouse: 'warehouse1',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    setDateTimeFormat: (state, action) => {
      state.dateTimeFormat = action.payload
    },
    setCurrency: (state, action) => {
      state.currency = action.payload
    },
    setUnitOfMeasurement: (state, action) => {
      state.unitOfMeasurement = action.payload
    },
    setDefaultWarehouse: (state, action) => {
      state.defaultWarehouse = action.payload
    },
    // Add other reducer functions as needed
  },
})

export const {
  setLanguage,
  setDateTimeFormat,
  setCurrency,
  setUnitOfMeasurement,
  setDefaultWarehouse,
} = settingsSlice.actions

export default settingsSlice.reducer
