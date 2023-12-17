import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setDefaultWarehouse } from '../../features/settings/settingsSlice'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const DefaultWarehouseSettings = () => {
  const defaultWarehouse = useSelector(
    (state) => state.settings.defaultWarehouse
  )
  const dispatch = useDispatch()

  const handleWarehouseChange = (event) => {
    dispatch(setDefaultWarehouse(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="warehouse-select-label">
        Default Warehouse/Location
      </InputLabel>
      <Select
        labelId="warehouse-select-label"
        id="warehouse-select"
        label="Default Warehouse/Location"
        value={defaultWarehouse}
        onChange={handleWarehouseChange}
      >
        <MenuItem value="warehouse1">Warehouse 1</MenuItem>
        <MenuItem value="warehouse2">Warehouse 2</MenuItem>
        <MenuItem value="warehouse3">Warehouse 3</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DefaultWarehouseSettings
