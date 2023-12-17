import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUnitOfMeasurement } from '../../features/settings/settingsSlice'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const UnitOfMeasurementSettings = () => {
  const unitOfMeasurement = useSelector(
    (state) => state.settings.unitOfMeasurement
  )
  const dispatch = useDispatch()

  const handleUnitChange = (event) => {
    dispatch(setUnitOfMeasurement(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="unit-select-label">Unit of Measurement</InputLabel>
      <Select
        labelId="unit-select-label"
        id="unit-select"
        label="Unit of Measurement"
        value={unitOfMeasurement}
        onChange={handleUnitChange}
      >
        <MenuItem value="kg">Kilograms</MenuItem>
        <MenuItem value="gm">Grams</MenuItem>
        <MenuItem value="po">pounds</MenuItem>
        <MenuItem value="pcs">Pieces</MenuItem>
      </Select>
    </FormControl>
  )
}

export default UnitOfMeasurementSettings
