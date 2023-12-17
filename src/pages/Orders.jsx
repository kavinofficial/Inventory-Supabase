import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import OrderList from '../components/OrderList'

const Order = () => {
  return (
    <Box sx={{ m: 0, p: 3, width: '100%' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Orders
      </Typography>
      <OrderList />
    </Box>
  )
}

export default Order
