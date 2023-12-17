import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleSidebar } = uiSlice.actions

export default uiSlice.reducer
