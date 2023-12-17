import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDateTimeFormat } from '../../features/settings/settingsSlice'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const DateTimeFormatSettings = () => {
  const dateTimeFormat = useSelector((state) => state.settings.dateTimeFormat)
  const dispatch = useDispatch()

  const handleFormatChange = (event) => {
    dispatch(setDateTimeFormat(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="datetime-format-select-label">
        Date and Time Format
      </InputLabel>
      <Select
        labelId="datetime-format-select-label"
        id="datetime-format-select"
        label="Date and Time Format"
        value={dateTimeFormat}
        onChange={handleFormatChange}
      >
        <MenuItem value="standard">Standard</MenuItem>
        <MenuItem value="24-hour">24-Hour</MenuItem>
        <MenuItem value="12-hour">12-Hour</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DateTimeFormatSettings
