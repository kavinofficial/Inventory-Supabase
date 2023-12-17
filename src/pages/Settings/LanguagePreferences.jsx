import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../../features/settings/settingsSlice'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const LanguagePreferences = () => {
  const language = useSelector((state) => state.settings.language)
  const dispatch = useDispatch()

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        label="Language"
        value={language}
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ta">Tamil</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
        <MenuItem value="tu">Telugu</MenuItem>
      </Select>
    </FormControl>
  )
}

export default LanguagePreferences
