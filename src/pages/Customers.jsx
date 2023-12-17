import React, { Component } from 'react'
import CustomerList from '../components/CustomerList'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
export default class Customer extends Component {
  render() {
    return (
      <Box sx={{ m: 0, p: 3, width: '100%' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
          Customers
        </Typography>
        <CustomerList />
      </Box>
    )
  }
}
